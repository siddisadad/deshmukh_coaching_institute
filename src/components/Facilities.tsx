import { FacilityGallery } from "@/components/FacilityGallery";
import { SectionHeading } from "@/components/SectionHeading";
import { facilities } from "@/content/site";

export function Facilities() {
  return (
    <section id="facilities" className="scroll-mt-28 bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Campus"
          title={facilities.heading}
          description="Replace these photographs with images of your actual classrooms, labs, and study spaces."
        />
        <FacilityGallery />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.cards.map((card) => (
            <article key={card.title} className="rounded-3xl bg-surface p-5 ring-1 ring-line">
              <h3 className="text-lg font-bold text-navy">{card.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{card.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
