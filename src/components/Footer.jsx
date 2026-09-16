'use client';

import Image from 'next/image';
import Link from 'next/link';
import IconInstagram from './icons/IconInstagram';
import IconTikTok from './icons/IconTikTok';
import IconFacebook from './icons/IconFacebook';
import { useLanguage } from '@/i18n/LanguageContext';

const SOCIAL_LINKS = [
  { Icon: IconInstagram, label: 'Instagram', href: 'https://instagram.com/betrue.esp' },
  { Icon: IconTikTok, label: 'TikTok', href: 'https://www.tiktok.com/@betrue.es?is_from_webapp=1&sender_device=pc' },
  { Icon: IconFacebook, label: 'Facebook', href: 'https://www.facebook.com/betrue.esp' },
];

const COPY = {
  es: {
    tagline: <>Granada de Verdad.<br />Aventura · Naturaleza · Conexión.</>,
    address: 'Plaza Larga, Albaicín, Granada',
    experiencias: 'Experiencias',
    barranquismo: 'Barranquismo',
    ferrata: 'Vía Ferrata',
    ebike: 'E-Bike Tour',
    trueCol: 'TRUE',
    quienesSomos: 'Quiénes somos',
    eligeAventura: 'Elige tu aventura',
    blog: 'Blog',
    faq: 'Preguntas frecuentes',
    contacto: 'Contacto',
    legal: 'Legal',
    terminos: 'Términos',
    privacidad: 'Privacidad',
    cookies: 'Cookies',
    proximamente: '(Próximamente)',
    siguenos: 'Síguenos',
    copyright: '© 2026 TRUE Granada Experiences',
  },
  en: {
    tagline: <>The Real Granada.<br />Adventure · Nature · Connection.</>,
    address: 'Plaza Larga, Albaicín, Granada',
    experiencias: 'Experiences',
    barranquismo: 'Canyoning',
    ferrata: 'Via Ferrata',
    ebike: 'E-Bike Tour',
    trueCol: 'TRUE',
    quienesSomos: 'About Us',
    eligeAventura: 'Choose Your Adventure',
    blog: 'Blog',
    faq: 'FAQ',
    contacto: 'Contact',
    legal: 'Legal',
    terminos: 'Terms',
    privacidad: 'Privacy',
    cookies: 'Cookies',
    proximamente: '(Coming soon)',
    siguenos: 'Follow Us',
    copyright: '© 2026 TRUE Granada Experiences',
  },
};

export default function Footer() {
  const { lang } = useLanguage();
  const c = COPY[lang];

  return (
    <footer className="border-t border-white/[.06] bg-ink px-7 pb-8 pt-[60px]">
      <div className="mx-auto mb-12 grid max-w-[1160px] grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-10 max-sm:grid-cols-1 sm:max-md:grid-cols-2">
        <div>
          <Image src="/images/logo-true.png" alt="T.R.U.E. Albaycín" width={917} height={500} className="mb-3 h-[58px] w-auto opacity-95" />
          <p className="mb-[18px] text-[13.5px] leading-[1.7] text-white/45">{c.tagline}</p>
          <div>
            <a href="tel:+34689507099" className="mb-[5px] block text-[13.5px] text-white/60 transition-colors hover:text-gold">+34 689 50 70 99</a>
            <a href="mailto:info@betrue.es" className="mb-[5px] block text-[13.5px] text-white/60 transition-colors hover:text-gold">info@betrue.es</a>
            <span className="mb-[5px] block text-[13.5px] text-white/60">{c.address}</span>
          </div>
        </div>

        <div>
          <div className="mb-3.5 text-[10px] font-semibold uppercase tracking-[.16em] text-gold">{c.experiencias}</div>
          <Link href="/experiencias/barranquismo" className="mb-2 block text-[13.5px] text-white/55 transition-colors hover:text-white">{c.barranquismo}</Link>
          <Link href="/experiencias/ferrata" className="mb-2 block text-[13.5px] text-white/55 transition-colors hover:text-white">{c.ferrata}</Link>
          <Link href="/experiencias/ebike" className="mb-2 block text-[13.5px] text-white/55 transition-colors hover:text-white">{c.ebike}</Link>
        </div>

        <div>
          <div className="mb-3.5 text-[10px] font-semibold uppercase tracking-[.16em] text-gold">{c.trueCol}</div>
          <Link href="/nosotros" className="mb-2 block text-[13.5px] text-white/55 transition-colors hover:text-white">{c.quienesSomos}</Link>
          <Link href="/#adventure" className="mb-2 block text-[13.5px] text-white/55 transition-colors hover:text-white">{c.eligeAventura}</Link>
          <Link href="/blog" className="mb-2 block text-[13.5px] text-white/55 transition-colors hover:text-white">{c.blog}</Link>
          <Link href="/preguntas-frecuentes" className="mb-2 block text-[13.5px] text-white/55 transition-colors hover:text-white">{c.faq}</Link>
          <Link href="/contacto" className="mb-2 block text-[13.5px] text-white/55 transition-colors hover:text-white">{c.contacto}</Link>
        </div>

        <div>
          <div className="mb-3.5 text-[10px] font-semibold uppercase tracking-[.16em] text-gold">{c.legal}</div>
          <span className="mb-2 block text-[13.5px] text-white/25">{c.terminos} <em className="not-italic text-white/15">{c.proximamente}</em></span>
          <span className="mb-2 block text-[13.5px] text-white/25">{c.privacidad} <em className="not-italic text-white/15">{c.proximamente}</em></span>
          <span className="mb-2 block text-[13.5px] text-white/25">{c.cookies} <em className="not-italic text-white/15">{c.proximamente}</em></span>
        </div>

        <div>
          <div className="mb-3.5 text-[10px] font-semibold uppercase tracking-[.16em] text-gold">{c.siguenos}</div>
          {SOCIAL_LINKS.map(({ Icon, label, href }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" className="mb-2 flex items-center gap-2 text-[13.5px] text-white/55 transition-colors hover:text-white">
              <Icon className="h-4 w-4 flex-shrink-0" />
              {label}
            </a>
          ))}
        </div>
      </div>

      <div className="mx-auto flex max-w-[1160px] items-center justify-center border-t border-white/[.06] pt-6">
        <span className="text-[11.5px] text-white/35">{c.copyright}</span>
      </div>
    </footer>
  );
}
