"use client";

import { buttonClasses, type ButtonVariant } from "@/components/Button";
import { useEnquiry } from "@/components/EnquiryProvider";

export function EnquireButton({
  children,
  course = "",
  variant = "primary",
  className,
}: {
  children: React.ReactNode;
  course?: string;
  variant?: ButtonVariant;
  className?: string;
}) {
  const { openEnquiry } = useEnquiry();
  return (
    <button type="button" className={buttonClasses(variant, className)} onClick={() => openEnquiry(course)}>
      {children}
    </button>
  );
}
