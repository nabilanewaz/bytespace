"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, ShoppingBag, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { mainNav } from "@/data/site";
import { cn } from "@/lib/cn";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="relative z-30">
      <Container className="flex h-[120px] items-center justify-between gap-6">
        <Logo />

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-6 text-base text-surface">
            {mainNav.map((link, i) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={cn("transition hover:text-lime", i === 0 && "font-medium")}
                  aria-current={i === 0 ? "page" : undefined}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-6 text-base text-surface md:flex">
          <Link href="/login" className="transition hover:text-lime">
            Sign In
          </Link>
          <Link href="/register" className="transition hover:text-lime">
            Join Us
          </Link>
          <Link href="#" aria-label="Cart" className="transition hover:text-lime">
            <ShoppingBag className="size-6" aria-hidden="true" />
          </Link>
        </div>

        <button
          type="button"
          className="grid size-10 place-items-center rounded-full text-surface hover:bg-white/10 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </Container>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="absolute inset-x-4 top-[100px] rounded-3xl bg-white p-6 shadow-card md:hidden"
        >
          <ul className="flex flex-col gap-4 text-lg text-ink">
            {mainNav.map((link) => (
              <li key={link.label}>
                <Link href={link.href} onClick={close} className="block hover:text-brand">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex gap-3 border-t border-line pt-6">
            <Link
              href="/login"
              onClick={close}
              className="flex-1 rounded-full border border-line py-2.5 text-center text-ink"
            >
              Sign In
            </Link>
            <Link
              href="/register"
              onClick={close}
              className="flex-1 rounded-full bg-lime py-2.5 text-center text-ink"
            >
              Join Us
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
