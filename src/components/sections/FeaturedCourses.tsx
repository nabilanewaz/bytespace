"use client";

import { useState } from "react";
import { Plus, X } from "lucide-react";
import { CourseCard } from "@/components/cards/CourseCard";
import {
  DEFAULT_FILTER,
  matchesFilter,
  useCourseFilter,
} from "@/components/sections/CourseFilterContext";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { courseCategories, courses } from "@/data/courses";
import { cn } from "@/lib/cn";

const INITIAL_CATEGORY_COUNT = 18;

export function FeaturedCourses() {
  const { filter, setFilter } = useCourseFilter();
  const [showAll, setShowAll] = useState(false);

  const visibleCategories = showAll
    ? courseCategories
    : courseCategories.slice(0, INITIAL_CATEGORY_COUNT);
  const activeCategory = filter.kind === "category" ? filter.category : null;
  const filtered = courses.filter((c) => matchesFilter(c, filter));

  const count = filtered.length;
  const resultsLabel =
    filter.kind === "search"
      ? `${count} ${count === 1 ? "result" : "results"} for “${filter.query}”`
      : `${count} ${filter.kind === "path" ? filter.label : filter.category} ${count === 1 ? "course" : "courses"}`;

  return (
    <section id="courses" className="scroll-mt-8 py-20 lg:py-[80px]">
      <Container>
        <SectionHeading
          title={
            <>
              Discover Your Passion,
              <br className="hidden sm:block" /> Build Your Skills
            </>
          }
          description="At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life."
        />

        <div
          role="tablist"
          aria-label="Course categories"
          className="mx-auto mt-10 flex max-w-[1100px] flex-wrap justify-center gap-x-4 gap-y-5 lg:mt-12"
        >
          {visibleCategories.map((category) => (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={activeCategory === category}
              onClick={() => setFilter({ kind: "category", category })}
              className={cn(
                "h-11 cursor-pointer rounded-full px-4 text-base transition sm:text-lg",
                activeCategory === category
                  ? "bg-lime text-ink"
                  : "bg-surface text-ink-soft hover:bg-line",
              )}
            >
              {category}
            </button>
          ))}
          {!showAll && courseCategories.length > INITIAL_CATEGORY_COUNT && (
            <button
              type="button"
              onClick={() => setShowAll(true)}
              className="flex h-11 cursor-pointer items-center gap-1 px-2 text-lg text-brand hover:underline"
            >
              <Plus className="size-4" aria-hidden="true" /> More
            </button>
          )}
        </div>

        <div role="tabpanel" aria-label={resultsLabel} className="mt-16 lg:mt-[76px]">
          {filter.kind !== "category" && (
            <div className="mb-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-surface px-6 py-4">
              <p className="text-lg text-ink-soft" aria-live="polite">
                Showing {resultsLabel}
              </p>
              <button
                type="button"
                onClick={() => setFilter(DEFAULT_FILTER)}
                className="flex cursor-pointer items-center gap-1 text-base text-brand hover:underline"
              >
                <X className="size-4" aria-hidden="true" /> Clear
              </button>
            </div>
          )}

          {filtered.length > 0 ? (
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((course) => (
                <CourseCard key={course.id} course={course} href={`/courses/${course.id}`} />
              ))}
            </div>
          ) : (
            <p className="rounded-3xl bg-surface px-6 py-16 text-center text-lg text-muted">
              {filter.kind === "search"
                ? "No courses match your search. Try a different keyword."
                : `New ${filter.kind === "path" ? filter.label : filter.category} courses are coming soon. Check back shortly!`}
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}
