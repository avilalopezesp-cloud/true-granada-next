import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { BLOG_POSTS } from '@/data/blog';

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
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
  const post = BLOG_POSTS.find((p) => p.slug === slug);
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

      <article>
        <header className="relative flex min-h-[60vh] items-end overflow-hidden px-7 pb-14 pt-32">
          <Image src={post.cover} alt={post.title} fill priority className="absolute inset-0 z-0 object-cover" />
          <div className="absolute inset-0 z-0 bg-[linear-gradient(to_bottom,rgba(30,26,20,.35)_0%,rgba(30,26,20,.85)_100%)]" />
          <div className="relative z-10 mx-auto w-full max-w-[760px]">
            <p className="mb-4 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[.22em] text-gold">
              {post.category} <span className="text-white/40">·</span> {post.readTime} de lectura
            </p>
            <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3rem)] font-bold leading-[1.15] text-white">
              {post.title}
            </h1>
          </div>
        </header>

        <div className="bg-paper py-16">
          <div className="mx-auto max-w-[720px] px-7">
            <div className="mb-12 text-[17px] leading-[1.8] text-ink2">
              {post.intro.map((p, i) => (
                <p key={i} className="mb-4">{p}</p>
              ))}
            </div>

            <div className="flex flex-col gap-14">
              {post.items.map((item) => (
                <BlogItem key={item.title} item={item} postTitle={post.title} />
              ))}
            </div>

            {post.conclusion && (
              <div className="mt-16 border-t border-black/10 pt-12">
                <h2 className="mb-4 font-serif text-2xl font-bold text-ink">{post.conclusion.title}</h2>
                {post.conclusion.paragraphs.map((p, i) => (
                  <p key={i} className="mb-4 text-[16px] leading-[1.8] text-ink2">{p}</p>
                ))}
              </div>
            )}

            <div className="mt-10 rounded-[14px] bg-ink px-8 py-10 text-center">
              <p className="mb-3 text-2xl">{post.finalCta.icon}</p>
              <h3 className="mb-2 font-serif text-xl font-bold text-white">{post.finalCta.title}</h3>
              <p className="mb-6 text-[14.5px] text-white/60">{post.finalCta.subtitle}</p>
              <a
                href={post.finalCta.href}
                className="inline-flex items-center gap-2.5 rounded bg-gold px-7 py-[15px] text-sm font-bold text-ink transition-all hover:-translate-y-0.5 hover:bg-gold2 hover:text-white"
              >
                {post.finalCta.linkText}
              </a>
            </div>

            <div className="mt-10 text-center">
              <Link href="/blog" className="text-sm font-semibold text-ink3 underline hover:text-gold2">
                ← Ver todas las guías
              </Link>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </>
  );
}

function BlogItem({ item, postTitle }) {
  return (
    <div>
      {item.number && (
        <span className="mb-2 block font-serif text-4xl font-bold text-gold/30">{String(item.number).padStart(2, '0')}</span>
      )}
      <h2 className="mb-4 font-serif text-2xl font-bold leading-[1.25] text-ink">{item.title}</h2>
      {item.image && (
        <Image
          src={item.image}
          alt={`${postTitle} — ${item.title}`}
          width={800}
          height={500}
          className="mb-5 aspect-video w-full rounded-[10px] object-cover"
        />
      )}
      {item.paragraphs && item.paragraphs.map((p, i) => (
        <p key={i} className="mb-4 text-[16px] leading-[1.8] text-ink2">{p}</p>
      ))}
      {item.list && (
        <ul className="mb-4 flex flex-col gap-3">
          {item.list.map((li) => (
            <li key={li.label} className="flex gap-3">
              <span className="flex-shrink-0 text-xl">{li.icon}</span>
              <p className="text-[15.5px] leading-[1.7] text-ink2">
                <strong className="font-bold text-ink">{li.label}</strong>: {li.text}
              </p>
            </li>
          ))}
        </ul>
      )}
      {item.tip && (
        <div className="mt-5 rounded-[10px] border border-gold/30 bg-cream2 p-5">
          <p className="mb-1 text-[11px] font-semibold uppercase tracking-[.1em] text-gold2">
            {item.tip.icon} {item.tip.label}
          </p>
          <p className="text-[14.5px] leading-[1.7] text-ink2">{item.tip.text}</p>
        </div>
      )}
      {item.cta && (
        <p className="mt-5 rounded-[10px] border border-gold/30 bg-cream2 p-5 text-[15px] leading-[1.7] text-ink2">
          {item.cta.icon} {item.cta.text}{' '}
          <Link href={item.cta.href} className="font-semibold text-gold2 underline hover:text-gold">
            {item.cta.linkText}
          </Link>
          {item.cta.suffix && ` ${item.cta.suffix}`}
        </p>
      )}
    </div>
  );
}
