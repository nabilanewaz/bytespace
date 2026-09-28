import { Navbar } from "@/components/layout/Navbar";
import { Container } from "@/components/ui/Container";

type PageHeaderProps = {
  title: string;
  description?: string;
};

/** Blue grid header with the navbar, used by the simpler inner pages. */
export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <section className="bg-grid overflow-hidden">
      <Navbar />
      <Container className="pt-6 pb-16 text-center lg:pt-[42px] lg:pb-[80px]">
        <h1 className="font-display text-3xl font-semibold text-white sm:text-4xl lg:text-[44px]">{title}</h1>
        {description && (
          <p className="mx-auto mt-4 max-w-[640px] text-base font-light text-white sm:text-lg">{description}</p>
        )}
      </Container>
    </section>
  );
}
