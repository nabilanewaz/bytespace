import type { Metadata } from "next";
import Link from "next/link";
import { InfoPage } from "@/components/layout/InfoPage";
import { ButtonLink } from "@/components/ui/Button";
import { stats } from "@/data/site";

export const metadata: Metadata = {
  title: "About — ByteSpace",
  description: "ByteSpace connects curious learners with passionate creators.",
};

export default function AboutPage() {
  return (
    <InfoPage
      title="About ByteSpace"
      description="We connect curious learners with passionate creators, one course at a time."
    >
      <h2>Our mission</h2>
      <p>
        ByteSpace exists to make life-changing knowledge easy to find and easy to share. Learners get
        practical, project-based courses across technology, business and the arts. Creators get the
        tools to publish, manage and earn from what they know.
      </p>

      <dl className="my-10 grid grid-cols-3 gap-4 rounded-3xl bg-surface p-6 text-center sm:p-8">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col-reverse">
            <dt className="text-base text-muted">{stat.label}</dt>
            <dd className="font-display text-3xl font-semibold text-brand sm:text-4xl">{stat.value}</dd>
          </div>
        ))}
      </dl>

      <h2>What we believe</h2>
      <ul>
        <li>
          <strong>Learning should be practical.</strong> Every course is built around hands-on
          exercises and real projects.
        </li>
        <li>
          <strong>Creators deserve great tools.</strong> Our Course Editor makes it simple to publish
          and manage courses.
        </li>
        <li>
          <strong>Community matters.</strong> Feedback, critique and discussion help everyone grow
          faster.
        </li>
      </ul>

      <h2>Get involved</h2>
      <p>
        Browse our <Link href="/search">course catalog</Link>, meet our{" "}
        <Link href="/creators">creators</Link>, or <Link href="/contact">get in touch</Link> with the
        team.
      </p>
      <div className="mt-8 flex flex-wrap gap-4">
        <ButtonLink href="/search" size="lg">
          Explore courses
        </ButtonLink>
        <ButtonLink href="/register" size="lg" variant="outline">
          Become a creator
        </ButtonLink>
      </div>
    </InfoPage>
  );
}
