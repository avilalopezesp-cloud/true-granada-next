'use client';

import Image from 'next/image';
import Link from 'next/link';
import { getBlogPosts } from '@/data/blog';
import { useLanguage } from '@/i18n/LanguageContext';

const COPY = {
  es: { kicker: 'Granada de Verdad', title: 'Guías para viajeros reales', readMore: 'Leer más →' },
  en: { kicker: 'The Real Granada', title: 'Guides for real travelers', readMore: 'Read more →' },
};

export default function BlogListClient() {
  const { lang } = useLanguage();
  const c = COPY[lang];
  const posts = getBlogPosts(lang);

  return (
    <>
      <section className="bg-ink px-7 pb-16 pt-32 text-center">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[.22em] text-gold">{c.kicker}</p>
        <h1 className="mx-auto max-w-[640px] font-serif text-[clamp(2rem,4.5vw,3.2rem)] font-bold leading-[1.1] text-white">
          {c.title}
        </h1>
      </section>

      <section className="bg-paper py-20">
        <div className="mx-auto max-w-[1160px] px-7">
          <div className="grid grid-cols-3 gap-5 max-[760px]:grid-cols-1">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group overflow-hidden rounded-[10px] border border-black/10 bg-cream2 transition-all hover:-translate-y-1"
              >
                <Image
                  src={post.cover}
                  alt={post.title}
                  width={800}
                  height={500}
                  className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <div className="p-[22px]">
                  <p className="mb-2 text-[10px] font-semibold uppercase tracking-[.14em] text-gold2">{post.category}</p>
                  <h2 className="mb-2 font-serif text-lg font-bold leading-[1.35] text-ink">{post.title}</h2>
                  <p className="mb-3 text-[14.5px] leading-[1.6] text-ink2">{post.excerpt}</p>
                  <span className="text-xs font-semibold text-gold2">{c.readMore}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
