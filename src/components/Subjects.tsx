import {
  Atom,
  BookOpen,
  Brain,
  Calculator,
  FlaskConical,
  Globe,
  Leaf,
  Monitor,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { subjects } from "@/content/site";

const icons: Record<string, LucideIcon> = {
  Calculator,
  Atom,
  Zap,
  FlaskConical,
  Leaf,
  BookOpen,
  Brain,
  Globe,
  Monitor,
};

const tones: Record<string, string> = {
  royal: "bg-royal/10 text-royal",
  teal: "bg-teal-100 text-teal-700",
  amber: "bg-amber-100 text-amber-700",
  rose: "bg-rose-100 text-rose-700",
  green: "bg-emerald-100 text-emerald-700",
  indigo: "bg-indigo-100 text-indigo-700",
  violet: "bg-violet-100 text-violet-700",
  sky: "bg-sky-100 text-sky-700",
  slate: "bg-slate-200 text-slate-700",
};

export function Subjects() {
  return (
    <section className="bg-surface py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Subjects"
          title="Master Every Important Concept"
          description="Focused subject coaching that builds understanding first, then exam technique."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {subjects.map((subject, index) => {
            const Icon = icons[subject.icon];
            return (
              <Reveal key={subject.name} delay={index * 50}>
                <article className="group flex items-start gap-4 rounded-3xl bg-white p-5 shadow-soft ring-1 ring-line transition hover:-translate-y-0.5 hover:shadow-card">
                  <span className={`grid h-12 w-12 place-items-center rounded-2xl ${tones[subject.tone]}`}>
                    {Icon ? <Icon className="h-5 w-5" /> : null}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-navy">{subject.name}</h3>
                    <p className="mt-1 text-sm leading-6 text-muted">{subject.blurb}</p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
