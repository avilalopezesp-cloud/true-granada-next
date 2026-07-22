import Image from 'next/image';
import Link from 'next/link';
import { BLOG_POSTS } from '@/data/blog';

const realPost = BLOG_POSTS[0];

const POSTS = [
  {
    img: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=600&q=80',
    alt: 'Miradores Granada',
    tag: 'Granada de Verdad #1',
    title: 'El mejor atardecer de la ciudad',
    text: 'Los miradores que los turistas no saben que existen — y cómo llegar a ellos desde el Albaicín.',
    href: null,
  },
  {
    img: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80',
    alt: 'Barranquismo Granada',
    tag: 'Granada de Verdad #2',
    title: 'Barranquismo para principiantes',
    text: 'Todo lo que necesitas saber antes de tu primera bajada por el cañón del Río Verde.',
    href: null,
  },
  {
    img: realPost.cover,
    alt: realPost.title,
    tag: realPost.category,
    title: realPost.title,
    text: realPost.excerpt,
    href: `/blog/${realPost.slug}`,
  },
];

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
          {POSTS.map((post) => {
            const card = (
              <>
                <Image src={post.img} alt={post.alt} width={600} height={338} unoptimized={post.img.startsWith('http')} className="aspect-video w-full object-cover" />
                <div className="p-[18px]">
                  <p className="mb-2 text-[10px] font-semibold uppercase tracking-[.14em] text-gold2">{post.tag}</p>
                  <h3 className="mb-2 font-serif text-base font-bold leading-[1.35]">{post.title}</h3>
                  <p className="text-[14.5px] leading-[1.6] text-ink2">{post.text}</p>
                </div>
              </>
            );
            return post.href ? (
              <Link key={post.title} href={post.href} className="reveal group overflow-hidden rounded-[10px] border border-black/10 bg-paper transition-all hover:-translate-y-1">
                {card}
              </Link>
            ) : (
              <div key={post.title} className="reveal overflow-hidden rounded-[10px] border border-black/10 bg-paper">
                {card}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
