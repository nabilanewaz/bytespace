import { CircleCheck } from "lucide-react";
import { cn } from "@/lib/cn";

type CheckListProps = {
  items: readonly string[];
  /** `muted` is the smaller grey variant used in course content. */
  tone?: "default" | "muted";
  className?: string;
};

/** Vertical list with the brand's blue check marks. */
export function CheckList({ items, tone = "default", className }: CheckListProps) {
  return (
    <ul className={cn("flex flex-col", tone === "muted" ? "gap-3" : "gap-4", className)}>
      {items.map((item) => (
        <li
          key={item}
          className={cn(
            "flex items-center gap-3",
            tone === "muted" ? "text-base text-muted" : "text-lg text-ink-soft",
          )}
        >
          <CircleCheck className="size-6 shrink-0 fill-brand text-white" aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  );
}
