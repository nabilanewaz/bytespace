import type { Metadata } from "next";
import { CourseHero } from "@/components/course/CourseHero";
import { CourseSidebar } from "@/components/course/CourseSidebar";
import { CourseTabs } from "@/components/course/CourseTabs";
import { VIDEO_OVERLAP, courseGrid } from "@/components/course/layout";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { courses } from "@/data/courses";
import { loadCourse } from "@/lib/course";
import { cn } from "@/lib/cn";

export const dynamicParams = false;

export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.id }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/courses/[slug]">): Promise<Metadata> {
  const detail = await loadCourse(params);
  return { title: `${detail.headline} — ByteSpace`, description: detail.subtitle };
}

export default async function CourseLayout({ params, children }: LayoutProps<"/courses/[slug]">) {
  const detail = await loadCourse(params);

  return (
    <>
      <main>
        <CourseHero detail={detail} />
        <Container className={cn("flex flex-col pb-20 lg:pb-[70px]", courseGrid)}>
          <div className="pt-12 lg:pt-[62px]">
            <CourseTabs slug={detail.course.id} />
            <div className="mt-10">{children}</div>
          </div>
          <CourseSidebar
            detail={detail}
            className={cn("max-lg:mt-12 lg:self-start", VIDEO_OVERLAP)}
          />
        </Container>
      </main>
      <Footer />
    </>
  );
}
