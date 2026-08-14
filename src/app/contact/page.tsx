import type { Metadata } from "next";
import { Contact } from "@/components/Contact";
import { PageHero } from "@/components/PageHero";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Visit ${site.name}, call a counsellor, or submit an enquiry to enrol for the upcoming academic session.`,
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ course?: string }>;
}) {
  const { course } = await searchParams;
  return (
    <main id="main">
      <PageHero
        eyebrow="Get in touch"
        title="Visit Deshmukh Coaching Institute"
        description="Book a free counselling session and find the right course, batch, and preparation plan."
      />
      <Contact defaultCourse={course ?? ""} />
    </main>
  );
}
