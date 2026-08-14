import { AnimatedCounter } from "@/components/AnimatedCounter";
import { cn } from "@/lib/utils";

export function Stats({
  items,
  tone = "light",
}: {
  items: readonly { value: number; suffix: string; label: string }[];
  tone?: "light" | "dark";
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((stat) => (
        <div
          key={stat.label}
          className={cn(
            "rounded-3xl p-6",
            tone === "dark" ? "bg-white/6 ring-1 ring-white/10" : "bg-white shadow-soft ring-1 ring-line",
          )}
        >
          <p className={cn("text-4xl font-black tracking-tight", tone === "dark" ? "text-gold" : "text-navy")}>
            <AnimatedCounter value={stat.value} suffix={stat.suffix} />
          </p>
          <p className={cn("mt-2 text-sm font-semibold", tone === "dark" ? "text-white/75" : "text-muted")}>
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
