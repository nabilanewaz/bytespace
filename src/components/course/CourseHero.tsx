import Link from "next/link";
import { ChartNoAxesColumn, Star, Users } from "lucide-react";
import { ShareButton } from "@/components/course/ShareButton";
import { VideoPreview } from "@/components/course/VideoPreview";
import { courseGrid } from "@/components/course/layout";
import { Navbar } from "@/components/layout/Navbar";
import { Container } from "@/components/ui/Container";
import type { CourseDetail } from "@/data/courseDetails";
import { cn } from "@/lib/cn";

export function CourseHero({ detail }: { detail: CourseDetail }) {
  const stats = [
    { Icon: ChartNoAxesColumn, label: detail.course.level },
    { Icon: Star, label: `${detail.course.rating} (${detail.course.reviewCount} reviews)`, filled: true },
    { Icon: Users, label: `${detail.students} Students` },
  ];

  return (
    <section className="bg-grid overflow-hidden">
      <Navbar />
      <Container className="pt-6 pb-10 lg:pt-[52px] lg:pb-[62px]">
        <div className="flex flex-col-reverse gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h1 className="font-display text-3xl font-semibold text-white sm:text-4xl lg:text-heading-m">
              {detail.headline}
            </h1>
            <p className="mt-2 font-display text-lg font-semibold text-white sm:text-xl">
              {detail.subtitle}
            </p>
            <p className="mt-6 text-lg text-white lg:mt-8">
              by{" "}
              <Link href={`/creators/${detail.creator.id}`} className="text-lime hover:underline">
                {detail.course.creator}
              </Link>
            </p>
          </div>
          <ShareButton title={detail.headline} className="self-start" />
        </div>

        <ul className="mt-6 flex flex-wrap gap-3 sm:gap-4">
          {stats.map(({ Icon, label, filled }) => (
            <li
              key={label}
              className="flex h-10 items-center gap-2.5 rounded-full bg-white px-6 text-lg text-ink-soft"
            >
              <Icon
                className={cn("size-5 text-brand", filled && "fill-current")}
                strokeWidth={2.5}
                aria-hidden="true"
              />
              {label}
            </li>
          ))}
        </ul>

        <div className={cn("mt-10 lg:mt-[59px]", courseGrid)}>
          <VideoPreview title={detail.headline} />
        </div>
      </Container>
    </section>
  );
}
