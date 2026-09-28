"use client";

import { useState } from "react";
import { CourseGrid } from "@/components/courses/CourseGrid";
import { CourseToolbar } from "@/components/courses/CourseToolbar";
import type { Course } from "@/data/courses";
import {
  DEFAULT_FILTERS,
  applyCourseFilters,
  categoryOptions,
  type CourseFilters,
} from "@/lib/courseFilters";

/** Creator's course grid with rating/level/category filters and sorting. */
export function CreatorCourses({ courses }: { courses: Course[] }) {
  const [filters, setFilters] = useState<CourseFilters>(DEFAULT_FILTERS);
  const visible = applyCourseFilters(courses, filters);

  return (
    <section aria-label="Courses">
      <CourseToolbar
        filters={filters}
        categoryOptions={categoryOptions(courses)}
        onChange={(patch) => setFilters((f) => ({ ...f, ...patch }))}
      />

      <p className="sr-only" aria-live="polite">
        Showing {visible.length} of {courses.length} courses
      </p>

      <CourseGrid
        className="mt-10"
        courses={visible}
        emptyMessage="No courses match these filters."
        onReset={() => setFilters((f) => ({ ...DEFAULT_FILTERS, sort: f.sort }))}
      />
    </section>
  );
}
