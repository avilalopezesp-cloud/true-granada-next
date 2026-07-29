import ExperienceJourneyPage from '@/components/ExperienceJourneyPage';
import { EXPERIENCES } from '@/data/experiences';

const exp = EXPERIENCES.ebike;

export const metadata = {
  title: `${exp.name} — TRUE Granada`,
  description: exp.desc,
  openGraph: {
    type: 'website',
    title: `${exp.name} — TRUE Granada`,
    description: exp.desc,
    images: [exp.cover],
    locale: 'es_ES',
  },
};

export default function EbikePage() {
  return (
    <ExperienceJourneyPage
      exp={exp}
      headline={<>Granada no se recorre. <em className="font-light italic text-gold">Se diseña.</em></>}
      stopsTitle="5 paradas, la ruta la haces tú"
      closingTitle="¿Listos para pedalear?"
      closingText="E-bike y casco incluidos, guía local y grupos de máximo 6 personas. Escríbenos y en menos de 1 hora tenéis todo organizado."
    />
  );
}
