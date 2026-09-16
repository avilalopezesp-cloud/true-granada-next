// Single source of truth for the three bookable experiences.
// Used by both the Experiences grid/modal and the Adventure Planner quiz,
// so a price/description update only has to happen in one place.
//
// Text fields are stored as { es, en } pairs; use getExperiences(lang) /
// getExperienceList(lang) to get a plain-string object for a given language
// instead of importing EXPERIENCES directly.

export const EXPERIENCES = {
  barranquismo: {
    key: 'barranquismo',
    name: { es: 'Barranquismo en Río Verde', en: 'Canyoning in Río Verde' },
    tagline: { es: 'Saltos, toboganes naturales y rápeles en aguas turquesa', en: 'Jumps, natural slides and rappels in turquoise water' },
    cat: { es: 'Aventura · Naturaleza', en: 'Adventure · Nature' },
    badge: { es: 'Aventura', en: 'Adventure' },
    price: '55',
    dur: { es: '4–5 horas', en: '4–5 hours' },
    group: { es: 'Máx. 8 personas', en: 'Max. 8 people' },
    level: { es: 'Principiantes bienvenidos', en: 'Beginners welcome' },
    desc: {
      es: 'Saltos, toboganes naturales y rápeles en aguas turquesa a los pies de Sierra Nevada, a solo 45 minutos de Granada. Guía certificado y equipo incluido — apto para principiantes.',
      en: 'Jumps, natural slides and rappels in turquoise water at the foot of Sierra Nevada, just 45 minutes from Granada. Certified guide and gear included — beginner-friendly.',
    },
    why: {
      es: 'Buscas adrenalina real y desconectar del calor — el cañón de Río Verde tiene agua fresca, saltos opcionales y paisaje que no se ve desde ningún mirador.',
      en: "You want real adrenaline and a break from the heat — the Río Verde canyon has cool water, optional jumps and scenery you won't see from any viewpoint.",
    },
    profile: {
      name: { es: 'El Aventurero Intrépido', en: 'The Fearless Adventurer' },
      desc: { es: 'Eres un viajero que busca adrenalina real y momentos que se recuerdan para siempre.', en: 'You are a traveler who wants real adrenaline and moments you will remember forever.' },
    },
    includes: {
      es: [
        'Saltos y rápeles en aguas turquesas a los pies de Sierra Nevada',
        'Guía certificado y equipo técnico incluido',
        'Apto para principiantes, sin experiencia previa',
        'Seguro de actividad incluido',
        'Grupo reducido (máx. 8) y buen ambiente',
      ],
      en: [
        'Jumps and rappels in turquoise water at the foot of Sierra Nevada',
        'Certified guide and technical gear included',
        'Beginner-friendly, no prior experience needed',
        'Activity insurance included',
        'Small group (max. 8) and great atmosphere',
      ],
    },
    cover: '/images/canyoning-jump.jpg',
    url: 'https://betrue.es/trip/canyoning_adventure_in_rio_verde/',
    detailPage: '/experiencias/barranquismo',
    wa: {
      es: 'Hola TRUE 👋 Quiero reservar el Barranquismo en Río Verde. ¿Tenéis disponibilidad pronto?',
      en: 'Hi TRUE 👋 I want to book the Río Verde Canyoning. Do you have availability soon?',
    },
    // Full "recorrido" detail page (src/app/experiencias/barranquismo). Each stop pairs
    // a short narrative beat with a photo or looping clip from the actual Río Verde route.
    journey: {
      stops: [
        {
          n: 1,
          title: { es: 'Llegada y briefing', en: 'Arrival and briefing' },
          text: {
            es: 'Nos desplazamos juntos hasta el cañón de Río Verde, a los pies de Sierra Nevada. Antes de entrar en el agua, tu guía certificado revisa el equipo contigo y os cuenta cómo va a ser el descenso — sin prisas, sin tecnicismos.',
            en: 'We travel together to the Río Verde canyon, at the foot of Sierra Nevada. Before getting in the water, your certified guide checks the gear with you and explains how the descent will go — no rush, no jargon.',
          },
          media: { type: 'image', src: '/images/canyoning-guides.jpg' },
        },
        {
          n: 2,
          title: { es: 'Aproximación al cañón', en: 'Approach to the canyon' },
          text: {
            es: 'Empezamos a caminar entre rocas y vegetación mediterránea hasta el primer tramo de agua. El cañón se va cerrando poco a poco y el calor de Granada desaparece — aquí ya se respira otra cosa.',
            en: "We start walking through rocks and Mediterranean vegetation to the first stretch of water. The canyon narrows little by little and Granada's heat disappears — the air here feels completely different.",
          },
          media: { type: 'image', src: '/images/canyoning-approach.jpg' },
        },
        {
          n: 3,
          title: { es: 'Rápeles y descensos', en: 'Rappels and descents' },
          text: {
            es: 'Llegan los primeros rápeles junto a las cascadas. Con cuerda y guía en todo momento, bajas a tu ritmo — sea la primera vez que lo haces o no.',
            en: 'The first rappels come up next to the waterfalls. With rope and guide at all times, you go down at your own pace — whether it is your first time or not.',
          },
          media: { type: 'video', src: '/canyoning-video-descent.mp4', poster: '/images/canyoning-waterfall.jpg' },
        },
        {
          n: 4,
          title: { es: 'Saltos y toboganes naturales', en: 'Jumps and natural slides' },
          text: {
            es: 'La parte que todos recuerdan: saltos opcionales de distintas alturas a pozas de agua turquesa. Nadie te obliga a nada — pero cuando saltas, se nota.',
            en: "The part everyone remembers: optional jumps of different heights into turquoise pools. No one makes you do anything — but when you jump, you'll feel it.",
          },
          media: { type: 'video', src: '/canyoning-video-jump.mp4', poster: '/images/canyoning-jump.jpg' },
        },
        {
          n: 5,
          title: { es: 'Celebración y vuelta', en: 'Celebration and return' },
          text: {
            es: 'Terminamos el recorrido con la ropa empapada y la sonrisa puesta. Volvemos juntos, comentando el salto que casi no dabas, con ganas de repetir.',
            en: 'We finish the route soaked and smiling. We head back together, talking about the jump you almost didn\'t take, already wanting to do it again.',
          },
          media: { type: 'image', src: '/images/canyoning-celebration.jpg' },
        },
      ],
    },
  },
  ferrata: {
    key: 'ferrata',
    name: { es: 'Vía Ferrata Granada', en: 'Via Ferrata Granada' },
    tagline: { es: 'Puentes colgantes y vistas de Sierra Nevada desde las alturas', en: 'Hanging bridges and Sierra Nevada views from up high' },
    cat: { es: 'Aventura · Montaña', en: 'Adventure · Mountain' },
    badge: { es: 'Apto para principiantes', en: 'Beginner-friendly' },
    price: '55',
    dur: { es: '3–4 horas', en: '3–4 hours' },
    group: { es: 'Máx. 8 personas', en: 'Max. 8 people' },
    level: { es: 'Iniciación', en: 'Beginner level' },
    desc: {
      es: 'Puentes colgantes, pasos verticales y vistas de Sierra Nevada desde las alturas. No hace falta experiencia previa — equipo de seguridad y guía incluidos.',
      en: 'Hanging bridges, vertical sections and Sierra Nevada views from up high. No prior experience needed — safety gear and guide included.',
    },
    why: {
      es: 'Te atrae la altura sin necesitar experiencia. La vía ferrata te ofrece una sensación de aventura controlada con todo el equipo y guía incluidos.',
      en: 'You are drawn to heights without needing experience. The via ferrata gives you a controlled sense of adventure, with all equipment and a guide included.',
    },
    profile: {
      name: { es: 'El Explorador de las Alturas', en: 'The Heights Explorer' },
      desc: { es: 'Eres un viajero al que le atraen las vistas y los retos, aunque sea la primera vez que los vive.', en: 'You are a traveler drawn to views and challenges, even if it is your first time experiencing them.' },
    },
    includes: {
      es: [
        'Vistas únicas de Sierra Nevada desde las alturas',
        'Guía certificado y equipo de seguridad incluido',
        'Apto para principiantes, sin experiencia previa',
        'Seguro de actividad incluido',
        'Grupo reducido (máx. 8)',
      ],
      en: [
        'Unique Sierra Nevada views from up high',
        'Certified guide and safety gear included',
        'Beginner-friendly, no prior experience needed',
        'Activity insurance included',
        'Small group (max. 8)',
      ],
    },
    cover: '/images/ferrata-cover.jpg',
    url: 'https://betrue.es/trip/via-ferrata-adventure/',
    detailPage: '/experiencias/ferrata',
    wa: {
      es: 'Hola TRUE 👋 Quiero reservar la Vía Ferrata. ¿Tenéis disponibilidad pronto?',
      en: 'Hi TRUE 👋 I want to book the Via Ferrata. Do you have availability soon?',
    },
    journey: {
      stops: [
        {
          n: 1,
          title: { es: 'Llegada y equipamiento', en: 'Arrival and gearing up' },
          text: {
            es: 'Llegamos al pie de la pared y tu guía certificado os prepara con arnés, casco y kit de vía ferrata. Un repaso rápido de las maniobras básicas y unas risas nerviosas antes de empezar — nadie se queda con dudas.',
            en: "We arrive at the base of the wall and your certified guide fits you with a harness, helmet and via ferrata kit. A quick rundown of the basic moves and some nervous laughs before starting — no one is left with doubts.",
          },
          media: { type: 'image', src: '/images/ferrata-4.jpg' },
        },
        {
          n: 2,
          title: { es: 'Aproximación a la pared', en: 'Approach to the wall' },
          text: {
            es: 'Un breve paseo entre olivos hasta la base de la roca, con Sierra Nevada asomando al fondo. Es el momento de mirar hacia arriba y darte cuenta de por dónde vais a subir — la primera dosis de vértigo, sin haber puesto aún un pie en la pared.',
            en: 'A short walk through olive trees to the base of the rock, with Sierra Nevada peeking out in the background. This is when you look up and realize where you are about to climb — the first dose of vertigo, before even setting foot on the wall.',
          },
          media: { type: 'image', src: '/images/ferrata-6.jpg' },
        },
        {
          n: 3,
          title: { es: 'Primeros peldaños', en: 'First steps' },
          text: {
            es: 'Empiezan los primeros grapones y cables. El cuerpo aprende rápido a confiar en el arnés, y el ritmo lo marcas tú — sin prisas, con tu guía siempre cerca.',
            en: 'The first rungs and cables begin. Your body quickly learns to trust the harness, and you set the pace — no rush, with your guide always close by.',
          },
          media: { type: 'image', src: '/images/ferrata-7.jpg' },
        },
        {
          n: 4,
          title: { es: 'La zona de mayor exposición', en: 'The most exposed section' },
          text: {
            es: 'Aquí está lo que veniste a buscar: roca vertical, aire por todos lados y una vista de Sierra Nevada que solo se gana subiendo. El corazón va a mil, pero el equipo y la técnica hacen que nunca estés realmente en peligro.',
            en: "This is what you came for: vertical rock, air on every side, and a Sierra Nevada view you only earn by climbing. Your heart is racing, but the gear and technique mean you're never really at risk.",
          },
          media: { type: 'image', src: '/images/ferrata-3.jpg' },
        },
        {
          n: 5,
          title: { es: 'Los últimos metros', en: 'The final stretch' },
          text: {
            es: 'El tramo final se hace entre risas — ya sabéis que lo habéis conseguido. Llegáis arriba con las piernas temblando y la sensación de haber hecho algo que hace un par de horas ni os imaginabais.',
            en: "The final stretch goes by full of laughs — you already know you've made it. You reach the top with shaky legs and the feeling of having done something you couldn't have imagined a couple of hours earlier.",
          },
          media: { type: 'image', src: '/images/ferrata-9.jpg' },
        },
      ],
    },
  },
  ebike: {
    key: 'ebike',
    name: { es: 'Diseña tu ruta en e-bike', en: 'Design your e-bike route' },
    tagline: { es: 'El Albaicín al atardecer, sin esfuerzo, con vistas a la Alhambra', en: 'The Albaicín at sunset, effortlessly, with Alhambra views' },
    cat: { es: 'Cultural · Urbano', en: 'Cultural · Urban' },
    badge: { es: 'Personalizable', en: 'Customizable' },
    price: '35',
    dur: { es: '2,5 horas', en: '2.5 hours' },
    group: { es: 'Máx. 6 personas', en: 'Max. 6 people' },
    level: { es: 'Fácil — apto para todos', en: 'Easy — suitable for everyone' },
    desc: {
      es: 'Diseñamos tu ruta en e-bike según tu nivel, el tiempo que tengas y lo que te apetezca vivir: Alhambra, Sacromonte, Albaicín, grafitis, playa por el Genil, tapas o flamenco.',
      en: 'We design your e-bike route based on your level, how much time you have and what you feel like doing: Alhambra, Sacromonte, Albaicín, street art, the Genil riverside, tapas or flamenco.',
    },
    why: {
      es: 'Quieres Granada sin prisa ni cuestas — la e-bike hace el esfuerzo por ti mientras descubres miradores que la mayoría se pierde.',
      en: 'You want Granada without rushing or climbing — the e-bike does the effort for you while you discover viewpoints most people miss.',
    },
    profile: {
      name: { es: 'El Descubridor Tranquilo', en: 'The Relaxed Explorer' },
      desc: { es: 'Eres un viajero que busca descubrir lugares auténticos sin prisas.', en: 'You are a traveler who wants to discover authentic places without rushing.' },
    },
    includes: {
      es: [
        'El Albaicín y la Alhambra a tu ritmo, sin esfuerzo',
        'E-bike y casco incluidos',
        'Ruta diseñada según lo que más te apetezca',
        'Miradores y rincones que la mayoría se pierde',
        'Guía local y grupo reducido (máx. 6)',
      ],
      en: [
        'The Albaicín and the Alhambra at your own pace, effortlessly',
        'E-bike and helmet included',
        'Route designed around what you feel like doing',
        'Viewpoints and spots most people miss',
        'Local guide and small group (max. 6)',
      ],
    },
    cover: '/images/ebike-cover.jpg',
    url: 'https://betrue.es/trip/albayzin/',
    detailPage: '/experiencias/ebike',
    wa: {
      es: 'Hola TRUE 👋 El planificador me recomendó el Sunset E-Bike Tour. ¿Tenéis disponibilidad pronto?',
      en: 'Hi TRUE 👋 The planner recommended the Sunset E-Bike Tour to me. Do you have availability soon?',
    },
    journey: {
      stops: [
        {
          n: 1,
          title: { es: 'Recogida y primeras pedaladas', en: 'Pickup and first pedal strokes' },
          text: {
            es: 'Te entregamos la e-bike ya ajustada y salimos juntos, sin prisa, para que le cojas el punto al motor antes de meternos en las cuestas de verdad.',
            en: "We hand you the e-bike already adjusted and set off together, no rush, so you get a feel for the motor before we hit the real hills.",
          },
          media: { type: 'image', src: '/images/ebike-real-1.jpg' },
        },
        {
          n: 2,
          title: { es: 'El Albaicín, cuesta arriba sin esfuerzo', en: 'The Albaicín, uphill without effort' },
          text: {
            es: 'Subimos por las callejuelas empedradas que dejan sin aliento a cualquiera — menos a ti. La e-bike hace el esfuerzo mientras tú miras las fachadas blancas y los balcones con flores.',
            en: 'We climb the cobbled lanes that leave anyone else out of breath — except you. The e-bike does the work while you take in the white façades and flower-filled balconies.',
          },
          media: { type: 'image', src: '/images/ebike-real-2.jpg' },
        },
        {
          n: 3,
          title: { es: 'Una pausa, las que hagan falta', en: 'A break, as many as you need' },
          text: {
            es: 'Paramos donde apetezca: a la sombra de un pino, con la Alhambra asomando entre los árboles. No vamos contrarreloj — el ritmo lo marcas tú.',
            en: "We stop wherever you like: in the shade of a pine tree, with the Alhambra peeking through the trees. We're not racing the clock — you set the pace.",
          },
          media: { type: 'image', src: '/images/ebike-real-3.jpg' },
        },
        {
          n: 4,
          title: { es: 'El mirador con la Alhambra de frente', en: 'The viewpoint facing the Alhambra' },
          text: {
            es: 'Llegamos a uno de los miradores con mejores vistas de Granada: la Alhambra, la Vega y Sierra Nevada al fondo. Es la foto que buscabas — y el momento de quedarte un rato en silencio.',
            en: 'We reach one of the best viewpoints in Granada: the Alhambra, the Vega and Sierra Nevada in the background. This is the photo you came for — and the moment to just stay quiet for a while.',
          },
          media: { type: 'image', src: '/images/ebike-real-4.jpg' },
        },
        {
          n: 5,
          title: { es: 'Si os apetece, salimos de la ciudad', en: "If you're up for it, we head out of the city" },
          text: {
            es: 'Con más tiempo o ganas de naturaleza, la ruta también puede salir de Granada: caminos entre árboles, cruces de río y aire libre. Tú nos dices qué te apetece vivir y diseñamos el recorrido contigo.',
            en: 'With more time or a taste for nature, the route can also leave Granada: trails through the trees, river crossings and open air. You tell us what you feel like doing and we design the route with you.',
          },
          media: { type: 'video', src: '/ebike-video-route.mp4', poster: '/images/ebike-video-poster.jpg' },
        },
      ],
    },
  },
};

function t(pair, lang) {
  if (pair == null) return pair;
  if (typeof pair === 'string') return pair;
  return lang === 'en' ? (pair.en ?? pair.es) : pair.es;
}

function resolveExperience(exp, lang) {
  return {
    key: exp.key,
    name: t(exp.name, lang),
    tagline: t(exp.tagline, lang),
    cat: t(exp.cat, lang),
    badge: t(exp.badge, lang),
    price: exp.price,
    dur: t(exp.dur, lang),
    group: t(exp.group, lang),
    level: t(exp.level, lang),
    desc: t(exp.desc, lang),
    why: t(exp.why, lang),
    profile: { name: t(exp.profile.name, lang), desc: t(exp.profile.desc, lang) },
    includes: t(exp.includes, lang),
    cover: exp.cover,
    url: exp.url,
    detailPage: exp.detailPage,
    wa: t(exp.wa, lang),
    journey: {
      stops: exp.journey.stops.map((s) => ({
        n: s.n,
        title: t(s.title, lang),
        text: t(s.text, lang),
        media: s.media,
      })),
    },
  };
}

export function getExperiences(lang = 'es') {
  const out = {};
  for (const key of Object.keys(EXPERIENCES)) out[key] = resolveExperience(EXPERIENCES[key], lang);
  return out;
}

export function getExperienceList(lang = 'es') {
  return Object.values(getExperiences(lang));
}

// Backwards-compatible plain-Spanish exports for any code that hasn't been
// switched over to the lang-aware getters yet.
export const EXPERIENCES_ES = getExperiences('es');
export const EXPERIENCE_LIST = Object.values(EXPERIENCES_ES);

// ─── Adventure Planner quiz ──────────────────────────────────
// Each option carries a direct weight per experience; the planner just sums
// them up across answers and recommends whichever experience scores highest.
const QUIZ_QUESTIONS = [
  {
    q: { es: '¿Con quién viajas?', en: 'Who are you traveling with?' },
    short: { es: 'Compañía', en: 'Company' },
    sub: { es: 'Cuéntanos para quién estás planeando esta aventura.', en: "Tell us who you're planning this adventure for." },
    opts: [
      { l: { es: 'En pareja', en: 'As a couple' }, s: { es: 'Solo los dos', en: 'Just the two of you' }, img: '/images/quiz/quiz-en-pareja.webp', tip: { es: 'Las escapadas en pareja suelen pedir menos ritmo y más momentos para los dos.', en: 'Couple getaways usually call for a slower pace and more time together.' }, w: { ebike: 3, barranquismo: 1, ferrata: 1 } },
      { l: { es: 'En familia', en: 'As a family' }, s: { es: 'Con niños o mayores', en: 'With kids or elders' }, img: '/images/quiz/quiz-en-familia.webp', tip: { es: 'Las aventuras en familia suelen crear los mejores recuerdos.', en: 'Family adventures tend to create the best memories.' }, w: { ebike: 3, barranquismo: 0, ferrata: 0 } },
      { l: { es: 'Con amigos', en: 'With friends' }, s: { es: 'Grupo de 3 o más', en: 'Group of 3 or more' }, img: '/images/quiz/quiz-con-amigos.webp', tip: { es: 'Con amigos, cuanta más adrenalina, mejor anécdota para contar.', en: 'With friends, the more adrenaline, the better the story to tell.' }, w: { barranquismo: 3, ferrata: 2, ebike: 1 } },
      { l: { es: 'Solo/a', en: 'Solo' }, s: { es: 'Aventura en solitario', en: 'A solo adventure' }, img: '/images/quiz/quiz-solo.webp', tip: { es: 'Ir por libre es la forma más rápida de desconectar de verdad.', en: 'Going it alone is the fastest way to really disconnect.' }, w: { ferrata: 2, barranquismo: 2, ebike: 1 } },
    ],
  },
  {
    q: { es: '¿Qué quieres vivir?', en: 'What do you want to experience?' },
    short: { es: 'Emoción', en: 'Feeling' },
    opts: [
      { icon: 'flame', l: { es: 'Adrenalina', en: 'Adrenaline' }, s: { es: 'Supera tus límites y siente la emoción.', en: 'Push your limits and feel the rush.' }, w: { barranquismo: 3, ferrata: 3, ebike: 0 } },
      { icon: 'leaf', l: { es: 'Naturaleza y calma', en: 'Nature and calm' }, s: { es: 'Desconecta, respira y disfruta del entorno.', en: 'Disconnect, breathe and enjoy the surroundings.' }, w: { ebike: 2, barranquismo: 1, ferrata: 0 } },
      { icon: 'columns', l: { es: 'Cultura y descubrimiento', en: 'Culture and discovery' }, s: { es: 'Conoce Granada más allá de lo habitual.', en: 'Get to know Granada beyond the usual.' }, w: { ebike: 3, barranquismo: 0, ferrata: 0 } },
      { icon: 'target', l: { es: 'Reto personal', en: 'Personal challenge' }, s: { es: 'Una experiencia que recordarás siempre.', en: "An experience you'll always remember." }, w: { ferrata: 3, barranquismo: 2, ebike: 0 } },
    ],
  },
  {
    q: { es: '¿Cómo prefieres desplazarte?', en: 'How do you prefer to get around?' },
    short: { es: 'Movilidad', en: 'Mobility' },
    opts: [
      { icon: 'car', l: { es: 'Tengo coche', en: 'I have a car' }, s: { es: 'Puedo desplazarme con facilidad.', en: 'I can get around easily.' }, w: { barranquismo: 2, ferrata: 2, ebike: 1 } },
      { icon: 'footprints', l: { es: 'Prefiero quedarme cerca', en: "I'd rather stay close" }, s: { es: 'Busco experiencias accesibles desde Granada.', en: 'Looking for experiences accessible from Granada.' }, w: { ebike: 3, barranquismo: 0, ferrata: 0 } },
      { icon: 'bus', l: { es: 'Necesito transporte', en: 'I need transport' }, s: { es: 'Prefiero opciones con traslado incluido.', en: 'I prefer options with transfer included.' }, w: { barranquismo: 2, ferrata: 2, ebike: 0 } },
    ],
  },
  {
    q: { es: '¿Cuánto tiempo tenéis?', en: 'How much time do you have?' },
    short: { es: 'Tiempo', en: 'Time' },
    opts: [
      { icon: 'clock', l: { es: '2 horas', en: '2 hours' }, s: { es: 'Algo corto', en: 'Something short' }, w: { ebike: 2, barranquismo: 0, ferrata: 0 } },
      { icon: 'sunHalf', l: { es: 'Medio día', en: 'Half a day' }, s: { es: '3–5 horas', en: '3–5 hours' }, w: { ebike: 1, barranquismo: 3, ferrata: 3 } },
      { icon: 'sun', l: { es: 'Día completo', en: 'Full day' }, s: { es: 'Sin prisa', en: 'No rush' }, w: { barranquismo: 2, ferrata: 2, ebike: 1 } },
    ],
  },
  {
    q: { es: '¿Qué nivel de aventura buscas?', en: 'What level of adventure are you after?' },
    short: { es: 'Nivel físico', en: 'Fitness level' },
    opts: [
      { icon: 'leaf', l: { es: 'Tranquilo', en: 'Relaxed' }, s: { es: 'Disfrutar sin grandes esfuerzos.', en: 'Enjoy without much effort.' }, w: { ebike: 3, barranquismo: 0, ferrata: 0 } },
      { icon: 'bolt', l: { es: 'Activo', en: 'Active' }, s: { es: 'Caminar, explorar y moverte.', en: 'Walk, explore and move around.' }, w: { ebike: 1, barranquismo: 3, ferrata: 2 } },
      { icon: 'flame', l: { es: 'Intenso', en: 'Intense' }, s: { es: 'Busco un verdadero desafío.', en: "I'm looking for a real challenge." }, w: { barranquismo: 2, ferrata: 3, ebike: 0 } },
    ],
  },
  {
    q: { es: '¿Qué momento del día prefieres?', en: 'What time of day do you prefer?' },
    short: { es: 'Último paso', en: 'Last step' },
    opts: [
      { icon: 'sunrise', l: { es: 'Mañana', en: 'Morning' }, s: { es: 'Empezar pronto', en: 'Start early' }, w: { barranquismo: 2, ferrata: 2, ebike: 1 } },
      { icon: 'sunset', l: { es: 'Atardecer', en: 'Sunset' }, s: { es: 'Las mejores luces', en: 'The best light' }, w: { ebike: 3, barranquismo: 0, ferrata: 0 } },
    ],
  },
];

function resolveQuestion(question, lang) {
  return {
    q: t(question.q, lang),
    short: t(question.short, lang),
    sub: question.sub ? t(question.sub, lang) : undefined,
    opts: question.opts.map((o) => ({ ...o, l: t(o.l, lang), s: t(o.s, lang), tip: o.tip ? t(o.tip, lang) : undefined })),
  };
}

export function getQuizQuestions(lang = 'es') {
  return QUIZ_QUESTIONS.map((q) => resolveQuestion(q, lang));
}
