'use client';

import { useLanguage } from '@/i18n/LanguageContext';

const COPY = {
  es: {
    kicker: 'Contacto',
    title: '¿Hablamos de tu próxima aventura?',
    text: 'Cuéntanos qué buscas y nuestro equipo local te ayudará a encontrar la experiencia perfecta en Granada.',
  },
  en: {
    kicker: 'Contact',
    title: "Let's talk about your next adventure?",
    text: 'Tell us what you are looking for and our local team will help you find the perfect experience in Granada.',
  },
};

export default function ContactoHero() {
  const { lang } = useLanguage();
  const c = COPY[lang];
  return (
    <section className="bg-ink px-7 pb-16 pt-32 text-center">
      <p className="mb-3 text-[11px] font-semibold uppercase tracking-[.22em] text-gold">{c.kicker}</p>
      <h1 className="mx-auto mb-4 max-w-[640px] font-serif text-[clamp(2rem,4.5vw,3.2rem)] font-bold leading-[1.1] text-white">
        {c.title}
      </h1>
      <p className="mx-auto max-w-[440px] text-[15px] leading-[1.6] text-white/60">
        {c.text}
      </p>
    </section>
  );
}
