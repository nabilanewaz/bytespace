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
          "font-display text-3xl leading-tight font-semibold sm:text-4xl lg:text-[44px] lg:leading-[1.2]",
          tone === "dark" ? "text-ink" : "text-white",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mx-auto mt-5 max-w-[920px] text-base leading-[1.8] font-light sm:text-lg",
            tone === "dark" ? "text-muted" : "text-white",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
