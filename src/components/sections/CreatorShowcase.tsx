import Image from "next/image";
import { CircleCheck } from "lucide-react";
import { CourseCard } from "@/components/cards/CourseCard";
import {
  HappyStudentsCard,
  LearningProgressCard,
  RevenueCard,
} from "@/components/cards/FloatingCards";
import { Container } from "@/components/ui/Container";
import { Shape } from "@/components/ui/Shape";
import { courses } from "@/data/courses";
import { creatorBenefits, stats } from "@/data/site";

/**
 * Two alternating feature rows on the glow background: learner growth
 * (text left, visual right) and creator tools (visual left, text right).
 */
export function CreatorShowcase() {
  return (
    <section id="creators" className="bg-glow scroll-mt-8 overflow-hidden py-20 lg:pt-[120px] lg:pb-[120px]">
      <Container className="flex flex-col gap-24 lg:gap-[120px]">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-6">
          <div className="max-w-[560px]">
            <h2 className="font-display text-3xl leading-tight font-semibold text-ink-soft sm:text-4xl lg:text-[44px] lg:leading-[1.2]">
              Your Path to Professional Growth Starts Here!
            </h2>
            <p className="mt-8 text-base leading-[1.8] font-light text-ink-soft sm:text-lg lg:mt-12">
              Explore our curated selection of courses tailored to enhance your capabilities and
              accelerate your career journey. Whether you are looking to sharpen specific skills,
              gain industry expertise, or embark on a new career path entirely, we have the
              resources you need.
            </p>
            <dl className="mt-10 flex gap-14">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col-reverse">
                  <dt className="mt-1 text-lg font-light text-ink-soft">{stat.label}</dt>
                  <dd className="text-4xl text-brand">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <GrowthVisual />
        </div>

        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-6">
          <CreatorVisual />
          <div className="max-w-[560px] lg:justify-self-end">
            <h2 className="font-display text-3xl leading-tight font-semibold text-ink-soft sm:text-4xl lg:text-[44px] lg:leading-[1.2]">
              Create &amp; Manage Courses Easily.
            </h2>
            <p className="mt-8 text-base leading-[1.8] font-light text-ink-soft sm:text-lg">
              <strong className="font-medium text-ink">ByteSpace</strong> supports individuals or
              entities in the creation, publication, and administration of educational courses.
            </p>
            <ul className="mt-8 flex flex-col gap-4">
              {creatorBenefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3 text-lg text-ink-soft">
                  <CircleCheck className="size-6 fill-brand text-white" aria-hidden="true" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

/** Figma frame: 577×552, scaled as a unit below the lg breakpoint. */
function GrowthVisual() {
  return (
    <div className="relative mx-auto h-[295px] w-full max-w-[577px] sm:h-[552px] lg:mr-0">
      <div className="absolute top-0 left-1/2 h-[552px] w-[577px] origin-top -translate-x-1/2 scale-[0.53] sm:scale-100">
        <CourseCard course={courses[0]} className="absolute top-0 left-0 w-[373px]" />
        <Image
          src="/images/people/hero-student.webp"
          alt="Student learning online"
          width={577}
          height={540}
          className="absolute top-3 left-0 drop-shadow-2xl"
        />
        <LearningProgressCard className="absolute top-[213px] left-[345px] w-[232px]" />
        <Shape name="zigzag" color="lime" className="absolute top-[67px] left-[404px] size-[216px]" />
      </div>
    </div>
  );
}

/** Figma frame: 541×596, scaled as a unit below the lg breakpoint. */
function CreatorVisual() {
  return (
    <div className="relative mx-auto h-[316px] w-full max-w-[541px] sm:h-[596px] lg:ml-0">
      <div className="absolute top-0 left-1/2 h-[596px] w-[541px] origin-top -translate-x-1/2 scale-[0.53] sm:scale-100">
        <RevenueCard
          label="Total Revenue"
          period="July 1-28"
          amount="$120.29"
          badge="+12$"
          progress={56}
          className="absolute top-[44px] left-0 w-[232px]"
        />
        <Image
          src="/images/people/creator.webp"
          alt="Course creator holding a tablet"
          width={435}
          height={596}
          className="absolute top-0 left-[28px] drop-shadow-2xl"
        />
        <RevenueCard
          label="Year to Date"
          period="2023"
          amount="$1,200.38"
          badge="+12$"
          className="absolute top-[194px] left-0 w-[134px]"
        />
        <Shape name="spring" color="lime" className="absolute top-[114px] left-[303px] size-[216px]" />
        <HappyStudentsCard className="absolute top-[413px] left-[283px] w-[258px]" />
      </div>
    </div>
  );
}
