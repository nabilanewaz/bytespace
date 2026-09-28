"use client";

import { Check } from "lucide-react";
import { Button, ButtonLink } from "@/components/ui/Button";
import { cart, useCart } from "@/lib/cart";
import { useEnrollments } from "@/lib/enrollments";

/** Adds the course to the cart; once added (or enrolled), links to the cart (or My Courses). */
export function EnrollButton({ courseId, className }: { courseId: string; className?: string }) {
  const enrolled = useEnrollments().includes(courseId);
  const inCart = useCart().includes(courseId);

  if (enrolled || inCart) {
    return (
      <ButtonLink href={enrolled ? "/my-courses" : "/cart"} size="lg" className={className}>
        <Check className="size-5" aria-hidden="true" />
        {enrolled ? "Enrolled. Go to My Courses" : "In your cart. Go to Cart"}
      </ButtonLink>
    );
  }

  return (
    <Button size="lg" className={className} onClick={() => cart.add(courseId)}>
      Enroll Now
    </Button>
  );
}
