import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { EnquireButton } from "@/components/EnquireButton";
import { Button } from "@/components/Button";
import { Contact } from "@/components/Contact";
import { PageHero } from "@/components/PageHero";
import { courses, site } from "@/content/site";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const course = courses.find((item) => item.slug === slug);
  if (!course) return { title: "Course" };
  return {
    title: course.name,
    description: `${course.summary} Coaching at ${site.name}.`,
  };
}

export default async function CourseDetailPage({ params }: Props) {
  const { slug } = await params;
  const course = courses.find((item) => item.slug === slug);
  if (!course) notFound();

  return (
    <main id="main">
      <PageHero
        eyebrow={course.category}
        title={course.name}
        description={course.summary}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Courses", href: "/courses" },
          { label: course.name },
        ]}
      />
      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-7">
            <div className="overflow-hidden rounded-[1.8rem]">
              <Image
                src={course.image.src}
                alt={course.image.alt}
                width={1200}
                height={800}
                className="h-[360px] w-full object-cover"
              />
            </div>
            <h2 className="mt-8 text-2xl font-extrabold text-navy">Who this course is for</h2>
            <p className="mt-3 leading-7 text-muted">{course.whoFor}</p>
            <h2 className="mt-8 text-2xl font-extrabold text-navy">What students gain</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-muted">
              {course.outcomes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <h2 className="mt-8 text-2xl font-extrabold text-navy">How the programme runs</h2>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-muted">
              {course.modules.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </div>
          <aside className="lg:col-span-5">
            <div className="rounded-[1.7rem] bg-surface p-6 ring-1 ring-line">
              <p className="text-sm text-muted">
                <strong className="text-navy">Classes:</strong> {course.suitableClasses}
              </p>
              <p className="mt-3 text-sm text-muted">
                <strong className="text-navy">Subjects:</strong> {course.subjects}
              </p>
              <p className="mt-3 text-sm text-muted">
                <strong className="text-navy">Duration:</strong> {course.duration}
              </p>
              <h3 className="mt-6 text-lg font-bold text-navy">Key benefits</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted">
                {course.benefits.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="mt-6 flex flex-col gap-3">
                <EnquireButton course={course.slug} variant="dark">
                  Enquire Now
                </EnquireButton>
                <Button href="/enroll">Apply Now</Button>
              </div>
            </div>
          </aside>
        </div>
      </section>
      <Contact defaultCourse={course.slug} />
    </main>
  );
}
