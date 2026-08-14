"use client";

import { Phone } from "lucide-react";
import { useEnquiry } from "@/components/EnquiryProvider";
import { site } from "@/content/site";
import { telLink, whatsappLink } from "@/lib/utils";

export function MobileDock() {
  const { openEnquiry } = useEnquiry();

  return (
    <div className="fixed inset-x-3 bottom-3 z-40 grid grid-cols-3 gap-2 rounded-full bg-navy p-1.5 shadow-2xl md:hidden">
      <a
        href={telLink(site.contact.phone)}
        className="rounded-full py-3 text-center text-xs font-bold text-white"
      >
        <Phone className="mx-auto mb-0.5 h-4 w-4 text-gold" />
        Call
      </a>
      <button
        type="button"
        className="rounded-full bg-accent py-3 text-xs font-bold text-navy"
        onClick={() => openEnquiry()}
      >
        Enroll
      </button>
      <a
        href={whatsappLink(site.contact.whatsapp, site.whatsappMessage)}
        className="rounded-full py-3 text-center text-xs font-bold text-white"
      >
        Chat
      </a>
    </div>
  );
}
