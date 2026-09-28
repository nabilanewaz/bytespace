import Image from "next/image";
import Link from "next/link";
import { ChartNoAxesColumn, Star } from "lucide-react";
import { AvatarStack } from "@/components/ui/AvatarStack";
import type { Course } from "@/data/courses";
import { cn } from "@/lib/cn";

type CourseCardProps = {
  course: Course;
  /** Color of the rating star; the auth pages use lime. */
  starTone?: "muted" | "lime";
  /** Makes the whole card a link to the course page. */
  href?: string;
  className?: string;
};

export function CourseCard({ course, starTone = "muted", href, className }: CourseCardProps) {
  return (
    <article
      className={cn(
        "relative flex min-w-0 flex-col rounded-3xl border border-line-strong bg-white p-4 transition hover:shadow-card",
        className,
      )}
    >
      <div className="relative aspect-[341/195] overflow-hidden rounded-xl">
        <Image
          src={course.image}
          alt=""
          fill
          sizes="(min-width: 1024px) 341px, (min-width: 640px) 45vw, 90vw"
          className="object-cover"
        />
        <ul className="absolute inset-x-3 bottom-2.5 flex flex-wrap gap-3 text-xs text-ink-soft">
          {[`${course.lessons} Lessons`, course.duration, `${course.comments} Comments`].map(
            (meta) => (
              <li
                key={meta}
                className="rounded-full bg-[#f6f6f6]/60 px-3 py-2 whitespace-nowrap backdrop-blur-sm"
              >
                {meta}
              </li>
            ),
          )}
        </ul>
      </div>

      <div className="mt-4 flex items-start justify-between gap-3">
        <h3 className="min-w-0 truncate font-display text-xl font-semibold text-ink" title={course.title}>
          {href ? (
            <Link href={href} className="after:absolute after:inset-0 after:rounded-3xl">
              {course.title}
            </Link>
          ) : (
            course.title
          )}
        </h3>
        <p className="flex shrink-0 items-center gap-1 text-lg text-muted">
          {course.rating}
          <Star
            aria-label="stars"
            className={cn(
              "size-5 fill-current",
              starTone === "lime" ? "text-lime" : "text-line",
            )}
          />
        </p>
      </div>
      <p className="text-xs text-muted">
        by{" "}
        {href ? (
          <Link
            href={`/creators/${course.creatorId}`}
            className="relative z-10 text-brand hover:underline"
          >
            {course.creator}
          </Link>
        ) : (
          <span className="text-brand">{course.creator}</span>
        )}
      </p>

      <div className="mt-4 flex items-center gap-3">
        <span className="inline-flex h-8 items-center gap-1.5 rounded-full bg-surface px-3.5 text-sm text-ink-soft">
          <ChartNoAxesColumn className="size-4" strokeWidth={3} aria-hidden="true" />
          {course.level}
        </span>
        <AvatarStack
          avatars={course.enrolledAvatars}
          extra={`${course.enrolledExtra}+`}
          extraTone={starTone === "lime" ? "dark" : "lime"}
        />
      </div>

      <p className="mt-4 text-sm text-muted">
        <span className="font-display text-xl font-semibold text-brand">${course.price}</span>
        /lifetime
      </p>
    </article>
  );
}
