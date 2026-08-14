import type { Metadata } from "next";
import { Contact } from "@/components/Contact";
import { PageHero } from "@/components/PageHero";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Enroll Now",
  description: `Apply to ${site.name} for the upcoming academic session. Speak with a counsellor and choose your batch.`,
};

export default function EnrollPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Admissions"
        title="Enroll Now"
        description="Share your details and our counsellor will help you complete admission for the upcoming academic session."
      />
      <Contact />
    </main>
  );
}
