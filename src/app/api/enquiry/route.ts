import { NextRequest, NextResponse } from "next/server";
import { courses, formOptions } from "@/content/site";
import { isValidEmail, isValidIndianPhone } from "@/lib/utils";

export async function POST(request: NextRequest) {
  const body = (await request.json()) as Record<string, string>;
  const required = ["fullName", "studentName", "parentName", "phone", "email", "currentClass", "course"];

  for (const key of required) {
    if (!body[key] || String(body[key]).trim().length < 2) {
      return NextResponse.json({ ok: false, error: "Invalid enquiry" }, { status: 400 });
    }
  }

  if (!isValidIndianPhone(body.phone) || !isValidEmail(body.email)) {
    return NextResponse.json({ ok: false, error: "Invalid contact details" }, { status: 400 });
  }

  const courseOk = courses.some((course) => course.slug === body.course);
  const classOk = (formOptions.classes as readonly string[]).includes(body.currentClass);
  if (!courseOk || !classOk) {
    return NextResponse.json({ ok: false, error: "Invalid selection" }, { status: 400 });
  }

  return NextResponse.json({ ok: true });
}
