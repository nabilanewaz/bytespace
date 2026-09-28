import Image from "next/image";
import { cn } from "@/lib/cn";

type AvatarStackProps = {
  avatars: string[];
  /** Label for the trailing bubble, e.g. "26+" or "2K+". */
  extra?: string;
  size?: "sm" | "md";
  /** Color of the trailing bubble. */
  extraTone?: "lime" | "dark";
  className?: string;
};

const sizes = {
  sm: { box: "size-8 -ml-2 first:ml-0", px: 32, text: "text-xs" },
  md: { box: "size-[43px] -ml-4 first:ml-0", px: 43, text: "text-xs font-medium" },
};

export function AvatarStack({
  avatars,
  extra,
  size = "sm",
  extraTone = "lime",
  className,
}: AvatarStackProps) {
  const s = sizes[size];
  return (
    <div className={cn("flex items-center", className)}>
      {avatars.map((src) => (
        <Image
          key={src}
          src={src}
          alt=""
          width={s.px}
          height={s.px}
          className={cn(s.box, "rounded-full object-cover ring-2 ring-white")}
        />
      ))}
      {extra && (
        <span
          className={cn(
            s.box,
            s.text,
            "relative grid place-items-center rounded-full",
            extraTone === "lime" ? "bg-lime text-ink" : "bg-ink text-white",
          )}
        >
          {extra}
        </span>
      )}
    </div>
  );
}
