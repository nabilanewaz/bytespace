"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CircleCheck, Trash2 } from "lucide-react";
import { Button, ButtonLink } from "@/components/ui/Button";
import { courses } from "@/data/courses";
import { cart, useCart } from "@/lib/cart";

export function CartView() {
  const ids = useCart();
  const [enrolledTitles, setEnrolledTitles] = useState<string[] | null>(null);
  const items = ids.flatMap((id) => courses.find((c) => c.id === id) ?? []);
  const total = items.reduce((sum, c) => sum + c.price, 0);

  if (enrolledTitles) {
    return (
      <div className="mx-auto max-w-[640px] rounded-3xl border border-line-strong p-8 text-center sm:p-12" role="status">
        <CircleCheck className="mx-auto size-14 fill-lime text-ink" aria-hidden="true" />
        <h2 className="mt-6 font-display text-2xl font-semibold text-ink">You&rsquo;re enrolled!</h2>
        <p className="mt-3 text-lg text-muted">
          This is a demo checkout, so no payment was taken. You enrolled in:
        </p>
        <ul className="mt-4 text-lg text-ink-soft">
          {enrolledTitles.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <ButtonLink href="/search" size="lg" className="mt-8">
          Browse more courses
        </ButtonLink>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-[640px] rounded-3xl bg-surface px-6 py-16 text-center">
        <h2 className="font-display text-2xl font-semibold text-ink">Your cart is empty</h2>
        <p className="mt-3 text-lg text-muted">Find a course you love and click &ldquo;Enroll Now&rdquo; to add it here.</p>
        <ButtonLink href="/search" size="lg" className="mt-8">
          Browse courses
        </ButtonLink>
      </div>
    );
  }

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_380px] lg:items-start">
      <ul className="flex flex-col gap-6" aria-label="Courses in your cart">
        {items.map((course) => (
          <li
            key={course.id}
            className="flex flex-col gap-4 rounded-3xl border border-line-strong p-4 sm:flex-row sm:items-center"
          >
            <div className="relative aspect-[341/195] w-full shrink-0 overflow-hidden rounded-xl sm:w-[180px]">
              <Image src={course.image} alt="" fill sizes="(min-width: 640px) 180px, 90vw" className="object-cover" />
            </div>
            <div className="min-w-0 flex-1">
              <Link
                href={`/courses/${course.id}`}
                className="font-display text-xl font-semibold text-ink hover:text-brand"
              >
                {course.title}
              </Link>
              <p className="text-sm text-muted">
                by {course.creator} · {course.level} · {course.lessons} lessons
              </p>
              <p className="mt-2 font-display text-xl font-semibold text-brand">${course.price}</p>
            </div>
            <button
              type="button"
              onClick={() => cart.remove(course.id)}
              aria-label={`Remove ${course.title} from cart`}
              className="flex cursor-pointer items-center gap-2 self-start rounded-full px-4 py-2 text-base text-muted transition hover:bg-surface hover:text-ink sm:self-center"
            >
              <Trash2 className="size-5" aria-hidden="true" />
              Remove
            </button>
          </li>
        ))}
      </ul>

      <aside aria-label="Order summary" className="rounded-3xl border border-line-strong p-6 sm:p-8">
        <h2 className="font-display text-xl font-semibold text-ink">Order summary</h2>
        <dl className="mt-6 flex flex-col gap-3 text-base text-muted">
          <div className="flex justify-between">
            <dt>
              {items.length} {items.length === 1 ? "course" : "courses"}
            </dt>
            <dd>${total}</dd>
          </div>
          <div className="flex justify-between border-t border-line pt-3 text-lg text-ink">
            <dt>Total</dt>
            <dd className="font-display text-2xl font-semibold text-brand">${total}</dd>
          </div>
        </dl>
        <Button
          size="lg"
          className="mt-6 w-full"
          onClick={() => {
            setEnrolledTitles(items.map((c) => c.title));
            cart.clear();
          }}
        >
          Checkout
        </Button>
        <p className="mt-3 text-center text-sm text-muted">Demo checkout. No payment is taken.</p>
      </aside>
    </div>
  );
}
