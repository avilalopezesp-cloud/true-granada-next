import ExperienceJourneyPage from '@/components/ExperienceJourneyPage';
import { EXPERIENCES } from '@/data/experiences';

const exp = EXPERIENCES.ferrata;

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

export default function FerrataPage() {
  return (
    <ExperienceJourneyPage
      exp={exp}
      headline={<>Sierra Nevada no se mira. <em className="font-light italic text-gold">Se escala.</em></>}
      stopsTitle="5 paradas, una sola aventura"
      closingTitle="¿Listos para subir?"
      closingText="Guía certificado, equipo de seguridad incluido y grupos de máximo 8 personas. Escríbenos y en menos de 1 hora tenéis todo organizado."
    />
  );
}
