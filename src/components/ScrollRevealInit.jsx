'use client';

import { useLayoutEffect } from 'react';
import { usePathname } from 'next/navigation';

// Mounted once near the root, but re-scans on every route change. `.reveal`
// elements are visible by default (see globals.css) — this only opts
// currently-off-screen ones into the hidden "pre-reveal" state and adds
// `.in-view` back once they scroll into frame. If this effect never runs
// (a hydration error, a slow/blocked script, JS disabled) nothing ever gets
// hidden in the first place, so content simply loses the fade-in instead of
// staying invisible forever — that failure mode is what caused a real blank
// page on mobile before this component opted into hiding instead of the CSS.
export default function ScrollRevealInit() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    const revealEls = document.querySelectorAll('.reveal:not(.in-view)');
    if (!('IntersectionObserver' in window)) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('pre-reveal');
            entry.target.classList.add('in-view');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -10% 0px' }
    );

    revealEls.forEach((el) => {
      const rect = el.getBoundingClientRect();
      const alreadyVisible = rect.top < window.innerHeight && rect.bottom > 0;
      if (alreadyVisible) {
        el.classList.add('in-view');
      } else {
        el.classList.add('pre-reveal');
        io.observe(el);
      }
    });

    return () => io.disconnect();
  }, [pathname]);

  return null;
}
