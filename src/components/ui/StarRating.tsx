import { Star } from "lucide-react";
import { cn } from "@/lib/cn";

type StarRatingProps = {
  rating: number;
  max?: number;
  size?: "sm" | "md";
  className?: string;
};

const sizes = { sm: "size-5", md: "size-6" };

/** Row of filled/empty stars; announced to screen readers as "N out of 5 stars". */
export function StarRating({ rating, max = 5, size = "md", className }: StarRatingProps) {
  return (
    <div role="img" aria-label={`${rating} out of ${max} stars`} className={cn("flex gap-1", className)}>
      {Array.from({ length: max }, (_, i) => (
        <Star
          key={i}
          aria-hidden="true"
          className={cn(
            "fill-current",
            sizes[size],
            i < Math.round(rating) ? "text-ink-soft" : "text-line",
          )}
        />
      ))}
    </div>
  );
}
