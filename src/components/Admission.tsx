import { EnquireButton } from "@/components/EnquireButton";
import { admission } from "@/content/site";

export function Admission() {
  return (
    <section className="bg-surface py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] bg-white p-8 shadow-card ring-1 ring-line sm:p-12 lg:flex lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent-deep">Join a batch</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
              {admission.heading}
            </h2>
            <p className="mt-3 max-w-xl text-muted">{admission.text}</p>
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:mt-0">
            <EnquireButton variant="dark">{admission.primaryCta.label}</EnquireButton>
            <EnquireButton variant="outline">{admission.secondaryCta.label}</EnquireButton>
          </div>
        </div>
      </div>
    </section>
  );
}
