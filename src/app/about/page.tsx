import type { Metadata } from "next";
import { About } from "@/components/About";
import { CounsellingCta } from "@/components/CounsellingCta";
import { PageHero } from "@/components/PageHero";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { about, site } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description: `Learn about ${site.name} — quality education, strong fundamentals, exam-oriented preparation, and individual attention.`,
};

export default function AboutPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Our story"
        title={about.heading}
        description="A coaching institute built around expert teaching, disciplined study habits, and the belief that the right guidance changes outcomes."
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />
      <About showCta={false} />
      <WhyChooseUs />
      <CounsellingCta />
    </main>
  );
}
