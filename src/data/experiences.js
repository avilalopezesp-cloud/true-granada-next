// Single source of truth for the three bookable experiences.
// Used by both the Experiences grid/modal and the Adventure Planner quiz,
// so a price/description update only has to happen in one place.

export const EXPERIENCES = {
  barranquismo: {
    key: 'barranquismo',
    name: 'Barranquismo en Río Verde',
    tagline: 'Saltos, toboganes naturales y rápeles en aguas turquesa',
    cat: 'Aventura · Naturaleza',
    badge: 'Adventure',
    price: '55',
    dur: '4–5 horas',
    group: 'Máx. 8 personas',
    level: 'Principiantes bienvenidos',
    desc: 'Saltos, toboganes naturales y rápeles en aguas turquesa a los pies de Sierra Nevada, a solo 45 minutos de Granada. Guía certificado y equipo incluido — apto para principiantes.',
    why: 'Buscáis adrenalina real y desconectar del calor — el cañón de Río Verde tiene agua fresca, saltos opcionales y paisaje que no se ve desde ningún mirador.',
    cover: '/images/canyoning-cover.jpg',
    gallery: ['/images/canyoning-cover.jpg', '/images/canyoning-1.jpg', '/images/canyoning-2.jpg'],
    url: 'https://betrue.es/trip/canyoning_adventure_in_rio_verde/',
    wa: 'Hola TRUE 👋 Quiero reservar el Barranquismo en Río Verde. ¿Tenéis disponibilidad pronto?',
  },
  ferrata: {
    key: 'ferrata',
    name: 'Vía Ferrata Granada',
    tagline: 'Puentes colgantes y vistas de Sierra Nevada desde las alturas',
    cat: 'Aventura · Montaña',
    badge: 'No experience needed',
    price: '55',
    dur: '3–4 horas',
    group: 'Máx. 8 personas',
    level: 'Iniciación',
    desc: 'Puentes colgantes, pasos verticales y vistas de Sierra Nevada desde las alturas. No hace falta experiencia previa — equipo de seguridad y guía incluidos.',
    why: 'Os atrae la altura sin necesitar experiencia — la ferrata os da esa sensación de exposición controlada con todo el equipo y guía incluidos.',
    cover: '/images/ferrata-cover.jpg',
    gallery: [
      '/images/ferrata-cover.jpg', '/images/ferrata-2.jpg', '/images/ferrata-3.jpg',
      '/images/ferrata-4.jpg', '/images/ferrata-5.jpg', '/images/ferrata-6.jpg',
      '/images/ferrata-7.jpg', '/images/ferrata-8.jpg', '/images/ferrata-9.jpg',
    ],
    url: 'https://betrue.es/trip/via-ferrata-adventure/',
    wa: 'Hola TRUE 👋 Quiero reservar la Vía Ferrata. ¿Tenéis disponibilidad pronto?',
  },
  ebike: {
    key: 'ebike',
    name: 'Diseña tu ruta en e-bike',
    tagline: 'El Albaicín al atardecer, sin esfuerzo, con vistas a la Alhambra',
    cat: 'Cultural · Urbano',
    badge: 'Personalizable',
    price: '35',
    dur: '2,5 horas',
    group: 'Máx. 6 personas',
    level: 'Fácil — apto para todos',
    desc: 'Tú eliges: Alhambra, Sacromonte, Albaicín, grafitis, playa por el Genil, tapas o flamenco.',
    sub: 'Elige las paradas que más te apetezcan y te armamos una ruta a medida en e-bike por Granada.',
    why: 'Queréis Granada sin prisa ni cuestas — la e-bike hace el esfuerzo por vosotros mientras descubrís miradores que la mayoría se pierde.',
    cover: '/images/ebike-cover.jpg',
    url: 'https://betrue.es/trip/albayzin/',
    wa: 'Hola TRUE 👋 El planificador me recomendó el Sunset E-Bike Tour. ¿Tenéis disponibilidad pronto?',
    routeOptions: [
      'Tour guiado', 'Alhambra', 'Sacromonte', 'Albaicín Sunset tour', 'Grafitis',
      'Río Genil y playa en bici', 'Llano de la Perdiz', 'Tapas', 'Flamenco workshop', 'Workshop de arte',
    ],
  },
};

export const EXPERIENCE_LIST = Object.values(EXPERIENCES);

// ─── Adventure Planner quiz ──────────────────────────────────
// Each option carries a direct weight per experience; the planner just sums
// them up across answers and recommends whichever experience scores highest.
export const QUIZ_QUESTIONS = [
  {
    q: '¿Con quién viajas?',
    opts: [
      { i: '💑', l: 'En pareja', s: 'Solo los dos', w: { ebike: 3, barranquismo: 1, ferrata: 1 } },
      { i: '👨‍👩‍👧', l: 'En familia', s: 'Con niños o mayores', w: { ebike: 3, barranquismo: 0, ferrata: 0 } },
      { i: '🎉', l: 'Con amigos', s: 'Grupo de 3 o más', w: { barranquismo: 3, ferrata: 2, ebike: 1 } },
      { i: '🧍', l: 'Solo/a', s: 'Aventura en solitario', w: { ferrata: 2, barranquismo: 2, ebike: 1 } },
    ],
  },
  {
    q: '¿Qué queréis sentir?',
    opts: [
      { i: '🔥', l: 'Adrenalina', s: 'El corazón a tope', w: { barranquismo: 3, ferrata: 3, ebike: 0 } },
      { i: '🌿', l: 'Calma y naturaleza', s: 'Desconectar sin prisa', w: { ebike: 2, barranquismo: 1, ferrata: 0 } },
      { i: '🏛️', l: 'Cultura y vistas', s: 'Conocer la ciudad de verdad', w: { ebike: 3, barranquismo: 0, ferrata: 0 } },
      { i: '💪', l: 'Reto físico', s: 'Algo que cueste', w: { ferrata: 3, barranquismo: 2, ebike: 0 } },
    ],
  },
  {
    q: '¿Tenéis coche propio?',
    single: true,
    opts: [
      { i: '🚗', l: 'Sí, tenemos coche', s: 'Podemos desplazarnos', w: { barranquismo: 2, ferrata: 2, ebike: 1 } },
      { i: '🚶', l: 'No, sin coche', s: 'Mejor cerca del centro', w: { ebike: 3, barranquismo: 0, ferrata: 0 } },
    ],
  },
  {
    q: '¿Cuánto tiempo tenéis?',
    opts: [
      { i: '⏱️', l: '2 horas', s: 'Algo corto', w: { ebike: 2, barranquismo: 0, ferrata: 0 } },
      { i: '🌤️', l: 'Medio día', s: '3–5 horas', w: { ebike: 1, barranquismo: 3, ferrata: 3 } },
      { i: '☀️', l: 'Día completo', s: 'Sin prisa', w: { barranquismo: 2, ferrata: 2, ebike: 1 } },
    ],
  },
  {
    q: '¿Cómo os describís físicamente?',
    opts: [
      { i: '🌱', l: 'Tranquilos', s: 'Algo suave', w: { ebike: 3, barranquismo: 0, ferrata: 0 } },
      { i: '⚡', l: 'Activos', s: 'Hacemos deporte', w: { ebike: 1, barranquismo: 3, ferrata: 2 } },
      { i: '🔋', l: 'Muy activos', s: 'En buena forma', w: { barranquismo: 2, ferrata: 3, ebike: 0 } },
    ],
  },
  {
    q: '¿Qué momento del día prefieres?',
    single: true,
    opts: [
      { i: '🌅', l: 'Mañana', s: 'Empezar pronto', w: { barranquismo: 2, ferrata: 2, ebike: 1 } },
      { i: '🌇', l: 'Atardecer', s: 'Las mejores luces', w: { ebike: 3, barranquismo: 0, ferrata: 0 } },
    ],
  },
];
