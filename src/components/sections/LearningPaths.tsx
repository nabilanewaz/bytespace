import Link from "next/link";
import { Building2, Camera, CodeXml, HandCoins, Laptop, PencilRuler } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const paths = [
  { label: "Design", Icon: PencilRuler },
  { label: "Development", Icon: CodeXml },
  { label: "IT & Software", Icon: Laptop },
  { label: "Business", Icon: Building2 },
  { label: "Marketing", Icon: HandCoins },
  { label: "Photography", Icon: Camera },
];

export function LearningPaths() {
  return (
    <section id="learning-paths" className="scroll-mt-8 pb-20 lg:pb-[120px]">
      <Container>
        <SectionHeading
          title="Explore Diverse Learning Paths at Bytespace"
          description="At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories."
        />

        <ul className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:mt-[72px] lg:grid-cols-6 lg:gap-[41px]">
          {paths.map(({ label, Icon }) => (
            <li key={label}>
              <Link
                href="/#courses"
                className="group flex aspect-square flex-col items-center justify-center gap-4 rounded-3xl border border-line-strong bg-white text-center transition hover:-translate-y-1 hover:border-brand hover:shadow-card"
              >
                <span className="grid size-[60px] place-items-center rounded-full bg-lime transition group-hover:bg-brand group-hover:text-lime">
                  <Icon className="size-7" strokeWidth={2.25} aria-hidden="true" />
                </span>
                <span className="text-lg text-ink sm:text-xl">{label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
