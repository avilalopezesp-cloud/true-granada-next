'use client';

import ExperienceJourneyPage from '@/components/ExperienceJourneyPage';
import { getExperiences } from '@/data/experiences';
import { useLanguage } from '@/i18n/LanguageContext';

const COPY = {
  es: {
    headline: <>Granada no se recorre. <em className="font-light italic text-gold">Se diseña.</em></>,
    stopsTitle: '5 paradas, la ruta la haces tú',
    closingTitle: '¿Listos para pedalear?',
    closingText: 'E-bike y casco incluidos, guía local y grupos de máximo 6 personas. Escríbenos y en menos de 1 hora tenéis todo organizado.',
  },
  en: {
    headline: <>Granada isn&apos;t toured. <em className="font-light italic text-gold">It&apos;s designed.</em></>,
    stopsTitle: '5 stops, you make the route',
    closingTitle: 'Ready to pedal?',
    closingText: 'E-bike and helmet included, local guide and groups of up to 6 people. Message us and everything is organized in under an hour.',
  },
};

export default function EbikeClient() {
  const { lang } = useLanguage();
  const exp = getExperiences(lang).ebike;
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
