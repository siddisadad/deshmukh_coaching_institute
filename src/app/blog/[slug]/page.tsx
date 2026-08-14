import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/Button";
import { PageHero } from "@/components/PageHero";
import { blogs, site } from "@/content/site";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return blogs.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogs.find((item) => item.slug === slug);
  if (!post) return { title: "Article" };
  return {
    title: post.title,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogs.find((item) => item.slug === slug);
  if (!post) notFound();

  return (
    <main id="main">
      <PageHero eyebrow={post.category} title={post.title} description={post.description} />
      <article className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-muted">{post.date} · {site.name}</p>
          <div className="mt-6 overflow-hidden rounded-[1.8rem]">
            <Image
              src={post.image.src}
              alt={post.image.alt}
              width={1400}
              height={800}
              className="h-[360px] w-full object-cover"
            />
          </div>
          <div className="mt-8 space-y-5 text-base leading-8 text-muted">
            {post.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-10">
            <Button href="/contact#enquiry" variant="dark">
              Book Free Counselling
            </Button>
          </div>
        </div>
      </article>
    </main>
  );
}
