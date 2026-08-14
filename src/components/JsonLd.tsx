import { site } from "@/content/site";

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
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.name,
        publisher: { "@id": `${site.url}/#institute` },
        inLanguage: "en-IN",
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
