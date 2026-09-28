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

const MAX_ITEMS = 7;

/**
 * Page numbers to show: all of them when there are few, otherwise the first,
 * the last and the current page ±1, with "gap" markers in between
 * (e.g. 1 … 4 5 6 … 20). Never more than MAX_ITEMS entries.
 */
export function pageItems(page: number, pageCount: number): (number | "gap")[] {
  if (pageCount <= MAX_ITEMS) return Array.from({ length: pageCount }, (_, i) => i + 1);
  // Near either end, widen the window so the list keeps the same length.
  const start = Math.max(2, Math.min(page - 1, pageCount - 4));
  const end = Math.min(pageCount - 1, Math.max(page + 1, 5));
  const middle = Array.from({ length: end - start + 1 }, (_, i) => start + i);
  return [
    1,
    ...(start > 2 ? (["gap"] as const) : []),
    ...middle,
    ...(end < pageCount - 1 ? (["gap"] as const) : []),
    pageCount,
  ];
}

/** Previous / numbered pages / next. Renders nothing for a single page. */
export function Pagination({ page, pageCount, onPageChange, className }: PaginationProps) {
  if (pageCount <= 1) return null;
  const items = pageItems(page, pageCount);

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
        {items.map((n, i) =>
          n === "gap" ? (
            <li key={`gap-${i}`} aria-hidden="true" className="w-6 text-center text-xl text-subtle">
              …
            </li>
          ) : (
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
          ),
        )}
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
