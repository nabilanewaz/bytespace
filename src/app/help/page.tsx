import type { Metadata } from "next";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { InfoPage } from "@/components/layout/InfoPage";

export const metadata: Metadata = {
  title: "Help Center — ByteSpace",
  description: "Answers to common questions about courses, enrollment and creating on ByteSpace.",
};

const faqs: { q: string; a: React.ReactNode }[] = [
  {
    q: "How do I enroll in a course?",
    a: (
      <>
        Open any course page and click <strong>Enroll Now</strong> to add it to your cart, then go to
        the <Link href="/cart">cart</Link> and check out.
      </>
    ),
  },
  {
    q: "What does “lifetime” pricing mean?",
    a: "You pay once and keep access to the course, including future updates to its lessons.",
  },
  {
    q: "How do I find the right course?",
    a: (
      <>
        Use the <Link href="/search">search page</Link> to filter by level, category and rating, or
        explore the learning paths on the <Link href="/#learning-paths">home page</Link>.
      </>
    ),
  },
  {
    q: "Do I get a certificate?",
    a: "Yes. Every course includes a certificate of completion once you finish all lessons.",
  },
  {
    q: "How can I become a creator?",
    a: (
      <>
        <Link href="/register">Create an account</Link> and choose to join as a creator. Our Course
        Editor walks you through publishing your first course.
      </>
    ),
  },
  {
    q: "I still need help. Who can I talk to?",
    a: (
      <>
        Send us a message through the <Link href="/contact">contact form</Link> and we&rsquo;ll get
        back to you.
      </>
    ),
  },
];

export default function HelpPage() {
  return (
    <InfoPage title="Help Center" description="Answers to the questions we hear most often.">
      <div className="flex flex-col gap-4">
        {faqs.map(({ q, a }) => (
          <details
            key={q}
            className="group rounded-3xl border border-line-strong px-6 py-5 open:bg-surface-soft"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-semibold text-ink [&::-webkit-details-marker]:hidden">
              {q}
              <ChevronDown
                className="size-5 shrink-0 text-muted transition group-open:rotate-180"
                aria-hidden="true"
              />
            </summary>
            <p className="mt-3 text-base leading-relaxed">{a}</p>
          </details>
        ))}
      </div>
    </InfoPage>
  );
}
