'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { EXPERIENCES, QUIZ_QUESTIONS } from '@/data/experiences';
import WhatsAppIcon from './icons/WhatsAppIcon';

const EMPTY_SCORES = { barranquismo: 0, ferrata: 0, ebike: 0 };
const ICONS = { barranquismo: '🏞️', ferrata: '🧗', ebike: '🚲' };
const EASE = [0.22, 0.61, 0.36, 1];

const STEP_ICONS = [IconMountain, IconCompass, IconClock, IconLeaf, IconHeart, IconFlag];

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
  const [step, setStep] = useState(0);
  const [hist, setHist] = useState([]);
  const [scores, setScores] = useState(EMPTY_SCORES);
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [direction, setDirection] = useState(1);

  const total = QUIZ_QUESTIONS.length;
  const q = QUIZ_QUESTIONS[step];

  function commit(opt) {
    const nextScores = { ...scores };
    Object.keys(opt.w).forEach((k) => { nextScores[k] += opt.w[k]; });
    setHist((h) => [...h, { w: opt.w }]);
    setScores(nextScores);
    setDirection(1);
    setSelected(null);

    if (step + 1 >= total) setShowResult(true);
    else setStep((s) => s + 1);
  }

  function skip() {
    setHist((h) => [...h, { w: {} }]);
    setDirection(1);
    setSelected(null);
    if (step + 1 >= total) setShowResult(true);
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
        {!showResult ? (
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
                    <motion.p variants={staggerItem} className="mb-2 text-[10.5px] font-semibold uppercase tracking-[.18em] text-gold">
                      Pregunta {step + 1} de {total}
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

                  <div className={`mt-6 grid gap-3 ${q.single ? 'grid-cols-2 max-[480px]:grid-cols-1' : 'grid-cols-2 sm:grid-cols-4'}`}>
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
                    <button type="button" onClick={skip} className="text-xs font-semibold text-white/50 underline transition-colors hover:text-white/70">
                      Saltar esta pregunta →
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
                        className="rounded-md bg-gold px-7 py-3 text-sm font-bold text-ink transition-all hover:-translate-y-0.5 hover:bg-gold2 hover:text-white disabled:pointer-events-none disabled:opacity-30 disabled:hover:translate-y-0"
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
              <div className="mx-auto max-w-[520px] rounded-[14px] bg-paper p-1">
                <ResultCard scores={scores} />
              </div>
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

function OptionCard({ opt, active, onClick }) {
  if (opt.img) {
    return (
      <button
        type="button"
        onClick={onClick}
        className={`group relative flex flex-col overflow-hidden rounded-[12px] border bg-black/30 text-left transition-all duration-150 hover:scale-[1.02] active:scale-[0.98] ${
          active ? 'border-gold shadow-[0_0_0_3px_rgba(201,165,90,.25)]' : 'border-white/10 hover:border-gold/50'
        }`}
      >
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-gradient-to-b from-white/[.06] to-transparent">
          <Image src={opt.img} alt={opt.l} fill className="object-contain object-bottom p-2 transition-transform duration-300 group-hover:scale-[1.03]" />
        </div>
        <div className="px-3 py-3">
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
      className={`flex flex-col items-center justify-center gap-2 rounded-[12px] border bg-black/30 px-4 py-6 text-center transition-all duration-150 hover:scale-[1.02] active:scale-[0.98] ${
        active ? 'border-gold shadow-[0_0_0_3px_rgba(201,165,90,.25)]' : 'border-white/10 hover:border-gold/50'
      }`}
    >
      <span className="text-2xl">{opt.i}</span>
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

function ResultCard({ scores }) {
  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  const top = sorted[0][0];
  const second = sorted[1] && sorted[1][1] > 0 ? sorted[1][0] : null;
  const pct = Math.min(99, Math.round((sorted[0][1] / (QUIZ_QUESTIONS.length * 3)) * 100) + 35);
  const exp = EXPERIENCES[top];
  const exp2 = second ? EXPERIENCES[second] : null;

  return (
    <div className="overflow-hidden rounded-[14px] border border-black/10 bg-paper">
      <div className="relative">
        <Image src={exp.cover} alt={exp.name} width={900} height={506} className="aspect-video w-full object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(30,26,20,.88)_0%,rgba(30,26,20,.1)_60%,transparent_100%)]" />
        <div className="absolute left-4 top-4 rounded-[3px] bg-gold px-3 py-1.5 text-[10px] font-bold uppercase tracking-[.1em] text-ink">
          {exp.badge}
        </div>
        <div className="absolute right-4 top-4 rounded-full border border-gold2 bg-white/90 px-3 py-[5px] text-[10.5px] font-semibold tracking-[.04em] text-gold2">
          {pct}% match
        </div>
        <div className="absolute inset-x-0 bottom-0 px-[22px] py-5">
          <p className="mb-[5px] text-[10px] font-semibold uppercase tracking-[.14em] text-gold">{exp.cat}</p>
          <h3 className="mb-[3px] font-serif text-2xl font-bold text-white">{exp.name}</h3>
          <p className="text-[13.5px] italic text-white/65">{exp.tagline}</p>
        </div>
      </div>

      <div className="p-[22px]">
        <p className="mb-4 text-[14.5px] leading-[1.7] text-ink2">{exp.why}</p>
        <div className="mb-[18px] flex flex-wrap gap-2">
          <Chip>⏱ {exp.dur}</Chip>
          <Chip>👥 {exp.group}</Chip>
          <Chip>🎯 {exp.level}</Chip>
        </div>
        <div className="mb-4 flex items-baseline justify-between border-t border-black/10 pt-4">
          <div>
            <span className="text-[10.5px] uppercase tracking-[.08em] text-ink3">Desde</span>
            <br />
            <span className="font-serif text-[28px] font-bold text-gold2">
              {exp.price}€ <span className="font-sans text-xs font-normal text-ink3">/ persona</span>
            </span>
          </div>
        </div>
        <div className="flex gap-2.5 max-[580px]:flex-col">
          <a
            href={`https://wa.me/34689507099?text=${encodeURIComponent(exp.wa)}`}
            target="_blank"
            className="flex flex-1 items-center justify-center gap-2.5 rounded bg-wa px-7 py-[15px] text-sm font-semibold text-white transition-all hover:brightness-110"
          >
            <WhatsAppIcon size={15} />
            Reservar por WhatsApp
          </a>
          <a
            href={exp.url}
            target="_blank"
            className="flex flex-1 items-center justify-center gap-2 rounded border-[1.5px] border-ink px-[26px] py-3.5 text-sm font-medium text-ink transition-all hover:border-gold2 hover:text-gold2"
          >
            Ver experiencia
          </a>
        </div>

        {exp2 && (
          <>
            <div className="mb-2.5 mt-[18px] flex items-center gap-2.5 text-[10px] uppercase tracking-[.14em] text-ink3 after:h-px after:flex-1 after:bg-black/10 after:content-['']">
              También podría gustarte
            </div>
            <div className="grid grid-cols-2 gap-2 max-[580px]:grid-cols-1">
              <div className="flex items-center gap-2.5 rounded-lg border border-black/10 bg-cream p-3">
                <span className="text-lg">{ICONS[second]}</span>
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
          <PlanItem time="Antes" name="Bar Los Diamantes" desc="Tapas de pescado fresco, ambiente 100% local — el desayuno perfecto antes de la aventura." />
          <PlanItem time="Después" name="Mirador de San Nicolás" desc="El atardecer más bonito de Granada, a 10 min del Albaicín. No te lo saltes." last />
        </div>
      </div>
    </div>
  );
}

function Chip({ children }) {
  return (
    <span className="flex items-center gap-1.5 rounded-full border border-black/10 bg-cream2 px-3 py-1.5 text-[12.5px] text-ink2">
      {children}
    </span>
  );
}

function PlanItem({ time, name, desc, last }) {
  return (
    <div className={`flex gap-3 py-2.5 ${last ? '' : 'border-b border-black/5'}`}>
      <span className="w-[52px] flex-shrink-0 pt-px text-[10.5px] font-semibold text-gold2">{time}</span>
      <div>
        <span className="mb-0.5 block text-[13px] font-semibold">{name}</span>
        <span className="text-[13px] leading-[1.5] text-ink3">{desc}</span>
      </div>
    </div>
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
