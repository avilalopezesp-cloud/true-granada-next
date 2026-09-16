// Single source of truth for blog posts. Each post's `sections` array drives
// the article page (src/app/blog/[slug]/page.js) — intro copy, then one block
// per numbered tip (with an optional callout/tip box), then the conclusion.
// Images are brand-toned placeholders in public/images/blog/verano/ — swap
// the files at those same paths with real photos whenever they're ready,
// no code changes needed.
//
// Translatable fields are stored as { es, en } pairs; use getBlogPosts(lang) /
// getBlogPost(slug, lang) to get a plain-string post for a given language.

export const BLOG_POSTS = [
  {
    slug: 'que-hacer-en-granada-en-verano',
    title: { es: '¿Qué hacer en Granada en verano? 7 planes para vivir la ciudad de verdad', en: 'What to do in Granada in summer? 7 plans to really live the city' },
    excerpt: { es: '7 planes para escapar del calor y las masificaciones — desde la Alhambra al amanecer hasta el barranquismo en Río Verde.', en: '7 plans to escape the heat and the crowds — from the Alhambra at sunrise to canyoning in Río Verde.' },
    metaDescription: {
      es: 'Guía de qué hacer en Granada en verano: 7 planes para huir del calor y las masas, desde la Alhambra al amanecer hasta el barranquismo y Sierra Nevada.',
      en: 'Guide to what to do in Granada in summer: 7 plans to escape the heat and the crowds, from the Alhambra at sunrise to canyoning and Sierra Nevada.',
    },
    keywords: ['qué hacer en Granada en verano', 'turismo en Granada en verano', 'planes de verano en Granada', 'actividades en Granada en verano', 'barranquismo Granada', 'senderismo Granada'],
    category: { es: 'Granada de Verdad', en: 'The Real Granada' },
    cover: '/images/blog/verano/cover.jpg',
    date: '2026-07-22',
    readTime: '8',
    intro: {
      es: [
        '¿Quién dijo que el verano no es para Granada? Sí, el termómetro sube, pero esta ciudad tiene un secreto: sabe cómo refugiarse del sol y transformarse cuando cae la tarde. Si buscas el típico viaje de bajarte del autobús, hacer una foto al monumento de turno e irte sin sentir nada, probablemente este no sea tu artículo.',
        'En TRUE, creemos que viajar no es coleccionar postales, sino acumular historias que te transformen. Por eso, te traemos una guía de turismo en Granada en verano diseñada para huir de las masificaciones, evitar las horas de más calor y conectar de verdad con la naturaleza, la aventura y la esencia local.',
        'Prepara la mochila. Esto es todo lo que puedes hacer en Granada en verano.',
      ],
      en: [
        "Who said summer isn't for Granada? Sure, the thermometer climbs, but this city has a secret: it knows how to hide from the sun and transform once evening falls. If you're after the typical trip of hopping off a bus, snapping a photo of whatever monument, and leaving without feeling a thing, this probably isn't your article.",
        "At TRUE, we believe traveling isn't about collecting postcards, but about gathering stories that change you. That's why we're bringing you a summer-in-Granada guide designed to escape the crowds, avoid the hottest hours, and really connect with nature, adventure and local life.",
        "Pack your bag. Here's everything you can do in Granada in summer.",
      ],
    },
    items: [
      {
        number: 1,
        title: { es: 'Visitar la Alhambra temprano (y con otros ojos)', en: 'Visit the Alhambra early (and see it differently)' },
        image: '/images/blog/verano/01-alhambra.jpg',
        paragraphs: {
          es: [
            'El monumento nazarí es una parada obligatoria, pero el turismo en Granada en verano exige estrategia. Olvídate de las horas centrales del día. El truco de los locales y de quienes buscan una experiencia auténtica es reservar el primer turno de la mañana o, mejor aún, las visitas nocturnas.',
            'Caminar entre los Palacios Nazaríes y los jardines del Generalife con el frescor del amanecer, escuchando el correr del agua sin el murmullo de las grandes masas, es otra historia. No solo evitas el calor de julio o agosto, sino que conectas con la magia del lugar a tu propio ritmo.',
          ],
          en: [
            "The Nasrid monument is a mandatory stop, but visiting Granada in summer takes strategy. Forget the middle of the day. The trick locals and those after an authentic experience use is booking the first morning slot or, even better, a night visit.",
            "Walking through the Nasrid Palaces and the Generalife gardens in the cool of dawn, listening to the water flow without the murmur of the crowds, is a completely different story. You not only dodge the July or August heat, you connect with the magic of the place at your own pace.",
          ],
        },
        tip: {
          icon: '💡',
          label: { es: 'Tip de explorador', en: "Explorer's tip" },
          text: {
            es: 'Reserva la entrada a los Palacios Nazaríes a primera hora (8:30 am). Serás de los primeros en entrar y tendrás los patios prácticamente para ti solo.',
            en: 'Book your Nasrid Palaces ticket for the first slot (8:30 am). You will be among the first in, and the courtyards will be practically yours.',
          },
        },
      },
      {
        number: 2,
        title: { es: 'Descubrir el Albaicín al atardecer (sin sofocarte)', en: 'Discover the Albaicín at sunset (without overheating)' },
        image: '/images/blog/verano/02-albaicin.jpg',
        paragraphs: {
          es: [
            'El Albaicín no se visita; se camina, se respira y se siente. Durante el día, sus calles empedradas retienen el sol, pero cuando la tarde empieza a caer, el barrio cobra una vida completamente diferente.',
            'Piérdete por sus laberínticos callejones de paredes encaladas. Sube sin prisa, buscando esos rincones donde el tiempo parece haberse detenido. Es el momento perfecto para descubrir cómo la luz dorada baña la Alhambra, preparándote para el final del día en uno de los barrios con más solera del mundo.',
          ],
          en: [
            "The Albaicín isn't visited; it's walked, breathed, felt. During the day its cobbled streets hold onto the sun, but once evening starts to fall, the neighborhood comes alive in a completely different way.",
            "Get lost in its maze of whitewashed alleys. Climb without rushing, looking for those corners where time seems to have stopped. It's the perfect moment to watch the golden light wash over the Alhambra, as you build up to the end of the day in one of the most storied neighborhoods in the world.",
          ],
        },
        tip: {
          icon: '🚲',
          label: { es: 'La alternativa local', en: 'The local alternative' },
          text: {
            es: 'Subir las cuestas del Albaicín a pie con 35°C puede ser duro. Con una de nuestras e-bikes, puedes recorrer el barrio de punta a punta sintiendo el aire en la cara, sin sudar y parando justo en los rincones con sombra que solo los de aquí conocemos.',
            en: 'Climbing the Albaicín on foot at 35°C can be brutal. On one of our e-bikes you can cross the neighborhood end to end feeling the air on your face, without breaking a sweat, stopping right at the shaded corners only locals know.',
          },
        },
      },
      {
        number: 3,
        title: { es: 'Hacer barranquismo cerca de Granada: la adrenalina que refresca', en: 'Go canyoning near Granada: the adrenaline that cools you down' },
        image: '/images/blog/verano/03-barranquismo.jpg',
        paragraphs: {
          es: [
            'Si buscas actividades en Granada en verano que te saquen de la zona de confort y te activen, el agua es tu mejor aliada. A tan solo unos minutos de la ciudad, los cañones y ríos de la provincia ofrecen el refugio perfecto contra el calor.',
            'El barranquismo en Granada no va solo de soltar adrenalina saltando a pozas de agua cristalina o rapelando por cascadas naturales. Va de compartir la experiencia. Olvídate de los folletos turísticos impersonales: esto es conectar con la naturaleza salvaje de la provincia y con un grupo de personas que, hace un par de horas, ni siquiera conocías. Al terminar, la recompensa no tiene precio.',
          ],
          en: [
            "If you're after summer activities in Granada that push you out of your comfort zone and get your blood pumping, water is your best ally. Just minutes from the city, the province's canyons and rivers offer the perfect refuge from the heat.",
            "Canyoning around Granada isn't only about the adrenaline of jumping into crystal-clear pools or rappelling down natural waterfalls. It's about sharing the experience. Forget impersonal tourist brochures: this is connecting with the province's wild nature and with a group of people you didn't even know a couple of hours ago. By the end, the reward is priceless.",
          ],
        },
        cta: {
          icon: '👉',
          text: { es: '¿Te atreves a vivir Granada de verdad? Echa un vistazo a nuestras', en: 'Ready to really live Granada? Check out our' },
          linkText: { es: 'experiencias de aventura', en: 'adventure experiences' },
          href: '/#experiences',
          suffix: { es: 'y conecta con el lado más salvaje de la ciudad.', en: "and connect with the wildest side of the city." },
        },
      },
      {
        number: 4,
        title: { es: 'Recorrer Los Cahorros de Monachil', en: 'Walk Los Cahorros de Monachil' },
        image: '/images/blog/verano/04-cahorros.jpg',
        paragraphs: {
          es: [
            'A las puertas de Sierra Nevada se encuentra Monachil, el punto de partida para una de las rutas de senderismo en Granada más espectaculares. El desfiladero de Los Cahorros es famoso por sus imponentes puentes colgantes, sus cascadas y sus estrechos pasadizos de roca.',
            'Es uno de los planes perfectos para la mañana. Caminar encajonado entre paredes de piedra caliza, bordeando el río Monachil mientras el agua fresca mitiga el calor ambiental, te demuestra que Granada es mucho más que asfalto y monumentos: es pura naturaleza viva.',
          ],
          en: [
            "Right at the gates of Sierra Nevada sits Monachil, the starting point for one of the most spectacular hiking routes near Granada. The Los Cahorros gorge is famous for its striking hanging bridges, waterfalls and narrow rock passages.",
            "It's one of the best plans for a morning. Walking boxed in between limestone walls, following the Monachil river as the cool water eases the heat, shows you that Granada is far more than asphalt and monuments: it's pure, living nature.",
          ],
        },
        tip: {
          icon: '💡',
          label: { es: 'Tip de explorador', en: "Explorer's tip" },
          text: {
            es: 'Lleva calzado con buen agarre que no te importe mojar. En algunos tramos de Los Cahorros, tocar el agua es parte fundamental de la aventura.',
            en: "Wear grippy shoes you don't mind getting wet. On some stretches of Los Cahorros, touching the water is a core part of the adventure.",
          },
        },
      },
      {
        number: 5,
        title: { es: 'Disfrutar de un espectáculo de flamenco puro', en: 'Enjoy a pure flamenco show' },
        image: '/images/blog/verano/05-flamenco.jpg',
        paragraphs: {
          es: [
            'El verano en Granada se vive de noche. Y no hay noche granadina completa sin el duende del flamenco. Pero huye de los espectáculos prefabricados para grandes grupos de turistas superficiales.',
            'Busca la autenticidad en los tablaos tradicionales del Sacromonte o el Albaicín. Sentir el zapateado a pocos metros de distancia, la guitarra española resonando en una cueva y el cante desgarrado es una experiencia sensorial que te eriza la piel. Es ahí donde entiendes las raíces y la historia humana que sostienen a esta ciudad.',
          ],
          en: [
            "Summer in Granada is lived at night. And no Granada night is complete without the duende of flamenco. But steer clear of the prefabricated shows built for big groups of superficial tourists.",
            "Look for authenticity in the traditional tablaos of Sacromonte or the Albaicín. Feeling the footwork a few feet away, the Spanish guitar echoing inside a cave, and the raw, heartfelt singing is a sensory experience that gives you goosebumps. That's where you understand the roots and human history holding this city together.",
          ],
        },
      },
      {
        number: 6,
        title: { es: 'Escaparse a Sierra Nevada (el refugio de alta montaña)', en: 'Escape to Sierra Nevada (the high-mountain refuge)' },
        image: '/images/blog/verano/06-sierra-nevada.jpg',
        paragraphs: {
          es: [
            'Cuando Granada en agosto aprieta con sus temperaturas, los locales miran hacia arriba. A poco más de media hora en coche, Sierra Nevada cambia el manto blanco del invierno por senderos de alta montaña, lagunas glaciares y un clima envidiable que rara vez supera los 20°C.',
            'Hacer una ruta al atardecer por la estación o subir hacia las cumbres es uno de los mejores planes estivales. El silencio de las cumbres, el aire puro y la inmensidad del paisaje te recuerdan que los mejores recuerdos no se compran: se viven paso a paso.',
          ],
          en: [
            "When August turns up the heat in Granada, locals look up. Just over half an hour by car, Sierra Nevada swaps winter's white blanket for high-mountain trails, glacial lagoons and an enviable climate that rarely tops 20°C.",
            "A sunset hike around the resort or a climb toward the peaks is one of the best summer plans. The silence of the summits, the clean air, and the sheer scale of the landscape remind you that the best memories aren't bought: they're lived, step by step.",
          ],
        },
      },
      {
        number: 7,
        title: { es: 'Ver el atardecer desde San Miguel Alto', en: 'Watch the sunset from San Miguel Alto' },
        image: '/images/blog/verano/07-san-miguel-alto.jpg',
        paragraphs: {
          es: [
            'Todo el mundo va al Mirador de San Nicolás. Es bonito, sí, pero si quieres una Granada más humana, auténtica y panorámica, tu sitio es la Ermita de San Miguel Alto.',
            'Es el punto más elevado del Albaicín. Ver cómo el sol se oculta tras la vega granadina, tiñendo el cielo de tonos rojizos y violetas mientras la Alhambra se ilumina frente a ti, es un espectáculo inolvidable. Lleva algo para beber, siéntate en la piedra junto a los locales y, simplemente, disfruta del silencio.',
          ],
          en: [
            "Everyone goes to the San Nicolás viewpoint. It's beautiful, sure, but if you want a more human, authentic, panoramic Granada, your spot is the Ermita de San Miguel Alto.",
            "It's the highest point in the Albaicín. Watching the sun sink behind the Granada plain, painting the sky in reds and violets as the Alhambra lights up in front of you, is an unforgettable sight. Bring something to drink, sit on the stone alongside the locals, and simply enjoy the silence.",
          ],
        },
        tip: {
          icon: '🚲',
          label: { es: 'Cómo subir sin esfuerzo', en: 'How to get up effortlessly' },
          text: {
            es: 'La rampa a San Miguel Alto es empinada. Si no quieres llegar exhausto, nuestras bicicletas eléctricas te llevan hasta la cima sin ningún esfuerzo para que solo te preocupes de disfrutar del atardecer.',
            en: "The climb to San Miguel Alto is steep. If you don't want to arrive exhausted, our e-bikes get you to the top effortlessly, so all you have to worry about is enjoying the sunset.",
          },
        },
      },
    ],
    conclusion: {
      title: { es: 'Menos turismo. Más historias.', en: 'Less tourism. More stories.' },
      paragraphs: {
        es: [
          'Granada en verano ofrece mucho más que sus famosos monumentos. Si sabes dónde buscar y estás dispuesto a alejarte de los circuitos tradicionales, encontrarás opciones para todos los gustos: desde la frescura de un barranco escondido hasta la paz de un atardecer en la montaña.',
          'No vengas solo a ver Granada. Ven a caminar sus senderos, a escuchar sus historias y a sumergirte en sus aguas. En TRUE, te ayudamos a tachar menos lugares de la lista y a vivir mejores historias.',
        ],
        en: [
          "Granada in summer offers far more than its famous monuments. If you know where to look and are willing to step off the usual circuit, you'll find something for every taste: from the cool of a hidden canyon to the peace of a mountain sunset.",
          "Don't just come to see Granada. Come to walk its trails, listen to its stories, and dive into its waters. At TRUE, we help you cross off fewer places and live better stories.",
        ],
      },
    },
    finalCta: {
      icon: '🚲',
      title: { es: '¿Quieres que diseñemos tu ruta perfecta de verano por Granada?', en: 'Want us to design your perfect summer route through Granada?' },
      subtitle: { es: 'Sin prisas, con paradas a la sombra, brisa en la cara y los mejores miradores.', en: 'No rush, shaded stops, wind on your face and the best viewpoints.' },
      linkText: { es: 'Diseñar mi aventura personalizada →', en: 'Design my custom adventure →' },
      href: '/#adventure',
    },
  },
  {
    slug: 'los-cahorros-de-monachil',
    title: { es: 'Los Cahorros de Monachil: Guía completa para una aventura de verdad', en: 'Los Cahorros de Monachil: The complete guide to a real adventure' },
    excerpt: { es: 'Cómo llegar, dificultad, qué llevar y todo lo que hay que saber sobre el desfiladero y sus famosos puentes colgantes.', en: 'How to get there, difficulty, what to pack, and everything you need to know about the gorge and its famous hanging bridges.' },
    metaDescription: {
      es: 'Guía completa de Los Cahorros de Monachil: cómo llegar desde Granada, dificultad de la ruta, qué llevar, los puentes colgantes y la mejor época para visitarlos.',
      en: 'Complete guide to Los Cahorros de Monachil: how to get there from Granada, route difficulty, what to pack, the hanging bridges and the best time to visit.',
    },
    keywords: ['Los Cahorros de Monachil', 'ruta Los Cahorros', 'senderismo en Granada', 'puentes colgantes Granada', 'qué ver en Monachil', 'excursiones cerca de Granada'],
    category: { es: 'Granada de Verdad', en: 'The Real Granada' },
    cover: '/images/blog/cahorros/cover.jpg',
    date: '2026-07-23',
    readTime: '7',
    intro: {
      es: [
        'Si estás buscando una ruta de senderismo en Granada que se salga de lo común, deja de buscar. A solo unos kilómetros de la capital se esconde un paisaje que parece sacado de una novela de aventuras: Los Cahorros de Monachil.',
        'En TRUE, siempre decimos que viajar no consiste en bajarse de un autobús, hacer una foto rápida e irse sin entender nada. Por eso, esta no es la típica lista fría de indicaciones. Esta es una guía completa para que vivas la ruta de Los Cahorros con los cinco sentidos, conectes con el entorno y entiendas por qué este desfiladero es uno de los secretos naturales más fascinantes de Andalucía.',
        'Prepara las botas. Nos adentramos en el cañón.',
      ],
      en: [
        "If you're looking for a hiking route near Granada that breaks the mold, stop searching. Just a few kilometers from the city hides a landscape straight out of an adventure novel: Los Cahorros de Monachil.",
        "At TRUE, we always say traveling isn't about hopping off a bus, snapping a quick photo, and leaving without understanding anything. That's why this isn't the typical cold list of directions. This is a complete guide so you can experience the Los Cahorros route with all five senses, connect with the surroundings, and understand why this gorge is one of the most fascinating natural secrets in Andalusia.",
        "Lace up your boots. We're heading into the canyon.",
      ],
    },
    items: [
      {
        number: null,
        title: { es: '¿Qué son Los Cahorros?', en: 'What is Los Cahorros?' },
        image: '/images/blog/cahorros/01-que-son.jpg',
        paragraphs: {
          es: [
            'Los Cahorros de Monachil son un espectacular desfiladero esculpido durante miles de años por el río Monachil. El agua, abriéndose paso desde las cumbres de Sierra Nevada, ha tallado paredes de roca caliza completamente verticales que, en algunos tramos, casi llegan a tocarse sobre tu cabeza.',
            'Pero Los Cahorros son mucho más que geología. Son un ecosistema vivo donde el rugido del agua te acompaña en cada paso, un paraíso para los escaladores de todo el mundo y un terreno de juego perfecto si buscas qué ver en Monachil para huir del asfalto y reconectar con la naturaleza más pura.',
          ],
          en: [
            "Los Cahorros de Monachil is a spectacular gorge carved over thousands of years by the Monachil river. The water, pushing its way down from the peaks of Sierra Nevada, has cut completely vertical limestone walls that, in some stretches, almost meet above your head.",
            "But Los Cahorros is much more than geology. It's a living ecosystem where the roar of the water follows every step, a paradise for climbers from all over the world, and the perfect playground if you're looking for things to do in Monachil to escape the asphalt and reconnect with pure nature.",
          ],
        },
      },
      {
        number: null,
        title: { es: 'Cómo llegar desde Granada', en: 'How to get there from Granada' },
        paragraphs: {
          es: ['Una de las mejores cosas de este plan es lo cerca que está de la ciudad. Tienes tres opciones principales para llegar a Monachil:'],
          en: ["One of the best things about this plan is how close it is to the city. You have three main ways to reach Monachil:"],
        },
        list: [
          { icon: '🚗', label: { es: 'En coche', en: 'By car' }, text: { es: 'Es rápido (unos 20-25 minutos). Conduce en dirección a Monachil y sigue las indicaciones hacia el Aparcamiento de Los Cahorros (junto al restaurante El Puntal).', en: "It's quick (about 20-25 minutes). Drive toward Monachil and follow the signs to the Los Cahorros car park (next to the El Puntal restaurant)." } },
          { icon: '🚌', label: { es: 'En autobús', en: 'By bus' }, text: { es: 'La línea 183 de los autobuses metropolitanos te lleva desde el centro de Granada directo al pueblo de Monachil en una media hora.', en: 'Metropolitan bus line 183 takes you from central Granada straight to the village of Monachil in about half an hour.' } },
          { icon: '🚲', label: { es: 'En e-bike (la opción TRUE)', en: 'By e-bike (the TRUE option)' }, text: { es: '¿Por qué encerrarte en un autobús si puedes ir sintiendo la brisa? Desde el centro de Granada puedes subir hasta Monachil combinando tramos tranquilos de la vega y el río. Es la forma perfecta de calentar piernas antes de adentrarte a pie en el desfiladero.', en: "Why shut yourself inside a bus when you can feel the breeze instead? From central Granada you can ride up to Monachil combining quiet stretches along the plain and the river. It's the perfect way to warm up your legs before heading into the gorge on foot." } },
        ],
      },
      {
        number: null,
        title: { es: 'Dificultad de la ruta: ¿Es apta para todos?', en: 'Route difficulty: is it for everyone?' },
        paragraphs: {
          es: [
            'La ruta circular clásica de Los Cahorros (unos 8 kilómetros) se considera de dificultad media-baja. No requiere una forma física de atleta profesional, pero sí un mínimo de agilidad y, sobre todo, no sufrir de vértigo acusado.',
            'El sendero combina tramos llanos y abiertos con zonas donde tendrás que agacharte, avanzar a gatas o caminar agarrado a unas asas de hierro ancladas a la pared de roca mientras el río pasa justo bajo tus pies. No es peligrosa si vas con cuidado, pero es una aventura real que te exige estar presente en cada paso.',
          ],
          en: [
            "The classic Los Cahorros loop (about 8 kilometers) is considered low-to-medium difficulty. It doesn't require a professional athlete's fitness, but it does call for a bit of agility and, above all, not suffering from serious vertigo.",
            "The trail mixes flat, open stretches with sections where you'll need to duck, crawl, or walk holding onto iron handholds bolted to the rock face while the river runs right beneath your feet. It isn't dangerous if you're careful, but it's a real adventure that demands you stay present with every step.",
          ],
        },
      },
      {
        number: null,
        title: { es: 'Qué llevar en tu mochila de exploración', en: 'What to pack in your exploration bag' },
        paragraphs: {
          es: ['Para disfrutar de la experiencia sin contratiempos, esto es lo indispensable:'],
          en: ['To enjoy the experience without any hiccups, here is what you need:'],
        },
        list: [
          { icon: '🥾', label: { es: 'Calzado de montaña', en: 'Hiking shoes' }, text: { es: 'Con buena suela y agarre. Las rocas húmedas del cañón pueden ser muy resbaladizas.', en: 'With a good sole and grip. The wet rocks in the canyon can get very slippery.' } },
          { icon: '💧', label: { es: 'Agua y snack', en: 'Water and a snack' }, text: { es: 'Aunque estás cerca del pueblo, dentro del desfiladero no hay fuentes de agua potable.', en: "Even though you're close to the village, there's no drinking water inside the gorge." } },
          { icon: '👕', label: { es: 'Ropa cómoda', en: 'Comfortable clothes' }, text: { es: 'Que te permita agacharte y estirarte con total libertad.', en: 'That let you crouch and stretch freely.' } },
          { icon: '🧢', label: { es: 'Protección solar', en: 'Sun protection' }, text: { es: 'Gorra y crema, especialmente para los tramos abiertos fuera del desfiladero.', en: 'A cap and sunscreen, especially for the open stretches outside the gorge.' } },
        ],
        tip: {
          icon: '💡',
          label: { es: 'Tip de explorador', en: "Explorer's tip" },
          text: {
            es: 'Si vas en verano o primavera, lleva una camiseta técnica de repuesto. En la zona de "Las Palomas" el frescor del cañón se agradece, pero al salir a la zona abierta agradecerás un cambio seco.',
            en: 'If you go in summer or spring, bring a spare technical t-shirt. Around the "Las Palomas" section the cool of the canyon is welcome, but once you reach the open area you\'ll appreciate a dry change.',
          },
        },
      },
      {
        number: null,
        title: { es: 'Los famosos puentes colgantes de Granada', en: "Granada's famous hanging bridges" },
        image: '/images/blog/cahorros/02-puentes.jpg',
        paragraphs: {
          es: [
            'Si hay algo que ha hecho famosa a esta ruta, son sus puentes colgantes. A lo largo del cañón cruzarás varios de ellos, pero el auténtico rey es el primero que te encuentras: un puente de 63 metros de longitud suspendido a más de 15 metros sobre el cauce del río.',
            'Cruzarlo es pura adrenalina. Construido hace más de un siglo para dar acceso a la presa y reformado con cables de acero para total seguridad, balancearse sobre el rugido del río Monachil es una de esas sensaciones que se te quedan grabadas. Es el momento perfecto para parar, respirar profundo y sentir la inmensidad del cañón.',
          ],
          en: [
            "If one thing has made this route famous, it's the hanging bridges. You'll cross several along the canyon, but the true star is the first one you reach: a 63-meter-long bridge suspended more than 15 meters above the riverbed.",
            "Crossing it is pure adrenaline. Built over a century ago to access the dam and reinforced with steel cables for full safety, swaying above the roar of the Monachil river is one of those sensations that stays with you. It's the perfect moment to stop, take a deep breath, and feel the sheer scale of the canyon.",
          ],
        },
      },
      {
        number: null,
        title: { es: 'Consejos de seguridad para disfrutar sin riesgos', en: 'Safety tips to enjoy it risk-free' },
        list: [
          { icon: '🧗', label: { es: 'Atención a la cabeza', en: 'Watch your head' }, text: { es: 'En el tramo más estrecho del desfiladero, las rocas sobresalen a la altura de la cabeza. Camina despacio y apóyate en las agarraderas de la pared.', en: 'On the narrowest stretch of the gorge, rocks jut out at head height. Walk slowly and use the wall handholds.' } },
          { icon: '🌧️', label: { es: 'Evita días de lluvia intensa', en: 'Avoid days of heavy rain' }, text: { es: 'Si hay previsión de tormentas fuertes, es mejor posponer la ruta por riesgo de crecidas o desprendimientos.', en: 'If heavy storms are forecast, it is best to postpone the hike due to the risk of flash floods or rockfalls.' } },
          { icon: '🌿', label: { es: 'Respeta el entorno', en: 'Respect the surroundings' }, text: { es: 'Llévate contigo toda la basura que generes y respeta a la fauna local.', en: 'Take all your trash with you and respect the local wildlife.' } },
        ],
      },
      {
        number: null,
        title: { es: 'Mejor época para visitarlos', en: 'The best time to visit' },
        image: '/images/blog/cahorros/03-epoca.jpg',
        list: [
          { icon: '🌸', label: { es: 'Primavera y Otoño', en: 'Spring and Autumn' }, text: { es: 'Las estaciones ideales. Temperaturas suaves, vegetación frondosa y el río bajando con fuerza por el deshielo de Sierra Nevada.', en: 'The ideal seasons. Mild temperatures, lush vegetation, and the river running strong with the Sierra Nevada snowmelt.' } },
          { icon: '☀️', label: { es: 'Verano', en: 'Summer' }, text: { es: 'Excelente si madrugas. El interior del cañón es notablemente más fresco que la ciudad y el contacto con el agua es un alivio térmico brutal.', en: "Excellent if you head out early. The inside of the canyon is noticeably cooler than the city, and the contact with water is a brutal relief from the heat." } },
          { icon: '❄️', label: { es: 'Invierno', en: 'Winter' }, text: { es: 'El paisaje impresiona, pero dentro del cañón las zonas de sombra son muy frías. Ve bien equipado con ropa térmica.', en: 'The scenery is stunning, but the shaded areas inside the canyon get very cold. Go well equipped with thermal clothing.' } },
        ],
      },
      {
        number: null,
        title: { es: 'Experiencias guiadas: Vive Los Cahorros de verdad', en: 'Guided experiences: really live Los Cahorros' },
        paragraphs: {
          es: [
            'Puedes hacer Los Cahorros por tu cuenta, por supuesto. Pero si lo que buscas no es solo caminar, sino entender la geología, descubrir los rincones que no salen en los mapas y compartir la energía con un grupo auténtico, una experiencia guiada marca la diferencia.',
            'En TRUE, no te llevamos a dar un paseo turístico impersonal. Te acompañamos a explorar el cañón paso a paso, conectando con la historia, las leyendas locales y la naturaleza de Sierra Nevada. Porque al final, nadie recuerda el precio de una excursión; lo que recuerdas es la sensación de cruzar el puente colgante, la risa compartida al pasar a gatas por una roca y la desconexión total de la rutina.',
          ],
          en: [
            "You can absolutely do Los Cahorros on your own. But if what you're after isn't just walking, but understanding the geology, finding the corners that don't show up on maps, and sharing the energy with a real group, a guided experience makes all the difference.",
            "At TRUE, we don't take you on an impersonal tourist stroll. We walk the canyon with you step by step, connecting with the history, the local legends and the nature of Sierra Nevada. Because in the end, nobody remembers the price of an outing; what you remember is the feeling of crossing the hanging bridge, the shared laughter crawling past a rock, and being completely unplugged from routine.",
          ],
        },
      },
    ],
    finalCta: {
      icon: '🥾',
      title: { es: '¿Te vienes a explorar la Granada de verdad?', en: 'Ready to explore the real Granada?' },
      subtitle: { es: 'Diseñamos tu ruta por Los Cahorros combinando e-bike, senderismo y la mejor vibra local.', en: 'We design your Los Cahorros route combining e-bike, hiking and the best local vibe.' },
      linkText: { es: 'Hablar con el equipo por WhatsApp →', en: 'Talk to the team on WhatsApp →' },
      href: (lang) => `https://wa.me/34689507099?text=${encodeURIComponent(
        lang === 'en'
          ? 'Hi TRUE 👋 I want to explore Los Cahorros de Monachil. Can you help me organize it?'
          : 'Hola TRUE 👋 Quiero explorar Los Cahorros de Monachil. ¿Me ayudáis a organizarlo?'
      )}`,
    },
  },
  {
    slug: 'mejores-miradores-de-granada',
    title: { es: 'Los mejores miradores de Granada: 6 lugares para tocar el cielo (y huir de las masas)', en: 'The best viewpoints in Granada: 6 places to touch the sky (and escape the crowds)' },
    excerpt: { es: 'Del clásico San Nicolás a los rincones que casi nadie conoce: 6 miradores para vivir Granada desde las alturas.', en: 'From the classic San Nicolás to the corners almost nobody knows: 6 viewpoints to experience Granada from above.' },
    metaDescription: {
      es: 'Los mejores miradores de Granada: San Nicolás, San Miguel Alto y 4 rincones menos conocidos para ver la Alhambra sin las masas de turistas.',
      en: 'The best viewpoints in Granada: San Nicolás, San Miguel Alto and 4 lesser-known spots to see the Alhambra without the crowds.',
    },
    keywords: ['miradores de Granada', 'mejores vistas de Granada', 'mirador de San Nicolás', 'mirador de San Miguel Alto', 'qué ver en el Albaicín', 'atardecer en Granada'],
    category: { es: 'Granada de Verdad', en: 'The Real Granada' },
    cover: '/images/blog/miradores/cover.jpg',
    date: '2026-07-24',
    readTime: '7',
    intro: {
      es: [
        'Dicen que el que no ha visto Granada, no ha visto nada. Pero nosotros vamos un paso más allá: el que solo ve Granada desde la ventanilla de un autobús turístico, se está perdiendo la verdadera magia de esta ciudad.',
        'Granada es una ciudad esculpida entre colinas, lo que la convierte en un laberinto perfecto lleno de balcones naturales. Buscar las mejores vistas de Granada no es solo una actividad fotográfica; es un ritual. Es el momento del día en el que el tiempo se detiene, la luz cambia de color y conectas de verdad con el lugar.',
        'Si quieres huir del turismo impersonal y descubrir los miradores de Granada donde realmente se esconde la esencia local, guarda esta lista.',
      ],
      en: [
        "They say whoever hasn't seen Granada hasn't seen anything. But we'll go one step further: whoever only sees Granada through a tour bus window is missing the true magic of this city.",
        "Granada is a city carved between hills, which turns it into a perfect maze full of natural balconies. Chasing the best views of Granada isn't just a photo op; it's a ritual. It's the moment of the day when time stops, the light changes color, and you truly connect with the place.",
        "If you want to escape impersonal tourism and discover the viewpoints where the local essence really hides, save this list.",
      ],
    },
    items: [
      {
        number: 1,
        title: { es: 'Mirador de San Nicolás: El clásico (que debes saber cuándo visitar)', en: 'San Nicolás viewpoint: the classic (and when you should actually visit)' },
        image: '/images/blog/miradores/01-san-nicolas.jpg',
        paragraphs: {
          es: [
            'No podemos hablar de los miradores de Granada sin empezar por el más famoso del mundo. El Mirador de San Nicolás, en pleno corazón del Albaicín, ofrece una postal perfecta de la Alhambra con los picos de Sierra Nevada al fondo. Bill Clinton dijo que aquí se ve el mejor atardecer del mundo, y no le faltaba razón.',
            'La realidad TRUE: al ser el punto más famoso, suele estar abarrotado de gente haciendo la misma foto para redes sociales. Si quieres vivirlo de verdad, nuestro consejo es que madrugues. Ver amanecer desde San Nicolás, en silencio absoluto, escuchando solo los primeros pájaros y viendo cómo la luz de la mañana despierta los muros de la Alhambra, es una experiencia que te transforma.',
          ],
          en: [
            "We can't talk about Granada's viewpoints without starting with the most famous one in the world. The San Nicolás viewpoint, right in the heart of the Albaicín, offers a picture-perfect view of the Alhambra with the Sierra Nevada peaks behind it. Bill Clinton once said this is where you see the best sunset in the world, and he wasn't wrong.",
            "The TRUE reality: being the most famous spot, it's usually packed with people taking the same photo for social media. If you want to really live it, our advice is to get up early. Watching sunrise from San Nicolás, in absolute silence, hearing only the first birds and watching the morning light wake the Alhambra's walls, is a genuinely transforming experience.",
          ],
        },
        tip: {
          icon: '💡',
          label: { es: 'Tip de explorador', en: "Explorer's tip" },
          text: {
            es: 'Si vas por la tarde y hay demasiada multitud, baja unos metros por las escaleras hacia la Iglesia de San Nicolás o piérdete por el adarve cercano; tendrás la misma vista con la mitad de gente.',
            en: "If you go in the afternoon and it's too crowded, walk down a few steps toward the Iglesia de San Nicolás or wander the nearby lane; you'll get the same view with half the people.",
          },
        },
      },
      {
        number: 2,
        title: { es: 'Mirador de San Miguel Alto: La panorámica definitiva', en: 'San Miguel Alto viewpoint: the ultimate panorama' },
        image: '/images/blog/miradores/02-san-miguel-alto.jpg',
        paragraphs: {
          es: [
            'Si buscas perspectiva y espacio para respirar, tienes que subir a San Miguel Alto. Es el mirador más elevado de la ciudad, coronado por una pequeña ermita.',
            'Desde aquí, Granada se despliega por completo a tus pies. No solo ves la Alhambra en toda su extensión, sino también el Albaicín, el Sacromonte y la inmensidad de la vega granadina. La recompensa es un ambiente mucho más auténtico, humano y relajado, donde los locales se sientan en la piedra a compartir una charla mientras el sol se oculta.',
          ],
          en: [
            "If you're after perspective and room to breathe, you have to climb up to San Miguel Alto. It's the highest viewpoint in the city, crowned by a small hermitage.",
            "From here, Granada unfolds completely at your feet. You see not just the full extent of the Alhambra, but also the Albaicín, Sacromonte and the vastness of the Granada plain. The reward is a far more authentic, human and relaxed atmosphere, where locals sit on the stone to chat as the sun goes down.",
          ],
        },
        tip: {
          icon: '🚲',
          label: { es: 'Sube sin sudar', en: 'Climb without breaking a sweat' },
          text: {
            es: 'La cuesta hasta San Miguel Alto es de las más empinadas de Granada. En nuestras e-bikes, puedes subir en pocos minutos con el motor en modo asistencia, disfrutando del paisaje sin llegar sin aliento a la cima.',
            en: "The climb to San Miguel Alto is one of the steepest in Granada. On our e-bikes you can get up in a few minutes with motor assistance, enjoying the scenery without arriving at the top out of breath.",
          },
        },
      },
      {
        number: 3,
        title: { es: 'Placeta de Carvajales: El secreto escondido del Albaicín', en: "Placeta de Carvajales: the Albaicín's hidden secret" },
        image: '/images/blog/miradores/03-carvajales.jpg',
        paragraphs: {
          es: [
            'Bajando por el laberinto de callejuelas del Albaicín inferior se encuentra la Placeta de Carvajales. Este no es un mirador elevado, sino una pequeña plaza escondida con una fuente y una perspectiva única.',
            'Aquí la Alhambra no se ve desde arriba, sino que se alza imponente justo frente a ti, casi dejándote sentir la cercanía de sus murallas. Es un rincón rodeado de sombra, ideal para sentarse a escuchar el correr del agua, desconectar del bullicio y disfrutar de una Granada íntima y cercana.',
          ],
          en: [
            "Down through the maze of alleys in the lower Albaicín sits the Placeta de Carvajales. This isn't a high viewpoint, but a small hidden square with a fountain and a unique perspective.",
            "Here the Alhambra isn't seen from above — it rises imposingly right in front of you, almost letting you feel how close its walls are. It's a shaded corner, ideal for sitting down to listen to the water, disconnect from the bustle and enjoy an intimate, close-up Granada.",
          ],
        },
      },
      {
        number: 4,
        title: { es: 'Mirador de la Churra: La perspectiva olvidada', en: 'La Churra viewpoint: the forgotten perspective' },
        image: '/images/blog/miradores/04-la-churra.jpg',
        paragraphs: {
          es: [
            'Mientras todo el mundo cruza el río Darro y sube al Albaicín para fotografiar la Alhambra, muy pocos saben que justo a los pies del propio monumento existe un rincón mágico: el Mirador de la Churra.',
            'Ubicado en el humilde y pintoresco barrio de la Churra, este mirador ofrece la vista inversa. Estás tan cerca de las paredes de la fortaleza que te sientes diminuto, mientras observas las casas blancas del Albaicín escalando la colina de enfrente. Es un lugar silencioso, solitario y con un magnetismo brutal, ideal para quienes buscan salirse de los caminos marcados.',
          ],
          en: [
            "While everyone crosses the Darro river and climbs up to the Albaicín to photograph the Alhambra, very few know that right at the foot of the monument itself there's a magical spot: the La Churra viewpoint.",
            "Located in the humble, picturesque La Churra neighborhood, this viewpoint offers the reverse view. You're so close to the fortress walls you feel tiny, while watching the Albaicín's white houses climb the hill opposite. It's a quiet, solitary place with serious magnetism, ideal for those looking to step off the beaten path.",
          ],
        },
      },
      {
        number: 5,
        title: { es: 'La Silla del Moro: Historia y silencio sobre el Generalife', en: "La Silla del Moro: history and silence above the Generalife" },
        image: '/images/blog/miradores/05-silla-del-moro.jpg',
        paragraphs: {
          es: [
            'También conocido como el Castillo de Santa Elena, la Silla del Moro es una estructura de vigilancia construida en el siglo XIII para proteger el Generalife.',
            'Se encuentra en el cerro del Sol y, al estar ubicado por encima de la propia Alhambra, te regala una de las perspectivas más majestuosas e inusuales de todo el conjunto monumental. Llegar hasta aquí arriba es hacer un pequeño viaje en el tiempo; el entorno es puramente natural y el silencio es el verdadero protagonista del paisaje.',
          ],
          en: [
            "Also known as the Castillo de Santa Elena, La Silla del Moro is a watchtower built in the 13th century to protect the Generalife.",
            "It sits on the Cerro del Sol, and being positioned above the Alhambra itself, it gives you one of the most majestic and unusual perspectives of the entire monument complex. Getting up here is like taking a small trip through time; the surroundings are purely natural, and silence is the real star of the landscape.",
          ],
        },
        tip: {
          icon: '💡',
          label: { es: 'Tip de explorador', en: "Explorer's tip" },
          text: {
            es: 'La entrada suele ser gratuita los fines de semana. Es el lugar perfecto para combinarlo con una ruta en bici por la dehesa del Generalife.',
            en: 'Entry is usually free on weekends. It is the perfect spot to combine with a bike ride through the Generalife woodland.',
          },
        },
      },
      {
        number: 6,
        title: { es: 'Llano de la Perdiz: Conexión y naturaleza pura', en: 'Llano de la Perdiz: pure connection and nature' },
        image: '/images/blog/miradores/06-llano-de-la-perdiz.jpg',
        paragraphs: {
          es: [
            'Si lo tuyo es la naturaleza en estado puro, el Llano de la Perdiz es el mirador definitivo. Es el parque natural que se extiende detrás de la Alhambra y el Generalife, un pulmón verde donde los granadinos van a correr, montar en bici y hacer senderismo.',
            'No busques aquí una terraza empedrada con música; el Llano de la Perdiz te ofrece senderos de tierra, pinares y miradores naturales desde donde contemplar Sierra Nevada y los valles circundantes. Es un lugar para respirar aire puro, estirar las piernas y recordar que las mejores historias se viven paso a paso, lejos del asfalto.',
          ],
          en: [
            "If pure nature is your thing, Llano de la Perdiz is the ultimate viewpoint. It's the natural park stretching out behind the Alhambra and the Generalife, a green lung where locals go running, cycling and hiking.",
            "Don't come here looking for a paved terrace with music; Llano de la Perdiz offers dirt trails, pine forests and natural viewpoints over Sierra Nevada and the surrounding valleys. It's a place to breathe clean air, stretch your legs, and remember that the best stories are lived step by step, far from the asphalt.",
          ],
        },
      },
    ],
    conclusion: {
      title: { es: '¿Desde dónde vas a mirar hoy?', en: 'Where will you look from today?' },
      paragraphs: {
        es: [
          'Los miradores de Granada son mucho más que lugares para coleccionar fotos en la galería del móvil. Son espacios reales para conectar con la historia, con la naturaleza y con uno mismo. Ya sea trepando hasta las alturas de San Miguel Alto o escondiéndote en el silencio de la Churra, cada rincón te cuenta una historia diferente de la ciudad.',
          'En TRUE, creemos que viajar es implicarse con el destino, no solo contemplarlo desde la barrera. Si estás listo para descubrir la Granada de verdad, estamos listos para llevarte.',
        ],
        en: [
          "Granada's viewpoints are far more than places to collect photos in your camera roll. They are real spaces to connect with history, with nature, and with yourself. Whether climbing up to San Miguel Alto or hiding in the silence of La Churra, every corner tells a different story about the city.",
          "At TRUE, we believe traveling means engaging with a destination, not just watching it from the sidelines. If you're ready to discover the real Granada, we're ready to take you there.",
        ],
      },
    },
    finalCta: {
      icon: '🚲',
      title: { es: '¿Quieres recorrer los mejores miradores de Granada en e-bike?', en: "Want to ride Granada's best viewpoints on an e-bike?" },
      subtitle: { es: 'Subimos a los puntos más altos sin esfuerzo, paramos en los rincones secretos y terminamos con la mejor vibra.', en: 'We climb to the highest points effortlessly, stop at the secret corners, and finish with the best vibe.' },
      linkText: { es: 'Reservar mi ruta por los miradores por WhatsApp →', en: 'Book my viewpoints route on WhatsApp →' },
      href: (lang) => `https://wa.me/34689507099?text=${encodeURIComponent(
        lang === 'en'
          ? 'Hi TRUE 👋 I want to book an e-bike route through the viewpoints of Granada. Do you have availability?'
          : 'Hola TRUE 👋 Quiero reservar una ruta por los miradores de Granada en e-bike. ¿Tenéis disponibilidad?'
      )}`,
    },
  },
];

function t(pair, lang) {
  if (pair == null) return pair;
  if (typeof pair === 'string') return pair;
  return lang === 'en' ? (pair.en ?? pair.es) : pair.es;
}

function resolveItem(item, lang) {
  return {
    number: item.number,
    title: t(item.title, lang),
    image: item.image,
    paragraphs: item.paragraphs ? t(item.paragraphs, lang) : undefined,
    list: item.list ? item.list.map((li) => ({ icon: li.icon, label: t(li.label, lang), text: t(li.text, lang) })) : undefined,
    tip: item.tip ? { icon: item.tip.icon, label: t(item.tip.label, lang), text: t(item.tip.text, lang) } : undefined,
    cta: item.cta
      ? { icon: item.cta.icon, text: t(item.cta.text, lang), linkText: t(item.cta.linkText, lang), href: item.cta.href, suffix: item.cta.suffix ? t(item.cta.suffix, lang) : undefined }
      : undefined,
  };
}

function resolvePost(post, lang) {
  return {
    slug: post.slug,
    title: t(post.title, lang),
    excerpt: t(post.excerpt, lang),
    metaDescription: t(post.metaDescription, lang),
    keywords: post.keywords,
    category: t(post.category, lang),
    cover: post.cover,
    date: post.date,
    readTime: post.readTime,
    intro: t(post.intro, lang),
    items: post.items.map((item) => resolveItem(item, lang)),
    conclusion: post.conclusion ? { title: t(post.conclusion.title, lang), paragraphs: t(post.conclusion.paragraphs, lang) } : undefined,
    finalCta: {
      icon: post.finalCta.icon,
      title: t(post.finalCta.title, lang),
      subtitle: t(post.finalCta.subtitle, lang),
      linkText: t(post.finalCta.linkText, lang),
      href: typeof post.finalCta.href === 'function' ? post.finalCta.href(lang) : post.finalCta.href,
    },
  };
}

export function getBlogPosts(lang = 'es') {
  return BLOG_POSTS.map((post) => resolvePost(post, lang));
}

export function getBlogPost(slug, lang = 'es') {
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  return post ? resolvePost(post, lang) : undefined;
}

// Backwards-compatible plain-Spanish exports for metadata generation (server
// components), which isn't reactive to the client-side language toggle.
export const BLOG_LIST = getBlogPosts('es');
