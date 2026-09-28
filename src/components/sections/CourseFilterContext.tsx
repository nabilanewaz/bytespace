"use client";

import { createContext, useContext, useState } from "react";
import type { Course } from "@/data/courses";

/** What the home-page course grid is currently showing. */
export type CourseFilter =
  | { kind: "category"; category: string }
  | { kind: "path"; label: string; categories: string[] };

export const DEFAULT_FILTER: CourseFilter = { kind: "category", category: "Featured" };

type CourseFilterContextValue = {
  filter: CourseFilter;
  /** Updates the filter and scrolls the course grid into view. */
  showCourses: (filter: CourseFilter) => void;
  setFilter: (filter: CourseFilter) => void;
};

const CourseFilterContext = createContext<CourseFilterContextValue | null>(null);

/**
 * Shares the course filter between the category tabs and the learning-path
 * cards, which live in separate sections of the home page.
 */
export function CourseFilterProvider({ children }: { children: React.ReactNode }) {
  const [filter, setFilter] = useState<CourseFilter>(DEFAULT_FILTER);

  const showCourses = (next: CourseFilter) => {
    setFilter(next);
    document.getElementById("courses")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <CourseFilterContext value={{ filter, setFilter, showCourses }}>{children}</CourseFilterContext>
  );
}

export function useCourseFilter() {
  const value = useContext(CourseFilterContext);
  if (!value) throw new Error("useCourseFilter must be used inside <CourseFilterProvider>");
  return value;
}

export function matchesFilter(course: Course, filter: CourseFilter) {
  return filter.kind === "category"
    ? course.categories.includes(filter.category)
    : course.categories.some((c) => filter.categories.includes(c));
}
