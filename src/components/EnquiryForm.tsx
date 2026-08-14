"use client";

import { cloneElement, useMemo, useState } from "react";
import { courses, formOptions } from "@/content/site";
import { cn, isValidEmail, isValidIndianPhone } from "@/lib/utils";

type FormState = {
  fullName: string;
  studentName: string;
  parentName: string;
  phone: string;
  email: string;
  currentClass: string;
  course: string;
  batch: string;
  message: string;
};

const empty: FormState = {
  fullName: "",
  studentName: "",
  parentName: "",
  phone: "",
  email: "",
  currentClass: "",
  course: "",
  batch: "",
  message: "",
};

export function EnquiryForm({ defaultCourse = "" }: { defaultCourse?: string }) {
  const initial = useMemo(
    () => ({ ...empty, course: defaultCourse }),
    [defaultCourse],
  );
  const [values, setValues] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setValues((current) => ({ ...current, [key]: value }));
  }

  function validate() {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (values.fullName.trim().length < 2) next.fullName = "Please enter your full name.";
    if (values.studentName.trim().length < 2) next.studentName = "Please enter the student name.";
    if (values.parentName.trim().length < 2) next.parentName = "Please enter the parent or guardian name.";
    if (!isValidIndianPhone(values.phone)) next.phone = "Enter a valid 10-digit mobile number.";
    if (!isValidEmail(values.email)) next.email = "Enter a valid email address.";
    if (!values.currentClass) next.currentClass = "Select the current class.";
    if (!values.course) next.course = "Select a course.";
    return next;
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    setStatus("submitting");
    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!response.ok) throw new Error("Request failed");
      setStatus("success");
      setValues(initial);
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-[1.6rem] bg-emerald-50 p-8 text-center ring-1 ring-emerald-200">
        <p className="text-xl font-extrabold text-navy">Enquiry received</p>
        <p className="mt-3 text-sm leading-6 text-muted">
          Thank you. Our academic counsellor will contact you shortly using the details you provided.
        </p>
        <button
          type="button"
          className="mt-6 rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white"
          onClick={() => setStatus("idle")}
        >
          Submit another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4" noValidate>
      <Field label="Full Name" error={errors.fullName}>
        <input value={values.fullName} onChange={(e) => update("fullName", e.target.value)} />
      </Field>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Student Name" error={errors.studentName}>
          <input value={values.studentName} onChange={(e) => update("studentName", e.target.value)} />
        </Field>
        <Field label="Parent/Guardian Name" error={errors.parentName}>
          <input value={values.parentName} onChange={(e) => update("parentName", e.target.value)} />
        </Field>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Phone Number" error={errors.phone}>
          <input value={values.phone} onChange={(e) => update("phone", e.target.value)} inputMode="tel" />
        </Field>
        <Field label="Email" error={errors.email}>
          <input type="email" value={values.email} onChange={(e) => update("email", e.target.value)} />
        </Field>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Current Class" error={errors.currentClass}>
          <select value={values.currentClass} onChange={(e) => update("currentClass", e.target.value)}>
            <option value="">Select class</option>
            {formOptions.classes.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </Field>
        <Field label="Course Interested In" error={errors.course}>
          <select value={values.course} onChange={(e) => update("course", e.target.value)}>
            <option value="">Select course</option>
            {courses.map((course) => (
              <option key={course.slug} value={course.slug}>
                {course.name}
              </option>
            ))}
          </select>
        </Field>
      </div>
      <Field label="Preferred Batch">
        <select value={values.batch} onChange={(e) => update("batch", e.target.value)}>
          <option value="">Select batch</option>
          {formOptions.batches.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </Field>
      <Field label="Message">
        <textarea
          rows={4}
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
          placeholder="Tell us about your goals, school board, or preferred timing."
        />
      </Field>
      {status === "error" ? (
        <p className="text-sm font-semibold text-rose-600">
          Something went wrong. Please call or WhatsApp us, or try again.
        </p>
      ) : null}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="rounded-full bg-accent px-5 py-3 text-sm font-bold text-navy transition hover:bg-gold disabled:opacity-60"
      >
        {status === "submitting" ? "Submitting..." : "Submit Enquiry"}
      </button>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactElement<{ className?: string; "aria-invalid"?: boolean }>;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-semibold text-navy">{label}</span>
      {cloneElement(children, {
        "aria-invalid": Boolean(error),
        className: cn(
          "w-full rounded-2xl border border-line bg-white px-4 py-3 text-sm text-navy outline-none transition focus:border-royal",
          error && "border-rose-400",
          children.props.className,
        ),
      })}
      {error ? <span className="mt-1 block text-xs font-semibold text-rose-600">{error}</span> : null}
    </label>
  );
}
