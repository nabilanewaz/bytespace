import { Footer } from "@/components/layout/Footer";
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
      <main>
        <Hero />
        <PartnerLogos />
        <FeaturedCourses />
        <LearningPaths />
        <CreatorShowcase />
        <CreatorCta />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
