import { PlaceholderNote } from "@/components/PlaceholderNote";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { achievers } from "@/content/site";

export function Achievers() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Achievers"
          title="Meet Our Achievers"
          description="Sample student cards. Replace names, scores, and photos with verified achiever data and consent."
        />
        <div className="mt-6 flex justify-center">
          <PlaceholderNote>Placeholder student profiles — replace before launch</PlaceholderNote>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {achievers.map((student, index) => (
            <Reveal key={student.name} delay={index * 60}>
              <article className="flex items-center gap-4 rounded-[1.6rem] bg-surface p-5 ring-1 ring-line">
                <div className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-navy to-royal text-lg font-black text-gold">
                  {student.initials}
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-navy">{student.name}</h3>
                  <p className="text-sm text-muted">
                    {student.exam} · {student.year}
                  </p>
                  <p className="mt-1 text-sm font-bold text-royal">
                    {student.score} · {student.achievement}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
