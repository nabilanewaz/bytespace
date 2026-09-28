import { CourseCard } from "@/components/cards/CourseCard";
import { HappyStudentsCard } from "@/components/cards/FloatingCards";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { Shape } from "@/components/ui/Shape";
import { courses } from "@/data/courses";

type AuthLayoutProps = {
  /** Short pitch shown above the showcase collage. */
  tagline: string;
  description: string;
  /** Small blue label above the form title, e.g. "Sign In". */
  eyebrow: string;
  title: React.ReactNode;
  children: React.ReactNode;
};

export function AuthLayout({ tagline, description, eyebrow, title, children }: AuthLayoutProps) {
  return (
    <main id="main" className="bg-grid min-h-screen overflow-hidden">
      <Container className="grid gap-12 py-10 lg:grid-cols-[1fr_579px] lg:items-start lg:gap-16 lg:pt-[35px] lg:pb-[120px]">
        <div>
          <Logo markOnly />
          <h1 className="mt-8 font-display text-xl font-semibold text-white lg:mt-[58px]">
            {tagline}
          </h1>
          <p className="mt-4 max-w-[480px] text-base leading-[1.8] font-light text-white sm:text-lg">
            {description}
          </p>
          <AuthShowcase />
        </div>

        <section className="rounded-3xl bg-white px-6 py-10 sm:px-16 sm:py-[66px] lg:mt-[85px]">
          <p className="text-lg text-brand">{eyebrow}</p>
          <h2 className="mt-1 font-display text-4xl leading-tight font-semibold text-ink-soft sm:text-[44px]">
            {title}
          </h2>
          {children}
        </section>
      </Container>
    </main>
  );
}

/** Course-card collage from the Figma auth screens (484×557 frame). */
function AuthShowcase() {
  const [bigData, digitalAsset] = [courses[2], courses[1]];
  return (
    <div aria-hidden="true" className="relative mt-10 hidden h-[557px] w-[484px] lg:block lg:mt-[90px]">
      <CourseCard course={digitalAsset} starTone="lime" className="absolute top-[90px] left-0 w-[373px]" />
      <CourseCard course={bigData} starTone="lime" className="absolute top-0 left-[111px] w-[373px]" />
      <Shape name="torus" color="lime" className="absolute top-[30px] left-[40px] size-[120px]" />
      <Shape name="pyramid" color="lime" className="absolute top-[405px] -left-[10px] size-[150px]" />
      <HappyStudentsCard tone="lime" className="absolute top-[435px] left-[226px] w-[258px]" />
      <Shape name="zigzag" color="white" className="absolute top-[340px] left-[370px] size-[135px]" />
    </div>
  );
}
