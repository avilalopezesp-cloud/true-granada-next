import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import ContactoHero from './ContactoHero';

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
      <ContactoHero />

      <section className="bg-ink px-7 pb-20">
        <ContactForm />
      </section>

      <Footer />
    </>
  );
}
