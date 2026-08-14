import { announcements } from "@/content/site";

export function ResultsTicker() {
  const items = [...announcements, ...announcements];
  return (
    <div className="overflow-hidden border-y border-navy/10 bg-navy text-white">
      <div className="marquee-track flex w-max gap-10 py-3 pr-10 text-sm font-semibold tracking-wide">
        {items.map((item, index) => (
          <span key={`${item}-${index}`} className="inline-flex items-center gap-3 whitespace-nowrap">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
