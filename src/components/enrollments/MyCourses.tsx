"use client";

import { CourseGrid } from "@/components/courses/CourseGrid";
import { ButtonLink } from "@/components/ui/Button";
import { LoadingBlock } from "@/components/ui/LoadingBlock";
import { courses } from "@/data/courses";
import { useEnrollments } from "@/lib/enrollments";
import { useHydrated } from "@/lib/localStore";

/** The visitor's enrolled courses, most recent first. */
export function MyCourses() {
  const ids = useEnrollments();
  const hydrated = useHydrated();
  const enrolled = ids.flatMap((id) => courses.find((c) => c.id === id) ?? []).reverse();

  if (!hydrated) return <LoadingBlock label="Loading your courses" />;

  if (enrolled.length === 0) {
    return (
      <div className="mx-auto max-w-[640px] rounded-3xl bg-surface px-6 py-16 text-center">
        <h2 className="font-display text-2xl font-semibold text-ink">No courses yet</h2>
        <p className="mt-3 text-lg text-muted">
          Courses you enroll in will appear here. Click &ldquo;Enroll Now&rdquo; on a course, then check out
          from your cart.
        </p>
        <ButtonLink href="/search" size="lg" className="mt-8">
          Browse courses
        </ButtonLink>
      </div>
    );
  }

  return (
    <>
      <p className="mb-8 text-lg text-muted">
        {enrolled.length} {enrolled.length === 1 ? "course" : "courses"} · lifetime access
      </p>
      <CourseGrid courses={enrolled} emptyMessage="" />
    </>
  );
}
