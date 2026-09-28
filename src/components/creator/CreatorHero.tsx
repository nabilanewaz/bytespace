import Image from "next/image";
import { FollowStats } from "@/components/creator/FollowStats";
import { Navbar } from "@/components/layout/Navbar";
import { Container } from "@/components/ui/Container";
import type { Creator } from "@/data/creators";

export function CreatorHero({ creator, courseCount }: { creator: Creator; courseCount: number }) {
  return (
    <section className="bg-grid overflow-hidden">
      <Navbar />
      <Container className="pt-6 pb-14 lg:pt-[52px] lg:pb-[82px]">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
          <Image
            src={creator.avatar}
            alt=""
            width={96}
            height={96}
            priority
            className="size-24 rounded-2xl object-cover"
          />
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="font-display text-3xl font-semibold text-white sm:text-heading-m">
                {creator.name}
              </h1>
              <span className="rounded-full bg-lime px-6 py-1 text-lg text-ink">Creator</span>
            </div>
            <p className="mt-2 text-body-l text-white">{creator.tagline}</p>
          </div>
        </div>

        <div className="mt-10 text-body-m text-white sm:text-body-l lg:mt-[46px]">
          {creator.bio.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
        </div>

        <FollowStats creatorName={creator.name} courseCount={courseCount} followers={creator.followers} />
      </Container>
    </section>
  );
}
