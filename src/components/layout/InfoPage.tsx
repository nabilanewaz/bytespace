import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";

type InfoPageProps = {
  title: string;
  description?: string;
  /** Shown under the header for policy pages, e.g. "September 28, 2026". */
  lastUpdated?: string;
  children: React.ReactNode;
};

/**
 * Layout for text pages (about, help, policies). Styles plain h2/p/ul/a
 * children so page files stay readable.
 */
export function InfoPage({ title, description, lastUpdated, children }: InfoPageProps) {
  return (
    <>
      <main id="main">
        <PageHeader title={title} description={description} />
        <Container className="py-14 lg:py-[72px]">
          <article className="mx-auto max-w-[800px] text-lg leading-[1.8] text-muted [&_li_a]:text-brand [&_p_a]:text-brand hover:[&_li_a]:underline hover:[&_p_a]:underline [&_h2]:mt-10 [&_h2]:mb-3 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-ink [&_h2:first-child]:mt-0 [&_li]:mt-2 [&_p+p]:mt-4 [&_strong]:font-medium [&_strong]:text-ink [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-6">
            {lastUpdated && <p className="mb-8 text-base">Last updated: {lastUpdated}</p>}
            {children}
          </article>
        </Container>
      </main>
      <Footer />
    </>
  );
}
