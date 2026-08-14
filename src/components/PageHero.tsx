export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="hero-glow relative overflow-hidden py-16 text-white">
      <div className="noise pointer-events-none absolute inset-0 opacity-30" />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold">{eyebrow}</p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">{title}</h1>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/75">{description}</p>
      </div>
    </section>
  );
}
