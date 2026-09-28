import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { CreatorResults } from "@/components/search/CreatorResults";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { creators } from "@/data/creators";

export const metadata: Metadata = {
  title: "Creators — ByteSpace",
  description: "Meet the creators publishing courses on ByteSpace.",
};

export default function CreatorsPage() {
  return (
    <>
      <main id="main">
        <PageHeader
          title="Meet Our Creators"
          description="Learn from passionate professionals who share their expertise on ByteSpace."
        />
        <Container className="py-14 lg:py-[72px]">
          <CreatorResults creators={creators} query="" />
          <div className="mt-16 rounded-3xl bg-surface px-6 py-12 text-center">
            <h2 className="font-display text-2xl font-semibold text-ink">Want to teach on ByteSpace?</h2>
            <p className="mx-auto mt-3 max-w-[560px] text-lg text-muted">
              Share your expertise, build a community and earn from your courses.
            </p>
            <ButtonLink href="/register" size="lg" className="mt-6">
              Join as Creator
            </ButtonLink>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
