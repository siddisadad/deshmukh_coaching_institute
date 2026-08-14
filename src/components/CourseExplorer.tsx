"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { Clock, GraduationCap, Layers } from "lucide-react";
import { Button } from "@/components/Button";
import { EnquireButton } from "@/components/EnquireButton";
import { Reveal } from "@/components/Reveal";
import { courses } from "@/content/site";

export function CourseExplorer() {
  const categories = useMemo(
    () => ["All programmes", ...Array.from(new Set(courses.map((course) => course.category)))],
    [],
  );
  const [active, setActive] = useState(categories[0]);
  const items = active === "All programmes" ? courses : courses.filter((course) => course.category === active);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              active === category ? "bg-navy text-white" : "bg-surface text-navy hover:bg-surface-2"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {items.map((course, index) => (
          <Reveal key={course.slug} delay={index * 70}>
            <article className="group flex h-full flex-col overflow-hidden rounded-[1.7rem] bg-white shadow-soft ring-1 ring-line transition duration-300 hover:-translate-y-1 hover:shadow-card">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={course.image.src}
                  alt={course.image.alt}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(min-width: 1280px) 360px, (min-width: 768px) 50vw, 100vw"
                />
                <span className="absolute left-4 top-4 rounded-full bg-navy/90 px-3 py-1 text-xs font-bold text-white">
                  {course.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-extrabold text-navy">{course.name}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{course.summary}</p>
                <ul className="mt-5 space-y-2 text-sm text-navy/80">
                  <li className="flex gap-2">
                    <GraduationCap className="mt-0.5 h-4 w-4 text-royal" />
                    <span>
                      <strong>Classes:</strong> {course.suitableClasses}
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <Layers className="mt-0.5 h-4 w-4 text-royal" />
                    <span>
                      <strong>Subjects:</strong> {course.subjects}
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <Clock className="mt-0.5 h-4 w-4 text-royal" />
                    <span>
                      <strong>Duration:</strong> {course.duration}
                    </span>
                  </li>
                </ul>
                <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-muted">
                  {course.benefits.slice(0, 3).map((benefit) => (
                    <li key={benefit}>{benefit}</li>
                  ))}
                </ul>
                <div className="mt-6 flex gap-3">
                  <Button href={`/courses/${course.slug}`} variant="dark" className="flex-1 px-4">
                    View Course
                  </Button>
                  <EnquireButton course={course.slug} variant="outline" className="flex-1 px-4">
                    Enquire Now
                  </EnquireButton>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
