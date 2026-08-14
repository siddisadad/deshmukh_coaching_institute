import { Phone } from "lucide-react";
import { Button } from "@/components/Button";
import { counselling, site } from "@/content/site";
import { telLink } from "@/lib/utils";

export function CounsellingCta() {
  return (
    <section className="bg-navy py-16 text-white">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-r from-navy-mid to-[#16356b] px-6 py-14 sm:px-10">
        <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-accent/20 blur-2xl" />
        <div className="absolute -bottom-20 left-10 h-40 w-40 rounded-full bg-gold/20 blur-2xl" />
        <div className="relative grid items-center gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold">Free counselling</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl">
              {counselling.heading}
            </h2>
            <p className="mt-4 max-w-2xl text-white/75">{counselling.text}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:col-span-4 lg:justify-end">
            <Button href={counselling.primaryCta.href}>{counselling.primaryCta.label}</Button>
            <Button href={telLink(site.contact.phone)} variant="secondary">
              <Phone className="h-4 w-4" />
              {counselling.secondaryCta.label}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
