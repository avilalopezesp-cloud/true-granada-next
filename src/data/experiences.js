// Single source of truth for the three bookable experiences.
// Used by both the Experiences grid/modal and the Adventure Planner quiz,
// so a price/description update only has to happen in one place.

export const EXPERIENCES = {
  barranquismo: {
    key: 'barranquismo',
    name: 'Barranquismo en Río Verde',
    tagline: 'Saltos, toboganes naturales y rápeles en aguas turquesa',
    cat: 'Aventura · Naturaleza',
    badge: 'Aventura',
    price: '55',
    dur: '4–5 horas',
    group: 'Máx. 8 personas',
    level: 'Principiantes bienvenidos',
    desc: 'Saltos, toboganes naturales y rápeles en aguas turquesa a los pies de Sierra Nevada, a solo 45 minutos de Granada. Guía certificado y equipo incluido — apto para principiantes.',
    why: 'Buscas adrenalina real y desconectar del calor — el cañón de Río Verde tiene agua fresca, saltos opcionales y paisaje que no se ve desde ningún mirador.',
    profile: {
      name: 'El Aventurero Intrépido',
      desc: 'Eres un viajero que busca adrenalina real y momentos que se recuerdan para siempre.',
    },
    includes: [
      'Saltos y rápeles en aguas turquesas a los pies de Sierra Nevada',
      'Guía certificado y equipo técnico incluido',
      'Apto para principiantes, sin experiencia previa',
      'Seguro de actividad incluido',
      'Grupo reducido (máx. 8) y buen ambiente',
    ],
    cover: '/images/canyoning-jump.jpg',
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
    badge: 'Apto para principiantes',
    price: '55',
    dur: '3–4 horas',
    group: 'Máx. 8 personas',
    level: 'Iniciación',
    desc: 'Puentes colgantes, pasos verticales y vistas de Sierra Nevada desde las alturas. No hace falta experiencia previa — equipo de seguridad y guía incluidos.',
    why: 'Te atrae la altura sin necesitar experiencia. La vía ferrata te ofrece una sensación de aventura controlada con todo el equipo y guía incluidos.',
    profile: {
      name: 'El Explorador de las Alturas',
      desc: 'Eres un viajero al que le atraen las vistas y los retos, aunque sea la primera vez que los vive.',
    },
    includes: [
      'Vistas únicas de Sierra Nevada desde las alturas',
      'Guía certificado y equipo de seguridad incluido',
      'Apto para principiantes, sin experiencia previa',
      'Seguro de actividad incluido',
      'Grupo reducido (máx. 8)',
    ],
    cover: '/images/ferrata-cover.jpg',
    url: 'https://betrue.es/trip/via-ferrata-adventure/',
    detailPage: '/experiencias/ferrata',
    wa: 'Hola TRUE 👋 Quiero reservar la Vía Ferrata. ¿Tenéis disponibilidad pronto?',
    journey: {
      stops: [
        {
          n: 1,
          title: 'Llegada y equipamiento',
          text: 'Llegamos al pie de la pared y tu guía certificado os prepara con arnés, casco y kit de vía ferrata. Un repaso rápido de las maniobras básicas y unas risas nerviosas antes de empezar — nadie se queda con dudas.',
          media: { type: 'image', src: '/images/ferrata-4.jpg' },
        },
        {
          n: 2,
          title: 'Aproximación a la pared',
          text: 'Un breve paseo entre olivos hasta la base de la roca, con Sierra Nevada asomando al fondo. Es el momento de mirar hacia arriba y darte cuenta de por dónde vais a subir — la primera dosis de vértigo, sin haber puesto aún un pie en la pared.',
          media: { type: 'image', src: '/images/ferrata-6.jpg' },
        },
        {
          n: 3,
          title: 'Primeros peldaños',
          text: 'Empiezan los primeros grapones y cables. El cuerpo aprende rápido a confiar en el arnés, y el ritmo lo marcas tú — sin prisas, con tu guía siempre cerca.',
          media: { type: 'image', src: '/images/ferrata-7.jpg' },
        },
        {
          n: 4,
          title: 'La zona de mayor exposición',
          text: 'Aquí está lo que veniste a buscar: roca vertical, aire por todos lados y una vista de Sierra Nevada que solo se gana subiendo. El corazón va a mil, pero el equipo y la técnica hacen que nunca estés realmente en peligro.',
          media: { type: 'image', src: '/images/ferrata-3.jpg' },
        },
        {
          n: 5,
          title: 'Los últimos metros',
          text: 'El tramo final se hace entre risas — ya sabéis que lo habéis conseguido. Llegáis arriba con las piernas temblando y la sensación de haber hecho algo que hace un par de horas ni os imaginabais.',
          media: { type: 'image', src: '/images/ferrata-9.jpg' },
        },
      ],
    },
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
    desc: 'Diseñamos tu ruta en e-bike según tu nivel, el tiempo que tengas y lo que te apetezca vivir: Alhambra, Sacromonte, Albaicín, grafitis, playa por el Genil, tapas o flamenco.',
    why: 'Quieres Granada sin prisa ni cuestas — la e-bike hace el esfuerzo por ti mientras descubres miradores que la mayoría se pierde.',
    profile: {
      name: 'El Descubridor Tranquilo',
      desc: 'Eres un viajero que busca descubrir lugares auténticos sin prisas.',
    },
    includes: [
      'El Albaicín y la Alhambra a tu ritmo, sin esfuerzo',
      'E-bike y casco incluidos',
      'Ruta diseñada según lo que más te apetezca',
      'Miradores y rincones que la mayoría se pierde',
      'Guía local y grupo reducido (máx. 6)',
    ],
    cover: '/images/ebike-cover.jpg',
    url: 'https://betrue.es/trip/albayzin/',
    detailPage: '/experiencias/ebike',
    wa: 'Hola TRUE 👋 El planificador me recomendó el Sunset E-Bike Tour. ¿Tenéis disponibilidad pronto?',
    journey: {
      stops: [
        {
          n: 1,
          title: 'Recogida y primeras pedaladas',
          text: 'Te entregamos la e-bike ya ajustada y salimos juntos, sin prisa, para que le cojas el punto al motor antes de meternos en las cuestas de verdad.',
          media: { type: 'image', src: '/images/ebike-real-1.jpg' },
        },
        {
          n: 2,
          title: 'El Albaicín, cuesta arriba sin esfuerzo',
          text: 'Subimos por las callejuelas empedradas que dejan sin aliento a cualquiera — menos a ti. La e-bike hace el esfuerzo mientras tú miras las fachadas blancas y los balcones con flores.',
          media: { type: 'image', src: '/images/ebike-real-2.jpg' },
        },
        {
          n: 3,
          title: 'Una pausa, las que hagan falta',
          text: 'Paramos donde apetezca: a la sombra de un pino, con la Alhambra asomando entre los árboles. No vamos contrarreloj — el ritmo lo marcas tú.',
          media: { type: 'image', src: '/images/ebike-real-3.jpg' },
        },
        {
          n: 4,
          title: 'El mirador con la Alhambra de frente',
          text: 'Llegamos a uno de los miradores con mejores vistas de Granada: la Alhambra, la Vega y Sierra Nevada al fondo. Es la foto que buscabas — y el momento de quedarte un rato en silencio.',
          media: { type: 'image', src: '/images/ebike-real-4.jpg' },
        },
        {
          n: 5,
          title: 'Si os apetece, salimos de la ciudad',
          text: 'Con más tiempo o ganas de naturaleza, la ruta también puede salir de Granada: caminos entre árboles, cruces de río y aire libre. Tú nos dices qué te apetece vivir y diseñamos el recorrido contigo.',
          media: { type: 'video', src: '/ebike-video-route.mp4', poster: '/images/ebike-video-poster.jpg' },
        },
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
    short: 'Compañía',
    sub: 'Cuéntanos para quién estás planeando esta aventura.',
    opts: [
      { l: 'En pareja', s: 'Solo los dos', img: '/images/quiz/quiz-en-pareja.webp', tip: 'Las escapadas en pareja suelen pedir menos ritmo y más momentos para los dos.', w: { ebike: 3, barranquismo: 1, ferrata: 1 } },
      { l: 'En familia', s: 'Con niños o mayores', img: '/images/quiz/quiz-en-familia.webp', tip: 'Las aventuras en familia suelen crear los mejores recuerdos.', w: { ebike: 3, barranquismo: 0, ferrata: 0 } },
      { l: 'Con amigos', s: 'Grupo de 3 o más', img: '/images/quiz/quiz-con-amigos.webp', tip: 'Con amigos, cuanta más adrenalina, mejor anécdota para contar.', w: { barranquismo: 3, ferrata: 2, ebike: 1 } },
      { l: 'Solo/a', s: 'Aventura en solitario', img: '/images/quiz/quiz-solo.webp', tip: 'Ir por libre es la forma más rápida de desconectar de verdad.', w: { ferrata: 2, barranquismo: 2, ebike: 1 } },
    ],
  },
  {
    q: '¿Qué quieres vivir?',
    short: 'Emoción',
    opts: [
      { icon: 'flame', l: 'Adrenalina', s: 'Supera tus límites y siente la emoción.', w: { barranquismo: 3, ferrata: 3, ebike: 0 } },
      { icon: 'leaf', l: 'Naturaleza y calma', s: 'Desconecta, respira y disfruta del entorno.', w: { ebike: 2, barranquismo: 1, ferrata: 0 } },
      { icon: 'columns', l: 'Cultura y descubrimiento', s: 'Conoce Granada más allá de lo habitual.', w: { ebike: 3, barranquismo: 0, ferrata: 0 } },
      { icon: 'target', l: 'Reto personal', s: 'Una experiencia que recordarás siempre.', w: { ferrata: 3, barranquismo: 2, ebike: 0 } },
    ],
  },
  {
    q: '¿Cómo prefieres desplazarte?',
    short: 'Movilidad',
    opts: [
      { icon: 'car', l: 'Tengo coche', s: 'Puedo desplazarme con facilidad.', w: { barranquismo: 2, ferrata: 2, ebike: 1 } },
      { icon: 'footprints', l: 'Prefiero quedarme cerca', s: 'Busco experiencias accesibles desde Granada.', w: { ebike: 3, barranquismo: 0, ferrata: 0 } },
      { icon: 'bus', l: 'Necesito transporte', s: 'Prefiero opciones con traslado incluido.', w: { barranquismo: 2, ferrata: 2, ebike: 0 } },
    ],
  },
  {
    q: '¿Cuánto tiempo tenéis?',
    short: 'Tiempo',
    opts: [
      { icon: 'clock', l: '2 horas', s: 'Algo corto', w: { ebike: 2, barranquismo: 0, ferrata: 0 } },
      { icon: 'sunHalf', l: 'Medio día', s: '3–5 horas', w: { ebike: 1, barranquismo: 3, ferrata: 3 } },
      { icon: 'sun', l: 'Día completo', s: 'Sin prisa', w: { barranquismo: 2, ferrata: 2, ebike: 1 } },
    ],
  },
  {
    q: '¿Qué nivel de aventura buscas?',
    short: 'Nivel físico',
    opts: [
      { icon: 'leaf', l: 'Tranquilo', s: 'Disfrutar sin grandes esfuerzos.', w: { ebike: 3, barranquismo: 0, ferrata: 0 } },
      { icon: 'bolt', l: 'Activo', s: 'Caminar, explorar y moverte.', w: { ebike: 1, barranquismo: 3, ferrata: 2 } },
      { icon: 'flame', l: 'Intenso', s: 'Busco un verdadero desafío.', w: { barranquismo: 2, ferrata: 3, ebike: 0 } },
    ],
  },
  {
    q: '¿Qué momento del día prefieres?',
    short: 'Último paso',
    opts: [
      { icon: 'sunrise', l: 'Mañana', s: 'Empezar pronto', w: { barranquismo: 2, ferrata: 2, ebike: 1 } },
      { icon: 'sunset', l: 'Atardecer', s: 'Las mejores luces', w: { ebike: 3, barranquismo: 0, ferrata: 0 } },
    ],
  },
];
