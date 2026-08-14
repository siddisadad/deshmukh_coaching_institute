"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { PlaceholderNote } from "@/components/PlaceholderNote";
import { SectionHeading } from "@/components/SectionHeading";
import { testimonials } from "@/content/site";

export function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % testimonials.length);
    }, 7000);
    return () => window.clearInterval(timer);
  }, []);

  const featured = testimonials[index];

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

        <div className="relative mx-auto mt-10 max-w-3xl rounded-[2rem] bg-navy p-8 text-white shadow-card">
          <div className="flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-full bg-gold text-sm font-black text-navy">
              {featured.initials}
            </div>
            <div>
              <p className="font-bold">{featured.name}</p>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold">{featured.role}</p>
            </div>
          </div>
          <div className="mt-3 flex gap-1 text-gold" aria-label={`${featured.rating} out of 5 stars`}>
            {Array.from({ length: featured.rating }).map((_, star) => (
              <Star key={star} className="h-4 w-4 fill-current" />
            ))}
          </div>
          <p className="mt-5 font-display text-2xl leading-snug">“{featured.quote}”</p>
          <div className="mt-6 flex items-center justify-between">
            <button
              type="button"
              className="grid h-10 w-10 place-items-center rounded-full bg-white/10"
              onClick={() => setIndex((current) => (current - 1 + testimonials.length) % testimonials.length)}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((item, dot) => (
                <button
                  key={item.name}
                  type="button"
                  aria-label={`Show testimonial from ${item.name}`}
                  className={`h-2.5 rounded-full transition ${dot === index ? "w-8 bg-gold" : "w-2.5 bg-white/30"}`}
                  onClick={() => setIndex(dot)}
                />
              ))}
            </div>
            <button
              type="button"
              className="grid h-10 w-10 place-items-center rounded-full bg-white/10"
              onClick={() => setIndex((current) => (current + 1) % testimonials.length)}
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {testimonials.map((item) => (
            <blockquote key={item.name} className="rounded-[1.7rem] bg-white p-6 shadow-soft ring-1 ring-line">
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-navy text-sm font-black text-gold">
                  {item.initials}
                </div>
                <div>
                  <cite className="not-italic text-base font-bold text-navy">{item.name}</cite>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-royal">{item.role}</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-7 text-muted">“{item.quote}”</p>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
