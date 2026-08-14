import type { Metadata } from "next";
import { Courses } from "@/components/Courses";
import { CounsellingCta } from "@/components/CounsellingCta";
import { PageHero } from "@/components/PageHero";
import { Subjects } from "@/components/Subjects";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Courses",
  description: `School coaching, board exam preparation, foundation programmes, and competitive exam classes at ${site.name}.`,
};

export default function CoursesPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Programmes"
        title="Courses Designed For Your Success"
        description="Explore structured programmes for school academics, board examinations, foundation building, and competitive preparation."
      />
      <Courses />
      <Subjects />
      <CounsellingCta />
    </main>
  );
}
