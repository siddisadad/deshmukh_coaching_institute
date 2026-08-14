import { Phone } from "lucide-react";
import { site } from "@/content/site";
import { telLink, whatsappLink } from "@/lib/utils";

export function FloatingCta() {
  return (
    <div className="fixed bottom-5 right-4 z-40 hidden flex-col gap-3 md:flex">
      <a
        href={whatsappLink(site.contact.whatsapp, site.whatsappMessage)}
        className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5"
        aria-label="Chat with us on WhatsApp"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
          <path d="M12.04 2C6.5 2 2 6.4 2 11.86a9.8 9.8 0 0 0 1.5 5.2L2 22l5.1-1.46A10 10 0 0 0 12.04 22C17.58 22 22 17.6 22 12.04 22 6.5 17.58 2 12.04 2Zm5.8 14.08c-.24.68-1.4 1.26-1.94 1.34-.5.08-1.12.1-1.82-.12a18 18 0 0 1-1.72-.64 14.4 14.4 0 0 1-5.3-4.86c-.5-.7-.84-1.56-.84-2.5 0-.94.5-1.78 1.08-2.1.24-.14.54-.16.8-.16h.6c.2 0 .46-.08.72.54.26.64.88 2.14.96 2.3.08.16.12.34.02.54-.1.2-.16.34-.3.52-.16.18-.32.4-.46.54-.16.16-.32.32-.14.62.18.3.8 1.32 1.72 2.14 1.18 1.04 2.16 1.36 2.48 1.52.32.16.5.14.68-.08.18-.22.78-.9.98-1.2.2-.3.42-.26.7-.16.28.1 1.76.82 2.06.98.3.16.5.22.58.34.08.14.08.78-.16 1.46Z" />
        </svg>
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
