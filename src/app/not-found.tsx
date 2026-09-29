import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = { title: "Page Not Found — ByteSpace" };

export default function NotFound() {
  return (
    <>
      <main className="bg-grid overflow-hidden pb-24 lg:min-h-[957px]">
        <Navbar />
        <Container className="relative pt-16 text-center lg:pt-[100px]">
          <p
            aria-hidden="true"
            className="bg-gradient-to-b from-lime from-30% to-lime/0 bg-clip-text font-display text-[160px] leading-none font-semibold tracking-tight text-transparent sm:text-[260px] lg:text-[380px]"
          >
            404
          </p>
          <h1 className="relative mx-auto -mt-10 max-w-[1040px] font-display text-4xl leading-[1.2] font-semibold text-white sm:-mt-20 sm:text-5xl lg:-mt-[130px] lg:text-heading-l">
            The page you are looking for doesn&rsquo;t exist
          </h1>
          <p className="mt-8 text-body-m text-white sm:text-body-l">
            Try to use a correct url or go back to homepage to start again
          </p>
          <ButtonLink href="/" size="lg" className="mt-8">
            Back to Home
          </ButtonLink>
        </Container>
      </main>
      <Footer />
    </>
  );
}
