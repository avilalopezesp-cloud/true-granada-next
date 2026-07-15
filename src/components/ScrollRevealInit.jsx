'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Mounted once near the root, but re-scans on every route change. Observes
// every `.reveal` element on the current page and adds `.in-view` when it
// scrolls into frame, matching the CSS transition defined in globals.css.
// The App Router keeps this component mounted across client-side navigations
// (it lives in the root layout), so without re-running on pathname change,
// `.reveal` elements on any page other than the first one loaded would never
// get observed and would stay stuck at opacity:0. No visual output of its own.
export default function ScrollRevealInit() {
  const pathname = usePathname();

  useEffect(() => {
    const revealEls = document.querySelectorAll('.reveal:not(.in-view)');
    if (!('IntersectionObserver' in window)) {
      revealEls.forEach((el) => el.classList.add('in-view'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    revealEls.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
