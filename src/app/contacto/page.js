import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Contacto — TRUE Granada',
  description: 'Escríbenos por WhatsApp o email. Sin formularios, sin esperas — te respondemos en menos de una hora.',
  openGraph: {
    type: 'website',
    title: 'Contacto — TRUE Granada',
    description: 'Escríbenos por WhatsApp o email. Sin formularios, sin esperas.',
    locale: 'es_ES',
  },
};

export default function ContactoPage() {
  return (
    <>
      <Nav />

      <section className="bg-ink px-7 pb-16 pt-32 text-center">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[.22em] text-gold">Contacto</p>
        <h1 className="mx-auto mb-4 max-w-[640px] font-serif text-[clamp(2rem,4.5vw,3.2rem)] font-bold leading-[1.1] text-white">
          ¿Hablamos de tu próxima aventura?
        </h1>
        <p className="mx-auto max-w-[440px] text-[15px] leading-[1.6] text-white/60">
          Cuéntanos qué buscas y nuestro equipo local te ayudará a encontrar la experiencia perfecta en Granada.
        </p>
      </section>

      <section className="bg-ink px-7 pb-20">
        <ContactForm />
      </section>

      <Footer />
    </>
  );
}
