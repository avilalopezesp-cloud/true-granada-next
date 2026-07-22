import Image from 'next/image';
import Link from 'next/link';
import { BLOG_LIST } from '@/data/blog';

export default function Blog() {
  return (
    <section className="bg-cream2 py-[100px]" id="blog">
      <div className="mx-auto max-w-[1160px] px-7">
        <div className="reveal mb-10 flex flex-wrap items-end justify-between gap-3.5">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[.22em] text-gold2">Granada de Verdad</p>
            <h2 className="mt-2.5 font-serif text-[clamp(1.8rem,3vw,2.4rem)] font-bold">Guías para viajeros reales</h2>
          </div>
          <Link href="/blog" className="inline-flex items-center gap-2 rounded border-[1.5px] border-ink px-[26px] py-3.5 text-sm font-medium text-ink transition-all hover:-translate-y-0.5 hover:border-gold2 hover:text-gold2">
            Ver todas →
          </Link>
        </div>
        <div className="reveal-group grid grid-cols-3 gap-5 max-[760px]:grid-cols-1">
          {BLOG_LIST.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="reveal group overflow-hidden rounded-[10px] border border-black/10 bg-paper transition-all hover:-translate-y-1"
            >
              <Image
                src={post.cover}
                alt={post.title}
                width={600}
                height={338}
                className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
              <div className="p-[18px]">
                <p className="mb-2 text-[10px] font-semibold uppercase tracking-[.14em] text-gold2">{post.category}</p>
                <h3 className="mb-2 font-serif text-base font-bold leading-[1.35]">{post.title}</h3>
                <p className="text-[14.5px] leading-[1.6] text-ink2">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
