import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { blogs } from "@/content/site";

export function Blog({ limit }: { limit?: number }) {
  const items = limit ? blogs.slice(0, limit) : blogs;

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Resources"
          title="Latest Updates & Study Resources"
          description="Guidance articles you can replace with institute notices, exam updates, and student stories."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {items.map((post, index) => (
            <Reveal key={post.slug} delay={index * 60}>
              <article className="flex h-full flex-col overflow-hidden rounded-[1.7rem] bg-white shadow-soft ring-1 ring-line">
                <div className="relative h-48">
                  <Image
                    src={post.image.src}
                    alt={post.image.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1280px) 360px, (min-width: 768px) 50vw, 100vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-royal">{post.category}</p>
                  <h3 className="mt-2 text-lg font-extrabold text-navy">{post.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-6 text-muted">{post.description}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-4 text-sm font-bold text-royal hover:text-navy"
                  >
                    Read More
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
