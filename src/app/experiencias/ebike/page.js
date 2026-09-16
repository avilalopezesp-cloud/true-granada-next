import { EXPERIENCES_ES } from '@/data/experiences';
import EbikeClient from './EbikeClient';

const exp = EXPERIENCES_ES.ebike;

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
  return <EbikeClient />;
}
