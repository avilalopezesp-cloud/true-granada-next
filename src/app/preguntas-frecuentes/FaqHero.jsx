'use client';

import Image from 'next/image';
import { useLanguage } from '@/i18n/LanguageContext';

const COPY = {
  es: {
    kicker: 'Preguntas frecuentes',
    title: 'Resolvemos tus dudas antes de vivirlo',
    importantKicker: 'La pregunta importante',
    whyTitle: '¿Por qué TRUE?',
    whyText: 'Porque Granada no se vive de una sola manera. Puedes descubrirla sobre una e-bike, entre montañas, haciendo barranquismo, probando tapas, escuchando flamenco o simplemente encontrando un lugar que no aparece en ninguna guía.',
    whyBold: <>Tú eliges cómo quieres vivirla.<br />Nosotros te ayudamos a hacerlo realidad.</>,
  },
  en: {
    kicker: 'FAQ',
    title: 'Answering your questions before you live it',
    importantKicker: 'The important question',
    whyTitle: 'Why TRUE?',
    whyText: "Because Granada isn't lived one single way. You can discover it on an e-bike, among mountains, canyoning, trying tapas, listening to flamenco, or simply finding a place that isn't in any guidebook.",
    whyBold: <>You choose how you want to live it.<br />We help you make it happen.</>,
  },
};

export default function FaqHero() {
  const { lang } = useLanguage();
  const c = COPY[lang];
  return (
    <>
      <section className="bg-ink px-7 pb-16 pt-32 text-center">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[.22em] text-gold">{c.kicker}</p>
        <h1 className="mx-auto max-w-[640px] font-serif text-[clamp(2rem,4.5vw,3.2rem)] font-bold leading-[1.1] text-white">
          {c.title}
        </h1>
      </section>

      {/* The one question we care most about answering — given its own
          visual moment instead of living inside the accordion below. */}
      <section className="relative isolate overflow-hidden">
        <Image src="/images/cta-final-bg.jpg" alt="" fill priority className="absolute inset-0 -z-10 object-cover" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(15,13,10,.82),rgba(15,13,10,.92))]" />
        <div className="mx-auto max-w-[720px] px-7 py-24 text-center sm:py-28">
          <p className="mb-5 text-[11px] font-semibold uppercase tracking-[.24em] text-gold">{c.importantKicker}</p>
          <h2 className="mb-7 font-serif text-[clamp(2.2rem,5vw,3.4rem)] font-bold italic leading-[1.1] text-white">
            {c.whyTitle}
          </h2>
          <p className="mx-auto mb-6 max-w-[540px] text-[17px] leading-[1.8] text-white/75">
            {c.whyText}
          </p>
          <p className="mx-auto max-w-[480px] font-serif text-[20px] font-bold leading-[1.6] text-gold sm:text-[23px]">
            {c.whyBold}
          </p>
        </div>
      </section>
    </>
  );
}
