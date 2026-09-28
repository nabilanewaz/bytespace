import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CreatorCourses } from "@/components/creator/CreatorCourses";
import { CreatorHero } from "@/components/creator/CreatorHero";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { getCreatorCourses } from "@/data/courses";
import { creators, getCreator } from "@/data/creators";

export const dynamicParams = false;

export function generateStaticParams() {
  return creators.map((creator) => ({ slug: creator.id }));
}

async function loadCreator(params: Promise<{ slug: string }>) {
  const { slug } = await params;
  const creator = getCreator(slug);
  if (!creator) notFound();
  return creator;
}

export async function generateMetadata({ params }: PageProps<"/creators/[slug]">): Promise<Metadata> {
  const creator = await loadCreator(params);
  return { title: `${creator.name} — ByteSpace`, description: creator.tagline };
}

export default async function CreatorProfilePage({ params }: PageProps<"/creators/[slug]">) {
  const creator = await loadCreator(params);
  const courses = getCreatorCourses(creator.id);

  return (
    <>
      <main id="main">
        <CreatorHero creator={creator} courseCount={courses.length} />
        <Container className="py-14 lg:pt-[62px] lg:pb-[62px]">
          <CreatorCourses courses={courses} />
        </Container>
      </main>
      <Footer />
    </>
  );
}
