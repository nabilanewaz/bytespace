import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { Container } from "@/components/ui/Container";
import { testimonials } from "@/data/site";

export function Testimonials() {
  return (
    <section className="bg-glow py-20 lg:pt-[80px] lg:pb-[60px]">
      <Container>
        <div className="grid gap-6 lg:grid-cols-2 lg:items-center lg:gap-[120px]">
          <h2 className="font-display text-3xl leading-tight font-semibold text-ink sm:text-4xl lg:text-[44px] lg:leading-[1.2]">
            Discover What Our Community Is Saying
          </h2>
          <p className="text-base leading-[1.8] font-light text-muted sm:text-lg">
            At ByteSpace, our vibrant community of learners and creators is at the heart of what we
            do. Hear directly from those who have experienced the transformative journey of learning
            and creating on our platform. Explore testimonials that reflect the diverse perspectives
            of enthusiastic learners and accomplished creators.
          </p>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-2 lg:mt-[76px] lg:grid-cols-3">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
      </Container>
    </section>
  );
}
