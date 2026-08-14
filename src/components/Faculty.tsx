import Image from "next/image";
import { PlaceholderNote } from "@/components/PlaceholderNote";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { faculty } from "@/content/site";

export function Faculty() {
  return (
    <section id="faculty" className="scroll-mt-28 bg-surface py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Teachers"
          title="Meet Our Expert Faculty"
          description="Placeholder faculty profiles until real photographs, qualifications, and introductions are supplied."
        />
        <div className="mt-6 flex justify-center">
          <PlaceholderNote>Sample faculty cards — replace with actual teacher information</PlaceholderNote>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {faculty.map((person, index) => (
            <Reveal key={person.slug} delay={index * 70}>
              <article className="group overflow-hidden rounded-[1.7rem] bg-white shadow-soft ring-1 ring-line">
                <div className="relative h-64">
                  <Image
                    src={person.image.src}
                    alt={person.image.alt}
                    fill
                    className="object-cover object-top transition duration-500 group-hover:scale-105"
                    sizes="(min-width: 1280px) 280px, (min-width: 768px) 50vw, 100vw"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-navy/90 px-3 py-1 text-xs font-bold text-gold">
                    {person.subject}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-extrabold text-navy">{person.name}</h3>
                  <p className="mt-1 text-sm text-muted">{person.qualification}</p>
                  <p className="mt-1 text-sm font-semibold text-navy">{person.experience}</p>
                  <p className="mt-3 text-sm leading-6 text-muted">{person.intro}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
