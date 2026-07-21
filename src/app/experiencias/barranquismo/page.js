import Image from 'next/image';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';
import { EXPERIENCES } from '@/data/experiences';

const exp = EXPERIENCES.barranquismo;
const waHref = `https://wa.me/34689507099?text=${encodeURIComponent(exp.wa)}`;

export const metadata = {
  title: `${exp.name} — TRUE Granada`,
  description: exp.desc,
  openGraph: {
    type: 'website',
    title: `${exp.name} — TRUE Granada`,
    description: exp.desc,
    images: [exp.cover],
    locale: 'es_ES',
  },
};

export default function BarranquismoPage() {
  const { journey } = exp;

  return (
    <>
      <Nav />

      <section className="relative flex min-h-[92vh] items-end overflow-hidden px-7 pb-16 pt-24">
        <div className="absolute inset-0 z-0 overflow-hidden bg-ink">
          <Image src={exp.cover} alt={exp.name} fill priority className="object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(30,26,20,.22)_0%,rgba(30,26,20,.72)_70%,rgba(30,26,20,.92)_100%)]" />
        </div>

        <div className="relative z-[2] mx-auto w-full max-w-[1160px]">
          <p className="fade-up mb-[18px] flex items-center gap-3.5 text-[13px] font-bold uppercase tracking-[.2em] text-gold before:h-0.5 before:w-[34px] before:bg-gold before:content-['']">
            {exp.cat}
          </p>
          <h1 className="fade-up mb-5 max-w-[720px] font-serif text-[clamp(2.4rem,6vw,4.4rem)] font-bold leading-[1.05] tracking-[-.02em] text-white [animation-delay:.15s]">
            Río Verde no se cuenta. <em className="font-light italic text-gold">Se salta.</em>
          </h1>
          <p className="fade-up mb-8 max-w-[520px] text-[17px] font-normal leading-[1.7] text-white/80 [animation-delay:.3s]">
            {exp.tagline}
          </p>

          <div className="fade-up mb-9 flex flex-wrap gap-x-8 gap-y-3 border-y border-white/15 py-4 [animation-delay:.4s]">
            <Fact label="Desde" value={`${exp.price}€`} />
            <Fact label="Duración" value={exp.dur} />
            <Fact label="Grupo" value={exp.group} />
            <Fact label="Nivel" value={exp.level} />
          </div>

          <div className="fade-up flex flex-wrap gap-3.5 [animation-delay:.55s]">
            <a
              href={waHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 rounded bg-wa px-7 py-[15px] text-sm font-semibold tracking-[.02em] text-white transition-all hover:-translate-y-0.5 hover:brightness-110"
            >
              <WhatsAppIcon size={16} />
              Reservar por WhatsApp
            </a>
            <a
              href="#recorrido"
              className="inline-flex items-center gap-2 rounded border-[1.5px] border-white/40 px-[26px] py-3.5 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:border-gold2 hover:text-gold2"
            >
              Ver el recorrido ↓
            </a>
          </div>
        </div>
      </section>

      <section className="bg-paper py-20">
        <div className="reveal mx-auto max-w-[760px] px-7 text-center">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[.22em] text-gold2">La experiencia</p>
          <p className="mb-5 text-lg font-normal leading-[1.75] text-ink">{exp.desc}</p>
          <p className="font-serif text-[19px] font-normal italic leading-[1.6] text-ink2">&quot;{exp.why}&quot;</p>
        </div>
      </section>

      <section className="bg-cream py-24" id="recorrido">
        <div className="mx-auto max-w-[1160px] px-7">
          <div className="reveal mb-20 text-center">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[.22em] text-gold2">El recorrido</p>
            <h2 className="mx-auto max-w-[560px] font-serif text-[clamp(1.8rem,3.5vw,2.6rem)] font-bold leading-[1.15]">
              5 paradas, una sola aventura
            </h2>
          </div>

          <div className="flex flex-col gap-20 max-[860px]:gap-14">
            {journey.stops.map((stop, i) => (
              <Stop key={stop.n} stop={stop} name={exp.name} reverse={i % 2 === 1} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_60%_50%,rgba(201,165,90,.08),transparent_65%)]" />
        <div className="reveal relative mx-auto max-w-[640px] px-7 text-center">
          <h2 className="mb-4 font-serif text-[clamp(1.8rem,3.5vw,2.6rem)] font-bold leading-[1.15] text-white">
            ¿Listos para saltar?
          </h2>
          <p className="mx-auto mb-8 max-w-[420px] text-[15px] leading-[1.7] text-white/60">
            Guía certificado, equipo incluido y grupos de máximo 8 personas. Escríbenos y en menos de 1 hora tenéis todo organizado.
          </p>
          <a
            href={waHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 rounded bg-wa px-8 py-4 text-sm font-semibold tracking-[.02em] text-white transition-all hover:-translate-y-0.5 hover:brightness-110"
          >
            <WhatsAppIcon size={16} />
            Reservar por WhatsApp
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}

function Fact({ label, value }) {
  return (
    <div>
      <span className="block text-[10.5px] uppercase tracking-[.1em] text-white/50">{label}</span>
      <span className="block font-serif text-lg font-bold text-white">{value}</span>
    </div>
  );
}

function Stop({ stop, name, reverse }) {
  return (
    <div className="reveal grid grid-cols-2 items-center gap-14 max-[860px]:grid-cols-1 max-[860px]:gap-6">
      <div className={`${reverse ? 'order-2' : 'order-1'} max-[860px]:order-1`}>
        <StopMedia stop={stop} name={name} />
      </div>
      <div className={`${reverse ? 'order-1' : 'order-2'} max-[860px]:order-2`}>
        <span className="mb-3 block font-serif text-5xl font-bold text-gold/25">{String(stop.n).padStart(2, '0')}</span>
        <h3 className="mb-3 font-serif text-2xl font-bold text-ink">{stop.title}</h3>
        <p className="text-[15px] leading-[1.8] text-ink2">{stop.text}</p>
      </div>
    </div>
  );
}

function StopMedia({ stop, name }) {
  if (stop.media.type === 'video') {
    return (
      <video
        autoPlay
        muted
        loop
        playsInline
        poster={stop.media.poster}
        className="aspect-[4/5] w-full rounded-[10px] object-cover"
      >
        <source src={stop.media.src} type="video/mp4" />
      </video>
    );
  }
  return (
    <Image
      src={stop.media.src}
      alt={`${name} — ${stop.title}`}
      width={800}
      height={1000}
      className="aspect-[4/5] w-full rounded-[10px] object-cover"
    />
  );
}
