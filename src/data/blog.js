// Single source of truth for blog posts. Each post's `sections` array drives
// the article page (src/app/blog/[slug]/page.js) — intro copy, then one block
// per numbered tip (with an optional callout/tip box), then the conclusion.
// Images are brand-toned placeholders in public/images/blog/verano/ — swap
// the files at those same paths with real photos whenever they're ready,
// no code changes needed.

export const BLOG_POSTS = [
  {
    slug: 'que-hacer-en-granada-en-verano',
    title: '¿Qué hacer en Granada en verano? 7 planes para vivir la ciudad de verdad',
    excerpt: '7 planes para escapar del calor y las masificaciones — desde la Alhambra al amanecer hasta el barranquismo en Río Verde.',
    metaDescription: 'Guía de qué hacer en Granada en verano: 7 planes para huir del calor y las masas, desde la Alhambra al amanecer hasta el barranquismo y Sierra Nevada.',
    keywords: [
      'qué hacer en Granada en verano',
      'turismo en Granada en verano',
      'planes de verano en Granada',
      'actividades en Granada en verano',
      'barranquismo Granada',
      'senderismo Granada',
    ],
    category: 'Granada de Verdad',
    cover: '/images/blog/verano/cover.jpg',
    date: '2026-07-22',
    readTime: '8 min',
    intro: [
      '¿Quién dijo que el verano no es para Granada? Sí, el termómetro sube, pero esta ciudad tiene un secreto: sabe cómo refugiarse del sol y transformarse cuando cae la tarde. Si buscas el típico viaje de bajarte del autobús, hacer una foto al monumento de turno e irte sin sentir nada, probablemente este no sea tu artículo.',
      'En TRUE, creemos que viajar no es coleccionar postales, sino acumular historias que te transformen. Por eso, te traemos una guía de turismo en Granada en verano diseñada para huir de las masificaciones, evitar las horas de más calor y conectar de verdad con la naturaleza, la aventura y la esencia local.',
      'Prepara la mochila. Esto es todo lo que puedes hacer en Granada en verano.',
    ],
    items: [
      {
        number: 1,
        title: 'Visitar la Alhambra temprano (y con otros ojos)',
        image: '/images/blog/verano/01-alhambra.jpg',
        paragraphs: [
          'El monumento nazarí es una parada obligatoria, pero el turismo en Granada en verano exige estrategia. Olvídate de las horas centrales del día. El truco de los locales y de quienes buscan una experiencia auténtica es reservar el primer turno de la mañana o, mejor aún, las visitas nocturnas.',
          'Caminar entre los Palacios Nazaríes y los jardines del Generalife con el frescor del amanecer, escuchando el correr del agua sin el murmullo de las grandes masas, es otra historia. No solo evitas el calor de julio o agosto, sino que conectas con la magia del lugar a tu propio ritmo.',
        ],
        tip: {
          icon: '💡',
          label: 'Tip de explorador',
          text: 'Reserva la entrada a los Palacios Nazaríes a primera hora (8:30 am). Serás de los primeros en entrar y tendrás los patios prácticamente para ti solo.',
        },
      },
      {
        number: 2,
        title: 'Descubrir el Albaicín al atardecer (sin sofocarte)',
        image: '/images/blog/verano/02-albaicin.jpg',
        paragraphs: [
          'El Albaicín no se visita; se camina, se respira y se siente. Durante el día, sus calles empedradas retienen el sol, pero cuando la tarde empieza a caer, el barrio cobra una vida completamente diferente.',
          'Piérdete por sus laberínticos callejones de paredes encaladas. Sube sin prisa, buscando esos rincones donde el tiempo parece haberse detenido. Es el momento perfecto para descubrir cómo la luz dorada baña la Alhambra, preparándote para el final del día en uno de los barrios con más solera del mundo.',
        ],
        tip: {
          icon: '🚲',
          label: 'La alternativa local',
          text: 'Subir las cuestas del Albaicín a pie con 35°C puede ser duro. Con una de nuestras e-bikes, puedes recorrer el barrio de punta a punta sintiendo el aire en la cara, sin sudar y parando justo en los rincones con sombra que solo los de aquí conocemos.',
        },
      },
      {
        number: 3,
        title: 'Hacer barranquismo cerca de Granada: la adrenalina que refresca',
        image: '/images/blog/verano/03-barranquismo.jpg',
        paragraphs: [
          'Si buscas actividades en Granada en verano que te saquen de la zona de confort y te activen, el agua es tu mejor aliada. A tan solo unos minutos de la ciudad, los cañones y ríos de la provincia ofrecen el refugio perfecto contra el calor.',
          'El barranquismo en Granada no va solo de soltar adrenalina saltando a pozas de agua cristalina o rapelando por cascadas naturales. Va de compartir la experiencia. Olvídate de los folletos turísticos impersonales: esto es conectar con la naturaleza salvaje de la provincia y con un grupo de personas que, hace un par de horas, ni siquiera conocías. Al terminar, la recompensa no tiene precio.',
        ],
        cta: {
          icon: '👉',
          text: '¿Te atreves a vivir Granada de verdad? Echa un vistazo a nuestras',
          linkText: 'experiencias de aventura',
          href: '/#experiences',
          suffix: 'y conecta con el lado más salvaje de la ciudad.',
        },
      },
      {
        number: 4,
        title: 'Recorrer Los Cahorros de Monachil',
        image: '/images/blog/verano/04-cahorros.jpg',
        paragraphs: [
          'A las puertas de Sierra Nevada se encuentra Monachil, el punto de partida para una de las rutas de senderismo en Granada más espectaculares. El desfiladero de Los Cahorros es famoso por sus imponentes puentes colgantes, sus cascadas y sus estrechos pasadizos de roca.',
          'Es uno de los planes perfectos para la mañana. Caminar encajonado entre paredes de piedra caliza, bordeando el río Monachil mientras el agua fresca mitiga el calor ambiental, te demuestra que Granada es mucho más que asfalto y monumentos: es pura naturaleza viva.',
        ],
        tip: {
          icon: '💡',
          label: 'Tip de explorador',
          text: 'Lleva calzado con buen agarre que no te importe mojar. En algunos tramos de Los Cahorros, tocar el agua es parte fundamental de la aventura.',
        },
      },
      {
        number: 5,
        title: 'Disfrutar de un espectáculo de flamenco puro',
        image: '/images/blog/verano/05-flamenco.jpg',
        paragraphs: [
          'El verano en Granada se vive de noche. Y no hay noche granadina completa sin el duende del flamenco. Pero huye de los espectáculos prefabricados para grandes grupos de turistas superficiales.',
          'Busca la autenticidad en los tablaos tradicionales del Sacromonte o el Albaicín. Sentir el zapateado a pocos metros de distancia, la guitarra española resonando en una cueva y el cante desgarrado es una experiencia sensorial que te eriza la piel. Es ahí donde entiendes las raíces y la historia humana que sostienen a esta ciudad.',
        ],
      },
      {
        number: 6,
        title: 'Escaparse a Sierra Nevada (el refugio de alta montaña)',
        image: '/images/blog/verano/06-sierra-nevada.jpg',
        paragraphs: [
          'Cuando Granada en agosto aprieta con sus temperaturas, los locales miran hacia arriba. A poco más de media hora en coche, Sierra Nevada cambia el manto blanco del invierno por senderos de alta montaña, lagunas glaciares y un clima envidiable que rara vez supera los 20°C.',
          'Hacer una ruta al atardecer por la estación o subir hacia las cumbres es uno de los mejores planes estivales. El silencio de las cumbres, el aire puro y la inmensidad del paisaje te recuerdan que los mejores recuerdos no se compran: se viven paso a paso.',
        ],
      },
      {
        number: 7,
        title: 'Ver el atardecer desde San Miguel Alto',
        image: '/images/blog/verano/07-san-miguel-alto.jpg',
        paragraphs: [
          'Todo el mundo va al Mirador de San Nicolás. Es bonito, sí, pero si quieres una Granada más humana, auténtica y panorámica, tu sitio es la Ermita de San Miguel Alto.',
          'Es el punto más elevado del Albaicín. Ver cómo el sol se oculta tras la vega granadina, tiñendo el cielo de tonos rojizos y violetas mientras la Alhambra se ilumina frente a ti, es un espectáculo inolvidable. Lleva algo para beber, siéntate en la piedra junto a los locales y, simplemente, disfruta del silencio.',
        ],
        tip: {
          icon: '🚲',
          label: 'Cómo subir sin esfuerzo',
          text: 'La rampa a San Miguel Alto es empinada. Si no quieres llegar exhausto, nuestras bicicletas eléctricas te llevan hasta la cima sin ningún esfuerzo para que solo te preocupes de disfrutar del atardecer.',
        },
      },
    ],
    conclusion: {
      title: 'Menos turismo. Más historias.',
      paragraphs: [
        'Granada en verano ofrece mucho más que sus famosos monumentos. Si sabes dónde buscar y estás dispuesto a alejarte de los circuitos tradicionales, encontrarás opciones para todos los gustos: desde la frescura de un barranco escondido hasta la paz de un atardecer en la montaña.',
        'No vengas solo a ver Granada. Ven a caminar sus senderos, a escuchar sus historias y a sumergirte en sus aguas. En TRUE, te ayudamos a tachar menos lugares de la lista y a vivir mejores historias.',
      ],
    },
    finalCta: {
      icon: '🚲',
      title: '¿Quieres que diseñemos tu ruta perfecta de verano por Granada?',
      subtitle: 'Sin prisas, con paradas a la sombra, brisa en la cara y los mejores miradores.',
      linkText: 'Diseñar mi aventura personalizada →',
      href: '/#adventure',
    },
  },
];

export const BLOG_LIST = BLOG_POSTS;
