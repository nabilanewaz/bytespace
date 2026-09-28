import Image from "next/image";
import Link from "next/link";
import { getCreatorCourses } from "@/data/courses";
import type { Creator } from "@/data/creators";

type CreatorResultsProps = { creators: Creator[]; query: string };

/** Creator search results: matches name or tagline. */
export function CreatorResults({ creators, query }: CreatorResultsProps) {
  const words = query.toLowerCase().split(/\s+/).filter(Boolean);
  const matches = creators.filter((c) => {
    const haystack = `${c.name} ${c.tagline}`.toLowerCase();
    return words.every((w) => haystack.includes(w));
  });

  if (matches.length === 0) {
    return (
      <p className="rounded-3xl bg-surface px-6 py-16 text-center text-lg text-muted">
        No creators match your search.
      </p>
    );
  }

  return (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" aria-live="polite">
      {matches.map((creator) => {
        const courseCount = getCreatorCourses(creator.id).length;
        return (
          <li key={creator.id}>
            <Link
              href={`/creators/${creator.id}`}
              className="flex items-center gap-4 rounded-3xl border border-line-strong p-6 transition hover:border-brand hover:shadow-card"
            >
              <Image
                src={creator.avatar}
                alt=""
                width={72}
                height={72}
                className="size-[72px] rounded-2xl object-cover"
              />
              <div>
                <p className="font-display text-xl font-semibold text-ink">{creator.name}</p>
                <p className="text-base text-muted">{creator.tagline}</p>
                <p className="mt-1 text-sm text-brand">
                  {courseCount} {courseCount === 1 ? "course" : "courses"}
                </p>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
