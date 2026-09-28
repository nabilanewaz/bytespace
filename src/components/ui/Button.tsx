import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "lime" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  lime: "bg-lime text-ink hover:bg-lime-bright active:scale-[0.98]",
  ghost: "bg-transparent text-surface hover:bg-white/10",
  outline: "border border-line-strong bg-white text-ink-soft hover:bg-surface",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-base",
  md: "h-11 px-6 text-base",
  lg: "h-[46px] px-6 text-lg",
};

type StyleProps = { variant?: Variant; size?: Size; className?: string };

export function buttonClasses({ variant = "lime", size = "md", className }: StyleProps = {}) {
  return cn(
    "inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-full font-normal whitespace-nowrap transition",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime",
    variants[variant],
    sizes[size],
    className,
  );
}

type ButtonProps = React.ComponentProps<"button"> & StyleProps;

export function Button({ variant, size, className, type = "button", ...props }: ButtonProps) {
  return <button type={type} className={buttonClasses({ variant, size, className })} {...props} />;
}

type ButtonLinkProps = React.ComponentProps<typeof Link> & StyleProps;

export function ButtonLink({ variant, size, className, ...props }: ButtonLinkProps) {
  return <Link className={buttonClasses({ variant, size, className })} {...props} />;
}
