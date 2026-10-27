'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { getExperiences, getQuizQuestions } from '@/data/experiences';
import WhatsAppIcon from './icons/WhatsAppIcon';
import { useLanguage } from '@/i18n/LanguageContext';

const UI = {
  es: {
    introText: (total) => `${total} preguntas, 30 segundos y te proponemos la experiencia que encaja contigo.`,
    introBubble: 'Prometo no hacer preguntas raras.',
    introCta: 'Empezar →',
    goatAlt: 'La cabra de TRUE',
    loadingMessages: ['Analizando tus preferencias...', 'Comparando experiencias...', 'Diseñando tu recomendación...'],
    questionOf: (step, total) => `Pregunta ${step} de ${total}`,
    creatingRec: 'Estamos creando tu recomendación...',
    notSure: 'No estoy seguro',
    back: '← Atrás',
    yourProfile: 'Tu perfil de viajero',
    startOver: 'Volver a empezar',
    trustItems: [
      { l: 'Guías expertos locales', s: 'Pasión por Granada' },
      { l: 'Grupos pequeños', s: 'Experiencias más auténticas' },
      { l: 'Cancelación flexible', s: 'Reserva con tranquilidad' },
    ],
    yourMatch: 'Tu experiencia',
    priceLine: (price) => `Desde ${price} € por persona`,
    whyThis: 'Por qué esta',
    joinReasons: (parts) => (parts.length > 1 ? `${parts.slice(0, -1).join(', ')} y ${parts[parts.length - 1]}` : parts[0]),
    bookWhatsApp: 'Reservar por WhatsApp',
    waMessage: (profile, name) => `Hola TRUE 👋 Según vuestro planificador soy «${profile}» 🐐 y me encaja ${name}. ¿Tenéis disponibilidad?`,
    emailOpen: 'Enviarme el plan por email',
    notConvinced: '¿No te convence? Prueba estas',
    completeYourDay: 'Completa tu día como un local',
    before: 'Antes',
    after: 'Después',
    plan1: 'Bar Los Diamantes',
    plan2: 'Mirador de San Nicolás',
    emailText: 'Te mandamos el plan con horarios, mapa y recomendaciones para tu día.',
    namePlaceholder: 'Tu nombre (opcional)',
    emailPlaceholder: 'Tu email',
    emailError: 'Introduce un email con formato válido',
    phonePlaceholder: 'Tu teléfono (opcional)',
    phoneError: 'Introduce un teléfono con formato válido',
    sending: 'Enviando...',
    submitCta: 'Enviar',
    fallbackNotice: (
      <>Hemos abierto tu correo con todo listo para enviar. Si no se ha abierto nada, escríbenos directamente a{' '}
        <a href="mailto:info@betrue.es" className="underline hover:text-gold2">info@betrue.es</a>.
      </>
    ),
    successTitle: '¡Enviado correctamente!',
    successText: 'Te hemos enviado los detalles y nuestro equipo podrá ayudarte con tu experiencia.',
    subject: (name) => `Quiero mi recomendación: ${name}`,
    body: (name, formName, email, phone, date) => `Hola,\n\nMe gustaría recibir los detalles de esta recomendación:\n\n${name}\n\nMi nombre: ${formName || '(no indicado)'}\nMi email: ${email}${phone ? `\nMi teléfono: ${phone}` : ''}${date ? `\nFecha aproximada del viaje: ${date}` : ''}\n\n¡Gracias!`,
  },
  en: {
    introText: (total) => `${total} questions, 30 seconds, and we'll suggest the experience that fits you.`,
    introBubble: 'I promise, no weird questions.',
    introCta: 'Start →',
    goatAlt: 'The TRUE goat',
    loadingMessages: ['Analyzing your preferences...', 'Comparing experiences...', 'Designing your recommendation...'],
    questionOf: (step, total) => `Question ${step} of ${total}`,
    creatingRec: 'We are building your recommendation...',
    notSure: "I'm not sure",
    back: '← Back',
    yourProfile: 'Your traveler profile',
    startOver: 'Start over',
    trustItems: [
      { l: 'Expert local guides', s: 'Passionate about Granada' },
      { l: 'Small groups', s: 'More authentic experiences' },
      { l: 'Flexible cancellation', s: 'Book with peace of mind' },
    ],
    yourMatch: 'Your experience',
    priceLine: (price) => `From €${price} per person`,
    whyThis: 'Why this one',
    joinReasons: (parts) => (parts.length > 1 ? `${parts.slice(0, -1).join(', ')} and ${parts[parts.length - 1]}` : parts[0]),
    bookWhatsApp: 'Book on WhatsApp',
    waMessage: (profile, name) => `Hi TRUE 👋 Your planner says I'm "${profile}" 🐐 and ${name} is my match. Do you have availability?`,
    emailOpen: 'Email me the plan',
    notConvinced: 'Not convinced? Try these',
    completeYourDay: 'Complete your day like a local',
    before: 'Before',
    after: 'After',
    plan1: 'Bar Los Diamantes',
    plan2: 'San Nicolás Viewpoint',
    emailText: "We'll send you the plan with schedule, map and recommendations for your day.",
    namePlaceholder: 'Your name (optional)',
    emailPlaceholder: 'Your email',
    emailError: 'Enter a valid email address',
    phonePlaceholder: 'Your phone (optional)',
    phoneError: 'Enter a valid phone number',
    sending: 'Sending...',
    submitCta: 'Send',
    fallbackNotice: (
      <>We&apos;ve opened your email client with everything ready to send. If nothing opened, email us directly at{' '}
        <a href="mailto:info@betrue.es" className="underline hover:text-gold2">info@betrue.es</a>.
      </>
    ),
    successTitle: 'Sent successfully!',
    successText: 'We have sent you the details and our team will be able to help you with your experience.',
    subject: (name) => `I want my recommendation: ${name}`,
    body: (name, formName, email, phone, date) => `Hi,\n\nI'd like to receive the details for this recommendation:\n\n${name}\n\nMy name: ${formName || '(not provided)'}\nMy email: ${email}${phone ? `\nMy phone: ${phone}` : ''}${date ? `\nApproximate travel date: ${date}` : ''}\n\nThanks!`,
  },
};

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
  const { lang } = useLanguage();
  const ui = UI[lang];
  const quizQuestions = getQuizQuestions(lang);
  const experiences = getExperiences(lang);

  const [started, setStarted] = useState(false);
  const [step, setStep] = useState(0);
  const [hist, setHist] = useState([]);
  const [scores, setScores] = useState(EMPTY_SCORES);
  const [selected, setSelected] = useState(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [direction, setDirection] = useState(1);
  const rootRef = useRef(null);
  const advanceTimer = useRef(null);

  const total = quizQuestions.length;
  const q = quizQuestions[step];

  useEffect(() => () => clearTimeout(advanceTimer.current), []);

  // Each question, the loading beat and the result have different heights, so
  // after every change bring the top of the planner back under the fixed nav
  // (66px) — otherwise on mobile the next question can start off-screen.
  const firstRender = useRef(true);
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    const el = rootRef.current;
    if (!el) return;
    const top = el.getBoundingClientRect().top;
    if (top < 66 || top > window.innerHeight * 0.35) {
      window.scrollTo({ top: window.scrollY + top - 82, behavior: 'smooth' });
    }
  }, [started, step, analyzing, showResult]);

  // Tapping an answer is enough: show the selection (and its tip) for a beat,
  // then move on. Taps during that beat are ignored so nothing double-counts.
  // A ref rather than `selected`, because two quick taps can land before the
  // re-render that would make `selected` non-null.
  const advancing = useRef(false);
  function choose(i) {
    if (advancing.current) return;
    advancing.current = true;
    setSelected(i);
    const opt = q.opts[i];
    advanceTimer.current = setTimeout(() => {
      advancing.current = false;
      commit(opt);
    }, 650);
  }

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
    setHist((h) => [...h, { w: opt.w, l: opt.l, short: q.short, because: opt.because }]);
    setScores(nextScores);
    setDirection(1);
    setSelected(null);

    if (step + 1 >= total) finishQuiz();
    else setStep((s) => s + 1);
  }

  function skip() {
    if (advancing.current) return;
    setHist((h) => [...h, { w: {}, l: null, short: q.short }]);
    setDirection(1);
    setSelected(null);
    if (step + 1 >= total) finishQuiz();
    else setStep((s) => s + 1);
  }

  function goBack() {
    if (step === 0 || advancing.current) return;
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
    clearTimeout(advanceTimer.current);
    advancing.current = false;
    setStep(0);
    setHist([]);
    setScores(EMPTY_SCORES);
    setSelected(null);
    setAnalyzing(false);
    setShowResult(false);
    setDirection(1);
  }

  return (
    <div ref={rootRef} className="relative overflow-hidden rounded-2xl border border-gold/25 shadow-[0_30px_80px_rgba(0,0,0,.45)]">
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
              <div className="mx-auto flex max-w-[760px] items-center justify-center gap-10 py-2 max-sm:flex-col-reverse max-sm:gap-4">
                <motion.div variants={staggerParent} initial="hidden" animate="show" className="max-w-[400px] text-left max-sm:text-center">
                  <motion.p variants={staggerItem} className="mb-7 font-serif text-[clamp(1.25rem,2.4vw,1.6rem)] font-bold leading-[1.35] text-white">
                    {ui.introText(total)}
                  </motion.p>
                  <motion.button
                    variants={staggerItem}
                    type="button"
                    onClick={() => setStarted(true)}
                    className="rounded-md bg-gold px-9 py-3.5 text-sm font-bold uppercase tracking-[.03em] text-ink shadow-[0_0_22px_rgba(201,165,90,.45)] transition-all hover:-translate-y-0.5 hover:bg-gold2 hover:text-white hover:shadow-[0_0_28px_rgba(201,165,90,.6)]"
                  >
                    {ui.introCta}
                  </motion.button>
                </motion.div>
                <IntroGoat ui={ui} onStart={() => setStarted(true)} />
              </div>

              <TrustBar ui={ui} />
            </motion.div>
          ) : analyzing ? (
            <LoadingScreen ui={ui} />
          ) : !showResult ? (
            <motion.div
              key="quiz"
              initial={false}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.35, ease: EASE }}
            >
              <Stepper step={step} total={total} quizQuestions={quizQuestions} />

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
                      {ui.questionOf(step + 1, total)}
                    </motion.p>
                    <motion.p variants={staggerItem} className="mb-3 text-[11px] italic text-white/40">
                      {ui.creatingRec}
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
                        onClick={() => choose(i)}
                      />
                    ))}
                  </div>

                  <div className="mt-5 min-h-[20px] text-[13px] font-semibold italic text-white/60">
                    {selected !== null && q.opts[selected].tip}
                  </div>

                  <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                    <button type="button" onClick={skip} className="text-[11px] font-medium text-white/40 transition-colors hover:text-white/60 hover:underline">
                      {ui.notSure}
                    </button>
                    {step > 0 && (
                      <button type="button" onClick={goBack} disabled={selected !== null} className="ml-auto text-xs font-semibold text-white/50 transition-colors hover:text-white/70">
                        {ui.back}
                      </button>
                    )}
                  </div>
                </motion.div>

              <TrustBar ui={ui} />
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: EASE }}
            >
              <ResultCard scores={scores} hist={hist} experiences={experiences} ui={ui} />

              <div className="mt-6 text-center">
                <button type="button" onClick={restart} className="text-xs font-semibold text-white/50 underline hover:text-white/70">
                  {ui.startOver}
                </button>
              </div>
            </motion.div>
          )}
      </div>
    </div>
  );
}

// A "sonar" pulse rather than a spinning ring — nothing here rotates, so it
// reads as a considered analysis rather than a generic loading indicator.
function LoadingScreen({ ui }) {
  const [msgIndex, setMsgIndex] = useState(0);
  const messages = ui.loadingMessages;

  useEffect(() => {
    const interval = setInterval(() => {
      setMsgIndex((i) => Math.min(i + 1, messages.length - 1));
    }, 850);
    return () => clearInterval(interval);
  }, [messages.length]);

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
        {messages[msgIndex]}
      </motion.p>
    </motion.div>
  );
}

function Stepper({ step, total, quizQuestions }) {
  return (
    <div className="mx-auto mb-8 flex max-w-[720px] items-start justify-between max-[640px]:hidden">
      {quizQuestions.map((question, i) => {
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

// The TRUE goat next to the intro: floats gently with a pulsing gold glow and
// a speech bubble; clicking it starts the quiz too. Loops are skipped when
// the visitor prefers reduced motion.
function IntroGoat({ ui, onStart }) {
  const reduceMotion = useReducedMotion();
  const loop = (duration) => ({ duration, repeat: Infinity, ease: 'easeInOut' });

  return (
    <div className="relative flex-shrink-0 pt-10 max-sm:pt-12">
      <motion.span
        initial={{ opacity: 0, scale: 0.6, y: 8 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.6, type: 'spring', stiffness: 260, damping: 18 }}
        className="absolute -left-6 top-0 z-10 whitespace-nowrap rounded-xl rounded-br-sm bg-white px-3.5 py-2 text-[12.5px] font-semibold text-ink shadow-[0_8px_24px_rgba(0,0,0,.35)] max-sm:left-1/2 max-sm:-translate-x-1/2 max-sm:rounded-br-xl"
      >
        {ui.introBubble}
      </motion.span>
      <motion.div
        aria-hidden="true"
        className="absolute inset-x-4 bottom-2 top-14 rounded-full bg-[radial-gradient(circle,rgba(201,165,90,.6)_0%,rgba(201,165,90,0)_70%)] blur-2xl"
        animate={reduceMotion ? undefined : { opacity: [0.55, 1, 0.55], scale: [0.92, 1.05, 0.92] }}
        transition={loop(3.2)}
      />
      <motion.button
        type="button"
        onClick={onStart}
        aria-label={ui.introCta}
        className="relative block cursor-pointer"
        initial={{ opacity: 0, y: 24, rotate: -6 }}
        animate={reduceMotion ? { opacity: 1, y: 0, rotate: 0 } : { opacity: 1, y: [0, -10, 0], rotate: [-2, 2, -2] }}
        transition={reduceMotion ? { duration: 0.4 } : { opacity: { duration: 0.5 }, y: loop(4.5), rotate: loop(6) }}
        whileHover={{ scale: 1.06, rotate: 6 }}
        whileTap={{ scale: 0.96 }}
      >
        <Image src="/images/true-goat.png" alt={ui.goatAlt} width={200} height={200} className="h-[200px] w-[200px] drop-shadow-[0_14px_24px_rgba(0,0,0,.5)] max-sm:h-[150px] max-sm:w-[150px]" />
      </motion.button>
    </div>
  );
}

function TrustBar({ ui }) {
  const icons = [IconBadge, IconUsers, IconShield];
  const items = ui.trustItems.map((item, i) => ({ ...item, Icon: icons[i] }));
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

// The answers that pushed the winning experience most, kept in quiz order,
// phrased as "vienes en pareja", "quieres algo tranquilo"… for "Por qué esta".
function pickReasons(hist, top) {
  return hist
    .map((h, i) => ({ ...h, i }))
    .filter((h) => h.because && (h.w[top] || 0) > 0)
    .sort((a, b) => b.w[top] - a.w[top] || a.i - b.i)
    .slice(0, 3)
    .sort((a, b) => a.i - b.i)
    .map((h) => h.because);
}

function ResultCard({ scores, hist, experiences, ui }) {
  const top = topExperienceKey(scores);
  const exp = experiences[top];
  const others = Object.keys(experiences).filter((k) => k !== top).map((k) => experiences[k]);

  const reasons = pickReasons(hist, top);
  const why = reasons.length ? ui.joinReasons(reasons) : exp.why.split(/\s*[—.]\s*/)[0];
  const whyText = `${why.charAt(0).toUpperCase()}${why.slice(1)}.`;
  const waHref = `https://wa.me/34689507099?text=${encodeURIComponent(ui.waMessage(exp.profile.name, exp.name))}`;

  return (
    <div className="mx-auto max-w-[480px]">
      <motion.div variants={staggerParent} initial="hidden" animate="show" className="mb-6 text-center">
        <motion.p variants={staggerItem} className="mb-2 text-[10.5px] font-semibold uppercase tracking-[.2em] text-gold">
          {ui.yourProfile}
        </motion.p>
        <motion.h3 variants={staggerItem} className="font-serif text-[clamp(1.9rem,5vw,2.6rem)] font-bold leading-[1.1] text-white">
          {exp.profile.name}
        </motion.h3>
        <motion.p variants={staggerItem} className="mx-auto mt-2.5 max-w-[340px] text-[14px] leading-[1.55] text-white/65">
          {exp.profile.desc}
        </motion.p>
      </motion.div>

      <div className="overflow-hidden rounded-[14px] bg-cream">
        <Image src={exp.cover} alt={exp.name} width={900} height={506} className="aspect-[16/9] w-full object-cover" />

        <div className="p-5 sm:p-6">
          <p className="mb-1 text-[10px] font-semibold uppercase tracking-[.16em] text-gold2">{ui.yourMatch}</p>
          <h4 className="font-serif text-[22px] font-bold leading-[1.2] text-ink">{exp.name}</h4>

          <ul className="mt-3 flex flex-wrap gap-1.5">
            {exp.tags.map((tag) => (
              <li key={tag} className="rounded-full border border-black/10 bg-cream2 px-2.5 py-1 text-[11.5px] font-semibold text-ink2">
                {tag}
              </li>
            ))}
          </ul>

          <p className="mt-3 text-[14px] font-semibold text-ink2">{ui.priceLine(exp.price)}</p>

          <div className="mt-4 border-l-2 border-gold pl-3">
            <p className="text-[10px] font-semibold uppercase tracking-[.14em] text-gold2">{ui.whyThis}</p>
            <p className="mt-0.5 text-[14px] leading-[1.5] text-ink2">{whyText}</p>
          </div>

          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 flex items-center justify-center gap-2 rounded bg-gold px-4 py-3.5 text-[13px] font-bold uppercase tracking-[.03em] text-ink transition-all hover:-translate-y-0.5 hover:bg-gold2 hover:text-white"
          >
            <WhatsAppIcon size={15} />
            {ui.bookWhatsApp}
          </a>

          <LeadCaptureBlock exp={exp} hist={hist} ui={ui} />
        </div>
      </div>

      <p className="mb-3 mt-8 text-center text-[10.5px] font-semibold uppercase tracking-[.16em] text-white/55">{ui.notConvinced}</p>
      <div className="grid grid-cols-2 gap-3">
        {others.map((other) => (
          <Link key={other.key} href={other.detailPage} className="group overflow-hidden rounded-[12px] border border-white/10 bg-black/30 transition-colors hover:border-gold/50">
            <div className="overflow-hidden">
              <Image src={other.cover} alt={other.name} width={400} height={300} className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]" />
            </div>
            <div className="px-3 py-2.5">
              <p className="text-[13px] font-semibold leading-[1.3] text-white">{other.name}</p>
              <p className="mt-0.5 text-[11.5px] text-white/55">{ui.priceLine(other.price)}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-7 text-center">
        <p className="mb-2 text-[10.5px] font-semibold uppercase tracking-[.16em] text-white/55">{ui.completeYourDay}</p>
        <p className="text-[14px] text-white/75"><span className="font-semibold text-gold">{ui.before}:</span> {ui.plan1}</p>
        <p className="mt-1 text-[14px] text-white/75"><span className="font-semibold text-gold">{ui.after}:</span> {ui.plan2}</p>
      </div>
    </div>
  );
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[+]?[\d\s()-]{6,}$/;

function LeadCaptureBlock({ exp, hist, ui }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [status, setStatus] = useState('idle'); // idle | sending | success | fallback
  const [open, setOpen] = useState(false);

  const isValidEmail = EMAIL_RE.test(email);
  const showEmailError = email.length > 0 && !isValidEmail;
  const showPhoneError = phone.length > 0 && !PHONE_RE.test(phone);

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
        body: JSON.stringify({ name, email, phone, travelDate: date, answers, experience: exp.name }),
      });
      const data = await res.json();
      if (data.ok) {
        setStatus('success');
        return;
      }
    } catch {
      // Falls through to the mailto fallback below.
    }

    const subject = ui.subject(exp.name);
    const body = ui.body(exp.name, name, email, phone, date);
    window.location.href = `mailto:info@betrue.es?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus('fallback');
  }

  if (status === 'success') {
    return (
      <div className="mt-3 rounded-[10px] border border-gold/25 bg-cream2 p-5 text-center">
        <IconCheck className="mx-auto mb-2 h-6 w-6 text-gold2" />
        <p className="mb-1 text-[14px] font-semibold text-ink">{ui.successTitle}</p>
        <p className="text-[12.5px] leading-[1.5] text-ink3">{ui.successText}</p>
      </div>
    );
  }

  // Collapsed to a single button so the result stays short; the full form
  // only appears for people who actually want the plan by email.
  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="mt-2.5 flex w-full items-center justify-center gap-2 rounded border-[1.5px] border-ink/80 px-4 py-3 text-[13px] font-semibold text-ink transition-colors hover:border-gold2 hover:text-gold2"
      >
        <IconMail className="h-4 w-4" />
        {ui.emailOpen}
      </button>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: EASE }}
      className="mt-3 rounded-[10px] border border-gold/25 bg-cream2 p-4 text-center"
    >
      <p className="mb-1 text-[13.5px] font-semibold text-ink">{ui.emailOpen}</p>
      <p className="mb-3 text-[12px] leading-[1.5] text-ink3">{ui.emailText}</p>
      <div className="flex flex-col gap-2.5">
        <input
          type="text"
          value={name}
          onChange={(e) => { setName(e.target.value); resetStatus(); }}
          placeholder={ui.namePlaceholder}
          className="w-full border-b border-black/15 bg-transparent px-1 py-2 text-center text-[13.5px] text-ink placeholder:text-ink3/60 focus:border-gold2 focus:outline-none"
        />
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => { setEmail(e.target.value); resetStatus(); }}
            placeholder={ui.emailPlaceholder}
            aria-invalid={showEmailError}
            className={`w-full border-b bg-transparent px-1 py-2 text-center text-[13.5px] text-ink placeholder:text-ink3/60 focus:outline-none ${
              showEmailError ? 'border-[#9A3B2E]' : 'border-black/15 focus:border-gold2'
            }`}
          />
          {showEmailError && <p className="mt-1 text-[11px] text-[#9A3B2E]">{ui.emailError}</p>}
        </div>
        <div>
          <input
            type="tel"
            value={phone}
            onChange={(e) => { setPhone(e.target.value); resetStatus(); }}
            placeholder={ui.phonePlaceholder}
            aria-invalid={showPhoneError}
            className={`w-full border-b bg-transparent px-1 py-2 text-center text-[13.5px] text-ink placeholder:text-ink3/60 focus:outline-none ${
              showPhoneError ? 'border-[#9A3B2E]' : 'border-black/15 focus:border-gold2'
            }`}
          />
          {showPhoneError && <p className="mt-1 text-[11px] text-[#9A3B2E]">{ui.phoneError}</p>}
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
          {status === 'sending' ? ui.sending : ui.submitCta}
        </button>
        {status === 'fallback' && (
          <p className="text-[11.5px] leading-[1.5] text-ink3">
            {ui.fallbackNotice}
          </p>
        )}
      </div>
    </motion.div>
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
function IconMail({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
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
