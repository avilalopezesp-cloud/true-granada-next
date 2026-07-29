import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Experiences from '@/components/Experiences';

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

      <section className="bg-ink px-7 pb-16 pt-32 text-center">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[.22em] text-gold">Vive Granada</p>
        <h1 className="mx-auto max-w-[640px] font-serif text-[clamp(2rem,4.5vw,3.2rem)] font-bold leading-[1.1] text-white">
          Experiencias diseñadas por locales, no por catálogo
        </h1>
      </section>

      <Experiences />

      <Footer />
    </>
  );
}
