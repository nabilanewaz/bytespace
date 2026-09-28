import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { DecorFrame, type Decoration } from "@/components/ui/DecorFrame";
import { SectionHeading } from "@/components/ui/SectionHeading";

const decorations: Decoration[] = [
  { name: "spring", color: "lime", x: -122, y: -162, size: 387 },
  { name: "spring", color: "white", x: 179, y: 5, size: 176, flip: true, className: "max-lg:hidden" },
  { name: "cone", color: "white", x: -50, y: 225, size: 189 },
  { name: "torus", color: "lime", x: 16, y: 298, size: 344 },
  { name: "pyramid", color: "lime", x: 1078, y: 0, size: 189, className: "max-lg:hidden" },
  { name: "cylinder", color: "white", x: 1222, y: 5, size: 372 },
  { name: "zigzag", color: "lime", x: 1107, y: 289, size: 332 },
];

export function CreatorCta() {
  return (
    <section className="bg-grid relative overflow-hidden py-20 lg:h-[488px] lg:py-0">
      <DecorFrame items={decorations} />
      <Container className="relative flex h-full flex-col items-center justify-center text-center">
        <SectionHeading
          tone="light"
          title={
            <>
              Unlock Your Potential as a
              <br className="hidden sm:block" /> Creator with ByteSpace
            </>
          }
          description="Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library."
        />
        <ButtonLink href="/register" size="lg" className="mt-10">
          Join as Creator
        </ButtonLink>
      </Container>
    </section>
  );
}
