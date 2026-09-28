import Image from "next/image";
import Link from "next/link";
import { ChartNoAxesColumn, Play, Star, Users } from "lucide-react";
import { ShareButton } from "@/components/course/ShareButton";
import { courseGrid } from "@/components/course/layout";
import { Navbar } from "@/components/layout/Navbar";
import { Container } from "@/components/ui/Container";
import type { CourseDetail } from "@/data/courseDetails";
import { cn } from "@/lib/cn";

export function CourseHero({ detail }: { detail: CourseDetail }) {
  const stats = [
    { Icon: ChartNoAxesColumn, label: detail.level },
    { Icon: Star, label: `${detail.rating} (${detail.reviewCount} reviews)`, filled: true },
    { Icon: Users, label: `${detail.students} Students` },
  ];

  return (
    <section className="bg-grid overflow-hidden">
      <Navbar />
      <Container className="pt-6 pb-10 lg:pt-[52px] lg:pb-[62px]">
        <div className="flex flex-col-reverse gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h1 className="font-display text-3xl leading-tight font-semibold text-white sm:text-4xl lg:text-[44px]">
              {detail.headline}
            </h1>
            <p className="mt-2 font-display text-lg font-semibold text-white sm:text-xl">
              {detail.subtitle}
            </p>
            <p className="mt-6 text-lg text-white lg:mt-8">
              by{" "}
              <Link href="#creator" className="text-lime hover:underline">
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
          <div className="relative h-[220px] overflow-hidden rounded-3xl sm:h-[380px] lg:h-[479px]">
            <Image
              src="/images/course/video-poster.webp"
              alt={`Preview video for ${detail.headline}`}
              fill
              priority
              sizes="(min-width: 1280px) 725px, (min-width: 1024px) 60vw, 100vw"
              className="object-cover"
            />
            <span
              aria-hidden="true"
              className="absolute top-1/2 left-1/2 grid size-[60px] -translate-1/2 place-items-center rounded-full bg-white/90 shadow-card"
            >
              <Play className="ml-1 size-6 fill-ink-soft text-ink-soft" />
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
