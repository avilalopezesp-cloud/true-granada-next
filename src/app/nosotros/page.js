import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import WhatIsTrue from '@/components/WhatIsTrue';
import WhyTrue from '@/components/WhyTrue';

export const metadata = {
  title: 'Quiénes somos — TRUE Granada',
  description: 'Somos locales del Albaicín. Te escuchamos primero y diseñamos la Granada que la mayoría no llega a conocer — sin catálogos, sin masificación.',
  openGraph: {
    type: 'website',
    title: 'Quiénes somos — TRUE Granada',
    description: 'Somos locales del Albaicín, no una plataforma de tours.',
    locale: 'es_ES',
  },
};

export default function NosotrosPage() {
  return (
    <>
      <Nav />

      <section className="bg-ink px-7 pb-16 pt-32 text-center">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[.22em] text-gold">Nosotros</p>
        <h1 className="mx-auto max-w-[640px] font-serif text-[clamp(2rem,4.5vw,3.2rem)] font-bold leading-[1.1] text-white">
          Granada no se vende. Se comparte.
        </h1>
      </section>

      <WhatIsTrue />
      <WhyTrue />

      <Footer />
    </>
  );
}
