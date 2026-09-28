import { cn } from "@/lib/cn";

/** Pulsing placeholder shown while browser-saved data (cart, enrollments) is read. */
export function LoadingBlock({ label, className }: { label: string; className?: string }) {
  return (
    <div role="status" aria-label={label} className={cn("h-[300px] animate-pulse rounded-3xl bg-surface", className)} />
  );
}
