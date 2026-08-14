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
              <article className="relative overflow-hidden rounded-[1.6rem] bg-surface p-6 ring-1 ring-line">
                <span className="absolute right-4 top-4 rounded-full bg-gold/20 px-3 py-1 text-xs font-bold text-navy">
                  {student.year}
                </span>
                <div className="flex items-center gap-4">
                  <div className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-navy to-royal text-lg font-black text-gold">
                    {student.initials}
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold text-navy">{student.name}</h3>
                    <p className="text-sm text-muted">{student.exam}</p>
                  </div>
                </div>
                <p className="mt-4 font-display text-3xl font-semibold text-royal">{student.score}</p>
                <p className="mt-1 text-sm font-bold text-navy">{student.achievement}</p>
                <p className="mt-3 text-sm leading-6 text-muted">“{student.quote}”</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
