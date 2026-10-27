'use client';

import Image from 'next/image';
import Link from 'next/link';
import { getExperienceList } from '@/data/experiences';
import WhatsAppIcon from './icons/WhatsAppIcon';
import { useLanguage } from '@/i18n/LanguageContext';

const COPY = {
  es: {
    kicker: 'Nuestras experiencias',
    title: 'No elijas un tour. Elige una experiencia.',
    subtitle: 'Descubre nuestras propuestas o deja que diseñemos algo que encaje contigo.',
    waButton: 'Preguntar por WhatsApp',
    ctaEbike: 'Diseñar mi ruta →',
    ctaOther: 'Ver experiencia →',
    from: 'Desde',
    winter: {
      kicker: 'Este invierno · Plazas limitadas',
      title: 'Las vacaciones no se acaban en enero.',
      text: 'Estamos preparando algo grande para este invierno: rutas, bici y la Granada que no sale en las guías. Apúntate y serás de los primeros en enterarte, antes de que salga en redes.',
      tags: ['Una semana en enero', 'Pack de aventuras'],
      button: 'Avisadme primero →',
      note: 'Te escribimos por WhatsApp. Sin spam.',
      waMessage: 'Hola TRUE 👋 Avisadme primero de lo que preparáis para este invierno 🐐',
      imgAlt: 'Guía de TRUE con las e-bikes frente a las vistas de Granada',
    },
  },
  en: {
    kicker: 'Our experiences',
    title: "Don't pick a tour. Pick an experience.",
    subtitle: "Discover our experiences, or let us design something that fits you.",
    waButton: 'Ask on WhatsApp',
    ctaEbike: 'Design my route →',
    ctaOther: 'View experience →',
    from: 'From',
    winter: {
      kicker: 'This winter · Limited spots',
      title: "The holidays don't end in January.",
      text: "We're preparing something big for this winter: trails, bikes and the Granada you won't find in guidebooks. Sign up and be among the first to know, before it hits social media.",
      tags: ['One week in January', 'Adventure pack'],
      button: 'Let me know first →',
      note: "We'll message you on WhatsApp. No spam.",
      waMessage: "Hi TRUE 👋 Let me know first about what you're preparing for this winter 🐐",
      imgAlt: 'TRUE guide with the e-bikes overlooking Granada',
    },
  },
};

export default function Experiences({ mobileCarousel = true }) {
  const { lang } = useLanguage();
  const c = COPY[lang];
  const experienceList = getExperienceList(lang);

  return (
    <section className="bg-paper py-[100px]" id="experiences">
      <div className="mx-auto max-w-[1160px] px-7">
        <div className="reveal mb-11 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[.22em] text-gold2">{c.kicker}</p>
            <h2 className="mt-3 font-serif text-[clamp(1.8rem,3.5vw,2.6rem)] font-bold">{c.title}</h2>
            <p className="mt-2.5 max-w-[480px] text-[15px] leading-[1.6] text-ink2">{c.subtitle}</p>
          </div>
          <a href="https://wa.me/34689507099" className="inline-flex items-center gap-2.5 rounded bg-wa px-7 py-[15px] text-sm font-semibold text-white transition-all hover:brightness-110">
            <WhatsAppIcon size={16} />
            {c.waButton}
          </a>
        </div>

        <div
          className={`reveal-group grid grid-cols-3 gap-4 max-[860px]:grid-cols-2 ${
            mobileCarousel
              ? 'max-[540px]:flex max-[540px]:snap-x max-[540px]:snap-mandatory max-[540px]:overflow-x-auto max-[540px]:pb-2 max-[540px]:[-ms-overflow-style:none] max-[540px]:[scrollbar-width:none] max-[540px]:[&::-webkit-scrollbar]:hidden'
              : 'max-[540px]:grid-cols-1'
          }`}
        >
          {experienceList.map((exp) => (
            <ExperienceCard key={exp.key} exp={exp} mobileCarousel={mobileCarousel} c={c} />
          ))}
        </div>

        <WinterPackBanner w={c.winter} />
      </div>
    </section>
  );
}

function ExperienceCard({ exp, mobileCarousel, c }) {
  const ctaLabel = exp.key === 'ebike' ? c.ctaEbike : c.ctaOther;
  const carouselCardClass = mobileCarousel ? 'max-[540px]:w-[78%] max-[540px]:flex-shrink-0 max-[540px]:snap-center' : '';

  return (
    <Link href={exp.detailPage} className={`group reveal relative block aspect-[3/4] overflow-hidden rounded-xl transition-transform hover:-translate-y-1 ${carouselCardClass}`}>
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
        <h3 className="mb-1 font-serif text-xl font-bold leading-[1.2] text-white">{exp.name}</h3>
        <p className="mb-3.5 text-[14px] leading-[1.5] text-white/75 max-[540px]:hidden">{exp.desc}</p>
        <div className="flex items-center justify-between">
          <span className="font-serif text-lg font-bold text-gold">{c.from} {exp.price}€</span>
          <span className="flex items-center gap-1.5 text-xs font-semibold text-white opacity-80 transition-opacity group-hover:opacity-100">
            {ctaLabel}
          </span>
        </div>
      </div>
    </Link>
  );
}

// Teaser for the January adventure week: one wide block in place of the old
// "coming soon" cards. Sign-ups go through WhatsApp with a prefilled message.
function WinterPackBanner({ w }) {
  return (
    <div className="reveal mt-4 grid overflow-hidden rounded-xl bg-ink md:grid-cols-[1.1fr_1fr]">
      <div className="flex flex-col justify-center p-10 max-md:order-2 max-[540px]:p-7">
        <p className="text-[11px] font-semibold uppercase tracking-[.22em] text-gold">{w.kicker}</p>
        <h3 className="mt-4 font-serif text-[clamp(1.9rem,3.6vw,2.8rem)] font-bold leading-[1.08] text-white">{w.title}</h3>
        <p className="mt-4 max-w-[460px] text-[15px] leading-[1.65] text-white/75">{w.text}</p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {w.tags.map((tag) => (
            <li key={tag} className="rounded-[3px] border border-white/20 bg-white/[.08] px-[11px] py-[5px] text-[10px] font-semibold uppercase tracking-[.1em] text-white/85">
              {tag}
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <a
            href={`https://wa.me/34689507099?text=${encodeURIComponent(w.waMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded bg-gold px-7 py-[15px] text-sm font-semibold text-ink transition-all hover:brightness-110"
          >
            <WhatsAppIcon size={16} />
            {w.button}
          </a>
          <p className="mt-3 text-xs text-white/55">{w.note}</p>
        </div>
      </div>
      <div className="relative min-h-[260px] max-md:order-1">
        <Image
          src="/images/ebike-real-4.jpg"
          alt={w.imgAlt}
          fill
          sizes="(max-width: 768px) 100vw, 540px"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(30,26,20,.55)_0%,transparent_45%)] max-md:bg-[linear-gradient(to_top,rgba(30,26,20,.6)_0%,transparent_50%)]" />
      </div>
    </div>
  );
}
