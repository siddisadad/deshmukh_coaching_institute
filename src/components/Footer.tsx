import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
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
              <FacebookIcon />
            </Social>
            <Social href={site.social.instagram} label="Instagram">
              <InstagramIcon />
            </Social>
            <Social href={site.social.youtube} label="YouTube">
              <YoutubeIcon />
            </Social>
            <Social
              href={whatsappLink(site.contact.whatsapp, site.whatsappMessage)}
              label="WhatsApp"
            >
              <WhatsAppIcon />
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

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
      <path d="M14 8h3V4h-3c-2.8 0-5 2.2-5 5v2H7v4h2v7h4v-7h3.1l.9-4H13V9c0-.6.4-1 1-1Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
      <path d="M8 3h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5Zm8 2H8a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3Zm-4 3.2A3.8 3.8 0 1 1 8.2 12 3.8 3.8 0 0 1 12 8.2Zm0 2A1.8 1.8 0 1 0 13.8 12 1.8 1.8 0 0 0 12 10.2ZM17.4 7.1a.9.9 0 1 1-.9.9.9.9 0 0 1 .9-.9Z" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
      <path d="M22.5 7.2a3.1 3.1 0 0 0-2.2-2.2C18.4 4.6 12 4.6 12 4.6s-6.4 0-8.3.4A3.1 3.1 0 0 0 1.5 7.2 32 32 0 0 0 1.1 12a32 32 0 0 0 .4 4.8 3.1 3.1 0 0 0 2.2 2.2c1.9.4 8.3.4 8.3.4s6.4 0 8.3-.4a3.1 3.1 0 0 0 2.2-2.2 32 32 0 0 0 .4-4.8 32 32 0 0 0-.4-4.8ZM10 15.4V8.6l5.5 3.4Z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
      <path d="M12.04 2C6.5 2 2 6.4 2 11.86a9.8 9.8 0 0 0 1.5 5.2L2 22l5.1-1.46A10 10 0 0 0 12.04 22C17.58 22 22 17.6 22 12.04 22 6.5 17.58 2 12.04 2Zm5.8 14.08c-.24.68-1.4 1.26-1.94 1.34-.5.08-1.12.1-1.82-.12a18 18 0 0 1-1.72-.64 14.4 14.4 0 0 1-5.3-4.86c-.5-.7-.84-1.56-.84-2.5 0-.94.5-1.78 1.08-2.1.24-.14.54-.16.8-.16h.6c.2 0 .46-.08.72.54.26.64.88 2.14.96 2.3.08.16.12.34.02.54-.1.2-.16.34-.3.52-.16.18-.32.4-.46.54-.16.16-.32.32-.14.62.18.3.8 1.32 1.72 2.14 1.18 1.04 2.16 1.36 2.48 1.52.32.16.5.14.68-.08.18-.22.78-.9.98-1.2.2-.3.42-.26.7-.16.28.1 1.76.82 2.06.98.3.16.5.22.58.34.08.14.08.78-.16 1.46Z" />
    </svg>
  );
}
