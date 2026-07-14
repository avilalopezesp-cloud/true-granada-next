'use client';

import { useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { EXPERIENCES, QUIZ_QUESTIONS } from '@/data/experiences';
import WhatsAppIcon from './icons/WhatsAppIcon';

const EMPTY_SCORES = { barranquismo: 0, ferrata: 0, ebike: 0 };
const ICONS = { barranquismo: '🏞️', ferrata: '🧗', ebike: '🚲' };
const EASE = [0.22, 0.61, 0.36, 1];

// Card backgrounds until real per-option photos are ready — same gradient
// tints already used in the e-bike builder, so the palette stays consistent.
const CARD_TINTS = [
  'from-[#7a2e1d] to-[#c9642f]',
  'from-[#1f3a4a] to-[#3f7f96]',
  'from-[#31402b] to-[#5e7355]',
  'from-[#3a2a55] to-[#7a5ba6]',
];

const slideVariants = {
  enter: (direction) => ({ x: direction > 0 ? 40 : -40, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (direction) => ({ x: direction > 0 ? -40 : 40, opacity: 0 }),
};

const staggerParent = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE } },
};

export default function AdventurePlanner() {
  const [step, setStep] = useState(0);
  const [hist, setHist] = useState([]);
  const [scores, setScores] = useState(EMPTY_SCORES);
  const [showResult, setShowResult] = useState(false);
  const [direction, setDirection] = useState(1);

  const q = QUIZ_QUESTIONS[step];
  const total = QUIZ_QUESTIONS.length;

  function pick(idx) {
    const opt = q.opts[idx];
    const nextScores = { ...scores };
    Object.keys(opt.w).forEach((k) => { nextScores[k] += opt.w[k]; });

    setHist((h) => [...h, { q: q.q, a: opt.l, w: opt.w }]);
    setScores(nextScores);
    setDirection(1);

    const isLast = step + 1 >= total;
    if (isLast) setShowResult(true);
    else setStep((s) => s + 1);
  }

  function goBack() {
    if (step === 0) return;
    const newHist = hist.slice(0, -1);
    const newScores = { ...EMPTY_SCORES };
    newHist.forEach((h) => Object.keys(h.w).forEach((k) => { newScores[k] += h.w[k]; }));
    setHist(newHist);
    setScores(newScores);
    setDirection(-1);
    setStep((s) => s - 1);
  }

  function restart() {
    setStep(0);
    setHist([]);
    setScores(EMPTY_SCORES);
    setShowResult(false);
    setDirection(1);
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-white/[.08] bg-white/[.03]">
      <AnimatePresence mode="wait">
        {!showResult ? (
          <motion.div
            key="quiz"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="p-9 max-[860px]:p-6"
          >
            <ProgressBar step={step} total={total} />

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={step}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: EASE }}
                className="grid grid-cols-[0.85fr_1.15fr] items-center gap-14 max-[860px]:grid-cols-1 max-[860px]:gap-8"
              >
                <QuestionInfo q={q} step={step} total={total} />
                <OptionsGrid q={q} onPick={pick} />
              </motion.div>
            </AnimatePresence>

            <div className="mt-9 flex items-center justify-between border-t border-white/[.08] pt-5">
              <button
                type="button"
                onClick={goBack}
                className={`text-xs text-white/35 transition-colors hover:text-white/65 ${step === 0 ? 'invisible' : ''}`}
              >
                ← Atrás
              </button>
              <button type="button" onClick={() => setShowResult(true)} className="text-xs text-white/30 underline">
                Saltar →
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="result"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.45, ease: EASE }}
            className="bg-paper p-2"
          >
            <ResultCard scores={scores} />
            <div className="pb-6 pt-2 text-center">
              <button type="button" onClick={restart} className="text-xs text-ink3 underline">
                Volver a empezar
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ProgressBar({ step, total }) {
  return (
    <div className="mb-10 flex items-center gap-4">
      <span className="font-serif text-sm font-bold text-gold">{String(step + 1).padStart(2, '0')}</span>
      <div className="relative h-px flex-1 overflow-hidden bg-white/10">
        <motion.div
          className="absolute inset-y-0 left-0 bg-gold"
          initial={false}
          animate={{ width: `${((step + 1) / total) * 100}%` }}
          transition={{ duration: 0.5, ease: EASE }}
        />
      </div>
      <span className="font-serif text-sm font-bold text-white/30">{String(total).padStart(2, '0')}</span>
    </div>
  );
}

function QuestionInfo({ q, step, total }) {
  const words = q.q.split(' ');
  const last = words.pop();
  const rest = words.join(' ');

  return (
    <motion.div variants={staggerParent} initial="hidden" animate="show" className="max-[860px]:order-1">
      <motion.p variants={staggerItem} className="mb-4 text-[11px] font-semibold uppercase tracking-[.22em] text-gold">
        Pregunta {step + 1} de {total}
      </motion.p>
      <motion.h3 variants={staggerItem} className="mb-5 font-serif text-[clamp(1.7rem,4vw,2.5rem)] font-bold uppercase leading-[1.08] text-white">
        {rest} <em className="not-italic text-gold">{last}</em>
      </motion.h3>
      <motion.p variants={staggerItem} className="max-w-[340px] text-[14.5px] leading-[1.7] text-white/50">
        Cuéntanos un poco sobre tu grupo y te recomendaremos la experiencia perfecta para ti.
      </motion.p>

      <motion.div variants={staggerItem} className="mt-10 max-[860px]:hidden">
        <Compass />
        <p className="mt-6 max-w-[220px] font-script text-xl leading-[1.3] text-white/40">
          No es solo un tour, es tu aventura.
        </p>
      </motion.div>
    </motion.div>
  );
}

function Compass() {
  return (
    <svg viewBox="0 0 120 120" className="h-24 w-24" aria-hidden="true">
      <circle cx="60" cy="60" r="46" fill="none" stroke="currentColor" strokeWidth="1" className="text-white/25" />
      <circle cx="60" cy="60" r="1.6" fill="currentColor" className="text-gold" />
      <text x="60" y="19" textAnchor="middle" className="fill-white/40 text-[9px] font-semibold" style={{ letterSpacing: '0.1em' }}>N</text>
      <text x="60" y="107" textAnchor="middle" className="fill-white/40 text-[9px] font-semibold" style={{ letterSpacing: '0.1em' }}>S</text>
      <text x="11" y="64" textAnchor="middle" className="fill-white/40 text-[9px] font-semibold" style={{ letterSpacing: '0.1em' }}>W</text>
      <text x="109" y="64" textAnchor="middle" className="fill-white/40 text-[9px] font-semibold" style={{ letterSpacing: '0.1em' }}>E</text>
      <path d="M40 78 L55 50 L65 65 L75 45 L88 78 Z" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-gold/70" />
    </svg>
  );
}

function OptionsGrid({ q, onPick }) {
  return (
    <div className="grid grid-cols-2 gap-4 max-[860px]:order-2 max-[540px]:grid-cols-1">
      {q.opts.map((opt, i) => (
        <OptionCard key={opt.l} opt={opt} index={i} onClick={() => onPick(i)} />
      ))}
    </div>
  );
}

function OptionCard({ opt, index, onClick }) {
  const tint = CARD_TINTS[index % CARD_TINTS.length];
  return (
    <motion.button
      type="button"
      onClick={onClick}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15 + index * 0.06, duration: 0.4, ease: EASE }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`group relative flex aspect-[4/3] flex-col justify-between overflow-hidden rounded-xl bg-gradient-to-br ${tint} p-5 text-left`}
    >
      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10 transition-all duration-300 group-hover:ring-2 group-hover:ring-gold" />
      <div className="pointer-events-none absolute inset-0 bg-black/15 transition-opacity duration-300 group-hover:bg-black/0" />

      <span className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-black/20 text-xl backdrop-blur-sm">
        {opt.i}
      </span>

      <div className="relative z-10">
        <span className="block font-serif text-[17px] font-bold uppercase tracking-wide text-white">{opt.l}</span>
        <span className="mb-3 mt-1 block text-[12.5px] text-white/70">{opt.s}</span>
        <span className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[.12em] text-gold">
          Ver más →
        </span>
      </div>
    </motion.button>
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
