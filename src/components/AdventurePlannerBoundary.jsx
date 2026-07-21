'use client';

import { Component } from 'react';
import AdventurePlanner from './AdventurePlanner';

// AdventurePlanner is by far the most complex client component on the site
// (state machine + Framer Motion). If it ever throws during render on some
// browser we can't easily reproduce, this stops that error from leaving a
// blank panel with no way to recover — it shows a plain WhatsApp fallback
// instead so the visitor can still reach us.
export default class AdventurePlannerBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('AdventurePlanner crashed:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="rounded-2xl border border-gold/25 bg-ink px-6 py-16 text-center">
          <p className="mb-5 text-[15px] leading-[1.7] text-white/70">
            Se nos cruzó un cable. Escríbenos directamente y te ayudamos a encontrar tu experiencia.
          </p>
          <a
            href="https://wa.me/34689507099?text=Hola%20TRUE%20%F0%9F%91%8B%20quiero%20encontrar%20mi%20experiencia%20perfecta"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 rounded bg-wa px-7 py-[15px] text-sm font-semibold text-white transition-all hover:brightness-110"
          >
            Hablar por WhatsApp
          </a>
        </div>
      );
    }
    return <AdventurePlanner />;
  }
}
