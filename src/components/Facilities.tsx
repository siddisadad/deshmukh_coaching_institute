import Image from "next/image";
import { Reveal } from "@/components/Reveal";
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

        <div className="masonry mt-12">
          {facilities.gallery.map((item, index) => (
            <Reveal key={item.src} className="masonry-item" delay={index * 40}>
              <figure className="overflow-hidden rounded-3xl bg-surface shadow-soft">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={900}
                  height={index % 3 === 0 ? 1100 : 720}
                  className="h-auto w-full object-cover"
                />
                <figcaption className="px-4 py-3 text-sm font-semibold text-navy">
                  {item.label}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

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
