import { StarRating } from "@/components/ui/StarRating";
import { cn } from "@/lib/cn";

type RatingSummaryProps = {
  average: number;
  /** Review counts for 5, 4, 3, 2 and 1 stars. */
  breakdown: readonly number[];
  className?: string;
};

export function RatingSummary({ average, breakdown, className }: RatingSummaryProps) {
  const total = breakdown.reduce((sum, n) => sum + n, 0);

  return (
    <div
      className={cn(
        "flex flex-col gap-8 rounded-3xl border border-line-strong p-6 sm:flex-row sm:items-center sm:gap-6 sm:p-10",
        className,
      )}
    >
      <div className="grid size-[130px] shrink-0 place-items-center content-center rounded-lg bg-lime text-ink-soft">
        <p className="text-sm">Ratings</p>
        <p className="font-display text-4xl font-semibold">{average}</p>
      </div>

      <ul className="flex flex-1 flex-col gap-2" aria-label="Rating breakdown">
        {breakdown.map((count, i) => {
          const stars = 5 - i;
          const percent = total ? (count / total) * 100 : 0;
          return (
            <li key={stars} className="flex items-center gap-4">
              <div className="h-2 flex-1 overflow-hidden rounded-full bg-line">
                <div className="h-full rounded-full bg-lime" style={{ width: `${percent}%` }} />
              </div>
              <StarRating rating={stars} starClassName="size-5" className="max-sm:hidden" />
              <span className="sr-only sm:hidden">{stars} stars:</span>
              <span className="w-10 text-right text-base text-muted">{count}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
