"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { faqs } from "@/content/site";
import { cn } from "@/lib/utils";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          description="Quick answers for students and parents considering admission."
        />
        <div className="mt-10 divide-y divide-line overflow-hidden rounded-[1.6rem] ring-1 ring-line">
          {faqs.map((item, index) => {
            const expanded = open === index;
            return (
              <div key={item.q} className="bg-white">
                <h3>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-bold text-navy"
                    aria-expanded={expanded}
                    onClick={() => setOpen(expanded ? null : index)}
                  >
                    {item.q}
                    <ChevronDown className={cn("h-5 w-5 shrink-0 text-royal transition", expanded && "rotate-180")} />
                  </button>
                </h3>
                {expanded ? <p className="px-5 pb-5 text-sm leading-7 text-muted">{item.a}</p> : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
