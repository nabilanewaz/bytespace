"use client";

import { useState } from "react";
import { ChartNoAxesColumn, Funnel, ListFilter, Shapes } from "lucide-react";
import { CourseCard } from "@/components/cards/CourseCard";
import { SelectPill, type SelectOption } from "@/components/ui/SelectPill";
import type { Course } from "@/data/courses";

const ALL = "all";
const levelOrder = ["Beginner", "Intermediate", "Advanced"] as const;

const ratingOptions: SelectOption[] = [
  { value: ALL, label: "Any rating" },
  { value: "4.5", label: "4.5 & up" },
  { value: "4", label: "4.0 & up" },
];

const levelOptions: SelectOption[] = [
  { value: ALL, label: "All levels" },
  ...levelOrder.map((l) => ({ value: l, label: l })),
];

const sortOptions: SelectOption[] = [
  { value: "relevant", label: "Most relevant" },
  { value: "title", label: "Title (A–Z)" },
  { value: "level", label: "Level: beginner first" },
];

/** Creator's course grid with rating/level/category filters and sorting. */
export function CreatorCourses({ courses }: { courses: Course[] }) {
  const [rating, setRating] = useState(ALL);
  const [level, setLevel] = useState(ALL);
  const [category, setCategory] = useState(ALL);
  const [sort, setSort] = useState("relevant");

  const categories = [...new Set(courses.flatMap((c) => c.categories))]
    .filter((c) => c !== "Featured")
    .sort();
  const categoryOptions: SelectOption[] = [
    { value: ALL, label: "All categories" },
    ...categories.map((c) => ({ value: c, label: c })),
  ];

  const visible = courses
    .filter((c) => rating === ALL || c.rating >= Number(rating))
    .filter((c) => level === ALL || c.level === level)
    .filter((c) => category === ALL || c.categories.includes(category))
    .toSorted((a, b) => {
      if (sort === "title") return a.title.localeCompare(b.title);
      if (sort === "level") return levelOrder.indexOf(a.level) - levelOrder.indexOf(b.level);
      return 0;
    });

  const clearFilters = () => {
    setRating(ALL);
    setLevel(ALL);
    setCategory(ALL);
  };

  return (
    <section aria-label="Courses">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-4">
          <SelectPill label="Filter" icon={Funnel} value={rating} options={ratingOptions} onChange={setRating} />
          <SelectPill label="Level" icon={ChartNoAxesColumn} value={level} options={levelOptions} onChange={setLevel} />
          <SelectPill label="Category" icon={Shapes} value={category} options={categoryOptions} onChange={setCategory} />
        </div>
        <SelectPill
          label="Sort by"
          icon={ListFilter}
          value={sort}
          options={sortOptions}
          onChange={setSort}
          showValue
        />
      </div>

      <p className="sr-only" aria-live="polite">
        Showing {visible.length} of {courses.length} courses
      </p>

      {visible.length > 0 ? (
        <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((course) => (
            <CourseCard key={course.id} course={course} href={`/courses/${course.id}`} />
          ))}
        </div>
      ) : (
        <div className="mt-10 rounded-3xl bg-surface px-6 py-16 text-center text-lg text-muted">
          <p>No courses match these filters.</p>
          <button type="button" onClick={clearFilters} className="mt-4 cursor-pointer text-brand hover:underline">
            Clear filters
          </button>
        </div>
      )}
    </section>
  );
}
