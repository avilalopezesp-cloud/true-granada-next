'use client';

import { useState } from 'react';
import Image from 'next/image';
import { EXPERIENCES, QUIZ_QUESTIONS } from '@/data/experiences';
import WhatsAppIcon from './icons/WhatsAppIcon';

const EMPTY_SCORES = { barranquismo: 0, ferrata: 0, ebike: 0 };
const ICONS = { barranquismo: '🏞️', ferrata: '🧗', ebike: '🚲' };
const GREETING = 'Hola 👋 Vamos a encontrar la experiencia perfecta para ti. Responde unas pocas preguntas.';

export default function AdventurePlanner() {
  const [step, setStep] = useState(0);
  const [hist, setHist] = useState([]);
  const [scores, setScores] = useState(EMPTY_SCORES);
  const [messages, setMessages] = useState([{ role: 'ai', text: GREETING }]);
  const [typing, setTyping] = useState(false);
  const [showResult, setShowResult] = useState(false);

  function pick(idx) {
    const q = QUIZ_QUESTIONS[step];
    const opt = q.opts[idx];
    const nextScores = { ...scores };
    Object.keys(opt.w).forEach((k) => { nextScores[k] += opt.w[k]; });

    setMessages((m) => [...m, { role: 'user', text: opt.l }]);
    setHist((h) => [...h, { q: q.q, a: opt.l, w: opt.w }]);
    setScores(nextScores);
    setTyping(true);

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
    setStep((s) => s - 1);
  }

  function restart() {
    setStep(0);
    setHist([]);
    setScores(EMPTY_SCORES);
    setMessages([{ role: 'ai', text: GREETING }]);
    setShowResult(false);
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

      {!showResult && !typing && q && (
        <Question q={q} onPick={pick} onBack={goBack} onSkip={() => setShowResult(true)} step={step} />
      )}

      {showResult && <ResultCard scores={scores} />}

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
      {QUIZ_QUESTIONS.map((_, i) => (
        <div
          key={i}
          className={`h-[3px] w-7 rounded-sm transition-colors duration-[400ms] ${
            done || i < step ? 'bg-gold' : i === step ? 'bg-sage' : 'bg-white/[.12]'
          }`}
        />
      ))}
    </div>
  );
}

function Bubble({ role, text }) {
  if (role === 'ai') {
    return (
      <div className="fade-up max-w-[85%] self-start rounded-[10px] rounded-tl-[2px] border border-white/[.08] bg-white/[.06] px-[17px] py-[13px] text-sm leading-[1.6] text-white/88">
        <span className="mb-[5px] block text-[9.5px] font-semibold uppercase tracking-[.12em] text-gold">TRUE</span>
        {text}
      </div>
    );
  }
  return (
    <div className="fade-up ml-auto max-w-[85%] self-end rounded-[10px] rounded-tr-[2px] bg-gold2 px-[17px] py-[13px] text-sm font-medium leading-[1.6] text-white">
      {text}
    </div>
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
    <div>
      <span className="mb-2.5 block text-[10.5px] font-semibold uppercase tracking-[.14em] text-gold">
        Pregunta {step + 1} de {QUIZ_QUESTIONS.length}
      </span>
      <div className="mb-[22px] font-serif text-xl font-light leading-[1.4] text-white">{q.q}</div>
      <div className={`grid gap-[9px] ${q.single ? 'grid-cols-1' : 'grid-cols-2 max-[580px]:grid-cols-1'}`}>
        {q.opts.map((opt, i) => (
          <button
            key={opt.l}
            type="button"
            onClick={() => onPick(i)}
            className="fade-up flex items-center gap-3 rounded-[9px] border border-white/[.09] bg-white/[.04] p-4 text-left transition-all hover:-translate-y-px hover:border-gold hover:bg-gold/[.08]"
            style={{ animationDelay: `${i * 0.05}s` }}
          >
            <span className="w-6 flex-shrink-0 text-center text-xl">{opt.i}</span>
            <span>
              <span className="block text-[13.5px] font-semibold text-white">{opt.l}</span>
              <span className="mt-0.5 block text-[11.5px] text-white/45">{opt.s}</span>
            </span>
          </button>
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
    <div className="fade-up overflow-hidden rounded-[14px] border border-black/10 bg-paper">
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
          <h3 className="mb-[3px] font-serif text-2xl font-medium text-white">{exp.name}</h3>
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
            <span className="font-serif text-[28px] font-medium text-gold2">
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
