'use client';

import { useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { EXPERIENCES, QUIZ_QUESTIONS } from '@/data/experiences';
import WhatsAppIcon from './icons/WhatsAppIcon';

const EMPTY_SCORES = { barranquismo: 0, ferrata: 0, ebike: 0 };
const ICONS = { barranquismo: '🏞️', ferrata: '🧗', ebike: '🚲' };
const GREETING = 'Hola 👋 Vamos a encontrar la experiencia perfecta para ti. Responde unas pocas preguntas.';
const EASE = [0.22, 0.61, 0.36, 1];

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
  const [messages, setMessages] = useState([{ role: 'ai', text: GREETING }]);
  const [typing, setTyping] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [direction, setDirection] = useState(1);

  function pick(idx) {
    const q = QUIZ_QUESTIONS[step];
    const opt = q.opts[idx];
    const nextScores = { ...scores };
    Object.keys(opt.w).forEach((k) => { nextScores[k] += opt.w[k]; });

    setMessages((m) => [...m, { role: 'user', text: opt.l }]);
    setHist((h) => [...h, { q: q.q, a: opt.l, w: opt.w }]);
    setScores(nextScores);
    setTyping(true);
    setDirection(1);

    const isLast = step + 1 >= QUIZ_QUESTIONS.length;
    setTimeout(() => {
      setTyping(false);
      setStep((s) => s + 1);
      if (isLast) setShowResult(true);
    }, 650);
  }

  function goBack() {
    if (step === 0) return;
    const newHist = hist.slice(0, -1);
    const newScores = { ...EMPTY_SCORES };
    newHist.forEach((h) => Object.keys(h.w).forEach((k) => { newScores[k] += h.w[k]; }));
    setHist(newHist);
    setScores(newScores);
    setMessages((m) => m.slice(0, -1));
    setDirection(-1);
    setStep((s) => s - 1);
  }

  function restart() {
    setStep(0);
    setHist([]);
    setScores(EMPTY_SCORES);
    setMessages([{ role: 'ai', text: GREETING }]);
    setShowResult(false);
    setDirection(1);
  }

  const q = QUIZ_QUESTIONS[step];

  return (
    <div className="mx-auto max-w-[640px] rounded-2xl border border-white/[.08] bg-white/[.04] p-8">
      <ProgressBar step={step} done={showResult} />

      <div className="mb-6 flex flex-col gap-3">
        {messages.map((m, i) => (
          <Bubble key={i} role={m.role} text={m.text} />
        ))}
        {typing && <TypingIndicator />}
      </div>

      <AnimatePresence mode="wait">
        {!showResult && !typing && q && (
          <motion.div
            key={step}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35, ease: EASE }}
          >
            <Question q={q} onPick={pick} onBack={goBack} onSkip={() => setShowResult(true)} step={step} />
          </motion.div>
        )}
      </AnimatePresence>

      {showResult && (
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, ease: EASE }}>
          <ResultCard scores={scores} />
        </motion.div>
      )}

      {showResult && (
        <div className="mt-5 text-center">
          <a href="#" onClick={(e) => { e.preventDefault(); restart(); }} className="text-xs text-white/30 underline">
            Volver a empezar
          </a>
        </div>
      )}
    </div>
  );
}

function ProgressBar({ step, done }) {
  return (
    <div className="mb-7 flex justify-center gap-[5px]">
      {QUIZ_QUESTIONS.map((_, i) => {
        const active = done || i < step;
        const current = !done && i === step;
        return (
          <div key={i} className="relative h-[3px] w-7 overflow-hidden rounded-sm bg-white/[.12]">
            <motion.div
              className={`absolute inset-y-0 left-0 w-full origin-left rounded-sm ${current ? 'bg-sage' : 'bg-gold'}`}
              initial={false}
              animate={{ scaleX: active || current ? 1 : 0 }}
              transition={{ duration: 0.4, ease: EASE }}
            />
          </div>
        );
      })}
    </div>
  );
}

function Bubble({ role, text }) {
  const isAi = role === 'ai';
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: EASE }}
      className={
        isAi
          ? 'max-w-[85%] self-start rounded-[10px] rounded-tl-[2px] border border-white/[.08] bg-white/[.06] px-[17px] py-[13px] text-sm leading-[1.6] text-white/88'
          : 'ml-auto max-w-[85%] self-end rounded-[10px] rounded-tr-[2px] bg-gold2 px-[17px] py-[13px] text-sm font-medium leading-[1.6] text-white'
      }
    >
      {isAi && <span className="mb-[5px] block text-[9.5px] font-semibold uppercase tracking-[.12em] text-gold">TRUE</span>}
      {text}
    </motion.div>
  );
}

function TypingIndicator() {
  return (
    <div className="flex w-fit items-center gap-1 rounded-[10px] rounded-tl-[2px] border border-white/[.08] bg-white/[.06] px-[17px] py-[13px]">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="h-[5px] w-[5px] animate-[td_1.2s_ease_infinite] rounded-full bg-gold"
          style={{ animationDelay: `${i * 0.15}s` }}
        />
      ))}
    </div>
  );
}

function Question({ q, onPick, onBack, onSkip, step }) {
  return (
    <motion.div variants={staggerParent} initial="hidden" animate="show">
      <motion.span variants={staggerItem} className="mb-2.5 block text-[10.5px] font-semibold uppercase tracking-[.14em] text-gold">
        Pregunta {step + 1} de {QUIZ_QUESTIONS.length}
      </motion.span>
      <motion.div variants={staggerItem} className="mb-[22px] font-serif text-xl font-bold leading-[1.4] text-white">
        {q.q}
      </motion.div>
      <div className={`grid gap-[9px] ${q.single ? 'grid-cols-1' : 'grid-cols-2 max-[580px]:grid-cols-1'}`}>
        {q.opts.map((opt, i) => (
          <motion.button
            key={opt.l}
            type="button"
            variants={staggerItem}
            onClick={() => onPick(i)}
            whileHover={{ scale: 1.02, borderColor: 'var(--color-gold)' }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.18 }}
            className="flex items-center gap-3 rounded-[9px] border border-white/[.09] bg-white/[.04] p-4 text-left hover:bg-gold/[.08]"
          >
            <span className="w-6 flex-shrink-0 text-center text-xl">{opt.i}</span>
            <span>
              <span className="block text-[13.5px] font-semibold text-white">{opt.l}</span>
              <span className="mt-0.5 block text-[11.5px] text-white/45">{opt.s}</span>
            </span>
          </motion.button>
        ))}
      </div>
      <div className="mt-[18px] flex items-center justify-between">
        <button
          type="button"
          onClick={onBack}
          className={`flex items-center gap-1.5 text-xs text-white/35 transition-colors hover:text-white/65 ${step === 0 ? 'invisible' : ''}`}
        >
          ← Atrás
        </button>
        <button type="button" onClick={onSkip} className="text-xs text-white/30 underline">
          Saltar →
        </button>
      </div>
    </motion.div>
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
