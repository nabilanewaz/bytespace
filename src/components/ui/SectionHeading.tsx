import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "center" | "left";
  tone?: "dark" | "light";
  className?: string;
};

export function SectionHeading({
  title,
  description,
  align = "center",
  tone = "dark",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        align === "center" && "mx-auto max-w-[1000px] text-center",
        className,
      )}
    >
      <h2
        className={cn(
          "font-display text-3xl font-semibold sm:text-4xl lg:text-heading-m",
          tone === "dark" ? "text-ink" : "text-white",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mx-auto mt-5 max-w-[920px] text-body-m sm:text-body-l",
            tone === "dark" ? "text-muted" : "text-white",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
