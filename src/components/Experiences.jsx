import Image from 'next/image';
import Link from 'next/link';
import { EXPERIENCE_LIST } from '@/data/experiences';
import WhatsAppIcon from './icons/WhatsAppIcon';

const COMING_SOON = [
  { img: 'https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=800&q=80', alt: 'Flamenco Granada', cat: 'Cultural', name: 'Flamenco Sacromonte' },
  { img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80', alt: 'Tapas Granada', cat: 'Gastronomía', name: 'Tapas & Culture Route' },
  { img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80', alt: 'Sierra Nevada', cat: 'Naturaleza', name: 'Senderismo Sierra Nevada' },
];

export default function Experiences({ mobileCarousel = true }) {
  return (
    <section className="bg-paper py-[100px]" id="experiences">
      <div className="mx-auto max-w-[1160px] px-7">
        <div className="reveal mb-11 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[.22em] text-gold2">Nuestras experiencias</p>
            <h2 className="mt-3 font-serif text-[clamp(1.8rem,3.5vw,2.6rem)] font-bold">No elijas un tour. Elige una experiencia.</h2>
            <p className="mt-2.5 max-w-[480px] text-[15px] leading-[1.6] text-ink2">Descubre nuestras propuestas o deja que diseñemos algo que encaje contigo.</p>
          </div>
          <a href="https://wa.me/34689507099" className="inline-flex items-center gap-2.5 rounded bg-wa px-7 py-[15px] text-sm font-semibold text-white transition-all hover:brightness-110">
            <WhatsAppIcon size={16} />
            Preguntar por WhatsApp
          </a>
        </div>

        <div
          className={`reveal-group grid grid-cols-3 gap-4 max-[860px]:grid-cols-2 ${
            mobileCarousel
              ? 'max-[540px]:flex max-[540px]:snap-x max-[540px]:snap-mandatory max-[540px]:overflow-x-auto max-[540px]:pb-2 max-[540px]:[-ms-overflow-style:none] max-[540px]:[scrollbar-width:none] max-[540px]:[&::-webkit-scrollbar]:hidden'
              : 'max-[540px]:grid-cols-1'
          }`}
        >
          {EXPERIENCE_LIST.map((exp) => (
            <ExperienceCard key={exp.key} exp={exp} mobileCarousel={mobileCarousel} />
          ))}
          {COMING_SOON.map((item) => (
            <ComingSoonCard key={item.name} item={item} mobileCarousel={mobileCarousel} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({ exp, mobileCarousel }) {
  const ctaLabel = exp.key === 'ebike' ? 'Diseñar mi ruta →' : 'Ver experiencia →';
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
          <span className="font-serif text-lg font-bold text-gold">Desde {exp.price}€</span>
          <span className="flex items-center gap-1.5 text-xs font-semibold text-white opacity-80 transition-opacity group-hover:opacity-100">
            {ctaLabel}
          </span>
        </div>
      </div>
    </Link>
  );
}

function ComingSoonCard({ item, mobileCarousel }) {
  const carouselCardClass = mobileCarousel ? 'max-[540px]:w-[78%] max-[540px]:flex-shrink-0 max-[540px]:snap-center' : '';
  return (
    <div className={`reveal relative aspect-[3/4] overflow-hidden rounded-xl ${carouselCardClass}`}>
      <Image src={item.img} alt={item.alt} width={800} height={1067} className="h-full w-full object-cover" />
      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(30,26,20,.94)_0%,rgba(30,26,20,.5)_100%)]" />
      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded border border-gold bg-ink/85 px-5 py-[9px] text-[11px] font-semibold uppercase tracking-[.12em] text-gold">
        Próximamente
      </span>
      <div className="absolute inset-x-0 bottom-0 p-5">
        <p className="mb-[5px] text-[10px] font-semibold uppercase tracking-[.14em] text-gold">{item.cat}</p>
        <h3 className="font-serif text-xl font-bold leading-[1.2] text-white">{item.name}</h3>
      </div>
    </div>
  );
}
