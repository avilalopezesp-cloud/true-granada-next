import { EXPERIENCES_ES } from '@/data/experiences';
import BarranquismoClient from './BarranquismoClient';

const exp = EXPERIENCES_ES.barranquismo;

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

export default function BarranquismoPage() {
  return <BarranquismoClient />;
}
