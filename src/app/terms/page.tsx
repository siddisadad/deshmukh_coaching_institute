import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `Website terms for ${site.name}. Replace this template with counsel-approved terms before launch.`,
};

export default function TermsPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        description="Starter website terms. Have them reviewed before publishing fees, guarantees, or student data."
      />
      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl space-y-6 px-4 text-sm leading-7 text-muted sm:px-6 lg:px-8">
          <p>
            This website is an information and enquiry channel for {site.name}. Course descriptions,
            faculty profiles, results, testimonials, and contact details may include placeholders until
            the institute replaces them with verified information.
          </p>
          <p>
            Submitting an enquiry does not create an admission contract. Batch allocation, fees,
            refunds, and attendance rules are confirmed only during counselling and enrolment with the
            institute.
          </p>
          <p>
            Sample statistics and achiever cards are illustrative. Do not treat unpublished or
            placeholder results as guarantees of academic outcomes. Replace this page with your
            institute’s official terms covering fees, discipline, and intellectual property in study
            material.
          </p>
          <p>Last updated: 14 August 2026.</p>
        </div>
      </section>
    </main>
  );
}
