import { Star } from "lucide-react";
import { cn } from "@/lib/cn";

type StarRatingProps = {
  rating: number;
  max?: number;
  className?: string;
  starClassName?: string;
};

/** Row of filled/empty stars; announced to screen readers as "N out of 5 stars". */
export function StarRating({ rating, max = 5, className, starClassName }: StarRatingProps) {
  return (
    <div role="img" aria-label={`${rating} out of ${max} stars`} className={cn("flex gap-1", className)}>
      {Array.from({ length: max }, (_, i) => (
        <Star
          key={i}
          aria-hidden="true"
          className={cn(
            "size-6 fill-current",
            i < Math.round(rating) ? "text-ink-soft" : "text-line",
            starClassName,
          )}
        />
      ))}
    </div>
  );
}
