import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

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
          ¿Hablamos?
        </h1>
        <p className="mx-auto max-w-[440px] text-[15px] leading-[1.6] text-white/60">
          Sin formularios, sin esperas. Escríbenos y en menos de una hora tienes respuesta.
        </p>
      </section>

      <section className="bg-paper py-20">
        <div className="mx-auto flex max-w-[520px] flex-col gap-4 px-7">
          <a
            href="https://wa.me/34689507099"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2.5 rounded bg-wa px-7 py-[18px] text-[15px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:brightness-110"
          >
            <WhatsAppIcon size={18} />
            Escríbenos por WhatsApp
          </a>

          <div className="mt-6 flex flex-col items-center gap-1.5 text-center text-[13.5px] text-ink3">
            <a href="mailto:info@betrue.es" className="transition-colors hover:text-gold2">info@betrue.es</a>
            <a href="tel:+34689507099" className="transition-colors hover:text-gold2">+34 689 50 70 99</a>
            <span>Plaza Larga, Albaicín, Granada</span>
            <a href="https://instagram.com/betrue.es" target="_blank" rel="noreferrer" className="transition-colors hover:text-gold2">
              @betrue.es
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
