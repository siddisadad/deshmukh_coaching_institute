import type { Metadata } from "next";
import { Blog } from "@/components/Blog";
import { PageHero } from "@/components/PageHero";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Study Resources",
  description: `Exam preparation tips, study techniques, and academic updates from ${site.name}.`,
};

export default function BlogPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Resources"
        title="Latest Updates & Study Resources"
        description="Practical guidance for school, board, and competitive exam preparation."
        crumbs={[{ label: "Home", href: "/" }, { label: "Resources" }]}
      />
      <Blog />
    </main>
  );
}
