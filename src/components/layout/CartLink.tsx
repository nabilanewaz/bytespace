"use client";

import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/lib/cart";

/** Navbar cart icon with a live item count. */
export function CartLink() {
  const count = useCart().length;

  return (
    <Link
      href="/cart"
      aria-label={count ? `Cart, ${count} ${count === 1 ? "item" : "items"}` : "Cart"}
      className="relative transition hover:text-lime"
    >
      <ShoppingBag className="size-6" aria-hidden="true" />
      {count > 0 && (
        <span
          aria-hidden="true"
          className="absolute -top-2 -right-2.5 grid size-5 place-items-center rounded-full bg-lime text-xs font-semibold text-ink"
        >
          {count}
        </span>
      )}
    </Link>
  );
}
