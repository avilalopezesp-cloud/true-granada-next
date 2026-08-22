'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { EXPERIENCES, QUIZ_QUESTIONS } from '@/data/experiences';
import WhatsAppIcon from './icons/WhatsAppIcon';

const EMPTY_SCORES = { barranquismo: 0, ferrata: 0, ebike: 0 };
const EASE = [0.22, 0.61, 0.36, 1];

function topExperienceKey(scores) {
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}

const STEP_ICONS = [IconMountain, IconCompass, IconClock, IconLeaf, IconHeart, IconFlag];

// Option icons: gold, thin-line, transparent background — same family as the
// stepper/trust-bar icons above, used to replace emoji across the quiz options.
const OPTION_ICONS = {
  flame: IconFlame,
  leaf: IconLeaf,
  columns: IconColumns,
  target: IconTarget,
  car: IconCar,
  footprints: IconFootprints,
  bus: IconBus,
  clock: IconClock,
  sunHalf: IconSunHalf,
  sun: IconSun,
  bolt: IconBolt,
  sunrise: IconSunrise,
  sunset: IconSunset,
};

const GRID_COLS_BY_SIZE = { 2: 'sm:grid-cols-2', 3: 'sm:grid-cols-3', 4: 'sm:grid-cols-4' };

const slideVariants = {
  enter: (direction) => ({ x: direction > 0 ? 32 : -32, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (direction) => ({ x: direction > 0 ? -32 : 32, opacity: 0 }),
};

const staggerParent = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05, delayChildren: 0.05 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: EASE } },
};

export default function AdventurePlanner() {
  const [started, setStarted] = useState(false);
  const [step, setStep] = useState(0);
  const [hist, setHist] = useState([]);
  const [scores, setScores] = useState(EMPTY_SCORES);
  const [selected, setSelected] = useState(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [direction, setDirection] = useState(1);

  const total = QUIZ_QUESTIONS.length;
  const q = QUIZ_QUESTIONS[step];

  // A short "analyzing" beat between the last question and the reveal — see
  // LoadingScreen — so the recommendation feels considered rather than instant.
  function finishQuiz() {
    setAnalyzing(true);
    setTimeout(() => {
      setAnalyzing(false);
      setShowResult(true);
    }, 2600);
  }

  function commit(opt) {
    const nextScores = { ...scores };
    Object.keys(opt.w).forEach((k) => { nextScores[k] += opt.w[k]; });
    setHist((h) => [...h, { w: opt.w, l: opt.l, short: q.short }]);
    setScores(nextScores);
    setDirection(1);
    setSelected(null);

    if (step + 1 >= total) finishQuiz();
    else setStep((s) => s + 1);
  }

  function skip() {
    setHist((h) => [...h, { w: {}, l: null, short: q.short }]);
    setDirection(1);
    setSelected(null);
    if (step + 1 >= total) finishQuiz();
    else setStep((s) => s + 1);
  }

  function goBack() {
    if (step === 0) return;
    const newHist = hist.slice(0, -1);
    const newScores = { ...EMPTY_SCORES };
    newHist.forEach((h) => Object.keys(h.w).forEach((k) => { newScores[k] += h.w[k]; }));
    setHist(newHist);
    setScores(newScores);
    setSelected(null);
    setDirection(-1);
    setStep((s) => s - 1);
  }

  function restart() {
    setStep(0);
    setHist([]);
    setScores(EMPTY_SCORES);
    setSelected(null);
    setAnalyzing(false);
    setShowResult(false);
    setDirection(1);
  }

  return (
    <div className="relative overflow-hidden rounded-2xl border border-gold/25 shadow-[0_30px_80px_rgba(0,0,0,.45)]">
      <div className="ken-burns absolute inset-0 z-0">
        <Image src="/images/quiz/quiz-bg.jpg" alt="" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(15,13,10,.88)_0%,rgba(15,13,10,.94)_55%,rgba(15,13,10,.97)_100%)]" />
      </div>

      {/* No AnimatePresence wrapping the quiz/result swap either, for the same
          reason as the per-question transition below: exit tracking here was
          unreliable, so we just let React swap on the condition and animate
          each branch's entrance only. */}
      <div className="relative z-10 px-6 pb-8 pt-7 max-[860px]:px-4 sm:px-10">
        {!started ? (
            <motion.div
              key="intro"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: EASE }}
            >
              <motion.div variants={staggerParent} initial="hidden" animate="show" className="mx-auto max-w-[560px] py-4 text-center">
                <motion.h3 variants={staggerItem} className="mb-3 font-serif text-2xl font-bold text-white sm:text-[28px]">
                  Descubre tu experiencia perfecta en Granada
                </motion.h3>
                <motion.p variants={staggerItem} className="mx-auto mb-7 max-w-[440px] text-[15px] leading-[1.6] text-white/65">
                  No todas las personas viven Granada de la misma forma. Responde unas preguntas y encontraremos la aventura que encaja contigo.
                </motion.p>
                <motion.button
                  variants={staggerItem}
                  type="button"
                  onClick={() => setStarted(true)}
                  className="rounded-md bg-gold px-8 py-3.5 text-sm font-bold uppercase tracking-[.03em] text-ink shadow-[0_0_22px_rgba(201,165,90,.45)] transition-all hover:-translate-y-0.5 hover:bg-gold2 hover:text-white hover:shadow-[0_0_28px_rgba(201,165,90,.6)]"
                >
                  Descubrir mi experiencia →
                </motion.button>
              </motion.div>

              <TrustBar />
            </motion.div>
          ) : analyzing ? (
            <LoadingScreen />
          ) : !showResult ? (
            <motion.div
              key="quiz"
              initial={false}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.35, ease: EASE }}
            >
              <Stepper step={step} total={total} />

              {/* No AnimatePresence here on purpose: with exit tracking, Framer Motion
                  never reliably signalled the outgoing question as removed (both the
                  old and new question ended up mounted at once), so Continuar looked
                  broken — the state updated but two questions rendered stacked in the
                  DOM. A plain key change lets React swap the content immediately and
                  correctly every time; Framer Motion only animates the entrance. */}
              <motion.div
                key={step}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                transition={{ duration: 0.4, ease: EASE }}
                className="mx-auto max-w-[720px] text-center"
              >
                  <motion.div variants={staggerParent} initial={false} animate="show">
                    <motion.p variants={staggerItem} className="mb-1 text-[10.5px] font-semibold uppercase tracking-[.18em] text-gold">
                      Pregunta {step + 1} de {total}
                    </motion.p>
                    <motion.p variants={staggerItem} className="mb-3 text-[11px] italic text-white/40">
                      Estamos creando tu recomendación...
                    </motion.p>
                    <motion.h3 variants={staggerItem} className="mb-2 font-serif text-2xl font-bold text-white sm:text-[28px]">
                      {q.q}
                    </motion.h3>
                    {q.sub && (
                      <motion.p variants={staggerItem} className="mb-6 text-[14px] font-semibold text-white/65">
                        {q.sub}
                      </motion.p>
                    )}
                  </motion.div>

                  <div
                    className={`mt-6 grid gap-3 ${
                      q.opts.length === 2 ? 'grid-cols-2 max-[480px]:grid-cols-1' : 'grid-cols-2'
                    } ${GRID_COLS_BY_SIZE[q.opts.length] || 'sm:grid-cols-4'}`}
                  >
                    {q.opts.map((opt, i) => (
                      <OptionCard
                        key={opt.l}
                        opt={opt}
                        index={i}
                        active={selected === i}
                        onClick={() => setSelected(i)}
                      />
                    ))}
                  </div>

                  <div className="mt-5 min-h-[20px] text-[13px] font-semibold italic text-white/60">
                    {selected !== null && q.opts[selected].tip}
                  </div>

                  <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                    <button type="button" onClick={skip} className="text-[11px] font-medium text-white/40 transition-colors hover:text-white/60 hover:underline">
                      No estoy seguro
                    </button>
                    <div className="ml-auto flex items-center gap-4">
                      {step > 0 && (
                        <button type="button" onClick={goBack} className="text-xs font-semibold text-white/50 transition-colors hover:text-white/70">
                          ← Atrás
                        </button>
                      )}
                      <button
                        type="button"
                        disabled={selected === null}
                        onClick={() => commit(q.opts[selected])}
                        className={`rounded-md px-7 py-3 text-sm font-bold transition-all duration-300 ${
                          selected === null
                            ? 'pointer-events-none bg-white/10 text-white/30'
                            : 'bg-gold text-ink shadow-[0_0_22px_rgba(201,165,90,.45)] hover:-translate-y-0.5 hover:bg-gold2 hover:text-white hover:shadow-[0_0_28px_rgba(201,165,90,.6)]'
                        }`}
                      >
                        Continuar →
                      </button>
                    </div>
                  </div>
                </motion.div>

              <TrustBar />
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: EASE }}
            >
              <p className="mb-4 text-center font-serif text-2xl font-bold text-white sm:text-[28px]">
                Hemos encontrado algo para ti
              </p>

              <div className="mx-auto max-w-[520px] rounded-[14px] bg-cream2 p-1">
                <ResultCard scores={scores} hist={hist} />
              </div>

              {(() => {
                const profile = EXPERIENCES[topExperienceKey(scores)].profile;
                return (
                  <div className="mx-auto mt-4 max-w-[520px] rounded-[14px] border border-gold/25 bg-black/20 px-5 py-5 text-center">
                    <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-[.18em] text-gold">Tu perfil de viajero</p>
                    <p className="mb-2 font-serif text-xl font-bold text-white">{profile.name}</p>
                    <p className="mx-auto max-w-[380px] text-[13.5px] leading-[1.6] text-white/70">
                      {profile.desc} Por eso creemos que esta experiencia es para ti.
                    </p>
                  </div>
                );
              })()}

              <div className="mt-5 text-center">
                <button type="button" onClick={restart} className="text-xs font-semibold text-white/50 underline hover:text-white/70">
                  Volver a empezar
                </button>
              </div>
            </motion.div>
          )}
      </div>
    </div>
  );
}

const LOADING_MESSAGES = [
  'Analizando tus preferencias...',
  'Comparando experiencias...',
  'Diseñando tu recomendación...',
];

// A "sonar" pulse rather than a spinning ring — nothing here rotates, so it
// reads as a considered analysis rather than a generic loading indicator.
function LoadingScreen() {
  const [msgIndex, setMsgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMsgIndex((i) => Math.min(i + 1, LOADING_MESSAGES.length - 1));
    }, 850);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      key="loading"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: EASE }}
      className="flex flex-col items-center justify-center py-20 text-center"
    >
      <div className="relative mb-8 flex h-16 w-16 items-center justify-center">
        <span className="absolute inset-0 rounded-full border border-gold/40 [animation:goldPing_1.8s_ease-out_infinite]" />
        <span className="absolute inset-0 rounded-full border border-gold/40 [animation:goldPing_1.8s_ease-out_infinite_.6s]" />
        <span className="absolute inset-0 rounded-full border border-gold/40 [animation:goldPing_1.8s_ease-out_infinite_1.2s]" />
        <IconCompass className="relative h-6 w-6 text-gold" />
      </div>
      <motion.p
        key={msgIndex}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: EASE }}
        className="font-serif text-xl font-bold text-white sm:text-2xl"
      >
        {LOADING_MESSAGES[msgIndex]}
      </motion.p>
    </motion.div>
  );
}

function Stepper({ step, total }) {
  return (
    <div className="mx-auto mb-8 flex max-w-[720px] items-start justify-between max-[640px]:hidden">
      {QUIZ_QUESTIONS.map((question, i) => {
        const Icon = STEP_ICONS[i % STEP_ICONS.length];
        const active = i === step;
        const done = i < step;
        return (
          <div key={question.short} className="flex flex-1 items-start">
            <div className="flex flex-col items-center gap-1.5 text-center">
              <span
                className={`flex h-8 w-8 items-center justify-center rounded-full border transition-colors ${
                  active
                    ? 'step-glow border-gold bg-gold text-ink'
                    : done
                      ? 'border-gold/60 bg-gold/15 text-gold'
                      : 'border-white/15 bg-white/5 text-white/40'
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
              </span>
              <span className={`text-[10px] font-semibold ${active ? 'text-gold' : done ? 'text-white/70' : 'text-white/45'}`}>
                {question.short}
              </span>
            </div>
            {i < total - 1 && <div className={`mt-4 h-px flex-1 ${done ? 'bg-gold/50' : 'bg-white/10'}`} />}
          </div>
        );
      })}
    </div>
  );
}

function IconCheck({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M5 12l5 5L19 7" />
    </svg>
  );
}

function CheckBadge() {
  return (
    <span className="absolute right-2 top-2 z-10 flex h-5 w-5 items-center justify-center rounded-full bg-gold text-ink">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3">
        <path d="M5 12l5 5L19 7" />
      </svg>
    </span>
  );
}

function OptionCard({ opt, active, onClick }) {
  const Icon = OPTION_ICONS[opt.icon];

  if (opt.img) {
    return (
      <button
        type="button"
        onClick={onClick}
        className={`group relative flex flex-col overflow-hidden rounded-[12px] border text-left transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] ${
          active ? 'border-2 border-gold bg-gold/10 shadow-[0_0_0_3px_rgba(201,165,90,.2)]' : 'border border-white/10 bg-black/30 hover:border-gold/50'
        }`}
      >
        {active && <CheckBadge />}
        <div className="relative aspect-square w-full overflow-hidden bg-gradient-to-b from-white/[.06] to-transparent">
          <Image src={opt.img} alt={opt.l} fill className="object-contain object-bottom p-2 transition-transform duration-300 group-hover:scale-[1.03]" />
        </div>
        <div className="px-3 py-2.5">
          <span className="block text-[14px] font-bold text-white">{opt.l}</span>
          <span className="mt-0.5 block text-[11px] font-semibold text-white/60">{opt.s}</span>
        </div>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative flex flex-col items-center justify-center gap-1.5 rounded-[12px] border px-4 py-[18px] text-center transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] ${
        active ? 'border-2 border-gold bg-gold/10 shadow-[0_0_0_3px_rgba(201,165,90,.2)]' : 'border border-white/10 bg-black/30 hover:border-gold/50'
      }`}
    >
      {active && <CheckBadge />}
      {Icon && <Icon className="h-7 w-7 text-gold" />}
      <span className="text-[14px] font-bold text-white">{opt.l}</span>
      <span className="text-[11px] font-semibold text-white/60">{opt.s}</span>
    </button>
  );
}

function TrustBar() {
  const items = [
    { Icon: IconBadge, l: 'Guías expertos locales', s: 'Pasión por Granada' },
    { Icon: IconUsers, l: 'Grupos pequeños', s: 'Experiencias más auténticas' },
    { Icon: IconShield, l: 'Cancelación flexible', s: 'Reserva con tranquilidad' },
  ];
  return (
    <div className="mx-auto mt-8 flex max-w-[720px] flex-wrap justify-center gap-x-9 gap-y-3 border-t border-white/10 pt-6 max-[640px]:hidden">
      {items.map(({ Icon, l, s }) => (
        <div key={l} className="flex items-center gap-2.5">
          <Icon className="h-5 w-5 flex-shrink-0 text-gold/70" />
          <div className="text-left">
            <span className="block text-[12px] font-semibold text-white/85">{l}</span>
            <span className="block text-[10.5px] font-semibold text-white/55">{s}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

const EXPERIENCE_ICONS = { barranquismo: IconMountain, ferrata: IconCompass, ebike: IconBike };

function ResultCard({ scores, hist }) {
  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  const top = sorted[0][0];
  const second = sorted[1] && sorted[1][1] > 0 ? sorted[1][0] : null;
  const exp = EXPERIENCES[top];
  const exp2 = second ? EXPERIENCES[second] : null;

  // Short, punchy version of "why" — just the core desire, without the
  // supporting clause — so the match block never runs past two lines.
  const shortWhy = exp.why.split(/\s*[—.]\s*/)[0];

  return (
    <div className="overflow-hidden rounded-[14px] border border-black/10 bg-[linear-gradient(165deg,var(--color-cream)_0%,var(--color-cream2)_100%)]">
      <p className="px-4 pt-4 text-[10.5px] font-semibold uppercase tracking-[.18em] text-gold2 sm:px-[22px] sm:pt-5">
        Esta experiencia encaja contigo
      </p>

      <div className="relative mt-2">
        <Image src={exp.cover} alt={exp.name} width={900} height={506} className="aspect-video w-full object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(30,26,20,.55)_0%,rgba(30,26,20,.05)_50%,transparent_100%)]" />
        <div className="absolute left-4 top-4 rounded-[3px] bg-gold px-3 py-1.5 text-[10px] font-bold uppercase tracking-[.1em] text-ink">
          {exp.badge}
        </div>
      </div>

      <div className="relative p-4 sm:p-[22px]">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-multiply"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }}
        />
        <div className="relative z-10">
        <p className="mb-[5px] text-[10px] font-semibold uppercase tracking-[.14em] text-gold2">{exp.cat}</p>
        <h3 className="mb-1.5 font-serif text-xl font-bold text-ink sm:text-2xl">{exp.name}</h3>
        <p className="mb-4 text-[13.5px] italic leading-[1.5] text-ink3 sm:text-[14px] sm:leading-[1.6]">{exp.tagline}</p>

        <div className="mb-4 grid grid-cols-2 gap-x-3 gap-y-2">
          <QuickFact icon={IconClock}>{exp.dur}</QuickFact>
          <QuickFact icon={IconUsers}>{exp.group.replace(/\s*personas?$/i, '')}</QuickFact>
          <QuickFact icon={IconBolt}>{exp.level}</QuickFact>
          <QuickFact icon={IconPin}>Granada</QuickFact>
        </div>

        <div className="mb-4 rounded-[10px] bg-ink px-4 py-3">
          <span className="block text-[9.5px] font-semibold uppercase tracking-[.1em] text-white/50">Desde</span>
          <span className="font-serif text-[22px] font-bold text-gold">
            {exp.price}€ <span className="font-sans text-[11px] font-normal text-white/60">por persona</span>
          </span>
        </div>

        <div className="mb-4 rounded-[10px] border border-gold/25 bg-paper p-3.5 shadow-[0_1px_3px_rgba(30,26,20,.06)] sm:p-4">
          <p className="mb-1 text-[10.5px] font-semibold uppercase tracking-[.1em] text-gold2">Elegimos esta experiencia porque...</p>
          <p className="line-clamp-2 text-[13.5px] leading-[1.4] text-ink2">{shortWhy}.</p>
        </div>

        <div className="mb-5">
          <p className="mb-2 text-[10.5px] font-semibold uppercase tracking-[.1em] text-ink3">Incluye</p>
          <ul className="flex flex-col gap-1.5">
            {exp.includes.map((item) => (
              <li key={item} className="flex items-center gap-2 text-[13.5px] text-ink2">
                <IconCheck className="h-4 w-4 flex-shrink-0 text-gold2" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-2.5">
          <a
            href={`https://wa.me/34689507099?text=${encodeURIComponent(exp.wa)}`}
            target="_blank"
            className="flex items-center justify-center gap-2 rounded bg-gold px-4 py-3.5 text-[13px] font-bold uppercase tracking-[.03em] text-ink transition-all hover:-translate-y-0.5 hover:bg-gold2 hover:text-white"
          >
            <WhatsAppIcon size={14} />
            Consultar disponibilidad
          </a>
          <a
            href={exp.detailPage || exp.url}
            target="_blank"
            className="flex items-center justify-center gap-2 rounded border-[1.5px] border-ink px-[26px] py-3.5 text-sm font-medium text-ink transition-all hover:border-gold2 hover:text-gold2"
          >
            Ver detalles
          </a>
        </div>

        <LeadCaptureBlock exp={exp} hist={hist} />

        {exp2 && (
          <>
            <div className="mb-2.5 mt-[18px] flex items-center gap-2.5 text-[10px] uppercase tracking-[.14em] text-ink3 after:h-px after:flex-1 after:bg-black/10 after:content-['']">
              También podría gustarte
            </div>
            <div className="grid grid-cols-1 gap-2">
              <div className="flex items-center gap-2.5 rounded-lg border border-black/10 bg-cream p-3">
                {(() => {
                  const Icon2 = EXPERIENCE_ICONS[second];
                  return <Icon2 className="h-5 w-5 flex-shrink-0 text-gold2" />;
                })()}
                <div>
                  <div className="text-[12.5px] font-semibold">{exp2.name}</div>
                  <div className="text-[12px] text-ink3">Desde {exp2.price}€ · {exp2.dur}</div>
                </div>
              </div>
            </div>
          </>
        )}

        <div className="mt-4 border-t border-black/10 pt-4">
          <p className="mb-2.5 flex items-center gap-2.5 text-[10px] uppercase tracking-[.14em] text-ink3 after:h-px after:flex-1 after:bg-black/10 after:content-['']">
            Completa tu día
          </p>
          <div className="flex flex-wrap gap-2">
            <PlanPill time="Antes" name="Bar Los Diamantes" />
            <PlanPill time="Después" name="Mirador de San Nicolás" />
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function LeadCaptureBlock({ exp, hist }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [status, setStatus] = useState('idle'); // idle | sending | success | fallback

  const isValidEmail = EMAIL_RE.test(email);
  const showEmailError = email.length > 0 && !isValidEmail;

  function resetStatus() {
    if (status !== 'idle') setStatus('idle');
  }

  async function handleSubmit() {
    if (!isValidEmail) return;
    setStatus('sending');

    const answers = hist.filter((h) => h.l).map((h) => `${h.short}: ${h.l}`);

    try {
      const res = await fetch('/api/quiz-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, travelDate: date, answers, experience: exp.name }),
      });
      const data = await res.json();
      if (data.ok) {
        setStatus('success');
        return;
      }
    } catch {
      // Falls through to the mailto fallback below.
    }

    const subject = `Quiero mi recomendación: ${exp.name}`;
    const body = `Hola,\n\nMe gustaría recibir los detalles de esta recomendación:\n\n${exp.name}\n\nMi nombre: ${name || '(no indicado)'}\nMi email: ${email}${date ? `\nFecha aproximada del viaje: ${date}` : ''}\n\n¡Gracias!`;
    window.location.href = `mailto:info@betrue.es?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus('fallback');
  }

  if (status === 'success') {
    return (
      <div className="mt-3 rounded-[10px] border border-gold/25 bg-cream2 p-5 text-center">
        <IconCheck className="mx-auto mb-2 h-6 w-6 text-gold2" />
        <p className="mb-1 text-[14px] font-semibold text-ink">¡Enviado correctamente!</p>
        <p className="text-[12.5px] leading-[1.5] text-ink3">Te hemos enviado los detalles y nuestro equipo podrá ayudarte con tu experiencia.</p>
      </div>
    );
  }

  return (
    <div className="mt-3 rounded-[10px] border border-gold/25 bg-cream2 p-4 text-center">
      <p className="mb-1 text-[13.5px] font-semibold text-ink">¿Quieres recibir tu recomendación?</p>
      <p className="mb-3 text-[12px] leading-[1.5] text-ink3">Te enviaremos los detalles y nuestro equipo podrá ayudarte con tu experiencia.</p>
      <div className="flex flex-col gap-2.5">
        <input
          type="text"
          value={name}
          onChange={(e) => { setName(e.target.value); resetStatus(); }}
          placeholder="Tu nombre (opcional)"
          className="w-full border-b border-black/15 bg-transparent px-1 py-2 text-center text-[13.5px] text-ink placeholder:text-ink3/60 focus:border-gold2 focus:outline-none"
        />
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => { setEmail(e.target.value); resetStatus(); }}
            placeholder="Tu email"
            aria-invalid={showEmailError}
            className={`w-full border-b bg-transparent px-1 py-2 text-center text-[13.5px] text-ink placeholder:text-ink3/60 focus:outline-none ${
              showEmailError ? 'border-[#9A3B2E]' : 'border-black/15 focus:border-gold2'
            }`}
          />
          {showEmailError && <p className="mt-1 text-[11px] text-[#9A3B2E]">Introduce un email con formato válido</p>}
        </div>
        <input
          type="date"
          value={date}
          onChange={(e) => { setDate(e.target.value); resetStatus(); }}
          className="w-full border-b border-black/15 bg-transparent px-1 py-2 text-center text-[13.5px] text-ink3 focus:border-gold2 focus:outline-none [color-scheme:light]"
        />
        <button
          type="button"
          onClick={handleSubmit}
          disabled={!isValidEmail || status === 'sending'}
          className="mt-1 rounded border border-gold2 px-4 py-2.5 text-[12.5px] font-semibold uppercase tracking-[.03em] text-gold2 transition-colors hover:bg-gold2 hover:text-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:text-gold2"
        >
          {status === 'sending' ? 'Enviando...' : 'Recibir mi recomendación'}
        </button>
        {status === 'fallback' && (
          <p className="text-[11.5px] leading-[1.5] text-ink3">
            Hemos abierto tu correo con todo listo para enviar. Si no se ha abierto nada, escríbenos directamente a{' '}
            <a href="mailto:info@betrue.es" className="underline hover:text-gold2">info@betrue.es</a>.
          </p>
        )}
      </div>
    </div>
  );
}

function QuickFact({ icon: Icon, children }) {
  return (
    <div className="flex items-start gap-1.5 text-[12.5px] font-medium leading-[1.3] text-ink2">
      <Icon className="mt-px h-3.5 w-3.5 flex-shrink-0 text-gold2" />
      <span>{children}</span>
    </div>
  );
}

function PlanPill({ time, name }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-cream2 px-3 py-1.5 text-[12.5px]">
      <span className="font-semibold text-gold2">{time}:</span>
      <span className="text-ink2">{name}</span>
    </span>
  );
}

// ─── Minimal line icons (stepper + trust bar) ──────────────────
function IconMountain({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M3 18l6-9 4 5.5L16 9l5 9H3z" />
    </svg>
  );
}
function IconCompass({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M14.5 9.5l-2 5-5 2 2-5z" />
    </svg>
  );
}
function IconClock({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  );
}
function IconLeaf({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M5 19c9 0 14-5 14-14-9 0-14 5-14 14z" />
      <path d="M5 19c3-4 6-7 10-9" />
    </svg>
  );
}
function IconHeart({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 20s-7-4.5-9.5-9C1 7.5 3 4 6.5 4 9 4 11 6 12 7c1-1 3-3 5.5-3C21 4 23 7.5 21.5 11 19 15.5 12 20 12 20z" />
    </svg>
  );
}
function IconFlag({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M5 21V4" />
      <path d="M5 4h13l-3 4 3 4H5" />
    </svg>
  );
}
function IconBadge({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="9" r="6" />
      <path d="M9 14l-2 7 5-2.5L17 21l-2-7" />
    </svg>
  );
}
function IconUsers({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="9" cy="8" r="3" />
      <path d="M2 20c0-3.5 3-6 7-6s7 2.5 7 6" />
      <circle cx="18" cy="9" r="2.3" />
      <path d="M16.5 14.2c2.6.4 4.5 2.3 4.5 5.3" />
    </svg>
  );
}
function IconShield({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

// ─── Quiz option icons (gold, thin-line, transparent) ──────────
function IconFlame({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 3c1 3-3 4.5-3 8a3 3 0 006 0c0-1.2-.6-2-1-2.7.8.2 2.5 1.4 2.5 4.2a4.5 4.5 0 01-9 0C7.5 8.5 10.5 7 12 3z" />
    </svg>
  );
}
function IconColumns({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M3 9l9-5 9 5" />
      <path d="M5 9v10M9 9v10M15 9v10M19 9v10" />
      <path d="M3 21h18" />
    </svg>
  );
}
function IconTarget({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1" />
    </svg>
  );
}
function IconCar({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M4 16l1.5-5.5A2 2 0 017.4 9h9.2a2 2 0 011.9 1.5L20 16" />
      <path d="M3 16h18v3a1 1 0 01-1 1h-1.5a1 1 0 01-1-1v-1h-13v1a1 1 0 01-1 1H3a1 1 0 01-1-1z" />
      <circle cx="7.5" cy="16" r="1.5" />
      <circle cx="16.5" cy="16" r="1.5" />
    </svg>
  );
}
function IconFootprints({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M8 4.5a2 2 0 012 2.2c0 1.6-1.3 2.3-1.3 4a2 2 0 11-3.4 0c0-2.2 1.4-2.7 1.4-4.6a1.8 1.8 0 011.3-1.6z" />
      <path d="M16 10.5a2 2 0 012 2.2c0 1.6-1.3 2.3-1.3 4a2 2 0 11-3.4 0c0-2.2 1.4-2.7 1.4-4.6a1.8 1.8 0 011.3-1.6z" />
    </svg>
  );
}
function IconBus({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="3.5" y="4" width="17" height="12" rx="2" />
      <path d="M3.5 10.5h17" />
      <path d="M6.5 16v2M17.5 16v2" />
      <circle cx="7" cy="19" r="1.2" />
      <circle cx="17" cy="19" r="1.2" />
    </svg>
  );
}
function IconSunHalf({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 3v3M12 18v3M4.2 12H1.5M22.5 12h-2.7M6 6l1.8 1.8M18 6l-1.8 1.8" />
      <path d="M4.5 18a7.5 7.5 0 0115 0z" />
    </svg>
  );
}
function IconSun({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="4.5" />
      <path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5 5l2.1 2.1M16.9 16.9L19 19M19 5l-2.1 2.1M7.1 16.9L5 19" />
    </svg>
  );
}
function IconBolt({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M13 2L4 14h6l-1 8 9-12h-6z" />
    </svg>
  );
}
function IconSunrise({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 3v5" />
      <path d="M5.5 12l1.8-1.8M18.5 12l-1.8-1.8M2.5 12h3M21.5 12h-3" />
      <path d="M4.5 17a7.5 7.5 0 0115 0z" />
      <path d="M2 21h20" />
    </svg>
  );
}
function IconSunset({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 8V3" />
      <path d="M5.5 12l1.8-1.8M18.5 12l-1.8-1.8M2.5 12h3M21.5 12h-3" />
      <path d="M4.5 17a7.5 7.5 0 0115 0z" />
      <path d="M2 21h20" />
    </svg>
  );
}
function IconBike({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="6" cy="17" r="3.2" />
      <circle cx="18" cy="17" r="3.2" />
      <path d="M6 17l4-7h4l3 7M10 10l-1.5-3H6M13 10h3.5" />
    </svg>
  );
}
function IconPin({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 21s-7-6.1-7-11.5A7 7 0 0119 9.5C19 14.9 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.4" />
    </svg>
  );
}
