'use client';

import { useEffect, useRef } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';

const COPY = {
  es: {
    kicker: 'Granada · Albaicín · Andalucía',
    title: <>Granada<br />no se <em className="font-light italic text-gold">visita.</em><br />Se vive.</>,
    subtitle: 'Cuéntanos cómo quieres descubrirla y diseñaremos una experiencia para ti. Sin catálogos. Sin tours genéricos.',
    ctaPrimary: '✨ Diseñar mi aventura',
    ctaSecondary: 'Explorar experiencias',
    scroll: 'scroll',
  },
  en: {
    kicker: 'Granada · Albaicín · Andalusia',
    title: <>Granada isn&apos;t <em className="font-light italic text-gold">visited.</em><br />It&apos;s lived.</>,
    subtitle: 'Tell us how you want to discover it and we\'ll design an experience for you. No catalogs. No generic tours.',
    ctaPrimary: '✨ Design my adventure',
    ctaSecondary: 'Explore experiences',
    scroll: 'scroll',
  },
};

export default function Hero() {
  const { lang } = useLanguage();
  const c = COPY[lang];
  const bgRef = useRef(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion || !bgRef.current) return;
    const onScroll = () => {
      const y = window.scrollY;
      if (y < window.innerHeight) bgRef.current.style.transform = `translateY(${y * 0.15}px)`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="relative flex min-h-screen items-end overflow-hidden px-7 pb-20 pt-24">
      <div className="absolute inset-x-0 top-0 z-[5] h-1 bg-[linear-gradient(to_right,var(--color-gold)_0%,var(--color-gold)_33%,var(--color-sage)_33%,var(--color-sage)_66%,var(--color-ink)_66%,var(--color-ink)_100%)]" />

      <div ref={bgRef} className="absolute inset-0 z-0 overflow-hidden bg-ink">
        <video autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover">
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(30,26,20,.18)_0%,rgba(30,26,20,.72)_70%,rgba(30,26,20,.92)_100%)]" />
      </div>

      <div className="relative z-[2] max-w-[680px]">
        <p className="fade-up mb-[22px] flex items-center gap-3.5 text-[15px] font-bold uppercase tracking-[.2em] text-gold [animation-delay:.1s] before:h-0.5 before:w-[34px] before:bg-gold before:content-['']">
          {c.kicker}
        </p>
        <h1 className="fade-up mb-3 font-serif text-[clamp(3rem,7vw,5.5rem)] font-bold leading-none tracking-[-.02em] text-white [animation-delay:.25s]">
          {c.title}
        </h1>
        <p className="fade-up mb-9 max-w-[480px] text-[17px] font-normal leading-[1.7] text-white/80 [animation-delay:.5s]">
          {c.subtitle}
        </p>
        <div className="fade-up flex flex-wrap gap-3.5 [animation-delay:.7s]">
          <a
            href="#adventure"
            className="inline-flex items-center gap-2.5 rounded bg-gold px-7 py-[15px] text-sm font-bold tracking-[.02em] text-ink transition-all hover:-translate-y-0.5 hover:bg-gold2 hover:text-white"
          >
            {c.ctaPrimary}
          </a>
          <a
            href="/experiencias"
            className="inline-flex items-center gap-2 rounded border-[1.5px] border-white/40 px-[26px] py-3.5 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:border-gold2 hover:text-gold2"
          >
            {c.ctaSecondary}
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-[2] flex -translate-x-1/2 flex-col items-center gap-1.5 text-[10px] uppercase tracking-[.16em] text-white/40">
        <div className="h-9 w-px animate-[scrollPulse_2s_ease_infinite] bg-[linear-gradient(to_bottom,rgba(255,255,255,.4),transparent)]" />
        {c.scroll}
      </div>
    </section>
  );
}
