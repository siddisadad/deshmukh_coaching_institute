import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { EnquiryForm } from "@/components/EnquiryForm";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/content/site";
import { telLink, whatsappLink } from "@/lib/utils";

export function Contact({ defaultCourse = "" }: { defaultCourse?: string }) {
  return (
    <section id="contact" className="scroll-mt-28 bg-surface py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Visit us"
          title="Visit Deshmukh Coaching Institute"
          description="Replace the placeholder address, phone, and map embed with your verified centre details."
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-12">
          <div className="space-y-5 lg:col-span-5">
            <Info icon={MapPin} label="Address" value={site.contact.address} />
            <Info
              icon={Phone}
              label="Phone"
              value={site.contact.phoneDisplay}
              href={telLink(site.contact.phone)}
            />
            <Info
              icon={Phone}
              label="WhatsApp"
              value={site.contact.whatsappDisplay}
              href={whatsappLink(site.contact.whatsapp, site.whatsappMessage)}
            />
            <Info
              icon={Mail}
              label="Email"
              value={site.contact.email}
              href={`mailto:${site.contact.email}`}
            />
            <Info icon={Clock} label="Opening Hours" value={site.contact.hours} />
            <div className="overflow-hidden rounded-[1.6rem] bg-navy text-white">
              {site.contact.mapEmbedUrl ? (
                <iframe
                  title="Institute location map"
                  src={site.contact.mapEmbedUrl}
                  className="h-72 w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              ) : (
                <div className="flex h-72 flex-col items-center justify-center p-8 text-center">
                  <MapPin className="h-8 w-8 text-gold" />
                  <p className="mt-3 font-bold">Google Maps placeholder</p>
                  <p className="mt-2 max-w-sm text-sm text-white/70">{site.contact.mapNote}</p>
                </div>
              )}
            </div>
          </div>
          <div id="enquiry" className="scroll-mt-32 rounded-[1.7rem] bg-white p-6 shadow-card ring-1 ring-line lg:col-span-7 lg:p-8">
            <h3 className="text-2xl font-extrabold text-navy">Send an enquiry</h3>
            <p className="mt-2 text-sm text-muted">
              Share a few details and our counsellor will help you choose the right course and batch.
            </p>
            <div className="mt-6">
              <EnquiryForm defaultCourse={defaultCourse} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Info({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Phone;
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="flex gap-3 rounded-3xl bg-white p-4 ring-1 ring-line">
      <span className="grid h-10 w-10 place-items-center rounded-2xl bg-royal/10 text-royal">
        <Icon className="h-4 w-4" />
      </span>
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-muted">{label}</p>
        {href ? (
          <a className="mt-1 block text-sm font-semibold text-navy hover:text-royal" href={href}>
            {value}
          </a>
        ) : (
          <p className="mt-1 text-sm font-semibold text-navy">{value}</p>
        )}
      </div>
    </div>
  );
}
