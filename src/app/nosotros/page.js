import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import WhatIsTrue from '@/components/WhatIsTrue';
import WhyTrue from '@/components/WhyTrue';
import NosotrosHero from './NosotrosHero';

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
      <NosotrosHero />
      <WhatIsTrue />
      <WhyTrue />
      <Footer />
    </>
  );
}
