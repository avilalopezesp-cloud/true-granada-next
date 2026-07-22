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
  {
    slug: 'los-cahorros-de-monachil',
    title: 'Los Cahorros de Monachil: Guía completa para una aventura de verdad',
    excerpt: 'Cómo llegar, dificultad, qué llevar y todo lo que hay que saber sobre el desfiladero y sus famosos puentes colgantes.',
    metaDescription: 'Guía completa de Los Cahorros de Monachil: cómo llegar desde Granada, dificultad de la ruta, qué llevar, los puentes colgantes y la mejor época para visitarlos.',
    keywords: [
      'Los Cahorros de Monachil',
      'ruta Los Cahorros',
      'senderismo en Granada',
      'puentes colgantes Granada',
      'qué ver en Monachil',
      'excursiones cerca de Granada',
    ],
    category: 'Granada de Verdad',
    cover: '/images/blog/cahorros/cover.jpg',
    date: '2026-07-23',
    readTime: '7 min',
    intro: [
      'Si estás buscando una ruta de senderismo en Granada que se salga de lo común, deja de buscar. A solo unos kilómetros de la capital se esconde un paisaje que parece sacado de una novela de aventuras: Los Cahorros de Monachil.',
      'En TRUE, siempre decimos que viajar no consiste en bajarse de un autobús, hacer una foto rápida e irse sin entender nada. Por eso, esta no es la típica lista fría de indicaciones. Esta es una guía completa para que vivas la ruta de Los Cahorros con los cinco sentidos, conectes con el entorno y entiendas por qué este desfiladero es uno de los secretos naturales más fascinantes de Andalucía.',
      'Prepara las botas. Nos adentramos en el cañón.',
    ],
    items: [
      {
        number: null,
        title: '¿Qué son Los Cahorros?',
        image: '/images/blog/cahorros/01-que-son.jpg',
        paragraphs: [
          'Los Cahorros de Monachil son un espectacular desfiladero esculpido durante miles de años por el río Monachil. El agua, abriéndose paso desde las cumbres de Sierra Nevada, ha tallado paredes de roca caliza completamente verticales que, en algunos tramos, casi llegan a tocarse sobre tu cabeza.',
          'Pero Los Cahorros son mucho más que geología. Son un ecosistema vivo donde el rugido del agua te acompaña en cada paso, un paraíso para los escaladores de todo el mundo y un terreno de juego perfecto si buscas qué ver en Monachil para huir del asfalto y reconectar con la naturaleza más pura.',
        ],
      },
      {
        number: null,
        title: 'Cómo llegar desde Granada',
        paragraphs: [
          'Una de las mejores cosas de este plan es lo cerca que está de la ciudad. Tienes tres opciones principales para llegar a Monachil:',
        ],
        list: [
          { icon: '🚗', label: 'En coche', text: 'Es rápido (unos 20-25 minutos). Conduce en dirección a Monachil y sigue las indicaciones hacia el Aparcamiento de Los Cahorros (junto al restaurante El Puntal).' },
          { icon: '🚌', label: 'En autobús', text: 'La línea 183 de los autobuses metropolitanos te lleva desde el centro de Granada directo al pueblo de Monachil en una media hora.' },
          { icon: '🚲', label: 'En e-bike (la opción TRUE)', text: '¿Por qué encerrarte en un autobús si puedes ir sintiendo la brisa? Desde el centro de Granada puedes subir hasta Monachil combinando tramos tranquilos de la vega y el río. Es la forma perfecta de calentar piernas antes de adentrarte a pie en el desfiladero.' },
        ],
      },
      {
        number: null,
        title: 'Dificultad de la ruta: ¿Es apta para todos?',
        paragraphs: [
          'La ruta circular clásica de Los Cahorros (unos 8 kilómetros) se considera de dificultad media-baja. No requiere una forma física de atleta profesional, pero sí un mínimo de agilidad y, sobre todo, no sufrir de vértigo acusado.',
          'El sendero combina tramos llanos y abiertos con zonas donde tendrás que agacharte, avanzar a gatas o caminar agarrado a unas asas de hierro ancladas a la pared de roca mientras el río pasa justo bajo tus pies. No es peligrosa si vas con cuidado, pero es una aventura real que te exige estar presente en cada paso.',
        ],
      },
      {
        number: null,
        title: 'Qué llevar en tu mochila de exploración',
        paragraphs: [
          'Para disfrutar de la experiencia sin contratiempos, esto es lo indispensable:',
        ],
        list: [
          { icon: '🥾', label: 'Calzado de montaña', text: 'Con buena suela y agarre. Las rocas húmedas del cañón pueden ser muy resbaladizas.' },
          { icon: '💧', label: 'Agua y snack', text: 'Aunque estás cerca del pueblo, dentro del desfiladero no hay fuentes de agua potable.' },
          { icon: '👕', label: 'Ropa cómoda', text: 'Que te permita agacharte y estirarte con total libertad.' },
          { icon: '🧢', label: 'Protección solar', text: 'Gorra y crema, especialmente para los tramos abiertos fuera del desfiladero.' },
        ],
        tip: {
          icon: '💡',
          label: 'Tip de explorador',
          text: 'Si vas en verano o primavera, lleva una camiseta técnica de repuesto. En la zona de "Las Palomas" el frescor del cañón se agradece, pero al salir a la zona abierta agradecerás un cambio seco.',
        },
      },
      {
        number: null,
        title: 'Los famosos puentes colgantes de Granada',
        image: '/images/blog/cahorros/02-puentes.jpg',
        paragraphs: [
          'Si hay algo que ha hecho famosa a esta ruta, son sus puentes colgantes. A lo largo del cañón cruzarás varios de ellos, pero el auténtico rey es el primero que te encuentras: un puente de 63 metros de longitud suspendido a más de 15 metros sobre el cauce del río.',
          'Cruzarlo es pura adrenalina. Construido hace más de un siglo para dar acceso a la presa y reformado con cables de acero para total seguridad, balancearse sobre el rugido del río Monachil es una de esas sensaciones que se te quedan grabadas. Es el momento perfecto para parar, respirar profundo y sentir la inmensidad del cañón.',
        ],
      },
      {
        number: null,
        title: 'Consejos de seguridad para disfrutar sin riesgos',
        list: [
          { icon: '🧗', label: 'Atención a la cabeza', text: 'En el tramo más estrecho del desfiladero, las rocas sobresalen a la altura de la cabeza. Camina despacio y apóyate en las agarraderas de la pared.' },
          { icon: '🌧️', label: 'Evita días de lluvia intensa', text: 'Si hay previsión de tormentas fuertes, es mejor posponer la ruta por riesgo de crecidas o desprendimientos.' },
          { icon: '🌿', label: 'Respeta el entorno', text: 'Llévate contigo toda la basura que generes y respeta a la fauna local.' },
        ],
      },
      {
        number: null,
        title: 'Mejor época para visitarlos',
        image: '/images/blog/cahorros/03-epoca.jpg',
        list: [
          { icon: '🌸', label: 'Primavera y Otoño', text: 'Las estaciones ideales. Temperaturas suaves, vegetación frondosa y el río bajando con fuerza por el deshielo de Sierra Nevada.' },
          { icon: '☀️', label: 'Verano', text: 'Excelente si madrugas. El interior del cañón es notablemente más fresco que la ciudad y el contacto con el agua es un alivio térmico brutal.' },
          { icon: '❄️', label: 'Invierno', text: 'El paisaje impresiona, pero dentro del cañón las zonas de sombra son muy frías. Ve bien equipado con ropa térmica.' },
        ],
      },
      {
        number: null,
        title: 'Experiencias guiadas: Vive Los Cahorros de verdad',
        paragraphs: [
          'Puedes hacer Los Cahorros por tu cuenta, por supuesto. Pero si lo que buscas no es solo caminar, sino entender la geología, descubrir los rincones que no salen en los mapas y compartir la energía con un grupo auténtico, una experiencia guiada marca la diferencia.',
          'En TRUE, no te llevamos a dar un paseo turístico impersonal. Te acompañamos a explorar el cañón paso a paso, conectando con la historia, las leyendas locales y la naturaleza de Sierra Nevada. Porque al final, nadie recuerda el precio de una excursión; lo que recuerdas es la sensación de cruzar el puente colgante, la risa compartida al pasar a gatas por una roca y la desconexión total de la rutina.',
        ],
      },
    ],
    finalCta: {
      icon: '🥾',
      title: '¿Te vienes a explorar la Granada de verdad?',
      subtitle: 'Diseñamos tu ruta por Los Cahorros combinando e-bike, senderismo y la mejor vibra local.',
      linkText: 'Hablar con el equipo por WhatsApp →',
      href: `https://wa.me/34689507099?text=${encodeURIComponent('Hola TRUE 👋 Quiero explorar Los Cahorros de Monachil. ¿Me ayudáis a organizarlo?')}`,
    },
  },
  {
    slug: 'mejores-miradores-de-granada',
    title: 'Los mejores miradores de Granada: 6 lugares para tocar el cielo (y huir de las masas)',
    excerpt: 'Del clásico San Nicolás a los rincones que casi nadie conoce: 6 miradores para vivir Granada desde las alturas.',
    metaDescription: 'Los mejores miradores de Granada: San Nicolás, San Miguel Alto y 4 rincones menos conocidos para ver la Alhambra sin las masas de turistas.',
    keywords: [
      'miradores de Granada',
      'mejores vistas de Granada',
      'mirador de San Nicolás',
      'mirador de San Miguel Alto',
      'qué ver en el Albaicín',
      'atardecer en Granada',
    ],
    category: 'Granada de Verdad',
    cover: '/images/blog/miradores/cover.jpg',
    date: '2026-07-24',
    readTime: '7 min',
    intro: [
      'Dicen que el que no ha visto Granada, no ha visto nada. Pero nosotros vamos un paso más allá: el que solo ve Granada desde la ventanilla de un autobús turístico, se está perdiendo la verdadera magia de esta ciudad.',
      'Granada es una ciudad esculpida entre colinas, lo que la convierte en un laberinto perfecto lleno de balcones naturales. Buscar las mejores vistas de Granada no es solo una actividad fotográfica; es un ritual. Es el momento del día en el que el tiempo se detiene, la luz cambia de color y conectas de verdad con el lugar.',
      'Si quieres huir del turismo impersonal y descubrir los miradores de Granada donde realmente se esconde la esencia local, guarda esta lista.',
    ],
    items: [
      {
        number: 1,
        title: 'Mirador de San Nicolás: El clásico (que debes saber cuándo visitar)',
        image: '/images/blog/miradores/01-san-nicolas.jpg',
        paragraphs: [
          'No podemos hablar de los miradores de Granada sin empezar por el más famoso del mundo. El Mirador de San Nicolás, en pleno corazón del Albaicín, ofrece una postal perfecta de la Alhambra con los picos de Sierra Nevada al fondo. Bill Clinton dijo que aquí se ve el mejor atardecer del mundo, y no le faltaba razón.',
          'La realidad TRUE: al ser el punto más famoso, suele estar abarrotado de gente haciendo la misma foto para redes sociales. Si quieres vivirlo de verdad, nuestro consejo es que madrugues. Ver amanecer desde San Nicolás, en silencio absoluto, escuchando solo los primeros pájaros y viendo cómo la luz de la mañana despierta los muros de la Alhambra, es una experiencia que te transforma.',
        ],
        tip: {
          icon: '💡',
          label: 'Tip de explorador',
          text: 'Si vas por la tarde y hay demasiada multitud, baja unos metros por las escaleras hacia la Iglesia de San Nicolás o piérdete por el adarve cercano; tendrás la misma vista con la mitad de gente.',
        },
      },
      {
        number: 2,
        title: 'Mirador de San Miguel Alto: La panorámica definitiva',
        image: '/images/blog/miradores/02-san-miguel-alto.jpg',
        paragraphs: [
          'Si buscas perspectiva y espacio para respirar, tienes que subir a San Miguel Alto. Es el mirador más elevado de la ciudad, coronado por una pequeña ermita.',
          'Desde aquí, Granada se despliega por completo a tus pies. No solo ves la Alhambra en toda su extensión, sino también el Albaicín, el Sacromonte y la inmensidad de la vega granadina. La recompensa es un ambiente mucho más auténtico, humano y relajado, donde los locales se sientan en la piedra a compartir una charla mientras el sol se oculta.',
        ],
        tip: {
          icon: '🚲',
          label: 'Sube sin sudar',
          text: 'La cuesta hasta San Miguel Alto es de las más empinadas de Granada. En nuestras e-bikes, puedes subir en pocos minutos con el motor en modo asistencia, disfrutando del paisaje sin llegar sin aliento a la cima.',
        },
      },
      {
        number: 3,
        title: 'Placeta de Carvajales: El secreto escondido del Albaicín',
        image: '/images/blog/miradores/03-carvajales.jpg',
        paragraphs: [
          'Bajando por el laberinto de callejuelas del Albaicín inferior se encuentra la Placeta de Carvajales. Este no es un mirador elevado, sino una pequeña plaza escondida con una fuente y una perspectiva única.',
          'Aquí la Alhambra no se ve desde arriba, sino que se alza imponente justo frente a ti, casi dejándote sentir la cercanía de sus murallas. Es un rincón rodeado de sombra, ideal para sentarse a escuchar el correr del agua, desconectar del bullicio y disfrutar de una Granada íntima y cercana.',
        ],
      },
      {
        number: 4,
        title: 'Mirador de la Churra: La perspectiva olvidada',
        image: '/images/blog/miradores/04-la-churra.jpg',
        paragraphs: [
          'Mientras todo el mundo cruza el río Darro y sube al Albaicín para fotografiar la Alhambra, muy pocos saben que justo a los pies del propio monumento existe un rincón mágico: el Mirador de la Churra.',
          'Ubicado en el humilde y pintoresco barrio de la Churra, este mirador ofrece la vista inversa. Estás tan cerca de las paredes de la fortaleza que te sientes diminuto, mientras observas las casas blancas del Albaicín escalando la colina de enfrente. Es un lugar silencioso, solitario y con un magnetismo brutal, ideal para quienes buscan salirse de los caminos marcados.',
        ],
      },
      {
        number: 5,
        title: 'La Silla del Moro: Historia y silencio sobre el Generalife',
        image: '/images/blog/miradores/05-silla-del-moro.jpg',
        paragraphs: [
          'También conocido como el Castillo de Santa Elena, la Silla del Moro es una estructura de vigilancia construida en el siglo XIII para proteger el Generalife.',
          'Se encuentra en el cerro del Sol y, al estar ubicado por encima de la propia Alhambra, te regala una de las perspectivas más majestuosas e inusuales de todo el conjunto monumental. Llegar hasta aquí arriba es hacer un pequeño viaje en el tiempo; el entorno es puramente natural y el silencio es el verdadero protagonista del paisaje.',
        ],
        tip: {
          icon: '💡',
          label: 'Tip de explorador',
          text: 'La entrada suele ser gratuita los fines de semana. Es el lugar perfecto para combinarlo con una ruta en bici por la dehesa del Generalife.',
        },
      },
      {
        number: 6,
        title: 'Llano de la Perdiz: Conexión y naturaleza pura',
        image: '/images/blog/miradores/06-llano-de-la-perdiz.jpg',
        paragraphs: [
          'Si lo tuyo es la naturaleza en estado puro, el Llano de la Perdiz es el mirador definitivo. Es el parque natural que se extiende detrás de la Alhambra y el Generalife, un pulmón verde donde los granadinos van a correr, montar en bici y hacer senderismo.',
          'No busques aquí una terraza empedrada con música; el Llano de la Perdiz te ofrece senderos de tierra, pinares y miradores naturales desde donde contemplar Sierra Nevada y los valles circundantes. Es un lugar para respirar aire puro, estirar las piernas y recordar que las mejores historias se viven paso a paso, lejos del asfalto.',
        ],
      },
    ],
    conclusion: {
      title: '¿Desde dónde vas a mirar hoy?',
      paragraphs: [
        'Los miradores de Granada son mucho más que lugares para coleccionar fotos en la galería del móvil. Son espacios reales para conectar con la historia, con la naturaleza y con uno mismo. Ya sea trepando hasta las alturas de San Miguel Alto o escondiéndote en el silencio de la Churra, cada rincón te cuenta una historia diferente de la ciudad.',
        'En TRUE, creemos que viajar es implicarse con el destino, no solo contemplarlo desde la barrera. Si estás listo para descubrir la Granada de verdad, estamos listos para llevarte.',
      ],
    },
    finalCta: {
      icon: '🚲',
      title: '¿Quieres recorrer los mejores miradores de Granada en e-bike?',
      subtitle: 'Subimos a los puntos más altos sin esfuerzo, paramos en los rincones secretos y terminamos con la mejor vibra.',
      linkText: 'Reservar mi ruta por los miradores por WhatsApp →',
      href: `https://wa.me/34689507099?text=${encodeURIComponent('Hola TRUE 👋 Quiero reservar una ruta por los miradores de Granada en e-bike. ¿Tenéis disponibilidad?')}`,
    },
  },
];

export const BLOG_LIST = BLOG_POSTS;
