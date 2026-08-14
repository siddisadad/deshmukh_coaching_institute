import { Check } from "lucide-react";
import { trustItems } from "@/content/site";

export function TrustBar() {
  return (
    <section className="border-b border-line bg-white">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <p className="mb-5 text-center text-xs font-bold uppercase tracking-[0.22em] text-royal">
          Trusted by Students & Parents
        </p>
        <ul className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {trustItems.map((item) => (
            <li
              key={item}
              className="flex items-center gap-2 rounded-2xl bg-surface px-3 py-3 text-sm font-semibold text-navy"
            >
              <span className="grid h-6 w-6 place-items-center rounded-full bg-accent/15 text-accent-deep">
                <Check className="h-3.5 w-3.5" strokeWidth={3} />
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
