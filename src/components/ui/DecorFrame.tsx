import { Shape, type ShapeName } from "@/components/ui/Shape";
import { cn } from "@/lib/cn";

export type Decoration = {
  name: ShapeName;
  color: "lime" | "white";
  /** Position and size in px, measured on the 1440px-wide Figma frame. */
  x: number;
  y: number;
  size: number;
  flip?: boolean;
  /** Extra classes, e.g. `max-lg:hidden` to drop a shape on small screens. */
  className?: string;
};

/**
 * A 1440px-wide layer, centered in its section, that places doodles at their
 * Figma coordinates. Wider screens add space on both sides and narrower ones
 * crop the edges, the same way a centered artboard behaves.
 */
export function DecorFrame({ items, className }: { items: Decoration[]; className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-y-0 left-1/2 w-[1440px] -translate-x-1/2",
        className,
      )}
    >
      {items.map((d, i) => (
        <Shape
          key={i}
          name={d.name}
          color={d.color}
          flip={d.flip}
          className={cn("absolute", d.className)}
          style={{ left: d.x, top: d.y, width: d.size, height: d.size }}
        />
      ))}
    </div>
  );
}
