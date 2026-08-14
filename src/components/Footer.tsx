import Link from "next/link";
import { Facebook, Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react";
import { Logo } from "@/components/Logo";
import { courses, footer, site } from "@/content/site";
import { telLink, whatsappLink } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <Logo inverted />
          <p className="mt-5 max-w-xs text-sm leading-6 text-white/70">{footer.blurb}</p>
          <p className="mt-3 text-sm text-white/60">
            Expert guidance, structured learning, and personal attention for academic and competitive success.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-gold">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            {footer.quickLinks.map((item) => (
              <li key={item.href}>
                <Link className="hover:text-white" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-gold">Courses</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            {courses.map((course) => (
              <li key={course.slug}>
                <Link className="hover:text-white" href={`/courses/${course.slug}`}>
                  {course.category}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-gold">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/75">
            <li className="flex gap-2">
              <Phone className="mt-0.5 h-4 w-4 text-gold" />
              <a href={telLink(site.contact.phone)}>{site.contact.phoneDisplay}</a>
            </li>
            <li className="flex gap-2">
              <Mail className="mt-0.5 h-4 w-4 text-gold" />
              <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
            </li>
            <li className="flex gap-2">
              <MapPin className="mt-0.5 h-4 w-4 text-gold" />
              <span>{site.contact.address}</span>
            </li>
            <li>
              <a
                className="hover:text-white"
                href={whatsappLink(site.contact.whatsapp, site.whatsappMessage)}
              >
                WhatsApp: {site.contact.whatsappDisplay}
              </a>
            </li>
          </ul>
          <div className="mt-5 flex gap-3">
            <Social href={site.social.facebook} label="Facebook">
              <Facebook className="h-4 w-4" />
            </Social>
            <Social href={site.social.instagram} label="Instagram">
              <Instagram className="h-4 w-4" />
            </Social>
            <Social href={site.social.youtube} label="YouTube">
              <Youtube className="h-4 w-4" />
            </Social>
            <Social
              href={whatsappLink(site.contact.whatsapp, site.whatsappMessage)}
              label="WhatsApp"
            >
              <span className="text-xs font-black">WA</span>
            </Social>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© 2026 {site.name}. All Rights Reserved.</p>
          <div className="flex gap-4">
            {footer.legal.map((item) => (
              <Link key={item.href} className="hover:text-white" href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function Social({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="grid h-10 w-10 place-items-center rounded-full bg-white/8 ring-1 ring-white/10 transition hover:bg-accent hover:text-navy"
    >
      {children}
    </a>
  );
}
