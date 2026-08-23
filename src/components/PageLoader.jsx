'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

// Full-screen splash shown only when the site is opened at the homepage —
// fades out on its own after a short beat. Any other URL (a direct link to
// /experiencias, a refresh on /contacto, etc.) skips it entirely.
export default function PageLoader() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFading(true), 1000);
    const hideTimer = setTimeout(() => setVisible(false), 1400);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (pathname !== '/' || !visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[500] flex items-center justify-center bg-ink transition-opacity duration-400 ${
        fading ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
    >
      <div className="relative flex h-44 w-44 items-center justify-center">
        <span className="absolute inset-0 rounded-full border-2 border-gold/15" />
        <span className="absolute inset-0 animate-[pageLoaderSpin_1.1s_linear_infinite] rounded-full border-2 border-transparent border-t-gold border-r-gold/40" />
        <Image src="/images/logo-true.png" alt="T.R.U.E. Albaycín" width={917} height={500} priority className="h-[76px] w-auto object-contain" />
      </div>
    </div>
  );
}
