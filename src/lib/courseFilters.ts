import type { SelectOption } from "@/components/ui/SelectPill";
import type { Course } from "@/data/courses";

/** Value meaning "no filter" for the rating, level and category selects. */
export const ALL = "all";

const levelOrder = ["Beginner", "Intermediate", "Advanced"] as const;

/** Sort rank for a level; anything unrecognised sorts last. */
function levelRank(level: string) {
  const rank = levelOrder.indexOf(level as (typeof levelOrder)[number]);
  return rank === -1 ? levelOrder.length : rank;
}

export type CourseFilters = {
  query: string;
  rating: string;
  level: string;
  category: string;
  sort: string;
};

export const DEFAULT_FILTERS: CourseFilters = {
  query: "",
  rating: ALL,
  level: ALL,
  category: ALL,
  sort: "relevant",
};

export const ratingOptions: SelectOption[] = [
  { value: ALL, label: "Any rating" },
  { value: "4.5", label: "4.5 & up" },
  { value: "4", label: "4.0 & up" },
];

export const levelOptions: SelectOption[] = [
  { value: ALL, label: "All levels" },
  ...levelOrder.map((l) => ({ value: l, label: l })),
];

export const sortOptions: SelectOption[] = [
  { value: "relevant", label: "Most relevant" },
  { value: "rating", label: "Highest rated" },
  { value: "price-asc", label: "Price: low to high" },
  { value: "price-desc", label: "Price: high to low" },
  { value: "title", label: "Title (A–Z)" },
  { value: "level", label: "Level: beginner first" },
];

/** Category options built from the courses themselves (the "Featured" tag is not a topic). */
export function categoryOptions(courses: Course[]): SelectOption[] {
  const categories = [...new Set(courses.flatMap((c) => c.categories))]
    .filter((c) => c !== "Featured")
    .sort();
  return [{ value: ALL, label: "All categories" }, ...categories.map((c) => ({ value: c, label: c }))];
}

/** True when every word of `query` appears in the course's title, creator, level or categories. */
export function matchesQuery(course: Course, query: string) {
  const haystack = [course.title, course.creator, course.level, ...course.categories]
    .join(" ")
    .toLowerCase();
  return query
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean)
    .every((word) => haystack.includes(word));
}

export function applyCourseFilters(courses: Course[], f: CourseFilters) {
  // `filter` returns a new array, so sorting it in place doesn't touch `courses`.
  // (`toSorted` would read better but isn't available in all supported browsers.)
  return courses
    .filter((c) => matchesQuery(c, f.query))
    .filter((c) => f.rating === ALL || c.rating >= Number(f.rating))
    .filter((c) => f.level === ALL || c.level === f.level)
    .filter((c) => f.category === ALL || c.categories.includes(f.category))
    .sort((a, b) => {
      switch (f.sort) {
        case "rating":
          return b.rating - a.rating;
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "title":
          return a.title.localeCompare(b.title);
        case "level":
          return levelRank(a.level) - levelRank(b.level);
        default:
          return 0;
      }
    });
}

/** Whether any filter narrows the results (the search query and sort order don't count). */
export function hasActiveFilters(f: CourseFilters) {
  return f.rating !== ALL || f.level !== ALL || f.category !== ALL;
}
