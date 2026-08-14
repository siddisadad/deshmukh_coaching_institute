import Image from "next/image";
import { BookOpenCheck, Compass, Sparkles, Users } from "lucide-react";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { about } from "@/content/site";

const icons = [Users, Compass, BookOpenCheck, Sparkles];

export function About({ showCta = true }: { showCta?: boolean }) {
  return (
    <section id="about" className="scroll-mt-28 bg-surface py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The institute"
          title={about.heading}
          description={about.intro}
        />
        <div className="mt-12 grid items-center gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <div className="overflow-hidden rounded-[2rem] shadow-card">
              <Image
                src={about.image.src}
                alt={about.image.alt}
                width={900}
                height={1100}
                className="h-[520px] w-full object-cover"
              />
            </div>
          </Reveal>
          <div className="lg:col-span-7">
            <div className="space-y-4 text-base leading-7 text-muted">
              {about.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {about.features.map((feature, index) => {
                const Icon = icons[index];
                return (
                  <Reveal key={feature.title} delay={index * 80}>
                    <article className="h-full rounded-3xl bg-white p-5 shadow-soft ring-1 ring-line">
                      <Icon className="h-5 w-5 text-royal" />
                      <h3 className="mt-3 text-lg font-bold text-navy">{feature.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-muted">{feature.description}</p>
                    </article>
                  </Reveal>
                );
              })}
            </div>
            {showCta ? (
              <div className="mt-8">
                <Button href={about.cta.href} variant="dark">
                  {about.cta.label}
                </Button>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
