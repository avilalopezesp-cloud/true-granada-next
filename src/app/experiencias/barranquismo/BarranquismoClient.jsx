'use client';

import ExperienceJourneyPage from '@/components/ExperienceJourneyPage';
import { getExperiences } from '@/data/experiences';
import { useLanguage } from '@/i18n/LanguageContext';

const COPY = {
  es: {
    headline: <>Río Verde no se cuenta. <em className="font-light italic text-gold">Se salta.</em></>,
    stopsTitle: '5 paradas, una sola aventura',
    closingTitle: '¿Listos para saltar?',
    closingText: 'Guía certificado, equipo incluido y grupos de máximo 8 personas. Escríbenos y en menos de 1 hora tenéis todo organizado.',
  },
  en: {
    headline: <>Río Verde isn&apos;t told. <em className="font-light italic text-gold">It&apos;s jumped.</em></>,
    stopsTitle: '5 stops, one single adventure',
    closingTitle: 'Ready to jump?',
    closingText: 'Certified guide, gear included and groups of up to 8 people. Message us and everything is organized in under an hour.',
  },
};

export default function BarranquismoClient() {
  const { lang } = useLanguage();
  const exp = getExperiences(lang).barranquismo;
  const c = COPY[lang];

  return (
    <ExperienceJourneyPage
      exp={exp}
      headline={c.headline}
      stopsTitle={c.stopsTitle}
      closingTitle={c.closingTitle}
      closingText={c.closingText}
    />
  );
}
