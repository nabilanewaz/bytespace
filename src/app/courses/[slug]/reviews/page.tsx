import type { Metadata } from "next";
import { ContentSection, Prose } from "@/components/course/ContentSection";
import { RatingSummary } from "@/components/course/RatingSummary";
import { ReviewList } from "@/components/course/ReviewList";
import { loadCourse } from "@/lib/course";

export async function generateMetadata({ params }: PageProps<"/courses/[slug]/reviews">): Promise<Metadata> {
  const detail = await loadCourse(params);
  return { title: `Reviews · ${detail.headline} — ByteSpace` };
}

export default async function CourseReviewsPage({ params }: PageProps<"/courses/[slug]/reviews">) {
  const detail = await loadCourse(params);

  return (
    <div className="flex flex-col gap-10">
      <ContentSection title="What Learners Are Saying">
        <Prose>
          <p>{detail.reviewsIntro}</p>
        </Prose>
        <RatingSummary
          average={detail.course.rating}
          breakdown={detail.course.ratingBreakdown}
          className="mt-6"
        />
      </ContentSection>

      <ContentSection title="Individual Reviews:">
        <ReviewList reviews={detail.reviews} />
      </ContentSection>
    </div>
  );
}
