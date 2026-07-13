const STEPS = [
  { n: 1, title: 'Cuéntanos qué buscas', text: 'Responde 6 preguntas rápidas sobre cómo quieres vivir Granada.' },
  { n: 2, title: 'Diseñamos una propuesta', text: 'Nuestro sistema elige la experiencia que más encaja con tu perfil.' },
  { n: 3, title: 'Confirmamos contigo', text: 'Un mensaje de WhatsApp y en menos de 1 hora todo está listo.' },
  { n: 4, title: 'Vive Granada', text: 'Sin estrés. Sin catálogos. Solo la experiencia que querías.' },
];

export default function HowItWorks() {
  return (
    <section className="bg-cream2 py-[100px]">
      <div className="mx-auto max-w-[1160px] px-7">
        <p className="text-center text-[11px] font-semibold uppercase tracking-[.22em] text-gold2">Simple</p>
        <h2 className="my-3.5 mb-14 text-center font-serif text-[clamp(1.8rem,3.5vw,2.6rem)] font-bold">¿Cómo funciona?</h2>
        <div className="reveal-group relative grid grid-cols-4 max-[680px]:grid-cols-2">
          <div className="absolute inset-x-[12%] top-7 hidden h-px bg-black/10 min-[681px]:block" />
          {STEPS.map((step) => (
            <div key={step.n} className="reveal relative z-10 px-4 text-center">
              <div className="mx-auto mb-[18px] flex h-14 w-14 items-center justify-center rounded-full border-[1.5px] border-black/10 bg-paper font-serif text-xl font-bold text-gold2">
                {step.n}
              </div>
              <div className="mb-2 text-sm font-semibold">{step.title}</div>
              <div className="text-[14.5px] leading-[1.6] text-ink2">{step.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
