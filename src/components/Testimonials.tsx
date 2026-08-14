import { Star } from "lucide-react";
import { PlaceholderNote } from "@/components/PlaceholderNote";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { testimonials } from "@/content/site";

export function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-28 bg-surface py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Voices"
          title="What Students & Parents Say"
          description="Fictional placeholder testimonials until genuine, permissioned quotes are provided."
        />
        <div className="mt-6 flex justify-center">
          <PlaceholderNote>Sample testimonials — replace with real student and parent feedback</PlaceholderNote>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {testimonials.map((item, index) => (
            <Reveal key={item.name} delay={index * 70}>
              <blockquote className="h-full rounded-[1.7rem] bg-white p-6 shadow-soft ring-1 ring-line">
                <div className="flex items-center gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-full bg-navy text-sm font-black text-gold">
                    {item.initials}
                  </div>
                  <div>
                    <cite className="not-italic text-base font-bold text-navy">{item.name}</cite>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-royal">
                      {item.role}
                    </p>
                  </div>
                </div>
                <div className="mt-3 flex gap-1 text-gold" aria-label={`${item.rating} out of 5 stars`}>
                  {Array.from({ length: item.rating }).map((_, star) => (
                    <Star key={star} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-7 text-muted">“{item.quote}”</p>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
