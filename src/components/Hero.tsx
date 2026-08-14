import Image from "next/image";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Button } from "@/components/Button";
import { EnquireButton } from "@/components/EnquireButton";
import { hero, site } from "@/content/site";

export function Hero() {
  return (
    <section className="hero-glow relative overflow-hidden text-white">
      <div className="noise pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:px-8 lg:py-24">
        <div className="lg:col-span-6">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/8 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-gold ring-1 ring-white/10">
            <Sparkles className="h-3.5 w-3.5" />
            {hero.eyebrow}
          </p>
          <h1 className="max-w-xl font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.55rem]">
            {hero.headline}
          </h1>
          <p className="mt-3 text-lg font-semibold text-gold">{site.tagline}</p>
          <p className="mt-4 max-w-xl text-base leading-7 text-white/75 sm:text-lg">
            {hero.supporting}
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {hero.chips.map((chip) => (
              <li
                key={chip}
                className="inline-flex items-center gap-1.5 rounded-full bg-white/8 px-3 py-1.5 text-xs font-semibold text-white/90 ring-1 ring-white/10"
              >
                <Check className="h-3.5 w-3.5 text-gold" />
                {chip}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={hero.primaryCta.href} className="min-w-44">
              {hero.primaryCta.label}
              <ArrowRight className="h-4 w-4" />
            </Button>
            <EnquireButton variant="secondary" className="min-w-44">
              {hero.secondaryCta.label}
            </EnquireButton>
          </div>
        </div>

        <div className="relative lg:col-span-6">
          <div className="relative overflow-hidden rounded-[2rem] shadow-[0_30px_80px_-32px_rgba(0,0,0,0.55)] ring-1 ring-white/15">
            <Image
              src={hero.image.src}
              alt={hero.image.alt}
              width={900}
              height={700}
              priority
              className="h-[420px] w-full object-cover sm:h-[500px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/55 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-6 right-4 hidden w-44 overflow-hidden rounded-3xl ring-4 ring-navy shadow-card sm:block lg:right-10">
            <Image
              src={hero.secondaryImage.src}
              alt={hero.secondaryImage.alt}
              width={400}
              height={280}
              className="h-28 w-full object-cover"
            />
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3 lg:absolute lg:-left-8 lg:top-10 lg:mt-0 lg:flex lg:w-48 lg:flex-col">
            {hero.stats.slice(0, 2).map((stat, index) => (
              <StatCard key={stat.label} {...stat} delay={index * 80} />
            ))}
          </div>
          <div className="mt-3 grid grid-cols-2 gap-3 lg:absolute lg:-right-6 lg:bottom-16 lg:mt-0 lg:flex lg:w-48 lg:flex-col">
            {hero.stats.slice(2).map((stat, index) => (
              <StatCard key={stat.label} {...stat} delay={160 + index * 80} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({
  value,
  suffix,
  label,
  delay,
}: {
  value: number;
  suffix: string;
  label: string;
  delay: number;
}) {
  return (
    <div
      className="float-card rounded-2xl bg-white/95 p-4 text-navy shadow-card backdrop-blur"
      style={{ animationDelay: `${delay}ms` }}
    >
      <p className="text-2xl font-extrabold tracking-tight">
        <AnimatedCounter value={value} suffix={suffix} />
      </p>
      <p className="mt-1 text-xs font-semibold text-muted">{label}</p>
    </div>
  );
}
