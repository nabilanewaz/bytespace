import { notFound } from "next/navigation";
import { getCourseDetail } from "@/data/courseDetails";

/** Resolves the `[slug]` route param to a course, or renders the 404 page. */
export async function loadCourse(params: Promise<{ slug: string }>) {
  const { slug } = await params;
  const detail = getCourseDetail(slug);
  if (!detail) notFound();
  return detail;
}
