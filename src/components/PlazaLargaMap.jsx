'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage, pick } from '@/i18n/LanguageContext';

// Illustrated (not to scale) map of where each experience happens, all
// starting from our base in Plaza Larga. Travel times live here so they're
// easy to update in one place.
const STOPS = [
  {
    key: 'ebike',
    n: 1,
    href: '/experiencias/ebike',
    name: { es: 'Ruta en e-bike', en: 'E-bike route' },
    place: { es: 'Albaicín, Alhambra y miradores', en: 'Albaicín, Alhambra and viewpoints' },
    time: { es: 'Sales desde aquí', en: 'Leaves from here' },
    mapName: { es: 'Por la ciudad', en: 'Around the city' },
    marker: { x: 222, y: 214 },
    route: 'M300 150 C 352 128, 392 176, 350 204 S 252 246, 222 214 S 252 150, 300 150',
  },
  {
    key: 'ferrata',
    n: 2,
    href: '/experiencias/ferrata',
    name: { es: 'Vía Ferrata', en: 'Via Ferrata' },
    place: { es: 'Quéntar', en: 'Quéntar' },
    time: { es: '20 min en coche', en: '20 min by car' },
    mapName: { es: 'Quéntar', en: 'Quéntar' },
    mapTime: { label: '20 min', x: 404, y: 138 },
    marker: { x: 478, y: 196 },
    route: 'M300 150 C 360 132, 430 150, 478 196',
  },
  {
    key: 'barranquismo',
    n: 3,
    href: '/experiencias/barranquismo',
    name: { es: 'Barranquismo', en: 'Canyoning' },
    place: { es: 'Río Verde', en: 'Río Verde' },
    time: { es: '45 min en coche', en: '45 min by car' },
    mapName: { es: 'Río Verde', en: 'Río Verde' },
    mapTime: { label: '45 min', x: 278, y: 340 },
    marker: { x: 206, y: 448 },
    route: 'M300 150 C 292 258, 232 352, 206 448',
  },
];

const COPY = {
  es: {
    kicker: 'De aquí, de verdad',
    title: 'Todo empieza en Plaza Larga.',
    text: 'Nuestra base está en el corazón del Albaicín. Desde aquí salen todas las experiencias, y así de cerca están:',
    see: 'Ver experiencia →',
    granada: 'Granada',
    sierra: 'Sierra Nevada',
    sea: 'Mar Mediterráneo',
    mapLabel: 'Mapa ilustrado: desde Plaza Larga, la ruta en e-bike recorre la ciudad, la vía ferrata está en Quéntar y el barranquismo en Río Verde.',
  },
  en: {
    kicker: 'Born here, for real',
    title: 'It all starts in Plaza Larga.',
    text: "Our base is in the heart of the Albaicín. Every experience starts here, and this is how close they are:",
    see: 'View experience →',
    granada: 'Granada',
    sierra: 'Sierra Nevada',
    sea: 'Mediterranean Sea',
    mapLabel: 'Illustrated map: from Plaza Larga, the e-bike route loops through the city, the via ferrata is in Quéntar and canyoning is in Río Verde.',
  },
};

// Dotted city texture around the Albaicín, generated once.
const CITY_DOTS = [];
for (let x = 190; x <= 380; x += 12) {
  for (let y = 150; y <= 240; y += 12) {
    const dx = (x - 285) / 98;
    const dy = (y - 196) / 50;
    if (dx * dx + dy * dy <= 1) CITY_DOTS.push([x, y]);
  }
}

const DRAW = { hidden: { pathLength: 0, opacity: 0 }, show: (i) => ({ pathLength: 1, opacity: 1, transition: { duration: 1.4, delay: 0.3 + i * 0.35, ease: 'easeInOut' } }) };

export default function PlazaLargaMap() {
  const { lang } = useLanguage();
  const c = COPY[lang];
  const [active, setActive] = useState(null);

  return (
    // A warmer, lighter brown than the planner's ink above it, plus a gold
    // divider with the goat on the seam, so the two dark sections read apart.
    <section className="relative bg-[#2A231A] pb-[100px] pt-[120px]" id="mapa">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_35%_40%,rgba(201,165,90,.09),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 flex -translate-y-1/2 items-center justify-center gap-4 px-7" aria-hidden="true">
        <span className="h-px max-w-[420px] flex-1 bg-gradient-to-r from-transparent to-gold/60" />
        <span className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/60 bg-[#2A231A] shadow-[0_0_24px_rgba(201,165,90,.25)]">
          <Image src="/images/true-goat.png" alt="" width={40} height={40} className="h-10 w-10" />
        </span>
        <span className="h-px max-w-[420px] flex-1 bg-gradient-to-l from-transparent to-gold/60" />
      </div>
      <div className="relative mx-auto grid max-w-[1160px] gap-x-12 gap-y-8 px-7 [grid-template-areas:'head'_'map'_'list'] lg:grid-cols-[1.15fr_1fr] lg:grid-rows-[auto_1fr] lg:[grid-template-areas:'map_head'_'map_list']">
        <motion.svg
          viewBox="0 0 600 520"
          role="img"
          aria-label={c.mapLabel}
          className="reveal w-full self-center [grid-area:map]"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
        >
          {/* Sierra Nevada */}
          <g fill="none" stroke="rgba(201,165,90,.45)" strokeWidth="1.5" strokeLinejoin="round">
            <polyline points="420,268 444,236 462,254 486,216 510,250 532,224 556,256 578,238 598,266" />
            <polyline points="452,292 474,268 490,282 512,256 534,284 552,268 576,292" opacity=".6" />
          </g>
          <text x="510" y="318" textAnchor="middle" className="fill-gold/70 font-serif text-[15px] italic">{c.sierra}</text>

          {/* Sea */}
          <g fill="none" stroke="rgba(201,165,90,.22)" strokeWidth="1.2">
            <path d="M40 492 q 15 -7 30 0 t 30 0 t 30 0 t 30 0 t 30 0 t 30 0 t 30 0 t 30 0 t 30 0 t 30 0 t 30 0 t 30 0" />
            <path d="M70 506 q 15 -7 30 0 t 30 0 t 30 0 t 30 0 t 30 0 t 30 0 t 30 0 t 30 0 t 30 0 t 30 0" />
          </g>
          <text x="60" y="474" className="fill-white/35 font-serif text-[13px] italic max-sm:hidden">{c.sea}</text>

          {/* City */}
          <g className="fill-white/[.13]">
            {CITY_DOTS.map(([x, y]) => <circle key={`${x}-${y}`} cx={x} cy={y} r="1.6" />)}
          </g>
          <text x="262" y="262" textAnchor="middle" className="fill-white/40 text-[12px] font-semibold uppercase tracking-[.2em]">{c.granada}</text>

          {/* North */}
          <g className="fill-gold/60" transform="translate(560 54)">
            <path d="M0 -16 L6 6 L0 2 L-6 6 Z" />
            <text y="24" textAnchor="middle" className="fill-gold/60 text-[12px] font-semibold">N</text>
          </g>

          {/* Alhambra */}
          <g className="max-sm:hidden">
            <path d="M343 176 h14 v-6 h-3 v-4 h-2 v4 h-4 v-4 h-2 v4 h-3 z" className="fill-white/35" />
            <text x="364" y="176" className="fill-white/45 text-[11px] font-semibold uppercase tracking-[.14em]">Alhambra</text>
          </g>

          {/* Routes */}
          {STOPS.map((stop, i) => (
            <g key={stop.key}>
              <motion.path
                id={`route-${stop.key}`}
                d={stop.route}
                fill="none"
                stroke="#C9A55A"
                strokeWidth={active === stop.key ? 3 : 1.8}
                strokeLinecap="round"
                className="transition-[stroke-width] duration-300"
                variants={DRAW}
                custom={i}
              />
              {/* Shown once its route has been drawn (the SVG clock starts at page load, not on scroll). */}
              <motion.g className="motion-reduce:hidden" variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { delay: 1.5 + i * 0.35, duration: 0.4 } } }}>
                <circle r="13" className="fill-ink" stroke="#C9A55A" strokeWidth="1.5" />
                <image href="/images/true-goat.png" x="-11" y="-11" width="22" height="22" />
                <animateMotion dur={`${7 + i * 2}s`} begin={`${1.8 + i * 0.35}s`} repeatCount="indefinite" fill="freeze">
                  <mpath href={`#route-${stop.key}`} />
                </animateMotion>
              </motion.g>
            </g>
          ))}

          {/* Travel times along the routes */}
          {STOPS.filter((stop) => stop.mapTime).map((stop, i) => (
            <motion.text
              key={stop.key}
              x={stop.mapTime.x}
              y={stop.mapTime.y}
              className="fill-gold text-[13px] font-semibold"
              variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { delay: 1.6 + i * 0.35 } } }}
            >
              {stop.mapTime.label}
            </motion.text>
          ))}

          {/* Destination markers */}
          {STOPS.map((stop, i) => (
            <motion.g
              key={stop.key}
              variants={{ hidden: { opacity: 0, scale: 0.4 }, show: { opacity: 1, scale: 1, transition: { delay: 1.2 + i * 0.35, type: 'spring', stiffness: 260, damping: 16 } } }}
              style={{ originX: `${stop.marker.x}px`, originY: `${stop.marker.y}px` }}
            >
              <circle cx={stop.marker.x} cy={stop.marker.y} r={active === stop.key ? 17 : 14} className="fill-ink stroke-gold transition-all duration-300" strokeWidth="2" />
              <text x={stop.marker.x} y={stop.marker.y + 5} textAnchor="middle" className="fill-gold font-serif text-[15px] font-bold">{stop.n}</text>
              <text x={stop.marker.x + (stop.key === 'ebike' ? -24 : 24)} y={stop.marker.y + 5} textAnchor={stop.key === 'ebike' ? 'end' : 'start'} className="fill-white font-serif text-[15px] font-bold max-sm:hidden">
                {pick(lang, stop.mapName)}
              </text>
            </motion.g>
          ))}

          {/* Plaza Larga */}
          <circle cx="300" cy="150" r="10" className="fill-gold/30 motion-safe:[animation:goldPing_2.2s_ease-out_infinite] [transform-box:fill-box] [transform-origin:center]" />
          <circle cx="300" cy="150" r="8" className="fill-gold" />
          <circle cx="300" cy="150" r="3" className="fill-ink" />
          <text x="300" y="122" textAnchor="middle" className="fill-white font-serif text-[20px] font-bold">Plaza Larga</text>
          <text x="300" y="102" textAnchor="middle" className="fill-gold text-[11px] font-semibold uppercase tracking-[.22em]">Albaicín</text>
        </motion.svg>

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
