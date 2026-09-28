import Image from "next/image";
import type { Testimonial } from "@/data/site";

export function TestimonialCard({ name, role, avatar, quote }: Testimonial) {
  return (
    <figure className="flex h-full flex-col rounded-3xl bg-white p-6">
      <Image
        src={avatar}
        alt={name}
        width={80}
        height={80}
        className="size-20 rounded-full object-cover"
      />
      <figcaption className="mt-5">
        <p className="font-display text-lg font-semibold text-ink">{name}</p>
        <p className="text-lg text-brand">{role}</p>
      </figcaption>
      <blockquote className="mt-6 text-lg leading-[1.8] font-light text-muted">
        &ldquo;{quote}&rdquo;
      </blockquote>
    </figure>
  );
}
