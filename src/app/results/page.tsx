import type { Metadata } from "next";
import { Achievers } from "@/components/Achievers";
import { CounsellingCta } from "@/components/CounsellingCta";
import { PageHero } from "@/components/PageHero";
import { Results } from "@/components/Results";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Results",
  description: `Academic results and achiever highlights from ${site.name}. Placeholder data until verified outcomes are published.`,
};

export default function ResultsPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Outcomes"
        title="Results That Inspire Confidence"
        description="A results-first culture with regular testing and documented improvement. Replace sample highlights with verified student outcomes."
      />
      <Results />
      <Achievers />
      <CounsellingCta />
    </main>
  );
}
