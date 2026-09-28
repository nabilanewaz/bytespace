import { CourseCard } from "@/components/cards/CourseCard";
import type { Course } from "@/data/courses";
import { cn } from "@/lib/cn";

type CourseGridProps = {
  courses: Course[];
  /** Shown instead of the grid when `courses` is empty. */
  emptyMessage: string;
  onReset?: () => void;
  resetLabel?: string;
  className?: string;
};

/** Three-column grid of linked course cards, with an empty state. */
export function CourseGrid({
  courses,
  emptyMessage,
  onReset,
  resetLabel = "Clear filters",
  className,
}: CourseGridProps) {
  if (courses.length === 0) {
    return (
      <div className={cn("rounded-3xl bg-surface px-6 py-16 text-center text-lg text-muted", className)}>
        <p>{emptyMessage}</p>
        {onReset && (
          <button type="button" onClick={onReset} className="mt-4 cursor-pointer text-brand hover:underline">
            {resetLabel}
          </button>
        )}
      </div>
    );
  }

  return (
    <div className={cn("grid gap-10 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} href={`/courses/${course.id}`} />
      ))}
    </div>
  );
}
