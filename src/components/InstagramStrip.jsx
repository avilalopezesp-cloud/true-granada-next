export default function InstagramStrip() {
  return (
    <section className="bg-paper py-[60px]">
      <div className="reveal mx-auto max-w-[1160px] px-7 text-center">
        <p className="mb-7 text-[13px] text-ink2">
          Síguenos en{' '}
          <a href="#" className="font-semibold text-ink underline decoration-black/10">@betrue.granada</a>
        </p>
        <blockquote className="mx-auto mb-6 max-w-[520px] font-serif text-[clamp(1.2rem,3vw,1.8rem)] font-light italic leading-[1.5] text-ink">
          &quot;Así se vive Granada. <em className="not-italic text-gold2">De verdad.</em>&quot;
        </blockquote>
        <a
          href="https://wa.me/34689507099"
          className="inline-flex items-center gap-2.5 rounded bg-ink px-7 py-[15px] text-sm font-semibold tracking-[.02em] text-cream transition-all hover:-translate-y-0.5 hover:bg-gold2"
        >
          Reservar por WhatsApp →
        </a>
      </div>
    </section>
  );
}
