'use client';

import { createContext, useContext, useEffect, useState } from 'react';

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState('es');

  useEffect(() => {
    // One-time sync from localStorage on mount — the default 'es' state
    // above matches the server-rendered HTML, so this can't cause a
    // hydration mismatch, just a second client-only render.
    const stored = window.localStorage.getItem('true-granada-lang');
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (stored === 'en' || stored === 'es') setLangState(stored);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  function setLang(next) {
    setLangState(next);
    window.localStorage.setItem('true-granada-lang', next);
  }

  return <LanguageContext.Provider value={{ lang, setLang }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider');
  return ctx;
}

// Pick the right-language value from a { es, en } pair — falls back to es if en is missing.
export function pick(lang, pair) {
  if (!pair) return pair;
  return lang === 'en' ? pair.en ?? pair.es : pair.es;
}
