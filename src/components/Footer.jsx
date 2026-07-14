import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-white/[.06] bg-ink px-7 pb-8 pt-[60px]">
      <div className="mx-auto mb-12 grid max-w-[1160px] grid-cols-[2fr_1fr_1fr_1fr] gap-10 max-sm:grid-cols-1 sm:max-md:grid-cols-2">
        <div>
          <Image src="/images/logo-true.png" alt="T.R.U.E. Albaycín" width={917} height={500} className="mb-3 h-[58px] w-auto opacity-95" />
          <p className="mb-[18px] text-[13.5px] leading-[1.7] text-white/45">
            Granada de Verdad.<br />Aventura · Naturaleza · Conexión.
          </p>
          <div>
            <a href="tel:+34689507099" className="mb-[5px] block text-[13.5px] text-white/60 transition-colors hover:text-gold">+34 689 50 70 99</a>
            <a href="mailto:info@betrue.es" className="mb-[5px] block text-[13.5px] text-white/60 transition-colors hover:text-gold">info@betrue.es</a>
            <a href="#" className="mb-[5px] block text-[13.5px] text-white/60 transition-colors hover:text-gold">Plaza Larga, Albaicín, Granada</a>
          </div>
        </div>

        <div>
          <div className="mb-3.5 text-[10px] font-semibold uppercase tracking-[.16em] text-gold">Experiencias</div>
          <Link href="/experiencias/barranquismo" className="mb-2 block text-[13.5px] text-white/55 transition-colors hover:text-white">Barranquismo</Link>
          <a href="https://betrue.es/trip/via-ferrata-adventure/" className="mb-2 block text-[13.5px] text-white/55 transition-colors hover:text-white">Vía Ferrata</a>
          <a href="https://betrue.es/trip/albayzin/" className="mb-2 block text-[13.5px] text-white/55 transition-colors hover:text-white">E-Bike Tour</a>
        </div>

        <div>
          <div className="mb-3.5 text-[10px] font-semibold uppercase tracking-[.16em] text-gold">TRUE</div>
          <Link href="/#about" className="mb-2 block text-[13.5px] text-white/55 transition-colors hover:text-white">Quiénes somos</Link>
          <Link href="/#adventure" className="mb-2 block text-[13.5px] text-white/55 transition-colors hover:text-white">Elige tu aventura</Link>
          <Link href="/#blog" className="mb-2 block text-[13.5px] text-white/55 transition-colors hover:text-white">Blog</Link>
          <a href="https://betrue.es/contact-us/" className="mb-2 block text-[13.5px] text-white/55 transition-colors hover:text-white">Contacto</a>
        </div>

        <div>
          <div className="mb-3.5 text-[10px] font-semibold uppercase tracking-[.16em] text-gold">Legal</div>
          <span className="mb-2 block text-[13.5px] text-white/25">Términos <em className="not-italic text-white/15">(Próximamente)</em></span>
          <span className="mb-2 block text-[13.5px] text-white/25">Privacidad <em className="not-italic text-white/15">(Próximamente)</em></span>
          <span className="mb-2 block text-[13.5px] text-white/25">Cookies <em className="not-italic text-white/15">(Próximamente)</em></span>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1160px] flex-wrap items-center justify-between gap-2.5 border-t border-white/[.06] pt-6">
        <span className="text-[11.5px] text-white/35">© 2026 TRUE Granada Experiences</span>
      </div>
    </footer>
  );
}
