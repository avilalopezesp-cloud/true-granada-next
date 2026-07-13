'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { EXPERIENCES, EXPERIENCE_LIST } from '@/data/experiences';
import WhatsAppIcon from './icons/WhatsAppIcon';

const COMING_SOON = [
  { img: 'https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=800&q=80', alt: 'Flamenco Granada', cat: 'Cultural', name: 'Flamenco Sacromonte' },
  { img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80', alt: 'Tapas Granada', cat: 'Gastronomía', name: 'Tapas & Culture Route' },
  { img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80', alt: 'Sierra Nevada', cat: 'Naturaleza', name: 'Senderismo Sierra Nevada' },
];

export default function Experiences() {
  const [openKey, setOpenKey] = useState(null);

  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', !!openKey);
  }, [openKey]);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setOpenKey(null); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  return (
    <section className="bg-paper py-[100px]" id="experiences">
      <div className="mx-auto max-w-[1160px] px-7">
        <div className="reveal mb-11 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[.22em] text-gold2">Nuestras experiencias</p>
            <h2 className="mt-3 font-serif text-[clamp(1.8rem,3.5vw,2.6rem)] font-bold">O explora por tu cuenta</h2>
          </div>
          <a href="https://wa.me/34689507099" className="inline-flex items-center gap-2.5 rounded bg-wa px-7 py-[15px] text-sm font-semibold text-white transition-all hover:brightness-110">
            <WhatsAppIcon size={16} />
            Preguntar por WhatsApp
          </a>
        </div>

        <div className="reveal-group grid grid-cols-3 gap-4 max-[860px]:grid-cols-2 max-[540px]:grid-cols-1">
          {EXPERIENCE_LIST.map((exp) => (
            <ExperienceCard key={exp.key} exp={exp} onOpen={() => setOpenKey(exp.key)} />
          ))}
          {COMING_SOON.map((item) => (
            <ComingSoonCard key={item.name} item={item} />
          ))}
        </div>
      </div>

      {openKey && <ExperienceModal exp={EXPERIENCES[openKey]} onClose={() => setOpenKey(null)} />}
    </section>
  );
}

function ExperienceCard({ exp, onOpen }) {
  const ctaLabel = exp.key === 'ebike' ? 'Diseñar mi ruta →' : 'Ver experiencia →';
  return (
    <div className="group reveal relative aspect-[3/4] overflow-hidden rounded-xl transition-transform hover:-translate-y-1">
      <div className="h-full w-full overflow-hidden">
        <Image
          src={exp.cover}
          alt={exp.name}
          width={800}
          height={1067}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(30,26,20,.88)_0%,rgba(30,26,20,.1)_55%,transparent_100%)]" />
      <span className="absolute left-3.5 top-3.5 rounded-[3px] border border-white/20 bg-white/[.18] px-[11px] py-[5px] text-[10px] font-semibold uppercase tracking-[.1em] text-white/90 backdrop-blur-[6px]">
        {exp.badge}
      </span>
      <div className="absolute inset-x-0 bottom-0 p-5">
        <p className="mb-[5px] text-[10px] font-semibold uppercase tracking-[.14em] text-gold">{exp.cat}</p>
        <h3 className="mb-1 font-serif text-xl font-bold leading-[1.2] text-white">{exp.name}</h3>
        <p className="mb-3.5 text-[14px] leading-[1.5] text-white/75">{exp.desc}</p>
        <div className="flex items-center justify-between">
          <span className="font-serif text-lg font-bold text-gold">Desde {exp.price}€</span>
          <button
            type="button"
            onClick={onOpen}
            className="flex items-center gap-1.5 text-xs font-semibold text-white opacity-80 transition-opacity group-hover:opacity-100"
          >
            {ctaLabel}
          </button>
        </div>
      </div>
    </div>
  );
}

function ComingSoonCard({ item }) {
  return (
    <div className="reveal relative aspect-[3/4] overflow-hidden rounded-xl">
      <Image src={item.img} alt={item.alt} width={800} height={1067} className="h-full w-full object-cover" />
      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(30,26,20,.94)_0%,rgba(30,26,20,.5)_100%)]" />
      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded border border-gold bg-ink/85 px-5 py-[9px] text-[11px] font-semibold uppercase tracking-[.12em] text-gold">
        Próximamente
      </span>
      <div className="absolute inset-x-0 bottom-0 p-5">
        <p className="mb-[5px] text-[10px] font-semibold uppercase tracking-[.14em] text-gold">{item.cat}</p>
        <h3 className="font-serif text-xl font-bold leading-[1.2] text-white">{item.name}</h3>
      </div>
    </div>
  );
}

function ExperienceModal({ exp, onClose }) {
  return exp.gallery ? (
    <ModalShell onClose={onClose}>
      <GalleryModal exp={exp} />
    </ModalShell>
  ) : (
    <ModalShell onClose={onClose}>
      <EbikeAdventureBuilder exp={exp} />
    </ModalShell>
  );
}

function ModalShell({ onClose, children }) {
  return (
    <div className="fixed inset-0 z-[300]">
      <div className="absolute inset-0 bg-[rgba(20,17,13,.78)] backdrop-blur-sm" onClick={onClose} />
      <div
        role="dialog"
        aria-modal="true"
        className="relative z-10 mx-auto my-8 max-h-[calc(100vh-64px)] w-[calc(100%-40px)] max-w-[720px] overflow-y-auto rounded-[14px] bg-paper shadow-[0_24px_60px_rgba(0,0,0,.35)]"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar"
          className="absolute right-3.5 top-3.5 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-ink/55 text-xl leading-none text-white transition-colors hover:bg-ink/85"
        >
          ×
        </button>
        {children}
      </div>
    </div>
  );
}

function GalleryModal({ exp }) {
  const [active, setActive] = useState(0);
  return (
    <>
      <Image src={exp.gallery[active]} alt={exp.name} width={900} height={563} className="block aspect-[16/10] w-full rounded-t-[14px] bg-ink object-cover" />
      <div className="flex gap-2 overflow-x-auto px-6 pt-3">
        {exp.gallery.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setActive(i)}
            className={`h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border-2 transition-opacity ${
              active === i ? 'border-gold2 opacity-100' : 'border-transparent opacity-60 hover:opacity-90'
            }`}
          >
            <Image src={src} alt={`${exp.name} ${i + 1}`} width={64} height={64} className="h-full w-full object-cover" />
          </button>
        ))}
      </div>
      <div className="p-6 pb-[26px] pt-5">
        <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-[.14em] text-gold2">{exp.cat}</p>
        <h3 className="mb-2 font-serif text-2xl font-bold">{exp.name}</h3>
        <p className="mb-[18px] text-[14.5px] leading-[1.7] text-ink2">{exp.desc}</p>
        <div className="flex flex-wrap items-center justify-between gap-3.5">
          <span className="font-serif text-[22px] font-bold text-gold2">
            {exp.price}€ <span className="text-xs font-normal text-ink3">/ persona</span>
          </span>
          <div className="flex flex-wrap gap-2.5">
            <a href={`https://wa.me/34689507099?text=${encodeURIComponent(exp.wa)}`} target="_blank" className="flex items-center gap-2.5 rounded bg-wa px-7 py-[15px] text-sm font-semibold text-white transition-all hover:brightness-110">
              Reservar por WhatsApp
            </a>
            <a href={exp.url} target="_blank" className="flex items-center gap-2 rounded border-[1.5px] border-ink px-[26px] py-3.5 text-sm font-medium text-ink transition-all hover:border-gold2 hover:text-gold2">
              Ver ficha completa
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

// The e-bike card doesn't sell a fixed tour — it opens a small "configurator":
// pick a duration, an emotion, and how the day should end, and each answer
// appends a chapter to a journey timeline instead of just filling a checklist.
function EbikeAdventureBuilder({ exp }) {
  const b = exp.builder;
  const [phase, setPhase] = useState('intro'); // intro | duration | emotion | ending | result
  const [duration, setDuration] = useState(null);
  const [emotion, setEmotion] = useState(null);
  const [ending, setEnding] = useState(null);

  const stepIndex = { duration: 0, emotion: 1, ending: 2 }[phase] ?? null;

  function goBack() {
    if (phase === 'duration') setPhase('intro');
    else if (phase === 'emotion') { setDuration(null); setPhase('duration'); }
    else if (phase === 'ending') { setEmotion(null); setPhase('emotion'); }
  }

  function restart() {
    setDuration(null); setEmotion(null); setEnding(null); setPhase('duration');
  }

  function sendWhatsApp() {
    const msg = `Hola TRUE 👋 Diseñé mi propia aventura en e-bike:\n· Duración: ${duration.label}\n· Quiero sentir: ${emotion.label}\n· Cómo terminar: ${ending.label}\n¿Podéis armarme esta propuesta?`;
    window.open(`https://wa.me/34689507099?text=${encodeURIComponent(msg)}`, '_blank');
  }

  if (phase === 'intro') {
    return (
      <>
        <Image src={exp.cover} alt={exp.name} width={900} height={563} className="block aspect-[16/10] w-full rounded-t-[14px] bg-ink object-cover" />
        <div className="p-8 text-center">
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[.18em] text-gold2">{b.intro.eyebrow}</p>
          <h3 className="mb-3 font-serif text-3xl font-bold text-ink">{b.intro.title}</h3>
          <p className="mx-auto mb-7 max-w-[380px] text-[15px] leading-[1.6] text-ink2">{b.intro.subtitle}</p>
          <button
            type="button"
            onClick={() => setPhase('duration')}
            className="rounded bg-gold px-8 py-4 text-sm font-bold text-ink transition-all hover:-translate-y-0.5 hover:bg-gold2 hover:text-white"
          >
            {b.intro.cta}
          </button>
        </div>
      </>
    );
  }

  return (
    <div>
      {phase !== 'result' && <BuilderProgress step={stepIndex} />}
      <BuilderTimeline origin={b.origin} duration={duration} emotion={emotion} ending={ending} />

      {phase === 'duration' && (
        <BuilderStep title="¿Cuánto tiempo tiene tu historia?">
          <div className="grid grid-cols-2 gap-3 max-[540px]:grid-cols-1">
            {b.durations.map((d) => (
              <button
                key={d.key}
                type="button"
                onClick={() => { setDuration(d); setPhase('emotion'); }}
                className="relative flex items-center gap-3 rounded-[10px] border-[1.5px] border-black/10 bg-cream2 p-4 text-left transition-all hover:-translate-y-0.5 hover:border-gold"
              >
                {d.premium && (
                  <span className="absolute right-2 top-2 rounded-full bg-gold px-2 py-0.5 text-[9px] font-bold uppercase text-ink">Premium</span>
                )}
                <span className="text-2xl">{d.icon}</span>
                <span>
                  <span className="block text-[14.5px] font-semibold text-ink">{d.label}</span>
                  <span className="block text-xs text-ink3">{d.sub}</span>
                </span>
              </button>
            ))}
          </div>
        </BuilderStep>
      )}

      {phase === 'emotion' && (
        <BuilderStep title="¿Qué quieres sentir hoy?">
          <div className="grid grid-cols-2 gap-3 max-[540px]:grid-cols-1">
            {b.emotions.map((e) => (
              <button
                key={e.key}
                type="button"
                onClick={() => { setEmotion(e); setPhase('ending'); }}
                className={`group relative overflow-hidden rounded-[12px] bg-gradient-to-br ${e.tint} p-5 text-left text-white transition-transform hover:-translate-y-1`}
              >
                <span className="mb-6 block text-3xl">{e.icon}</span>
                <span className="block text-[15px] font-bold">{e.label}</span>
                <span className="mt-1 block text-[11.5px] text-white/70">{e.stop}</span>
              </button>
            ))}
          </div>
        </BuilderStep>
      )}

      {phase === 'ending' && (
        <BuilderStep title="¿Cómo quieres que termine tu día?">
          <div className="grid grid-cols-2 gap-3 max-[540px]:grid-cols-1">
            {b.endings.map((en) => (
              <button
                key={en.key}
                type="button"
                onClick={() => { setEnding(en); setPhase('result'); }}
                className="flex items-center gap-3 rounded-[10px] border-[1.5px] border-black/10 bg-cream2 p-4 text-left transition-all hover:-translate-y-0.5 hover:border-gold"
              >
                <span className="text-2xl">{en.icon}</span>
                <span className="text-[14.5px] font-semibold text-ink">{en.label}</span>
              </button>
            ))}
          </div>
        </BuilderStep>
      )}

      {phase === 'result' && (
        <BuilderResult exp={exp} duration={duration} emotion={emotion} ending={ending} onRestart={restart} onSend={sendWhatsApp} />
      )}

      {phase !== 'result' && (
        <div className="px-6 pb-6">
          <button type="button" onClick={goBack} className="text-xs text-ink3 underline">
            ← Atrás
          </button>
        </div>
      )}
    </div>
  );
}

function BuilderProgress({ step }) {
  const labels = ['Duración', 'Emoción', 'Final'];
  return (
    <div className="flex items-center justify-center gap-2 px-6 pt-6">
      {labels.map((l, i) => (
        <div key={l} className="flex items-center gap-2">
          <span
            className={`flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-[10px] font-semibold ${
              i <= step ? 'bg-gold2 text-white' : 'bg-cream2 text-ink3'
            }`}
          >
            {i < step ? '✓' : i + 1}
          </span>
          <span className={`text-[11px] font-semibold uppercase tracking-[.08em] ${i === step ? 'text-gold2' : 'text-ink3'}`}>{l}</span>
          {i < 2 && <span className="mx-1 h-px w-4 bg-black/10" />}
        </div>
      ))}
    </div>
  );
}

function BuilderTimeline({ origin, duration, emotion, ending }) {
  const chapters = [origin];
  if (duration) chapters.push(`${duration.icon} ${duration.label}`);
  if (emotion) chapters.push(`${emotion.icon} ${emotion.stop}`);
  if (ending) chapters.push(ending.stop ? `${ending.icon} ${ending.stop}` : `${ending.icon} ${ending.label}`);

  return (
    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 px-6 pb-1 pt-4 text-[12.5px] font-medium text-ink2">
      {chapters.map((c, i) => (
        <span key={i} className="flex items-center gap-2">
          {i > 0 && <span className="text-ink3/50">→</span>}
          <span className={i === chapters.length - 1 ? 'font-semibold text-ink' : ''}>{c}</span>
        </span>
      ))}
    </div>
  );
}

function BuilderStep({ title, children }) {
  return (
    <div className="px-6 py-5">
      <h4 className="mb-4 font-serif text-xl font-bold text-ink">{title}</h4>
      {children}
    </div>
  );
}

function BuilderResult({ exp, duration, emotion, ending, onRestart, onSend }) {
  const chapters = [
    { icon: '📍', label: 'Granada' },
    { icon: emotion.icon, label: emotion.stop },
  ];
  if (ending.stop) chapters.push({ icon: ending.icon, label: ending.stop });
  chapters.push({ icon: '🏁', label: 'Regreso' });

  return (
    <div className="p-6 pb-[26px]">
      <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-[.14em] text-gold2">Tu aventura está lista</p>
      <h3 className="mb-4 font-serif text-2xl font-bold text-ink">
        {emotion.icon} {emotion.label} &amp; {ending.label}
      </h3>

      <div className="mb-5 rounded-[10px] border border-black/10 bg-cream2 p-4">
        {chapters.map((c, i) => (
          <div key={i} className="flex items-center gap-3 py-1.5">
            <span className="text-lg">{c.icon}</span>
            <span className="text-[13.5px] font-medium text-ink2">{c.label}</span>
          </div>
        ))}
      </div>

      <div className="mb-5 flex flex-wrap gap-2">
        <BuilderChip>⏱ {duration.label}</BuilderChip>
        <BuilderChip>📏 {duration.km} km</BuilderChip>
        <BuilderChip>⚡ E-bike incluida</BuilderChip>
        <BuilderChip>👥 {exp.group}</BuilderChip>
      </div>

      <div className="mb-5 flex items-baseline justify-between border-t border-black/10 pt-4">
        <div>
          <span className="text-[10.5px] uppercase tracking-[.08em] text-ink3">Desde</span>
          <br />
          <span className="font-serif text-[26px] font-bold text-gold2">
            {duration.price}€ <span className="text-xs font-normal text-ink3">/ persona</span>
          </span>
        </div>
      </div>

      <div className="flex gap-2.5 max-[540px]:flex-col">
        <button
          type="button"
          onClick={onSend}
          className="flex flex-1 items-center justify-center gap-2.5 rounded bg-wa px-7 py-[15px] text-sm font-semibold text-white transition-all hover:brightness-110"
        >
          <WhatsAppIcon size={15} />
          Reservar por WhatsApp
        </button>
        <button
          type="button"
          onClick={onRestart}
          className="flex flex-1 items-center justify-center gap-2 rounded border-[1.5px] border-ink px-[26px] py-3.5 text-sm font-medium text-ink transition-all hover:border-gold2 hover:text-gold2"
        >
          ✏️ Personalizar
        </button>
      </div>
    </div>
  );
}

function BuilderChip({ children }) {
  return (
    <span className="flex items-center gap-1.5 rounded-full border border-black/10 bg-cream2 px-3 py-1.5 text-[12.5px] text-ink2">
      {children}
    </span>
  );
}
