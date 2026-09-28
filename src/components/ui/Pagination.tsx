"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/cn";

type PaginationProps = {
  page: number;
  pageCount: number;
  onPageChange: (page: number) => void;
  className?: string;
};

const arrow =
  "grid size-12 cursor-pointer place-items-center rounded-full border border-line-strong text-ink-soft transition hover:bg-surface disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-transparent";

/** Previous / numbered pages / next. Renders nothing for a single page. */
export function Pagination({ page, pageCount, onPageChange, className }: PaginationProps) {
  if (pageCount <= 1) return null;
  const pages = Array.from({ length: pageCount }, (_, i) => i + 1);

  return (
    <nav aria-label="Pagination" className={cn("flex items-center justify-center gap-4", className)}>
      <button
        type="button"
        className={arrow}
        disabled={page === 1}
        onClick={() => onPageChange(page - 1)}
        aria-label="Previous page"
      >
        <ChevronLeft className="size-6" aria-hidden="true" />
      </button>
      <ol className="flex items-center gap-1">
        {pages.map((n) => (
          <li key={n}>
            <button
              type="button"
              onClick={() => onPageChange(n)}
              aria-current={n === page ? "page" : undefined}
              aria-label={`Page ${n}`}
              className={cn(
                "grid size-10 cursor-pointer place-items-center rounded-full font-display text-xl font-semibold transition",
                n === page ? "bg-lime text-ink" : "text-ink-soft hover:bg-surface",
              )}
            >
              {n}
            </button>
          </li>
        ))}
      </ol>
      <button
        type="button"
        className={arrow}
        disabled={page === pageCount}
        onClick={() => onPageChange(page + 1)}
        aria-label="Next page"
      >
        <ChevronRight className="size-6" aria-hidden="true" />
      </button>
    </nav>
  );
}
