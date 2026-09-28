"use client";

import { Check } from "lucide-react";
import { Button, ButtonLink } from "@/components/ui/Button";
import { cart, useCart } from "@/lib/cart";

/** Adds the course to the cart; once added, becomes a link to the cart. */
export function EnrollButton({ courseId, className }: { courseId: string; className?: string }) {
  const inCart = useCart().includes(courseId);

  if (inCart) {
    return (
      <ButtonLink href="/cart" size="lg" className={className}>
        <Check className="size-5" aria-hidden="true" />
        In your cart. Go to Cart
      </ButtonLink>
    );
  }

  return (
    <Button size="lg" className={className} onClick={() => cart.add(courseId)}>
      Enroll Now
    </Button>
  );
}
