import WhatsAppIcon from './icons/WhatsAppIcon';

export default function CTAFinal() {
  return (
    <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden px-7 py-20 text-center">
      <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(30,26,20,.55),rgba(30,26,20,.8)),url('https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=1600&q=80')] bg-cover bg-center" />
      <div className="reveal relative z-10">
        <p className="mb-[18px] text-[11px] font-semibold uppercase tracking-[.22em] text-gold">¿Listo?</p>
        <h2 className="mb-[18px] font-serif text-[clamp(2.4rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-[-.01em] text-white">
          Tu aventura<br />empieza <em className="font-light italic text-gold">aquí.</em>
        </h2>
        <p className="mx-auto mb-9 max-w-[420px] text-base leading-[1.7] text-white/60">
          Cuéntanos qué buscas. Nosotros nos encargamos del resto — rápido, personal, sin formularios.
        </p>
        <div className="flex flex-wrap justify-center gap-3.5">
          <a href="#adventure" className="inline-flex items-center gap-2.5 rounded bg-gold px-7 py-[15px] text-sm font-bold text-ink transition-all hover:-translate-y-0.5 hover:bg-gold2 hover:text-white">
            ✨ Diseñar mi aventura
          </a>
          <a href="https://wa.me/34689507099" className="inline-flex items-center gap-2.5 rounded bg-wa px-7 py-[15px] text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:brightness-110">
            <WhatsAppIcon size={16} />
            Escribir por WhatsApp
          </a>
        </div>
        <p className="mt-6 text-xs tracking-[.04em] text-white/30">
          📍 Plaza Larga, Albaicín · +34 689 50 70 99 · info@betrue.es
        </p>
      </div>
    </section>
  );
}
