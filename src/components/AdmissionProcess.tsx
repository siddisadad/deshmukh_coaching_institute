import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { admissionSteps } from "@/content/site";

export function AdmissionProcess() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Admissions"
          title="From Enquiry To First Class"
          description="A clear four-step path so students and parents know exactly what happens next."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {admissionSteps.map((step, index) => (
            <Reveal key={step.n} delay={index * 80}>
              <article className="h-full rounded-[1.6rem] border border-line bg-surface p-6">
                <p className="font-display text-3xl font-semibold text-accent">{step.n}</p>
                <h3 className="mt-3 text-xl font-extrabold text-navy">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{step.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
