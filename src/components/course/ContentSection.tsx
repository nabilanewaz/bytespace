import { cn } from "@/lib/cn";

type ContentSectionProps = {
  title: string;
  children: React.ReactNode;
  className?: string;
};

/** Heading + body block used inside the course tabs. */
export function ContentSection({ title, children, className }: ContentSectionProps) {
  return (
    <section className={className}>
      <h2 className="font-display text-xl font-semibold text-ink-soft">{title}</h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}

export function Prose({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("flex flex-col gap-6 text-base leading-[1.7] text-muted", className)}>
      {children}
    </div>
  );
}
