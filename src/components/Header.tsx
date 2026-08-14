"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { EnquireButton } from "@/components/EnquireButton";
import { Logo } from "@/components/Logo";
import { navigation, site } from "@/content/site";
import { cn, telLink } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(window.scrollY > 12);
      setProgress(height > 0 ? Math.min((window.scrollY / height) * 100, 100) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-all duration-300",
        scrolled
          ? "border-line/80 bg-white/92 shadow-soft backdrop-blur-xl"
          : "border-transparent bg-white",
      )}
    >
      <div
        className={cn(
          "hidden overflow-hidden border-b border-line/70 bg-navy text-white transition-all lg:block",
          scrolled ? "max-h-0 border-transparent py-0" : "max-h-12",
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-xs sm:px-6 lg:px-8">
          <p className="font-medium tracking-wide text-white/80">
            {site.tagline} · Admissions open for the upcoming academic session
          </p>
          <div className="flex items-center gap-5">
            <a className="hover:text-gold" href={telLink(site.contact.phone)}>
              {site.contact.phoneDisplay}
            </a>
            <a className="hover:text-gold" href={`mailto:${site.contact.email}`}>
              {site.contact.email}
            </a>
            <span className="text-white/60">{site.contact.hoursShort}</span>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-1 xl:flex" aria-label="Primary">
          {navigation.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-3 py-2 text-sm font-semibold transition",
                  active ? "bg-surface text-royal" : "text-navy/80 hover:bg-surface hover:text-royal",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={telLink(site.contact.phone)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-surface text-navy ring-1 ring-line transition hover:text-royal"
            aria-label={`Call ${site.name}`}
          >
            <Phone className="h-4 w-4" />
          </a>
          <EnquireButton className="hidden sm:inline-flex">Enroll Now</EnquireButton>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-navy text-white xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            <span className="sr-only">Toggle menu</span>
          </button>
        </div>
      </div>

      <div className="h-0.5 bg-surface">
        <div className="h-full bg-gradient-to-r from-royal via-accent to-gold" style={{ width: `${progress}%` }} />
      </div>

      <div
        id="mobile-nav"
        className={cn(
          "xl:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <button
          type="button"
          className={cn(
            "fixed inset-0 z-40 bg-navy/40 backdrop-blur-sm transition",
            open ? "opacity-100" : "opacity-0",
          )}
          aria-label="Close menu"
          onClick={() => setOpen(false)}
        />
        <div
          className={cn(
            "fixed right-0 top-0 z-50 flex h-full w-[86%] max-w-sm flex-col bg-white p-6 shadow-2xl transition duration-300",
            open ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="mb-8 flex items-center justify-between">
            <Logo />
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-surface"
              onClick={() => setOpen(false)}
            >
              <X className="h-5 w-5" />
              <span className="sr-only">Close menu</span>
            </button>
          </div>
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-2xl px-4 py-3 text-base font-semibold text-navy hover:bg-surface"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <EnquireButton className="mt-6 w-full" >
            Enroll Now
          </EnquireButton>
        </div>
      </div>
    </header>
  );
}
