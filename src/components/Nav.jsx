'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const LINKS = [
  { href: '#experiences', label: 'Experiencias' },
  { href: '#adventure', label: 'Elige tu aventura' },
  { href: '#why', label: 'Nosotros' },
  { href: '#blog', label: 'Blog' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', open);
  }, [open]);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-[100] flex h-[66px] items-center justify-between border-b px-7 transition-shadow ${
        scrolled ? 'border-white/[.08] shadow-[0_6px_24px_rgba(0,0,0,.25)]' : 'border-transparent'
      }`}
    >
      <div className="absolute inset-0 -z-10 bg-[rgba(20,17,13,.88)] backdrop-blur-md" />

      <div className="flex items-center gap-2.5">
        <Image src="/images/logo-true.png" alt="T.R.U.E. Albaycín" width={917} height={500} priority className="h-[62px] w-auto" />
      </div>

      <div
        id="nav-links"
        className={`flex items-center gap-7 max-md:fixed max-md:inset-x-0 max-md:top-[66px] max-md:bottom-0 max-md:flex-col max-md:items-start max-md:gap-0 max-md:bg-[rgb(20,17,13)] max-md:px-7 max-md:pt-3 max-md:pb-10 max-md:transition-transform max-md:duration-300 ${
          open ? 'max-md:translate-x-0' : 'max-md:translate-x-full'
        }`}
      >
        {LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className="group relative pb-[3px] font-serif text-[19px] font-semibold text-[rgba(245,240,232,.85)] transition-colors hover:text-white max-md:w-full max-md:border-b max-md:border-white/[.08] max-md:py-4 max-md:text-base max-md:text-[rgba(245,240,232,.85)]"
          >
            {link.label}
            <span className="absolute inset-x-0 bottom-0 h-px origin-right scale-x-0 bg-gold transition-transform duration-300 group-hover:origin-left group-hover:scale-x-100 max-md:hidden" />
          </a>
        ))}
        <a
          href="https://wa.me/34689507099"
          onClick={() => setOpen(false)}
          className="rounded-md bg-gold px-[22px] py-[11px] font-serif text-base font-bold text-ink transition-colors hover:bg-gold2 hover:text-white max-md:mt-5 max-md:inline-flex max-md:w-full max-md:justify-center max-md:px-5 max-md:py-3.5"
        >
          Hablemos →
        </a>
      </div>

      <button
        type="button"
        aria-label="Abrir menú"
        aria-expanded={open}
        aria-controls="nav-links"
        onClick={() => setOpen((v) => !v)}
        className="z-[101] flex flex-col gap-[5px] p-1 md:hidden"
      >
        <span className={`block h-0.5 w-[22px] rounded bg-cream transition-transform ${open ? 'translate-y-[7px] rotate-45' : ''}`} />
        <span className={`block h-0.5 w-[22px] rounded bg-cream transition-opacity ${open ? 'opacity-0' : ''}`} />
        <span className={`block h-0.5 w-[22px] rounded bg-cream transition-transform ${open ? '-translate-y-[7px] -rotate-45' : ''}`} />
      </button>
    </nav>
  );
}
