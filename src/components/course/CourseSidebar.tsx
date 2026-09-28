import Image from "next/image";
import { FileText, Headset, IdCard, Video } from "lucide-react";
import { Button, ButtonLink } from "@/components/ui/Button";
import { courseIncludes, type CourseDetail } from "@/data/courseDetails";
import { cn } from "@/lib/cn";

const includeIcons = {
  "Learning Resources": FileText,
  "Quality Lesson Videos": Video,
  "Certificate of Completion": IdCard,
  "Private Consultation": Headset,
};

const ctaText = "Ready to Dive In? Enroll Now and Start Building Your Digital Future!";

export function CourseSidebar({ detail, className }: { detail: CourseDetail; className?: string }) {
  const remaining = detail.totalLessons - detail.previewLessons.length;

  return (
    <aside
      aria-label="Course summary"
      className={cn("rounded-3xl border border-line-strong bg-white p-6 sm:p-10", className)}
    >
      <h2 className="font-display text-xl font-semibold text-ink-soft">
        {detail.totalLessons} Lessons ({detail.totalHours} hours)
      </h2>
      <ol className="mt-5 flex flex-col gap-3">
        {detail.previewLessons.map((lesson, i) => (
          <li key={lesson.title} className="flex gap-3 text-base text-ink-soft">
            <span className="w-5 shrink-0">{String(i + 1).padStart(2, "0")}</span>
            <span className="flex-1">{lesson.title}</span>
            <span className="shrink-0 pt-0.5 text-brand">{lesson.minutes} mins</span>
          </li>
        ))}
      </ol>
      <p className="mt-4 text-base text-muted">{remaining} more videos</p>

      <p className="mt-8 text-base leading-relaxed text-muted">{ctaText}</p>
      <p className="mt-6 text-base text-muted">
        <span className="font-display text-4xl font-semibold text-brand">
          ${detail.course.price}
        </span>
        /lifetime
      </p>
      <Button size="lg" className="mt-6 w-full">
        Enroll Now
      </Button>

      <h3 className="mt-8 font-display text-xl font-semibold text-ink-soft">This course include</h3>
      <ul className="mt-5 flex flex-col gap-4">
        {courseIncludes.map((item) => {
          const Icon = includeIcons[item];
          return (
            <li key={item} className="flex items-center gap-3 text-base text-muted">
              <Icon className="size-5 text-brand" aria-hidden="true" />
              {item}
            </li>
          );
        })}
      </ul>

      <div id="creator" className="mt-6 scroll-mt-8 border-t border-line pt-6">
        <div className="flex items-center gap-3">
          <Image
            src={detail.creator.avatar}
            alt=""
            width={52}
            height={52}
            className="size-[52px] rounded-full object-cover"
          />
          <div>
            <p className="text-lg text-ink-soft">{detail.creator.name}</p>
            <p className="text-base text-muted">{detail.creator.role}</p>
          </div>
        </div>
        <p className="mt-6 text-base leading-relaxed text-muted">{ctaText}</p>
        <ButtonLink href="#" variant="outline" size="sm" className="mt-5">
          See Full Profile
        </ButtonLink>
      </div>
    </aside>
  );
}
