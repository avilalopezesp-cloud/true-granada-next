'use client';

import ExperienceJourneyPage from '@/components/ExperienceJourneyPage';
import { getExperiences } from '@/data/experiences';
import { useLanguage } from '@/i18n/LanguageContext';

const COPY = {
  es: {
    headline: <>Sierra Nevada no se mira. <em className="font-light italic text-gold">Se escala.</em></>,
    stopsTitle: '5 paradas, una sola aventura',
    closingTitle: '¿Listos para subir?',
    closingText: 'Guía certificado, equipo de seguridad incluido y grupos de máximo 8 personas. Escríbenos y en menos de 1 hora tenéis todo organizado.',
  },
  en: {
    headline: <>Sierra Nevada isn&apos;t watched. <em className="font-light italic text-gold">It&apos;s climbed.</em></>,
    stopsTitle: '5 stops, one single adventure',
    closingTitle: 'Ready to climb?',
    closingText: 'Certified guide, safety gear included and groups of up to 8 people. Message us and everything is organized in under an hour.',
  },
};

export default function FerrataClient() {
  const { lang } = useLanguage();
  const exp = getExperiences(lang).ferrata;
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
