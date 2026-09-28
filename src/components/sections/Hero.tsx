import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { SearchBar } from "@/components/sections/SearchBar";
import { DecorFrame, type Decoration } from "@/components/ui/DecorFrame";
import {
  CategoryStatCard,
  HappyStudentsCard,
  LearningProgressCard,
} from "@/components/cards/FloatingCards";
import { Container } from "@/components/ui/Container";

const decorations: Decoration[] = [
  { name: "spring", color: "lime", x: -122, y: 221, size: 387 },
  { name: "spring", color: "white", x: 184, y: 477, size: 176, flip: true, className: "max-lg:hidden" },
  { name: "torus", color: "white", x: 14, y: 681, size: 344 },
  { name: "cylinder", color: "lime", x: 1227, y: 220, size: 372 },
  { name: "pyramid", color: "white", x: 1104, y: 464, size: 189, className: "max-lg:hidden" },
  { name: "zigzag", color: "white", x: 1124, y: 672, size: 332 },
];

export function Hero() {
  return (
    <section className="bg-grid relative overflow-hidden">
      <DecorFrame items={decorations} />
      <Navbar />

      <Container className="relative z-10 pt-10 text-center lg:pt-[52px]">
        <h1 className="mx-auto max-w-[880px] font-display text-4xl leading-[1.25] font-semibold text-white sm:text-5xl lg:text-[64px]">
          Get Access to Hundreds of Courses
        </h1>
        <p className="mx-auto mt-6 max-w-[820px] text-body-m text-white sm:text-body-l lg:mt-10">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide
          range of courses.
        </p>
        <SearchBar className="mx-auto mt-10 lg:mt-16" />
      </Container>

      <HeroVisual />
    </section>
  );
}

/**
 * Student portrait on the lime circle with floating stat cards. Laid out at the
 * Figma size (746×512) and scaled down as one unit on smaller screens.
 */
function HeroVisual() {
  return (
    <div className="relative mt-10 h-[250px] sm:h-[384px] lg:mt-0 lg:h-[512px]">
      <div className="absolute top-0 left-1/2 h-[512px] w-[746px] origin-top -translate-x-1/2 scale-[0.48] sm:scale-75 lg:scale-100">
        <div className="absolute top-[70px] -left-[183px] size-[1149px] rounded-full bg-lime-bright" />
        <Image
          src="/images/people/hero-student.webp"
          alt="Smiling student with headphones holding a laptop"
          width={578}
          height={541}
          priority
          className="absolute top-0 left-[103px]"
        />
        <CategoryStatCard className="absolute top-[127px] left-[76px] w-[208px]" />
        <LearningProgressCard className="absolute top-[139px] left-[514px] w-[232px]" />
        <HappyStudentsCard className="absolute top-[325px] left-0 w-[258px]" />
      </div>
    </div>
  );
}
