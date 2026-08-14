import { Phone } from "lucide-react";
import { site } from "@/content/site";
import { telLink, whatsappLink } from "@/lib/utils";

export function FloatingCta() {
  return (
    <div className="fixed bottom-5 right-4 z-40 flex flex-col gap-3">
      <a
        href={whatsappLink(site.contact.whatsapp, site.whatsappMessage)}
        className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5"
        aria-label="Chat with us on WhatsApp"
      >
        <span className="grid h-6 w-6 place-items-center rounded-full bg-white/20 text-[11px]">WA</span>
        <span className="hidden sm:inline">Chat With Us</span>
      </a>
      <a
        href={telLink(site.contact.phone)}
        className="inline-flex items-center gap-2 rounded-full bg-navy px-4 py-3 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5"
        aria-label="Call the institute now"
      >
        <Phone className="h-4 w-4 text-gold" />
        <span className="hidden sm:inline">Call Now</span>
      </a>
    </div>
  );
}
