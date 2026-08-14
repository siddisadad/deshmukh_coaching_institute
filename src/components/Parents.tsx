import { Bell, ClipboardList, MessagesSquare, Route } from "lucide-react";
import { EnquireButton } from "@/components/EnquireButton";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { parentPartnership } from "@/content/site";

const icons = [Bell, ClipboardList, MessagesSquare, Route];

export function Parents() {
  return (
    <section className="bg-navy py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="For parents"
          title={parentPartnership.heading}
          description={parentPartnership.text}
          tone="dark"
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {parentPartnership.points.map((point, index) => {
            const Icon = icons[index];
            return (
              <Reveal key={point.title} delay={index * 70}>
                <article className="h-full rounded-[1.6rem] bg-white/6 p-6 ring-1 ring-white/10">
                  <Icon className="h-5 w-5 text-gold" />
                  <h3 className="mt-4 text-lg font-bold">{point.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/70">{point.text}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
        <div className="mt-10 flex justify-center">
          <EnquireButton>Talk to a Counsellor</EnquireButton>
        </div>
      </div>
    </section>
  );
}
