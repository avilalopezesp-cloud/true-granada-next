import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Experiences from '@/components/Experiences';
import ExperienciasHero from './ExperienciasHero';

export const metadata = {
  title: 'Experiencias en Granada — Barranquismo, Vía Ferrata y E-Bike | TRUE Granada',
  description: 'Barranquismo en Río Verde, Vía Ferrata y rutas en e-bike diseñadas a tu gusto. Guías locales certificados, grupos reducidos, reserva directa por WhatsApp.',
  openGraph: {
    type: 'website',
    title: 'Experiencias en Granada — TRUE Granada',
    description: 'Barranquismo, vía ferrata y rutas en e-bike por Granada, diseñadas por locales.',
    locale: 'es_ES',
  },
};

export default function ExperienciasPage() {
  return (
    <>
      <Nav />
      <ExperienciasHero />
      <Experiences mobileCarousel={false} />
      <Footer />
    </>
  );
}
