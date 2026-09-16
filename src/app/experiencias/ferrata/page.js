import { EXPERIENCES_ES } from '@/data/experiences';
import FerrataClient from './FerrataClient';

const exp = EXPERIENCES_ES.ferrata;

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
  return <FerrataClient />;
}
