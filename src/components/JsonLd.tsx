import { courses, faqs, site } from "@/content/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["EducationalOrganization", "LocalBusiness"],
        "@id": `${site.url}/#institute`,
        name: site.name,
        url: site.url,
        image: `${site.url}/images/hero/classroom.jpg`,
        description: site.seo.description,
        slogan: site.tagline,
        email: site.contact.email,
        telephone: site.contact.phone,
        foundingDate: String(site.foundedYear),
        address: {
          "@type": "PostalAddress",
          streetAddress: site.contact.addressLines[0],
          addressLocality: "[Your City]",
          addressRegion: "Maharashtra",
          postalCode: "400001",
          addressCountry: "IN",
        },
        openingHours: "Mo-Sa 08:00-20:00",
        areaServed: "IN",
        sameAs: [site.social.facebook, site.social.instagram, site.social.youtube],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Coaching programmes",
          itemListElement: courses.map((course) => ({
            "@type": "Course",
            name: course.name,
            description: course.summary,
            provider: { "@id": `${site.url}/#institute` },
            url: `${site.url}/courses/${course.slug}`,
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.name,
        publisher: { "@id": `${site.url}/#institute` },
        inLanguage: "en-IN",
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
