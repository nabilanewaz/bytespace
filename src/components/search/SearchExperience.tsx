"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import { CourseGrid } from "@/components/courses/CourseGrid";
import { CourseToolbar } from "@/components/courses/CourseToolbar";
import { Navbar } from "@/components/layout/Navbar";
import { CreatorResults } from "@/components/search/CreatorResults";
import { Container } from "@/components/ui/Container";
import { Pagination } from "@/components/ui/Pagination";
import { courses } from "@/data/courses";
import { creators } from "@/data/creators";
import {
  ALL,
  DEFAULT_FILTERS,
  applyCourseFilters,
  categoryOptions,
  hasActiveFilters,
  type CourseFilters,
} from "@/lib/courseFilters";
import { cn } from "@/lib/cn";

const PAGE_SIZE = 9;

export type SearchScope = "courses" | "creators";

type SearchExperienceProps = {
  initialQuery: string;
  initialScope: SearchScope;
  initialCategory: string;
};

const categories = categoryOptions(courses);

export function SearchExperience({ initialQuery, initialScope, initialCategory }: SearchExperienceProps) {
  const [scope, setScope] = useState<SearchScope>(initialScope);
  const [filters, setFilters] = useState<CourseFilters>({
    ...DEFAULT_FILTERS,
    query: initialQuery,
    category: categories.some((c) => c.value === initialCategory) ? initialCategory : ALL,
  });
  const [page, setPage] = useState(1);
  const resultsRef = useRef<HTMLDivElement>(null);

  // Mirror the search in the URL so results can be shared and survive a reload.
  useEffect(() => {
    const params = new URLSearchParams();
    if (filters.query) params.set("q", filters.query);
    if (scope !== "courses") params.set("scope", scope);
    if (filters.category !== ALL) params.set("category", filters.category);
    const qs = params.toString();
    // Keep the current path so a basePath or locale prefix is preserved.
    const { pathname } = window.location;
    window.history.replaceState(null, "", qs ? `${pathname}?${qs}` : pathname);
  }, [filters.query, filters.category, scope]);

  const updateFilters = (patch: Partial<CourseFilters>) => {
    setFilters((f) => ({ ...f, ...patch }));
    setPage(1);
  };

  const results = applyCourseFilters(courses, filters);
  const pageCount = Math.max(1, Math.ceil(results.length / PAGE_SIZE));
  const currentPage = Math.min(page, pageCount);
  const pageResults = results.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  const goToPage = (n: number) => {
    setPage(n);
    resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <section className="bg-grid overflow-hidden">
        <Navbar />
        <Container className="pt-6 pb-16 text-center lg:pt-[42px] lg:pb-[70px]">
          <h1 className="font-display text-3xl font-semibold text-white sm:text-4xl lg:text-[44px]">
            Find Your Next Course
          </h1>
          <form
            role="search"
            className="mx-auto mt-8 flex w-full max-w-[624px] flex-col gap-3 sm:flex-row sm:gap-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <label className="flex h-[52px] items-center sm:flex-1 gap-3 rounded-full bg-white px-6 focus-within:ring-2 focus-within:ring-lime">
              <Search className="size-5 shrink-0 text-subtle" aria-hidden="true" />
              <span className="sr-only">Search {scope}</span>
              <input
                type="search"
                name="q"
                value={filters.query}
                onChange={(e) => updateFilters({ query: e.target.value })}
                placeholder="Search"
                className="w-full min-w-0 bg-transparent text-lg text-ink outline-none placeholder:text-subtle"
              />
            </label>
            <div className="relative flex h-12 items-center justify-center gap-3 rounded-full bg-lime px-6 text-lg text-ink focus-within:ring-2 focus-within:ring-white">
              {scope === "courses" ? "Courses" : "Creators"}
              <ChevronDown className="size-5" aria-hidden="true" />
              <select
                aria-label="Search in"
                value={scope}
                onChange={(e) => setScope(e.target.value as SearchScope)}
                className="absolute inset-0 cursor-pointer appearance-none opacity-0"
              >
                <option value="courses">Courses</option>
                <option value="creators">Creators</option>
              </select>
            </div>
          </form>
        </Container>
      </section>

      <Container className="py-14 lg:pt-[72px] lg:pb-[72px]">
        {scope === "creators" ? (
          <CreatorResults creators={creators} query={filters.query} />
        ) : (
          <>
            <CourseToolbar filters={filters} categoryOptions={categories} onChange={updateFilters} />

            <div
              role="group"
              aria-label="Categories"
              className="-mx-4 mt-8 flex gap-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0"
            >
              {categories.map(({ value, label }) => (
                <button
                  key={value}
                  type="button"
                  aria-pressed={filters.category === value}
                  onClick={() => updateFilters({ category: value })}
                  className={cn(
                    "h-11 shrink-0 cursor-pointer rounded-full px-4 text-lg whitespace-nowrap transition",
                    filters.category === value ? "bg-lime text-ink" : "bg-surface text-ink-soft hover:bg-line",
                  )}
                >
                  {value === ALL ? "All" : label}
                </button>
              ))}
            </div>

            <div ref={resultsRef} className="mt-12 scroll-mt-8 lg:mt-[76px]">
              <p className="mb-6 text-lg text-muted" aria-live="polite">
                {results.length} {results.length === 1 ? "course" : "courses"}
                {filters.query && <> for “{filters.query}”</>}
              </p>
              <CourseGrid
                courses={pageResults}
                emptyMessage="No courses match your search. Try a different keyword or clear the filters."
                onReset={
                  filters.query || hasActiveFilters(filters)
                    ? () => updateFilters({ ...DEFAULT_FILTERS, sort: filters.sort })
                    : undefined
                }
                resetLabel="Clear search and filters"
              />
              <Pagination
                className="mt-16 lg:mt-[72px]"
                page={currentPage}
                pageCount={pageCount}
                onPageChange={goToPage}
              />
            </div>
          </>
        )}
      </Container>
    </>
  );
}
