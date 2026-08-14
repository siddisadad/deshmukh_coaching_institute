import { CourseExplorer } from "@/components/CourseExplorer";
import { SectionHeading } from "@/components/SectionHeading";

export function Courses() {
  return (
    <section id="courses" className="scroll-mt-28 bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Programmes"
          title="Courses Designed For Your Success"
          description="Choose a structured path for school academics, board examinations, foundation building, or competitive preparation."
        />
        <div className="mt-10">
          <CourseExplorer />
        </div>
      </div>
    </section>
  );
}
