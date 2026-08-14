import { Button } from "@/components/Button";
import { PlaceholderNote } from "@/components/PlaceholderNote";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Stats } from "@/components/Stats";
import { results } from "@/content/site";

export function Results() {
  return (
    <section id="results" className="scroll-mt-28 bg-navy py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Outcomes"
          title={results.heading}
          description="A results culture built on regular testing, honest feedback, and guided improvement."
          tone="dark"
        />
        <div className="mt-6 flex justify-center">
          <PlaceholderNote>{results.note}</PlaceholderNote>
        </div>

        <div className="mt-12">
          <Stats items={results.stats} tone="dark" />
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {results.highlights.map((item, index) => (
            <Reveal key={item.title} delay={index * 40}>
              <article className="rounded-3xl bg-white p-5 text-navy">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-royal">{item.year}</p>
                <h3 className="mt-2 text-lg font-extrabold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted">{item.detail}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button href="/results">View All Results</Button>
        </div>
      </div>
    </section>
  );
}
