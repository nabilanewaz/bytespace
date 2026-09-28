"use client";

import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

/** Hero search: opens the search page with the query. */
export function SearchBar({ className }: { className?: string }) {
  const router = useRouter();

  return (
    <form
      role="search"
      action="/search"
      className={cn("flex w-full max-w-[580px] items-center gap-3 sm:gap-4", className)}
      onSubmit={(e) => {
        e.preventDefault();
        const query = String(new FormData(e.currentTarget).get("q") ?? "").trim();
        router.push(query ? `/search?q=${encodeURIComponent(query)}` : "/search");
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
