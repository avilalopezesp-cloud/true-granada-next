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
            <h2 className="mt-3 font-serif text-[clamp(1.8rem,3.5vw,2.6rem)] font-medium">O explora por tu cuenta</h2>
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
        <h3 className="mb-1 font-serif text-xl font-medium leading-[1.2] text-white">{exp.name}</h3>
        <p className="mb-3.5 text-[13.5px] leading-[1.5] text-white/65">{exp.desc}</p>
        <div className="flex items-center justify-between">
          <span className="font-serif text-lg font-medium text-gold">Desde {exp.price}€</span>
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
        <h3 className="font-serif text-xl font-medium leading-[1.2] text-white">{item.name}</h3>
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
      <RouteBuilderModal exp={exp} />
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

function RouteBuilderModal({ exp }) {
  const [selected, setSelected] = useState([]);

  function toggle(option) {
    setSelected((s) => (s.includes(option) ? s.filter((o) => o !== option) : [...s, option]));
  }

  function send() {
    if (!selected.length) return;
    const msg = `Hola TRUE 👋 Quiero diseñar mi ruta en e-bike con estas paradas: ${selected.join(', ')}. ¿Podéis armarme una propuesta?`;
    window.open(`https://wa.me/34689507099?text=${encodeURIComponent(msg)}`, '_blank');
  }

  return (
    <>
      <Image src={exp.cover} alt={exp.name} width={900} height={563} className="block aspect-[16/10] w-full rounded-t-[14px] bg-ink object-cover" />
      <div className="px-6 pt-[26px]">
        <p className="mb-2 text-[10px] font-semibold uppercase tracking-[.14em] text-gold2">{exp.cat}</p>
        <h3 className="mb-2 font-serif text-2xl font-bold">{exp.name}</h3>
        <p className="mb-1.5 text-[14.5px] leading-[1.6] text-ink2">{exp.sub}</p>
      </div>
      <div className="grid grid-cols-2 gap-2.5 px-6 py-[18px] max-[540px]:grid-cols-1">
        {exp.routeOptions.map((option) => {
          const checked = selected.includes(option);
          return (
            <label
              key={option}
              className={`flex cursor-pointer items-center gap-2.5 rounded-[9px] border-[1.5px] px-3.5 py-3 text-[14.5px] font-medium transition-colors ${
                checked ? 'border-gold2 bg-gold/[.12] text-ink' : 'border-black/10 bg-cream2 text-ink2 hover:border-gold'
              }`}
            >
              <input type="checkbox" checked={checked} onChange={() => toggle(option)} className="h-4 w-4 flex-shrink-0 accent-gold2" />
              {option}
            </label>
          );
        })}
      </div>
      <div className="mt-1 border-t border-black/10 px-6 pb-[26px] pt-[18px]">
        <p className="mb-3 text-xs text-ink3">
          {selected.length ? `${selected.length} ${selected.length === 1 ? 'parada seleccionada' : 'paradas seleccionadas'}` : 'Elige al menos una parada para tu ruta.'}
        </p>
        <button type="button" onClick={send} className="rounded bg-wa px-7 py-[15px] text-sm font-semibold text-white transition-all hover:brightness-110 disabled:opacity-50">
          Enviar ruta por WhatsApp
        </button>
      </div>
    </>
  );
}
