import type { MetadataRoute } from "next";
import { blogs, courses, site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/courses",
    "/faculty",
    "/results",
    "/facilities",
    "/testimonials",
    "/contact",
    "/enroll",
    "/blog",
    "/privacy",
    "/terms",
  ];

  return [
    ...staticRoutes.map((path) => ({
      url: `${site.url}${path}`,
      lastModified: new Date("2026-08-14"),
    })),
    ...courses.map((course) => ({
      url: `${site.url}/courses/${course.slug}`,
      lastModified: new Date("2026-08-14"),
    })),
    ...blogs.map((post) => ({
      url: `${site.url}/blog/${post.slug}`,
      lastModified: new Date("2026-08-14"),
    })),
  ];
}
