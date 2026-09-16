import { notFound } from 'next/navigation';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { BLOG_LIST } from '@/data/blog';
import BlogPostClient from './BlogPostClient';

export function generateStaticParams() {
  return BLOG_LIST.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = BLOG_LIST.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} — TRUE Granada`,
    description: post.metaDescription,
    keywords: post.keywords,
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.metaDescription,
      images: [post.cover],
      locale: 'es_ES',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.metaDescription,
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = BLOG_LIST.find((p) => p.slug === slug);
  if (!post) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.metaDescription,
    image: [post.cover],
    datePublished: post.date,
    author: { '@type': 'Organization', name: 'TRUE Granada' },
    publisher: { '@type': 'Organization', name: 'TRUE Granada' },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav />
      <BlogPostClient slug={slug} />
      <Footer />
    </>
  );
}
