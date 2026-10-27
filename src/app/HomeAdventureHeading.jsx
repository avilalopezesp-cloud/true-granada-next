'use client';

import { useLanguage } from '@/i18n/LanguageContext';

const COPY = {
  es: {
    kicker: 'Elige tu aventura',
    title: <>Cuéntanos cómo eres.<br /><em className="font-light italic text-gold">Nosotros hacemos el plan.</em></>,
  },
  en: {
    kicker: 'Choose Your Adventure',
    title: <>Tell us who you are.<br /><em className="font-light italic text-gold">We&apos;ll make the plan.</em></>,
  },
};

export default function HomeAdventureHeading() {
  const { lang } = useLanguage();
  const c = COPY[lang];
  return (
    <div className="reveal mb-9 text-center">
      <p className="text-[11px] font-semibold uppercase tracking-[.22em] text-gold">{c.kicker}</p>
      <h2 className="mx-auto my-3.5 max-w-[640px] font-serif text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] text-white">
        {c.title}
      </h2>
    </div>
  );
}
