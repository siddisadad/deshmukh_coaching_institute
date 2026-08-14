import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { learningSteps } from "@/content/site";

export function LearningProcess() {
  return (
    <section className="section-grid bg-surface py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Method"
          title="Our Approach to Better Learning"
          description="A repeatable cycle that turns classroom teaching into measurable improvement."
        />

        <div className="relative mt-14 hidden lg:grid lg:grid-cols-5 lg:gap-6">
          <div className="absolute left-[10%] right-[10%] top-8 h-px bg-gradient-to-r from-royal via-accent to-gold" />
          {learningSteps.map((step, index) => (
            <Reveal key={step.n} delay={index * 90}>
              <article className="relative text-center">
                <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-navy text-lg font-black text-gold shadow-card ring-4 ring-white">
                  {step.n}
                </div>
                <h3 className="mt-5 text-xl font-extrabold text-navy">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{step.text}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <ol className="relative mt-12 space-y-6 border-l-2 border-royal/20 pl-6 lg:hidden">
          {learningSteps.map((step) => (
            <li key={step.n} className="relative">
              <span className="absolute -left-[33px] grid h-8 w-8 place-items-center rounded-full bg-navy text-xs font-black text-gold">
                {step.n}
              </span>
              <h3 className="text-lg font-bold text-navy">{step.title}</h3>
              <p className="mt-1 text-sm text-muted">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
