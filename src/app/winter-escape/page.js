import WinterEscapeClient from './WinterEscapeClient';

export const metadata = {
  title: 'TRUE Winter Escape — Granada, enero 2027',
  description:
    'Una semana de aventura, cultura y naturaleza en Granada: vía ferrata, barranquismo, raquetas en Sierra Nevada, e-bike hasta Guadix, la Alhambra y flamenco. 7 días, 6 noches, máximo 16 viajeros.',
  openGraph: {
    type: 'website',
    title: 'TRUE Winter Escape — Granada, enero 2027',
    description: 'Una semana de aventura, cultura y naturaleza. La Granada que no sale en las guías.',
    images: ['/images/ebike-real-4.jpg'],
    locale: 'es_ES',
  },
};

export default function WinterEscapePage() {
  return <WinterEscapeClient />;
}
