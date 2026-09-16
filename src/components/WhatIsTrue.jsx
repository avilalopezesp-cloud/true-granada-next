'use client';

import Image from 'next/image';
import { useLanguage } from '@/i18n/LanguageContext';

const COPY = {
  es: {
    kicker: 'What is TRUE',
    title: <>No somos una empresa<br />de tours.<br />Somos <em className="font-light italic text-gold2">locales.</em></>,
    quote: 'No vendemos paquetes de actividades.',
    points: [
      { strong: 'Equipo del Albaicín', text: 'nacimos aquí y ayudamos a viajeros a vivir Granada de la forma que más les gusta.' },
      { strong: 'Te escuchamos primero', text: 'cada persona busca algo diferente, por eso preguntamos antes de recomendar.' },
      { strong: 'Conexión real', text: 'las actividades son solo la herramienta. Lo que ofrecemos es la Granada que la mayoría no llega a conocer.' },
    ],
  },
  en: {
    kicker: 'What is TRUE',
    title: <>We&apos;re not a tour<br />company.<br />We&apos;re <em className="font-light italic text-gold2">locals.</em></>,
    quote: "We don't sell activity packages.",
    points: [
      { strong: 'Team from the Albaicín', text: 'we were born here and help travelers experience Granada the way they actually enjoy it.' },
      { strong: 'We listen first', text: 'everyone is looking for something different, so we ask before we recommend.' },
      { strong: 'Real connection', text: "the activities are just the tool. What we offer is the Granada most people never get to know." },
    ],
  },
};

export default function WhatIsTrue() {
  const { lang } = useLanguage();
  const c = COPY[lang];

  return (
    <section className="bg-paper py-[100px]" id="about">
      <div className="mx-auto max-w-[1160px] px-7">
        <div className="grid grid-cols-2 items-center gap-20 max-[860px]:grid-cols-1">
          <div className="reveal">
            <p className="mb-[18px] text-[11px] font-semibold uppercase tracking-[.22em] text-gold2">{c.kicker}</p>
            <h2 className="mb-6 font-serif text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] text-ink">
              {c.title}
            </h2>
            <p className="mb-8 border-l-4 border-gold pl-4 font-serif text-xl font-bold leading-[1.4] text-ink sm:text-2xl">
              {c.quote}
            </p>
            <div className="flex flex-col gap-5">
              {c.points.map((p) => (
                <p key={p.strong} className="text-[15px] leading-[1.7] text-ink2">
                  <strong className="font-bold text-ink">{p.strong}</strong> — {p.text}
                </p>
              ))}
            </div>
          </div>
          <div className="reveal-group grid grid-cols-2 gap-3">
            <div className="reveal aspect-[3/4] overflow-hidden rounded-[10px]">
              <Image src="/images/team-1.jpg" alt="Equipo TRUE Granada" width={2048} height={928} className="h-full w-full object-cover" />
            </div>
            <div className="reveal mt-8 aspect-[3/4] overflow-hidden rounded-[10px] max-[860px]:mt-0">
              <Image src="/images/team-2.jpg" alt="Equipo TRUE Granada" width={1050} height={1400} className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
