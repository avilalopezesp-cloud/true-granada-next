import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import BlogListClient from './BlogListClient';

export const metadata = {
  title: 'Granada de Verdad — Guías para viajeros reales | TRUE Granada',
  description: 'Guías y planes reales para vivir Granada como un local: aventura, naturaleza, miradores y rutas fuera del circuito turístico habitual.',
  openGraph: {
    type: 'website',
    title: 'Granada de Verdad — Guías para viajeros reales',
    description: 'Guías y planes reales para vivir Granada como un local.',
    locale: 'es_ES',
  },
};

export default function BlogIndexPage() {
  return (
    <>
      <Nav />
      <BlogListClient />
      <Footer />
    </>
  );
}
