"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import { EnquiryForm } from "@/components/EnquiryForm";
import { useEnquiry } from "@/components/EnquiryProvider";

export function EnquiryModal() {
  const { open, course, closeEnquiry } = useEnquiry();

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeEnquiry();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, closeEnquiry]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-end justify-center p-3 sm:items-center">
      <button
        type="button"
        className="absolute inset-0 bg-navy/55 backdrop-blur-sm"
        aria-label="Close enquiry form"
        onClick={closeEnquiry}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="enquiry-modal-title"
        className="relative max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-[1.6rem] bg-white p-5 shadow-2xl sm:p-7"
      >
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-royal">Free counselling</p>
            <h2 id="enquiry-modal-title" className="mt-1 font-display text-2xl font-semibold text-navy">
              Book a counselling session
            </h2>
          </div>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full bg-surface text-navy"
            onClick={closeEnquiry}
          >
            <X className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </button>
        </div>
        <EnquiryForm key={course || "general"} defaultCourse={course} />
      </div>
    </div>
  );
}
