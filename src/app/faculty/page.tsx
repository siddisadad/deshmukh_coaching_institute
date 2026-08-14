import type { Metadata } from "next";
import { CounsellingCta } from "@/components/CounsellingCta";
import { Faculty } from "@/components/Faculty";
import { PageHero } from "@/components/PageHero";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Faculty",
  description: `Meet the expert faculty at ${site.name}. Replace placeholder profiles with verified teacher information.`,
};

export default function FacultyPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Teachers"
        title="Meet Our Expert Faculty"
        description="Experienced educators focused on conceptual clarity, exam technique, and personal attention."
        crumbs={[{ label: "Home", href: "/" }, { label: "Faculty" }]}
      />
      <Faculty />
      <CounsellingCta />
    </main>
  );
}
