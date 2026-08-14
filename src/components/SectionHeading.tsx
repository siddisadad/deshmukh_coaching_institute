import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "light",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  tone?: "light" | "dark";
}) {
  return (
    <div className={cn(align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl")}>
      {eyebrow ? (
        <p
          className={cn(
            "mb-3 text-xs font-bold uppercase tracking-[0.22em]",
            tone === "dark" ? "text-gold" : "text-accent-deep",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "font-display text-3xl font-semibold tracking-tight sm:text-4xl",
          tone === "dark" ? "text-white" : "text-navy",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-4 text-base leading-7 sm:text-lg",
            tone === "dark" ? "text-white/75" : "text-muted",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
