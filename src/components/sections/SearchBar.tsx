"use client";

import { Search } from "lucide-react";
import { useCourseFilter } from "@/components/sections/CourseFilterContext";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

/** Hero search: filters the course grid by title, creator, level or category. */
export function SearchBar({ className }: { className?: string }) {
  const { showCourses } = useCourseFilter();

  return (
    <form
      role="search"
      className={cn("flex w-full max-w-[580px] items-center gap-3 sm:gap-4", className)}
      onSubmit={(e) => {
        e.preventDefault();
        const query = String(new FormData(e.currentTarget).get("q") ?? "").trim();
        showCourses(query ? { kind: "search", query } : { kind: "category", category: "Featured" });
      }}
    >
      <label className="flex h-[52px] flex-1 items-center gap-3 rounded-full bg-white px-6 focus-within:ring-2 focus-within:ring-lime">
        <Search className="size-5 shrink-0 text-subtle" aria-hidden="true" />
        <span className="sr-only">Search courses</span>
        <input
          type="search"
          name="q"
          placeholder="Course, topic, creator"
          className="w-full min-w-0 bg-transparent text-lg text-ink outline-none placeholder:text-subtle"
        />
      </label>
      <Button type="submit" size="lg">
        Search
      </Button>
    </form>
  );
}
