'use client';

import { motion } from 'framer-motion';

// Hand-drawn style city map of Granada (schematic, not to scale): street
// blocks, rivers, the Alhambra hill and the spots the e-bike route passes
// through, plus the two routes that leave the city. Everything is plain SVG
// generated from a fixed seed, so server and client render the same map.

const W = 600;
const H = 660;

const OUTLINE = [[70, 178], [150, 120], [250, 98], [360, 100], [470, 118], [548, 154], [574, 222], [562, 300], [528, 354], [480, 412], [430, 468], [350, 516], [250, 540], [150, 526], [82, 472], [52, 382], [48, 272]];
const ALBAICIN = [[226, 104], [472, 112], [484, 214], [432, 246], [360, 286], [300, 244], [226, 206]];
const DARRO = [[584, 182], [540, 192], [500, 206], [466, 228], [430, 247], [396, 263], [362, 285], [330, 302]];
const GENIL = [[590, 498], [500, 514], [420, 522], [340, 532], [260, 540], [180, 532], [100, 512], [20, 480]];
const AVENUES = [
  [[322, 310], [292, 250], [262, 186]], // Gran Vía
  [[328, 306], [292, 350], [258, 382]], // Reyes Católicos
  [[258, 382], [228, 430], [200, 474]], // Recogidas
  [[118, 196], [126, 330], [150, 472]], // Camino de Ronda
];
const ALHAMBRA_HILL = { cx: 452, cy: 322, rx: 74, ry: 34, rot: -14 };
const GENERALIFE = { cx: 546, cy: 292, rx: 30, ry: 22 };

export const SPOTS = {
  plazaLarga: [330, 152],
  sacromonte: [502, 168],
  tristes: [446, 238],
  plazaNueva: [326, 300],
  realejo: [394, 392],
  sanNicolas: [372, 214],
};

const EBIKE_POINTS = [SPOTS.plazaLarga, SPOTS.sacromonte, SPOTS.tristes, SPOTS.plazaNueva, SPOTS.realejo, [418, 352], SPOTS.sanNicolas];
const FERRATA_PATH = 'M330 152 C 430 240, 520 400, 560 584';
const BARRANQUISMO_PATH = 'M330 152 C 240 280, 150 420, 112 584';

function rng(seed) {
  return () => {
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function inside([x, y], poly) {
  let hit = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const [xi, yi] = poly[i];
    const [xj, yj] = poly[j];
    if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) hit = !hit;
  }
  return hit;
}

function distToLine([px, py], line) {
  let best = Infinity;
  for (let i = 0; i < line.length - 1; i++) {
    const [ax, ay] = line[i];
    const [bx, by] = line[i + 1];
    const dx = bx - ax;
    const dy = by - ay;
    const t = Math.max(0, Math.min(1, ((px - ax) * dx + (py - ay) * dy) / (dx * dx + dy * dy)));
    best = Math.min(best, Math.hypot(px - (ax + t * dx), py - (ay + t * dy)));
  }
  return best;
}

function inEllipse([x, y], { cx, cy, rx, ry, rot = 0 }, pad = 0) {
  const a = (-rot * Math.PI) / 180;
  const dx = x - cx;
  const dy = y - cy;
  const u = dx * Math.cos(a) - dy * Math.sin(a);
  const v = dx * Math.sin(a) + dy * Math.cos(a);
  return (u * u) / ((rx + pad) ** 2) + (v * v) / ((ry + pad) ** 2) <= 1;
}

// Catmull-Rom through the points, as cubic Béziers.
function smoothPath(points, closed) {
  const p = closed ? [points[points.length - 1], ...points, points[0], points[1]] : [points[0], ...points, points[points.length - 1]];
  let d = `M${p[1][0]} ${p[1][1]}`;
  for (let i = 1; i < p.length - 2; i++) {
    const [x0, y0] = p[i - 1];
    const [x1, y1] = p[i];
    const [x2, y2] = p[i + 1];
    const [x3, y3] = p[i + 2];
    d += ` C${(x1 + (x2 - x0) / 6).toFixed(1)} ${(y1 + (y2 - y0) / 6).toFixed(1)}, ${(x2 - (x3 - x1) / 6).toFixed(1)} ${(y2 - (y3 - y1) / 6).toFixed(1)}, ${x2} ${y2}`;
  }
  return d;
}

const EBIKE_PATH = smoothPath(EBIKE_POINTS, true);
const toPolyline = (line) => line.map(([x, y]) => `${x},${y}`).join(' ');

const BLOCK_COLORS = ['#2E3A6B', '#44558C', '#44558C', '#6F82B5', '#6F82B5', '#9FB0D4', '#C9D2E6'];
const ACCENT_COLORS = ['#D9A441', '#C9A55A'];

const BLOCKS = (() => {
  const rand = rng(1492);
  const keepClear = [...Object.values(SPOTS), [268, 318], [452, 318]];
  const blocks = [];
  for (let gy = 96; gy <= 560; gy += 21) {
    for (let gx = 40; gx <= 590; gx += 21) {
      const c = [gx + (rand() - 0.5) * 2, gy + (rand() - 0.5) * 2];
      const r = rand();
      if (!inside(c, OUTLINE)) continue;
      if (distToLine(c, DARRO) < 12 || distToLine(c, GENIL) < 14) continue;
      if (AVENUES.some((a) => distToLine(c, a) < 7.5)) continue;
      if (inEllipse(c, ALHAMBRA_HILL, 8) || inEllipse(c, GENERALIFE, 8)) continue;
      if (keepClear.some(([x, y]) => Math.hypot(c[0] - x, c[1] - y) < 17)) continue;

      const albaicin = inside(c, ALBAICIN);
      const sacromonte = c[0] > 470 && c[1] < 222;
      if (sacromonte && r < 0.55) continue;
      if (r > 0.95) continue; // little squares and plazas

      const size = sacromonte ? 5 : albaicin ? 7.6 : 8.6;
      const angleDeg = albaicin ? -14 + Math.sin(c[0] / 45) * 14 + Math.cos(c[1] / 38) * 10 : 18;
      const angle = (angleDeg * Math.PI) / 180;
      const corners = [[-1, -1], [1, -1], [1, 1], [-1, 1]].map(([sx, sy]) => {
        const x = sx * size + (rand() - 0.5) * (albaicin ? 3 : 1.6);
        const y = sy * size + (rand() - 0.5) * (albaicin ? 3 : 1.6);
        return [
          (c[0] + x * Math.cos(angle) - y * Math.sin(angle)).toFixed(1),
          (c[1] + x * Math.sin(angle) + y * Math.cos(angle)).toFixed(1),
        ].join(',');
      });
      const fill = rand() < 0.035 ? ACCENT_COLORS[Math.floor(rand() * ACCENT_COLORS.length)] : BLOCK_COLORS[Math.floor(rand() * BLOCK_COLORS.length)];
      blocks.push({ points: corners.join(' '), fill });
    }
  }
  return blocks;
})();

const TREES = (() => {
  const rand = rng(1238);
  const trees = [];
  const areas = [{ ...ALHAMBRA_HILL, rx: ALHAMBRA_HILL.rx + 10, ry: ALHAMBRA_HILL.ry + 12 }, { ...GENERALIFE, rot: 0 }, { cx: 112, cy: 430, rx: 22, ry: 16, rot: 0 }];
  for (const area of areas) {
    for (let i = 0; i < 70; i++) {
      const p = [area.cx + (rand() - 0.5) * area.rx * 2, area.cy + (rand() - 0.5) * area.ry * 2];
      if (inEllipse(p, area) && !inEllipse(p, { ...ALHAMBRA_HILL, rx: 46, ry: 16 })) trees.push(p);
    }
  }
  return trees;
})();

const OCHRE = '#C98B3A';
const INK = '#1E1A14';

function Alhambra() {
  return (
    <g transform="translate(452 326)">
      <path d="M-54 0 h108 v-12 h-8 v-10 h-10 v10 h-14 v-18 h-12 v18 h-16 v-8 h-10 v8 h-14 v-14 h-12 v14 h-12z" fill={OCHRE} stroke={INK} strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M-40 -2 v-5 M-24 -2 v-5 M0 -2 v-5 M24 -2 v-5 M40 -2 v-5" stroke={INK} strokeWidth="1" />
    </g>
  );
}

function Cathedral() {
  return (
    <g transform="translate(268 324)">
      <path d="M-14 0 v-12 a10 10 0 0 1 20 0 v12z M6 0 v-26 l4 -5 l4 5 v26z" fill={OCHRE} stroke={INK} strokeWidth="1.1" strokeLinejoin="round" />
    </g>
  );
}

function Church({ x, y }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <path d="M-9 0 v-9 l7 -6 l7 6 v9z M5 0 v-17 h5 v17z" fill="#F5F0E8" stroke={INK} strokeWidth="1.1" strokeLinejoin="round" />
    </g>
  );
}

function Caves({ x, y }) {
  return (
    <g transform={`translate(${x} ${y})`} fill="#F5F0E8" stroke={INK} strokeWidth="1">
      <path d="M-26 6 q 26 -22 52 0z" fill={OCHRE} />
      <path d="M-14 4 v-4 a3 3 0 0 1 6 0 v4z M-2 3 v-6 a3 3 0 0 1 6 0 v6z M10 4 v-3 a3 3 0 0 1 6 0 v3z" />
    </g>
  );
}

function Label({ x, y, children, size = 11, weight = 600, className = '', anchor = 'middle', rotate = 0, italic = false, color = INK }) {
  return (
    <text
      x={x}
      y={y}
      textAnchor={anchor}
      transform={rotate ? `rotate(${rotate} ${x} ${y})` : undefined}
      fill={color}
      className={`font-serif ${italic ? 'italic' : 'tracking-[.12em]'} ${className}`}
      style={{ fontSize: size, fontWeight: weight }}
      paintOrder="stroke"
      stroke="#F5F0E8"
      strokeWidth="3.5"
      strokeLinejoin="round"
    >
      {italic ? children : String(children).toUpperCase()}
    </text>
  );
}

const DRAW = {
  hidden: { pathLength: 0, opacity: 0 },
  show: (i) => ({ pathLength: 1, opacity: 1, transition: { duration: 1.6, delay: 0.4 + i * 0.4, ease: 'easeInOut' } }),
};

export default function GranadaMapArt({ c, active, stops }) {
  const routes = {
    ebike: { d: EBIKE_PATH, dash: undefined, dots: 3, dur: 14 },
    ferrata: { d: FERRATA_PATH, dash: '2 7', dots: 1, dur: 6 },
    barranquismo: { d: BARRANQUISMO_PATH, dash: '2 7', dots: 1, dur: 7 },
  };
  const exitLabel = { ferrata: { x: 560, y: 600, anchor: 'end' }, barranquismo: { x: 112, y: 600, anchor: 'start' } };

  return (
    <motion.svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={c.mapLabel} className="block h-auto w-full" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
      <rect width={W} height={H} fill="#F5F0E8" />

      {/* Title */}
      <text x={W / 2} y="52" textAnchor="middle" fill={INK} className="font-serif" style={{ fontSize: 40, fontWeight: 700, letterSpacing: '.08em' }}>GRANADA</text>
      <text x={W / 2} y="76" textAnchor="middle" fill="#A8843A" className="font-serif italic" style={{ fontSize: 16 }}>{c.mapSubtitle}</text>

      {/* Rivers */}
      <polyline points={toPolyline(DARRO)} fill="none" stroke="#8FB3D1" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
      <polyline points={toPolyline(GENIL)} fill="none" stroke="#8FB3D1" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />

      {/* Green areas */}
      <ellipse {...{ cx: ALHAMBRA_HILL.cx, cy: ALHAMBRA_HILL.cy, rx: ALHAMBRA_HILL.rx + 6, ry: ALHAMBRA_HILL.ry + 8 }} transform={`rotate(${ALHAMBRA_HILL.rot} ${ALHAMBRA_HILL.cx} ${ALHAMBRA_HILL.cy})`} fill="#5E7355" opacity=".18" />
      <ellipse cx={GENERALIFE.cx} cy={GENERALIFE.cy} rx={GENERALIFE.rx + 4} ry={GENERALIFE.ry + 4} fill="#5E7355" opacity=".18" />
      <g fill="#5E7355">
        {TREES.map(([x, y]) => <ellipse key={`${x.toFixed(1)}-${y.toFixed(1)}`} cx={x.toFixed(1)} cy={y.toFixed(1)} rx="1.8" ry="3.2" opacity=".75" />)}
      </g>

      {/* Blocks */}
      <g>
        {BLOCKS.map((b) => <polygon key={b.points} points={b.points} fill={b.fill} />)}
      </g>

      {/* Landmarks */}
      <Alhambra />
      <Cathedral />
      <Church x={SPOTS.sanNicolas[0] - 16} y={SPOTS.sanNicolas[1] + 4} />
      <Caves x={SPOTS.sacromonte[0]} y={SPOTS.sacromonte[1] - 16} />
      <path d={`M${GENERALIFE.cx - 10} ${GENERALIFE.cy + 4} h20 v-9 h-20z`} fill="#F5F0E8" stroke={INK} strokeWidth="1" />

      {/* Routes */}
      {stops.map((stop, i) => {
        const r = routes[stop.key];
        const dim = active && active !== stop.key;
        return (
          <g key={stop.key} style={{ opacity: dim ? 0.25 : 1, transition: 'opacity .3s' }}>
            <path d={r.d} fill="none" stroke="#F5F0E8" strokeWidth={active === stop.key ? 9 : 7} strokeLinecap="round" strokeDasharray={r.dash} />
            <motion.path
              id={`gm-route-${stop.key}`}
              d={r.d}
              fill="none"
              stroke={stop.key === 'ebike' ? '#C9A55A' : INK}
              strokeWidth={active === stop.key ? 4.5 : 3}
              strokeLinecap="round"
              strokeDasharray={r.dash}
              variants={r.dash ? { hidden: { opacity: 0 }, show: { opacity: 1, transition: { delay: 0.8 + i * 0.4, duration: 0.6 } } } : DRAW}
              custom={i}
            />
            {Array.from({ length: r.dots }, (_, k) => (
              <circle key={k} r={stop.key === 'ebike' ? 5 : 4.5} fill={stop.key === 'ebike' ? '#C9A55A' : INK} stroke="#F5F0E8" strokeWidth="1.5" className="motion-reduce:hidden">
                <animateMotion dur={`${r.dur}s`} begin={`${2 + (k * r.dur) / r.dots}s`} repeatCount="indefinite" rotate="auto" fill="freeze">
                  <mpath href={`#gm-route-${stop.key}`} />
                </animateMotion>
              </circle>
            ))}
          </g>
        );
      })}

      {/* E-bike stops */}
      {[SPOTS.sacromonte, SPOTS.tristes, SPOTS.plazaNueva, SPOTS.realejo, SPOTS.sanNicolas].map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="4.5" fill="#F5F0E8" stroke="#A8843A" strokeWidth="2.2" />
      ))}

      {/* Labels (above the routes so lines never hide letters) */}
      <Label x={316} y={226} size={20} weight={700} className="max-sm:hidden" >Albaicín</Label>
      <Label x={452} y={358} size={17} weight={700}>Alhambra</Label>
      <Label x={546} y={326} size={10.5} className="max-sm:hidden">Generalife</Label>
      <Label x={502} y={196} size={11.5}>Sacromonte</Label>
      <Label x={268} y={344} size={10.5}>Catedral</Label>
      <Label x={394} y={414} size={11.5}>Realejo</Label>
      <Label x={372} y={244} size={10} className="max-sm:hidden">San Nicolás</Label>
      <Label x={420} y={226} size={10} className="max-sm:hidden" italic weight={500}>Paseo de los Tristes</Label>
      <Label x={322} y={326} size={10} className="max-sm:hidden" italic weight={500}>Plaza Nueva</Label>
      <Label x={268} y={250} size={10} className="max-sm:hidden" italic weight={500} rotate={64}>Gran Vía</Label>
      <Label x={540} y={214} size={10} className="max-sm:hidden" italic weight={500} color="#4E7FA6" rotate={-16}>Río Darro</Label>
      <Label x={300} y={558} size={11} italic weight={500} color="#4E7FA6">Río Genil</Label>

      {/* Exits to Monachil and Río Verde */}
      {stops.filter((stop) => exitLabel[stop.key]).map((stop) => {
        const l = exitLabel[stop.key];
        return (
          <g key={stop.key}>
            <circle cx={stop.key === 'ferrata' ? 560 : 112} cy="584" r="13" fill={INK} />
            <text x={stop.key === 'ferrata' ? 560 : 112} y="589" textAnchor="middle" fill="#C9A55A" className="font-serif" style={{ fontSize: 14, fontWeight: 700 }}>{stop.n}</text>
            <text x={l.x + (l.anchor === 'end' ? -22 : 22)} y="580" textAnchor={l.anchor} fill={INK} className="font-serif" style={{ fontSize: 15, fontWeight: 700 }}>{stop.mapName}</text>
            <text x={l.x + (l.anchor === 'end' ? -22 : 22)} y="598" textAnchor={l.anchor} fill="#A8843A" className="font-serif" style={{ fontSize: 13, fontWeight: 600 }}>{stop.time}</text>
          </g>
        );
      })}

      {/* Plaza Larga: the start */}
      <circle cx={SPOTS.plazaLarga[0]} cy={SPOTS.plazaLarga[1]} r="20" fill="#C9A55A" opacity=".35" className="motion-safe:[animation:goldPing_2.2s_ease-out_infinite] [transform-box:fill-box] [transform-origin:center]" />
      <circle cx={SPOTS.plazaLarga[0]} cy={SPOTS.plazaLarga[1]} r="19" fill={INK} stroke="#C9A55A" strokeWidth="2.5" />
      <image href="/images/true-goat.png" x={SPOTS.plazaLarga[0] - 15} y={SPOTS.plazaLarga[1] - 16} width="30" height="30" />
      <Label x={SPOTS.plazaLarga[0]} y={SPOTS.plazaLarga[1] - 26} size={14} weight={700} color="#A8843A">Plaza Larga</Label>

      {/* Frame */}
      <rect x="8" y="8" width={W - 16} height={H - 16} fill="none" stroke={INK} strokeWidth="1.2" />
      <rect x="14" y="14" width={W - 28} height={H - 28} fill="none" stroke={INK} strokeWidth=".6" />
      <text x={W - 26} y={H - 24} textAnchor="end" fill="#8A7E6E" className="font-serif italic" style={{ fontSize: 10 }}>{c.notToScale}</text>
    </motion.svg>
  );
}
