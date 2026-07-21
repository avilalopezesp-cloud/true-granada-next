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
    cover: '/images/canyoning-jump.jpg',
    gallery: ['/images/canyoning-cover.jpg', '/images/canyoning-1.jpg', '/images/canyoning-2.jpg'],
    url: 'https://betrue.es/trip/canyoning_adventure_in_rio_verde/',
    detailPage: '/experiencias/barranquismo',
    wa: 'Hola TRUE 👋 Quiero reservar el Barranquismo en Río Verde. ¿Tenéis disponibilidad pronto?',
    // Full "recorrido" detail page (src/app/experiencias/barranquismo). Each stop pairs
    // a short narrative beat with a photo or looping clip from the actual Río Verde route.
    journey: {
      stops: [
        {
          n: 1,
          title: 'Llegada y briefing',
          text: 'Nos desplazamos juntos hasta el cañón de Río Verde, a los pies de Sierra Nevada. Antes de entrar en el agua, tu guía certificado revisa el equipo contigo y os cuenta cómo va a ser el descenso — sin prisas, sin tecnicismos.',
          media: { type: 'image', src: '/images/canyoning-guides.jpg' },
        },
        {
          n: 2,
          title: 'Aproximación al cañón',
          text: 'Empezamos a caminar entre rocas y vegetación mediterránea hasta el primer tramo de agua. El cañón se va cerrando poco a poco y el calor de Granada desaparece — aquí ya se respira otra cosa.',
          media: { type: 'image', src: '/images/canyoning-approach.jpg' },
        },
        {
          n: 3,
          title: 'Rápeles y descensos',
          text: 'Llegan los primeros rápeles junto a las cascadas. Con cuerda y guía en todo momento, bajas a tu ritmo — sea la primera vez que lo haces o no.',
          media: { type: 'video', src: '/canyoning-video-descent.mp4', poster: '/images/canyoning-waterfall.jpg' },
        },
        {
          n: 4,
          title: 'Saltos y toboganes naturales',
          text: 'La parte que todos recuerdan: saltos opcionales de distintas alturas a pozas de agua turquesa. Nadie te obliga a nada — pero cuando saltas, se nota.',
          media: { type: 'video', src: '/canyoning-video-jump.mp4', poster: '/images/canyoning-jump.jpg' },
        },
        {
          n: 5,
          title: 'Celebración y vuelta',
          text: 'Terminamos el recorrido con la ropa empapada y la sonrisa puesta. Volvemos juntos, comentando el salto que casi no dabas, con ganas de repetir.',
          media: { type: 'image', src: '/images/canyoning-celebration.jpg' },
        },
      ],
    },
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
    why: 'Queréis Granada sin prisa ni cuestas — la e-bike hace el esfuerzo por vosotros mientras descubrís miradores que la mayoría se pierde.',
    cover: '/images/ebike-cover.jpg',
    url: 'https://betrue.es/trip/albayzin/',
    wa: 'Hola TRUE 👋 El planificador me recomendó el Sunset E-Bike Tour. ¿Tenéis disponibilidad pronto?',
    // Data for the "choose your adventure" e-bike configurator (see EbikeAdventureBuilder
    // in Experiences.jsx). Each step appends a chapter to the journey timeline; the result
    // screen strings them together into one narrative route instead of a flat checklist.
    builder: {
      origin: '📍 Granada',
      intro: {
        eyebrow: 'Create Your E-Bike Adventure',
        title: 'No sigas una ruta. Créala.',
        subtitle: 'Diseña tu día perfecto en Granada, capítulo a capítulo.',
        cta: 'Empezar a diseñar →',
      },
      durations: [
        { key: 'corto', icon: '🕑', label: '2 horas', sub: 'Algo rápido', km: 8, price: 35 },
        { key: 'medio', icon: '🌄', label: 'Medio día', sub: '~4 horas', km: 18, price: 45 },
        { key: 'completo', icon: '☀️', label: 'Día completo', sub: 'Sin prisa', km: 28, price: 65 },
        { key: 'costa', icon: '🌊', label: 'Costa', sub: 'Premium · día completo', km: 45, price: 89, premium: true },
      ],
      emotions: [
        { key: 'adrenalina', icon: '🔥', label: 'Adrenalina', stop: 'Cuesta del Chapiz y Sacromonte', tint: 'from-[#7a2e1d] to-[#c9642f]' },
        { key: 'calma', icon: '🌿', label: 'Calma', stop: 'El Carril de la Lona', tint: 'from-[#31402b] to-[#5e7355]' },
        { key: 'romance', icon: '❤️', label: 'Romance', stop: 'Mirador de San Nicolás', tint: 'from-[#5e2233] to-[#a8556f]' },
        { key: 'descubrimiento', icon: '🧭', label: 'Descubrimiento', stop: 'Callejones secretos del Albaicín', tint: 'from-[#1f3a4a] to-[#3f7f96]' },
        { key: 'inspiracion', icon: '🎨', label: 'Inspiración', stop: 'Grafitis y arte urbano del Albaicín', tint: 'from-[#3a2a55] to-[#7a5ba6]' },
      ],
      endings: [
        { key: 'tapas', icon: '🍷', label: 'Tapas', stop: 'Tapas tradicionales en el Albaicín' },
        { key: 'atardecer', icon: '🌅', label: 'Atardecer', stop: 'Atardecer en el mirador' },
        { key: 'flamenco', icon: '🎭', label: 'Flamenco', stop: 'Flamenco en Sacromonte' },
        { key: 'picnic', icon: '🧺', label: 'Picnic', stop: 'Picnic con vistas a la Alhambra' },
        { key: 'cafe', icon: '☕', label: 'Café con vistas', stop: 'Café con vistas a la Alhambra' },
        { key: 'camino', icon: '🚲', label: 'Solo el camino', stop: null },
      ],
    },
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
