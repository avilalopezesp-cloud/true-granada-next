'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';
import { useLanguage, pick } from '@/i18n/LanguageContext';

// Programme of the TRUE Winter Escape (January 2027). Provisional: mountain
// and canyon days depend on conditions, so keep the note below in sync.
const ITINERARY = [
  {
    day: { es: 'LUN', en: 'MON' },
    title: { es: 'Bienvenida a Granada', en: 'Welcome to Granada' },
    text: { es: 'Llegada a Oripando Hostel, presentación en TRUE Lab y tapas de bienvenida.', en: 'Arrival at Oripando Hostel, trip briefing at TRUE Lab and welcome tapas.' },
  },
  {
    day: { es: 'MAR', en: 'TUE' },
    title: { es: 'Aventura vertical', en: 'Vertical adventure' },
    text: { es: 'Vía ferrata por la mañana y escalada en roca por la tarde, con técnicos especializados.', en: 'Morning via ferrata and afternoon outdoor rock climbing with qualified instructors.' },
  },
  {
    day: { es: 'MIÉ', en: 'WED' },
    title: { es: 'Barranquismo en Río Verde', en: 'Río Verde canyoning' },
    text: { es: 'Barranquismo si el acceso y las condiciones de enero son seguros. Alternativa: senderismo de aventura.', en: 'Canyoning if January access and conditions are safe. Alternative: adventure hiking.' },
  },
  {
    day: { es: 'JUE', en: 'THU' },
    title: { es: 'Raquetas en Sierra Nevada', en: 'Sierra Nevada snowshoeing' },
    text: { es: 'Ruta guiada con raquetas de nieve, adaptada al grupo y sujeta a las condiciones meteorológicas.', en: 'Guided snowshoeing, adapted to the group and subject to weather and mountain conditions.' },
  },
  {
    day: { es: 'VIE', en: 'FRI' },
    title: { es: 'Guadix: e-bike y caballos', en: 'Guadix: e-bike & horses' },
    text: { es: 'Traslado desde un punto de recogida cerca de Oripando hasta Quéntar. Ruta en e-bike hacia Guadix, comida en el rancho y paseo a caballo.', en: 'Transfer from a meeting point near Oripando to Quéntar. E-bike journey towards Guadix, lunch at the ranch and horseback riding.' },
  },
  {
    day: { es: 'SÁB', en: 'SAT' },
    title: { es: 'Alhambra, barrios y flamenco', en: 'Alhambra, neighbourhoods & flamenco' },
    text: { es: 'Visita a la Alhambra por la mañana; por la tarde, e-bike por el Realejo, el Albaicín y el Sacromonte, atardecer en San Miguel Alto y flamenco en Jardines de Zoraya. Cena en Aixa opcional y no incluida.', en: 'Morning Alhambra visit; afternoon e-bike tour through Realejo, Albaicín and Sacromonte, sunset at San Miguel Alto and flamenco at Jardines de Zoraya. Optional dinner at Aixa, not included.' },
  },
  {
    day: { es: 'DOM', en: 'SUN' },
    title: { es: 'Hasta pronto, Granada', en: 'Goodbye, Granada' },
    text: { es: 'Desayuno, despedida y salida.', en: 'Breakfast, farewell and departure.' },
  },
];

const INCLUDED = [
  { es: '6 noches en Oripando Hostel', en: '6 nights at Oripando Hostel' },
  { es: 'Actividades guiadas de aventura', en: 'Guided adventure activities' },
  { es: 'Dos días de e-bike', en: 'Two e-bike days' },
  { es: 'Comida en el rancho de Guadix', en: 'Lunch at the Guadix ranch' },
  { es: 'Visita a la Alhambra (sujeta a entradas)', en: 'Alhambra visit (subject to ticket availability)' },
  { es: 'Espectáculo flamenco', en: 'Flamenco show' },
  { es: 'Traslados programados para las actividades', en: 'Scheduled activity transfers' },
];

const COPY = {
  es: {
    eyebrow: 'Granada ∙ Enero 2027',
    intro: 'Una semana de aventura, cultura y naturaleza. La Granada que no sale en las guías.',
    stats: ['7 días ∙ 6 noches', 'Máx. 16 viajeros', 'Oripando Hostel'],
    heroAlt: 'Guía de TRUE con las e-bikes frente a la Alhambra',
    stripAlt: 'Vía ferrata, barranquismo, nieve, bicicletas y flamenco',
    journeyKicker: 'El viaje',
    journeyTitle: 'Día a día',
    includedKicker: 'Experiencia TRUE',
    includedTitle: '¿Qué incluye?',
    date: 'Enero 2027',
    places: 'Plazas limitadas ∙ Máx. 16',
    note: 'Programa provisional. Las actividades de montaña y barranco dependen de condiciones seguras, permisos y disponibilidad. La cena del sábado no está incluida.',
    ctaTitle: '¿Te apuntas?',
    ctaText: 'Escríbenos y te contamos fechas, precio y cómo reservar tu plaza.',
    ctaButton: 'Quiero mi plaza',
    waMessage: 'Hola TRUE 👋 Me interesa el TRUE Winter Escape de enero 2027 🐐 ¿Me contáis fechas, precio y cómo reservar?',
    back: '← Ver todas las experiencias',
  },
  en: {
    eyebrow: 'Granada ∙ January 2027',
    intro: "A week of adventure, culture and nature. The Granada you won't find in guidebooks.",
    stats: ['7 days ∙ 6 nights', 'Max. 16 travellers', 'Oripando Hostel'],
    heroAlt: 'TRUE guide with the e-bikes overlooking the Alhambra',
    stripAlt: 'Via ferrata, canyoning, snow, bikes and flamenco',
    journeyKicker: 'The journey',
    journeyTitle: 'Day by day',
    includedKicker: 'The TRUE experience',
    includedTitle: "What's included?",
    date: 'January 2027',
    places: 'Limited places ∙ Max. 16',
    note: 'Provisional itinerary. Mountain and canyon activities depend on safe conditions, permits and availability. Saturday dinner is not included.',
    ctaTitle: 'Are you in?',
    ctaText: "Message us and we'll tell you the dates, the price and how to book your place.",
    ctaButton: 'I want my place',
    waMessage: "Hi TRUE 👋 I'm interested in the TRUE Winter Escape in January 2027 🐐 Can you tell me the dates, price and how to book?",
    back: '← See all experiences',
  },
};

export default function WinterEscapeClient() {
  const { lang } = useLanguage();
  const c = COPY[lang];
  const [open, setOpen] = useState(-1);
  const waHref = `https://wa.me/34689507099?text=${encodeURIComponent(c.waMessage)}`;

  return (
    <>
      <Nav />

      <section className="grid bg-ink pt-[66px] md:grid-cols-[53%_47%]">
        <div className="px-7 pb-10 pt-14 text-cream md:px-11 md:pb-12 md:pt-16">
          <p className="fade-up text-xs font-bold uppercase tracking-[.25em] text-gold">{c.eyebrow}</p>
          <h1 className="fade-up my-5 font-serif text-[clamp(3rem,6vw,4.6rem)] font-bold leading-[.96] tracking-[-.02em] text-white [animation-delay:.15s]">
            TRUE<br />
            <em className="font-light italic text-gold">Winter</em><br />
            Escape
          </h1>
          <p className="fade-up max-w-[490px] text-[18px] leading-[1.55] text-white/80 [animation-delay:.3s]">{c.intro}</p>
          <ul className="fade-up mt-6 flex flex-wrap gap-2 [animation-delay:.45s]">
            {c.stats.map((stat) => (
              <li key={stat} className="rounded-[5px] border border-gold/45 px-3 py-2.5 text-xs font-bold uppercase tracking-[.06em] text-cream2">
                {stat}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative min-h-[260px] md:min-h-[400px]">
          <Image src="/images/ebike-real-4.jpg" alt={c.heroAlt} fill priority sizes="(max-width: 768px) 100vw, 47vw" className="object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#1E1A14_0%,transparent_22%)] max-md:hidden" />
        </div>
      </section>

      <div className="relative h-[110px] bg-ink sm:h-[185px]">
        <Image src="/images/winter-escape-strip.jpg" alt={c.stripAlt} fill sizes="100vw" className="object-cover" />
      </div>

      <section className="bg-cream py-14">
        <div className="mx-auto grid max-w-[1160px] gap-8 px-7 lg:grid-cols-[1.65fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.2em] text-gold2">{c.journeyKicker}</p>
            <h2 className="mb-5 mt-2 font-serif text-[32px] font-bold text-ink">{c.journeyTitle}</h2>
            <ol className="border-b border-black/10">
              {ITINERARY.map((item, i) => {
                const expanded = open === i;
                return (
                  <li key={item.day.es} className="border-t border-black/10">
                    <button
                      type="button"
                      aria-expanded={expanded}
                      onClick={() => setOpen(expanded ? -1 : i)}
                      className="flex w-full items-center gap-3.5 px-1 py-4 text-left transition-colors hover:bg-cream2"
                    >
                      <span className="min-w-[52px] rounded bg-[#E6C88D] px-1.5 py-[7px] text-center text-xs font-extrabold text-ink">{pick(lang, item.day)}</span>
                      <span className="flex-1 font-serif text-[17px] font-bold text-ink max-sm:text-[15px]">{pick(lang, item.title)}</span>
                      <span className="w-6 text-center text-[26px] leading-none text-gold2" aria-hidden="true">{expanded ? '−' : '+'}</span>
                    </button>
                    {expanded && (
                      <p className="pb-[18px] pl-[70px] pr-4 text-[15px] leading-[1.55] text-ink2 max-sm:pl-4">{pick(lang, item.text)}</p>
                    )}
                  </li>
                );
              })}
            </ol>
          </div>

          <aside className="self-start rounded-[9px] bg-cream2 p-6">
            <p className="text-xs font-bold uppercase tracking-[.2em] text-gold2">{c.includedKicker}</p>
            <h2 className="mb-3 mt-2 font-serif text-[26px] font-bold text-ink">{c.includedTitle}</h2>
            <ul>
              {INCLUDED.map((item) => (
                <li key={item.es} className="flex items-start gap-3 border-b border-black/10 py-[11px] text-[15px] leading-[1.45] text-ink">
                  <span className="text-lg font-extrabold leading-none text-gold2" aria-hidden="true">✓</span>
                  {pick(lang, item)}
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-md bg-gold px-5 py-5 text-center text-ink">
              <strong className="block text-2xl font-black uppercase">{c.date}</strong>
              <small className="mt-2 block text-[11px] font-bold uppercase tracking-[.15em]">{c.places}</small>
            </div>
            <p className="mt-4 text-xs leading-[1.5] text-ink3">{c.note}</p>
          </aside>
        </div>
      </section>

      <section className="bg-ink px-7 py-14">
        <div className="mx-auto flex max-w-[1160px] flex-wrap items-center justify-between gap-6">
          <div>
            <p className="font-serif text-2xl font-bold text-white">{c.ctaTitle}</p>
            <p className="mt-1.5 max-w-[460px] text-[15px] text-white/65">{c.ctaText}</p>
            <Link href="/experiencias" className="mt-4 inline-block text-[13px] font-semibold text-white/50 transition-colors hover:text-white/80">
              {c.back}
            </Link>
          </div>
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded bg-gold px-7 py-[15px] text-sm font-bold uppercase tracking-[.03em] text-ink transition-all hover:brightness-110 max-sm:w-full max-sm:justify-center"
          >
            <WhatsAppIcon size={16} />
            {c.ctaButton}
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
