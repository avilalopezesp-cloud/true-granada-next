import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import FAQAccordion from '@/components/FAQAccordion';
import FaqHero from './FaqHero';

export const metadata = {
  title: 'Preguntas frecuentes — TRUE Granada',
  description: 'Todo lo que necesitas saber sobre TRUE Granada: qué experiencias ofrecemos, cómo funciona una reserva y por qué no somos una empresa de tours más.',
  openGraph: {
    type: 'website',
    title: 'Preguntas frecuentes — TRUE Granada',
    description: 'Todo lo que necesitas saber sobre TRUE Granada.',
    locale: 'es_ES',
  },
};

export default function FAQPage() {
  return (
    <>
      <Nav />
      <FaqHero />

      <section className="bg-paper py-20">
        <div className="px-7">
          <FAQAccordion />
        </div>
      </section>

      <Footer />
    </>
  );
}
