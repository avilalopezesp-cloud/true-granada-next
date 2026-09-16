'use client';

import { useLanguage } from '@/i18n/LanguageContext';

const COPY = {
  es: { kicker: 'Nosotros', title: 'Granada no se vende. Se comparte.' },
  en: { kicker: 'About Us', title: "Granada isn't sold. It's shared." },
};

export default function NosotrosHero() {
  const { lang } = useLanguage();
  const c = COPY[lang];
  return (
    <section className="bg-ink px-7 pb-16 pt-32 text-center">
      <p className="mb-3 text-[11px] font-semibold uppercase tracking-[.22em] text-gold">{c.kicker}</p>
      <h1 className="mx-auto max-w-[640px] font-serif text-[clamp(2rem,4.5vw,3.2rem)] font-bold leading-[1.1] text-white">
        {c.title}
      </h1>
    </section>
  );
}
