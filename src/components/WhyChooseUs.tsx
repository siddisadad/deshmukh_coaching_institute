import {
  Bell,
  ClipboardCheck,
  Compass,
  GraduationCap,
  LineChart,
  MessageCircleQuestion,
  NotebookText,
  Users,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { whyChoose } from "@/content/site";

const icons: Record<string, LucideIcon> = {
  GraduationCap,
  Users,
  ClipboardCheck,
  MessageCircleQuestion,
  NotebookText,
  LineChart,
  Bell,
  Compass,
};

export function WhyChooseUs() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Deshmukh"
          title="Why Choose Deshmukh Coaching Institute?"
          description="A serious preparation environment with experienced teachers, measurable progress, and support that includes parents."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {whyChoose.map((item, index) => {
            const Icon = icons[item.icon];
            return (
              <Reveal key={item.title} delay={index * 60}>
                <article className="h-full rounded-[1.6rem] border border-line bg-surface/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-royal/20 hover:bg-white hover:shadow-card">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-navy text-gold">
                    {Icon ? <Icon className="h-5 w-5" /> : null}
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-navy">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{item.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
