"use client";

import { useState } from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { StarRating } from "@/components/ui/StarRating";
import type { Review } from "@/data/courseDetails";
import { cn } from "@/lib/cn";

const filters = [null, 5, 4, 3, 2, 1] as const;

/** Individual reviews with a star-rating filter. */
export function ReviewList({ reviews }: { reviews: Review[] }) {
  const [rating, setRating] = useState<number | null>(null);
  const visible = rating === null ? reviews : reviews.filter((r) => r.rating === rating);

  return (
    <div>
      <div role="group" aria-label="Filter by rating" className="flex flex-wrap gap-4">
        {filters.map((value) => (
          <button
            key={value ?? "all"}
            type="button"
            aria-pressed={rating === value}
            onClick={() => setRating(value)}
            className={cn(
              "flex h-11 cursor-pointer items-center gap-1.5 rounded-full px-4 text-lg transition",
              rating === value ? "bg-lime text-ink" : "bg-surface text-muted hover:bg-line",
            )}
          >
            {value === null ? (
              "All rating"
            ) : (
              <>
                <Star className="size-5 fill-ink-soft text-ink-soft" aria-hidden="true" />
                {value}
                <span className="sr-only">stars</span>
              </>
            )}
          </button>
        ))}
      </div>

      <ul className="mt-6 flex flex-col gap-6">
        {visible.map((review) => (
          <li key={review.id}>
            <ReviewCard review={review} />
          </li>
        ))}
        {visible.length === 0 && (
          <li className="rounded-3xl bg-surface px-6 py-12 text-center text-muted">
            No {rating}-star reviews yet.
          </li>
        )}
      </ul>
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="rounded-3xl border border-line-strong p-6 sm:p-10">
      <header className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <Image
            src={review.avatar}
            alt=""
            width={52}
            height={52}
            className="size-[52px] rounded-full object-cover"
          />
          <div>
            <h3 className="text-lg text-ink">{review.name}</h3>
            <p className="text-base text-muted">{review.role}</p>
          </div>
        </div>
        <p className="shrink-0 text-base text-muted">{review.postedAgo}</p>
      </header>
      <StarRating rating={review.rating} className="mt-6" />
      <p className="mt-6 text-base leading-[1.7] text-muted">{review.body}</p>
    </article>
  );
}
