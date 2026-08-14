"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";

type EnquiryContextValue = {
  open: boolean;
  course: string;
  openEnquiry: (course?: string) => void;
  closeEnquiry: () => void;
};

const EnquiryContext = createContext<EnquiryContextValue | null>(null);

export function EnquiryProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [course, setCourse] = useState("");

  const openEnquiry = useCallback((nextCourse = "") => {
    setCourse(nextCourse);
    setOpen(true);
  }, []);

  const closeEnquiry = useCallback(() => setOpen(false), []);

  const value = useMemo(
    () => ({ open, course, openEnquiry, closeEnquiry }),
    [open, course, openEnquiry, closeEnquiry],
  );

  return <EnquiryContext.Provider value={value}>{children}</EnquiryContext.Provider>;
}

export function useEnquiry() {
  const context = useContext(EnquiryContext);
  if (!context) {
    throw new Error("useEnquiry must be used within EnquiryProvider");
  }
  return context;
}
