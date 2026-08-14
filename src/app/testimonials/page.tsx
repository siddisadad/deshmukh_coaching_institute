import type { Metadata } from "next";
import { CounsellingCta } from "@/components/CounsellingCta";
import { PageHero } from "@/components/PageHero";
import { Testimonials } from "@/components/Testimonials";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Testimonials",
  description: `What students and parents say about ${site.name}. Placeholder quotes until genuine testimonials are collected.`,
};

export default function TestimonialsPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Voices"
        title="What Students & Parents Say"
        description="Honest conversations about teaching quality, tests, and support. Replace these samples with permissioned quotes."
        crumbs={[{ label: "Home", href: "/" }, { label: "Testimonials" }]}
      />
      <Testimonials />
      <CounsellingCta />
    </main>
  );
}
