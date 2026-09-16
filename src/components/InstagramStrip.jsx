'use client';

import { useLanguage } from '@/i18n/LanguageContext';

const COPY = {
  es: {
    follow: 'Síguenos en',
    quote: <>&quot;Así se vive Granada. <em className="not-italic font-bold text-gold2">De verdad.</em>&quot;</>,
    cta: 'Reservar por WhatsApp →',
  },
  en: {
    follow: 'Follow us on',
    quote: <>&quot;This is how you live Granada. <em className="not-italic font-bold text-gold2">For real.</em>&quot;</>,
    cta: 'Book on WhatsApp →',
  },
};

export default function InstagramStrip() {
  const { lang } = useLanguage();
  const c = COPY[lang];

  return (
    <section className="bg-paper py-[60px]">
      <div className="reveal mx-auto max-w-[1160px] px-7 text-center">
        <p className="mb-7 text-[13px] text-ink2">
          {c.follow}{' '}
          <a href="https://instagram.com/betrue.esp" target="_blank" rel="noreferrer" className="font-semibold text-ink underline decoration-black/10">@betrue.esp</a>
        </p>
        <blockquote className="mx-auto mb-6 max-w-[520px] font-serif text-[clamp(1.2rem,3vw,1.8rem)] font-normal italic leading-[1.5] text-ink">
          {c.quote}
        </blockquote>
        <a
          href="https://wa.me/34689507099"
          className="inline-flex items-center gap-2.5 rounded bg-ink px-7 py-[15px] text-sm font-semibold tracking-[.02em] text-cream transition-all hover:-translate-y-0.5 hover:bg-gold2"
        >
          {c.cta}
        </a>
      </div>
    </section>
  );
}
