import { cn } from "@/lib/cn";

type ContainerProps = React.ComponentProps<"div">;

/** Centers content at the 1200px design width with responsive side padding. */
export function Container({ className, ...props }: ContainerProps) {
  return (
    <div
      className={cn("mx-auto w-full max-w-[1248px] px-4 sm:px-6", className)}
      {...props}
    />
  );
}
