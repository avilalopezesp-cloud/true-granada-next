'use client';

import { useLanguage } from '@/i18n/LanguageContext';

const COPY = {
  es: {
    kicker: 'TRUE Social',
    title: <>No queremos crear clientes.<br />Queremos crear comunidad.</>,
    text: 'Quedadas, sunsets, rutas, eventos. Conoce otros viajeros que entienden Granada como tú.',
    pills: ['🌅 Sunset meetups', '🚴 Rutas grupales', '🎭 Eventos locales', '🤝 Conoce viajeros'],
    badge: 'Próximamente',
  },
  en: {
    kicker: 'TRUE Social',
    title: <>We don&apos;t want to create customers.<br />We want to create community.</>,
    text: 'Meetups, sunsets, rides, events. Meet other travelers who get Granada the way you do.',
    pills: ['🌅 Sunset meetups', '🚴 Group rides', '🎭 Local events', '🤝 Meet travelers'],
    badge: 'Coming soon',
  },
};

export default function Community() {
  const { lang } = useLanguage();
  const c = COPY[lang];

  return (
    <section className="bg-ink py-20 px-7 text-center">
      <div className="reveal mx-auto max-w-[1160px]">
        <p className="mb-3.5 text-[11px] font-semibold uppercase tracking-[.22em] text-gold">{c.kicker}</p>
        <h2 className="mb-4 font-serif text-[clamp(1.8rem,3.5vw,2.6rem)] font-bold italic text-white">
          {c.title}
        </h2>
        <p className="mx-auto mb-9 max-w-[420px] text-[15px] leading-[1.7] text-white/60">
          {c.text}
        </p>
        <div className="mb-9 flex flex-wrap justify-center gap-2.5">
          {c.pills.map((pill) => (
            <span key={pill} className="rounded-full border border-white/10 bg-white/[.06] px-[18px] py-2 text-[13px] text-white/65">
              {pill}
            </span>
          ))}
        </div>
        <span className="inline-block rounded-full border border-gold/30 px-5 py-2 text-[11px] font-semibold uppercase tracking-[.16em] text-gold">
          {c.badge}
        </span>
      </div>
    </section>
  );
}
