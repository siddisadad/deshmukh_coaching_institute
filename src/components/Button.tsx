import Link from "next/link";
import { cn } from "@/lib/utils";

const variants = {
  primary:
    "bg-accent text-navy shadow-[0_10px_24px_-12px_rgba(255,138,21,0.9)] hover:-translate-y-0.5 hover:bg-gold",
  secondary:
    "bg-white/10 text-white ring-1 ring-white/25 backdrop-blur hover:bg-white/16",
  outline:
    "bg-white text-navy ring-1 ring-line hover:ring-royal/30 hover:text-royal",
  dark: "bg-navy text-white hover:bg-navy-mid",
  ghost: "bg-transparent text-navy hover:bg-surface",
} as const;

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: keyof typeof variants;
  className?: string;
};

export function Button({ href, children, variant = "primary", className }: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold tracking-tight transition duration-200",
    variants[variant],
    className,
  );

  if (href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:")) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
