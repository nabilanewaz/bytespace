import { cn } from "@/lib/cn";

export type ShapeName = "zigzag" | "spring" | "torus" | "cylinder" | "pyramid" | "cone";

type ShapeProps = {
  name: ShapeName;
  color?: "lime" | "white";
  /** Mirror horizontally. */
  flip?: boolean;
  /** Positioning and sizing classes (e.g. `absolute left-0 top-10 size-40`). */
  className?: string;
  style?: React.CSSProperties;
};

/**
 * Decorative 3D doodle. The PNG silhouette is used as an alpha mask and filled
 * with a flat brand color, matching how the Figma file tints each shape.
 */
export function Shape({ name, color = "lime", flip = false, className, style }: ShapeProps) {
  const mask = `url(/images/shapes/${name}.webp)`;
  return (
    <span
      aria-hidden="true"
      className={cn(
        "pointer-events-none block select-none",
        color === "lime" ? "bg-lime" : "bg-surface",
        flip && "-scale-x-100",
        className,
      )}
      style={{
        ...style,
        maskImage: mask,
        WebkitMaskImage: mask,
        maskSize: "contain",
        WebkitMaskSize: "contain",
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
        maskPosition: "center",
        WebkitMaskPosition: "center",
      }}
    />
  );
}
