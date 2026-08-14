import type { Metadata } from "next";
import { CounsellingCta } from "@/components/CounsellingCta";
import { Facilities } from "@/components/Facilities";
import { PageHero } from "@/components/PageHero";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Facilities",
  description: `Classrooms, study spaces, library, computer lab, and test rooms at ${site.name}.`,
};

export default function FacilitiesPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Campus"
        title="A Better Environment for Better Learning"
        description="Spaces designed for concentration, doubt-solving, and regular assessment."
      />
      <Facilities />
      <CounsellingCta />
    </main>
  );
}
