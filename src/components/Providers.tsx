"use client";

import { EnquiryModal } from "@/components/EnquiryModal";
import { EnquiryProvider } from "@/components/EnquiryProvider";
import { MobileDock } from "@/components/MobileDock";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <EnquiryProvider>
      {children}
      <EnquiryModal />
      <MobileDock />
    </EnquiryProvider>
  );
}
