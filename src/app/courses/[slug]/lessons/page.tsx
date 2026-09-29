import type { Metadata } from "next";
import { LearningProgressCard } from "@/components/cards/FloatingCards";
import { ContentSection, Prose } from "@/components/course/ContentSection";
import { ModuleList } from "@/components/course/ModuleList";
import { loadCourse } from "@/lib/course";

export async function generateMetadata({ params }: PageProps<"/courses/[slug]/lessons">): Promise<Metadata> {
  const detail = await loadCourse(params);
  return { title: `Lessons · ${detail.headline} — ByteSpace` };
}

export default async function CourseLessonsPage({ params }: PageProps<"/courses/[slug]/lessons">) {
  const detail = await loadCourse(params);

  return (
    <div className="flex flex-col gap-10">
      <ContentSection title="Explore the Modules">
        <Prose>
          <p>{detail.modulesIntro}</p>
        </Prose>
      </ContentSection>

      <ContentSection title="Lesson List">
        <ModuleList modules={detail.modules} />
      </ContentSection>

      <ContentSection title="Lesson Content">
        <Prose>
          <p>{detail.lessonContent}</p>
        </Prose>
      </ContentSection>

      <ContentSection title="Lesson Progress Tracking">
        <Prose>
          <p>{detail.progressText}</p>
        </Prose>
        <LearningProgressCard bordered percent={detail.progress} className="mt-6" />
      </ContentSection>
    </div>
  );
}
