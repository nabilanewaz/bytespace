import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { SearchExperience, type SearchScope } from "@/components/search/SearchExperience";

export const metadata: Metadata = {
  title: "Search Courses — ByteSpace",
  description: "Find your next course by topic, level, category or creator.",
};

/** Reads one value from a query-string param that may repeat. */
function first(value: string | string[] | undefined) {
  return (Array.isArray(value) ? value[0] : value) ?? "";
}

export default async function SearchPage({ searchParams }: PageProps<"/search">) {
  const params = await searchParams;
  const scope: SearchScope = first(params.scope) === "creators" ? "creators" : "courses";
  const query = first(params.q);
  const category = first(params.category);

  return (
    <>
      <main>
        {/* The key restarts the search when a link opens a different one (e.g. a
            footer category) while this page is already open. Typing only
            rewrites the URL in place, which doesn't reach this server component. */}
        <SearchExperience
          key={`${scope}|${query}|${category}`}
          initialQuery={query}
          initialScope={scope}
          initialCategory={category}
        />
      </main>
      <Footer />
    </>
  );
}
