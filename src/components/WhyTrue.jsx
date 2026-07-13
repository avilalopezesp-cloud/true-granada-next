const CARDS = [
  { icon: '🏡', title: 'Somos locales de verdad', text: 'No somos una plataforma. Somos gente del Albaicín. Conocemos cada mirador, cada calle, cada historia.' },
  { icon: '👂', title: 'Primero te escuchamos', text: 'No te vendemos un paquete fijo. Preguntamos qué quieres y diseñamos la experiencia para ti.' },
  { icon: '👥', title: 'Grupos pequeños', text: 'Máximo 8–10 personas. Sin autobuses. Sin masificación. Atención real en todo momento.' },
  { icon: '📲', title: 'WhatsApp directo', text: 'Sin formularios, sin esperas. Escribes y en menos de 1 hora está todo organizado.' },
  { icon: '✅', title: 'Solo recomendamos lo que haríamos', text: 'Si no nos lo pondríamos a nosotros, no te lo recomendamos a ti. Así de simple.' },
  { icon: '🌱', title: 'Empezando, y orgullosos', text: 'Somos nuevos. Eso significa que cada cliente recibe atención de los fundadores directamente.' },
];

export default function WhyTrue() {
  return (
    <section className="bg-cream py-[100px]" id="why">
      <div className="mx-auto max-w-[1160px] px-7">
        <p className="mb-2.5 text-center text-[11px] font-semibold uppercase tracking-[.22em] text-gold2">Why TRUE</p>
        <h2 className="reveal mx-auto mb-14 max-w-[480px] text-center font-serif text-[clamp(1.8rem,3.5vw,2.6rem)] font-bold">
          Honestos. Locales.<br />Obsesionados con Granada.
        </h2>
        <div className="reveal-group grid grid-cols-2 gap-5 max-[600px]:grid-cols-1">
          {CARDS.map((card) => (
            <div key={card.title} className="reveal rounded-[10px] border border-black/10 bg-paper p-7 transition-all hover:border-gold hover:shadow-[0_4px_20px_rgba(30,26,20,.06)]">
              <div className="mb-3.5 text-[28px]">{card.icon}</div>
              <div className="mb-2 text-[15px] font-semibold">{card.title}</div>
              <div className="text-[14.5px] leading-[1.7] text-ink2">{card.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
