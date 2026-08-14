import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label="Deshmukh Coaching Institute home">
      <span className="relative grid h-11 w-11 place-items-center overflow-hidden rounded-2xl bg-gradient-to-br from-navy-mid to-navy shadow-soft">
        <span className="absolute inset-x-0 bottom-0 h-1 bg-accent" />
        <span className="text-lg font-black tracking-tight text-white">D</span>
      </span>
      <span className="leading-none">
        <span
          className={cn(
            "block text-[13px] font-extrabold tracking-[0.2em]",
            inverted ? "text-white" : "text-navy",
          )}
        >
          DESHMUKH
        </span>
        <span
          className={cn(
            "mt-1 block text-[10px] font-semibold tracking-[0.16em]",
            inverted ? "text-gold" : "text-royal",
          )}
        >
          COACHING INSTITUTE
        </span>
      </span>
    </Link>
  );
}
