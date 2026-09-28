import { ContentSection, Prose } from "@/components/course/ContentSection";
import { RatingSummary } from "@/components/course/RatingSummary";
import { ReviewList } from "@/components/course/ReviewList";
import { loadCourse } from "@/lib/course";

export default async function CourseReviewsPage({ params }: PageProps<"/courses/[slug]/reviews">) {
  const detail = await loadCourse(params);

  return (
    <div className="flex flex-col gap-10">
      <ContentSection title="What Learners Are Saying">
        <Prose>
          <p>{detail.reviewsIntro}</p>
        </Prose>
        <RatingSummary
          average={detail.rating}
          breakdown={detail.ratingBreakdown}
          className="mt-6"
        />
      </ContentSection>

      <ContentSection title="Individual Reviews:">
        <ReviewList reviews={detail.reviews} />
      </ContentSection>
    </div>
  );
}
