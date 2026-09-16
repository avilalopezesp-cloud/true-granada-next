'use client';

import { useLanguage } from '@/i18n/LanguageContext';

const COPY = {
  es: {
    kicker: 'Elige tu aventura',
    title: <>En menos de un minuto<br />diseñamos una propuesta <em className="font-light italic text-gold">para ti.</em></>,
  },
  en: {
    kicker: 'Choose Your Adventure',
    title: <>In under a minute<br />we design a proposal <em className="font-light italic text-gold">just for you.</em></>,
  },
};

export default function HomeAdventureHeading() {
  const { lang } = useLanguage();
  const c = COPY[lang];
  return (
    <div className="reveal mb-9 text-center">
      <p className="text-[11px] font-semibold uppercase tracking-[.22em] text-gold">{c.kicker}</p>
      <h2 className="mx-auto my-3.5 max-w-[560px] font-serif text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] text-white">
        {c.title}
      </h2>
    </div>
  );
}
