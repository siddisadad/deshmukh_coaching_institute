import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${site.name}. Review and replace this template with counsel-approved legal text before launch.`,
};

export default function PrivacyPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="This is a starter policy for a coaching-institute website. Have it reviewed before collecting real student data."
      />
      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl space-y-6 px-4 text-sm leading-7 text-muted sm:px-6 lg:px-8">
          <p>
            {site.name} (“we”) collects enquiry information that visitors submit through this website,
            including names, phone numbers, email addresses, class, and course interest. We use that
            information to respond to counselling requests and admission enquiries.
          </p>
          <p>
            We do not sell personal information. Access is limited to authorised institute staff who
            handle admissions and academic counselling. Enquiry records may be stored by the hosting
            provider used to run this website.
          </p>
          <p>
            Parents and students may request a correction or deletion of enquiry details by emailing{" "}
            {site.contact.email} or calling {site.contact.phoneDisplay}. Replace this page with a
            jurisdiction-specific policy covering cookies, analytics, and any payment or attendance
            systems you add later.
          </p>
          <p>Last updated: 14 August 2026.</p>
        </div>
      </section>
    </main>
  );
}
