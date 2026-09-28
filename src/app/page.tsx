import { Footer } from "@/components/layout/Footer";
import { CourseFilterProvider } from "@/components/sections/CourseFilterContext";
import { CreatorCta } from "@/components/sections/CreatorCta";
import { CreatorShowcase } from "@/components/sections/CreatorShowcase";
import { FeaturedCourses } from "@/components/sections/FeaturedCourses";
import { Hero } from "@/components/sections/Hero";
import { LearningPaths } from "@/components/sections/LearningPaths";
import { PartnerLogos } from "@/components/sections/PartnerLogos";
import { Testimonials } from "@/components/sections/Testimonials";

export default function HomePage() {
  return (
    <>
      <main id="main">
        <CourseFilterProvider>
          <Hero />
          <PartnerLogos />
          <FeaturedCourses />
          <LearningPaths />
        </CourseFilterProvider>
        <CreatorShowcase />
        <CreatorCta />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
