'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLanguage, pick } from '@/i18n/LanguageContext';
import GranadaMapArt from './GranadaMapArt';

// Where each experience happens, all starting from our base in Plaza Larga.
// Travel times live here so they're easy to update in one place.
const STOPS = [
  {
    key: 'ebike',
    n: 1,
    href: '/experiencias/ebike',
    name: { es: 'Ruta en e-bike', en: 'E-bike route' },
    place: { es: 'Sacromonte, Darro, Realejo y San Nicolás', en: 'Sacromonte, Darro, Realejo and San Nicolás' },
    time: { es: 'Sales desde aquí', en: 'Leaves from here' },
  },
  {
    key: 'ferrata',
    n: 2,
    href: '/experiencias/ferrata',
    name: { es: 'Vía Ferrata', en: 'Via Ferrata' },
    place: { es: 'Monachil', en: 'Monachil' },
    time: { es: '20 min en coche', en: '20 min by car' },
    mapName: { es: 'Vía Ferrata en Monachil', en: 'Via Ferrata in Monachil' },
  },
  {
    key: 'barranquismo',
    n: 3,
    href: '/experiencias/barranquismo',
    name: { es: 'Barranquismo', en: 'Canyoning' },
    place: { es: 'Río Verde', en: 'Río Verde' },
    time: { es: '45 min en coche', en: '45 min by car' },
    mapName: { es: 'Barranquismo en Río Verde', en: 'Canyoning in Río Verde' },
  },
];

const COPY = {
  es: {
    kicker: 'De aquí, de verdad',
    title: 'Todo empieza en Plaza Larga.',
    text: 'Nuestra base está en el corazón del Albaicín. Desde aquí salen todas las experiencias, y así de cerca están:',
    see: 'Ver experiencia →',
    mapSubtitle: 'desde Plaza Larga, en el Albaicín',
    notToScale: 'Ilustración, no a escala',
    mapLabel: 'Mapa ilustrado de Granada: desde Plaza Larga, la ruta en e-bike pasa por el Sacromonte, el Paseo de los Tristes, Plaza Nueva, el Realejo y San Nicolás; la vía ferrata está en Monachil y el barranquismo en Río Verde.',
  },
  en: {
    kicker: 'Born here, for real',
    title: 'It all starts in Plaza Larga.',
    text: 'Our base is in the heart of the Albaicín. Every experience starts here, and this is how close they are:',
    see: 'View experience →',
    mapSubtitle: 'from Plaza Larga, in the Albaicín',
    notToScale: 'Illustration, not to scale',
    mapLabel: 'Illustrated map of Granada: from Plaza Larga, the e-bike route passes Sacromonte, Paseo de los Tristes, Plaza Nueva, Realejo and San Nicolás; the via ferrata is in Monachil and canyoning is in Río Verde.',
  },
};

export default function PlazaLargaMap() {
  const { lang } = useLanguage();
  const c = COPY[lang];
  const [active, setActive] = useState(null);
  const mapStops = STOPS.map((stop) => ({ key: stop.key, n: stop.n, time: pick(lang, stop.time), mapName: pick(lang, stop.mapName) }));

  return (
    <section className="relative overflow-hidden border-t border-white/[.06] bg-ink py-[100px]" id="mapa">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_35%_40%,rgba(201,165,90,.07),transparent_60%)]" />
      <div className="relative mx-auto grid max-w-[1160px] gap-x-14 gap-y-8 px-7 [grid-template-areas:'head'_'map'_'list'] lg:grid-cols-[1.1fr_1fr] lg:grid-rows-[auto_1fr] lg:[grid-template-areas:'map_head'_'map_list']">
        <div className="reveal self-center [grid-area:map]">
          <div className="mx-auto max-w-[560px] rounded-[3px] bg-cream p-2 shadow-[0_30px_70px_rgba(0,0,0,.55)] lg:-rotate-[1.5deg]">
            <GranadaMapArt c={c} active={active} stops={mapStops} />
          </div>
        </div>

        <div className="self-end [grid-area:head]">
          <p className="reveal text-[11px] font-semibold uppercase tracking-[.22em] text-gold">{c.kicker}</p>
          <h2 className="reveal mt-3 font-serif text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] text-white">{c.title}</h2>
          <p className="reveal mt-4 max-w-[440px] text-[15px] leading-[1.65] text-white/70">{c.text}</p>
        </div>

        <ol className="reveal-group flex flex-col gap-3 self-start [grid-area:list]">
          {STOPS.map((stop) => (
            <li key={stop.key} className="reveal">
              <Link
                href={stop.href}
                onMouseEnter={() => setActive(stop.key)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(stop.key)}
                onBlur={() => setActive(null)}
                className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/[.03] px-4 py-3.5 transition-colors hover:border-gold/50 hover:bg-white/[.06]"
              >
                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border-2 border-gold font-serif text-[15px] font-bold text-gold">
                  {stop.n}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-serif text-[17px] font-bold text-white">{pick(lang, stop.name)}</span>
                  <span className="block text-[13px] text-white/55">{pick(lang, stop.place)}</span>
                </span>
                <span className="flex-shrink-0 text-right">
                  <span className="block text-[13px] font-semibold text-gold">{pick(lang, stop.time)}</span>
                  <span className="block text-[11.5px] text-white/45 transition-colors group-hover:text-white/75 max-sm:hidden">{c.see}</span>
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
