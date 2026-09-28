"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { CartLink } from "@/components/layout/CartLink";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { mainNav, type NavLink } from "@/data/site";
import { cn } from "@/lib/cn";

/** Home only matches "/" itself; other links match their whole section (e.g. /courses/…). */
function isCurrent(link: NavLink, pathname: string) {
  return (link.sections ?? []).some((section) =>
    section === "/" ? pathname === "/" : pathname.startsWith(section),
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  // Escape closes the mobile menu.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="relative z-30">
      <Container className="flex h-[120px] items-center justify-between gap-6">
        <Logo />

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-6 text-base text-surface">
            {mainNav.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={cn("transition hover:text-lime", isCurrent(link, pathname) && "font-medium")}
                  aria-current={isCurrent(link, pathname) ? "page" : undefined}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-6 text-base text-surface md:flex">
          <Link
            href="/login"
            aria-current={pathname === "/login" ? "page" : undefined}
            className="transition hover:text-lime"
          >
            Sign In
          </Link>
          <Link
            href="/register"
            aria-current={pathname === "/register" ? "page" : undefined}
            className="transition hover:text-lime"
          >
            Join Us
          </Link>
          <CartLink />
        </div>

        <div className="flex items-center gap-4 text-surface md:hidden">
          <CartLink />
          <button
            type="button"
            className="grid size-10 cursor-pointer place-items-center rounded-full hover:bg-white/10"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-6" aria-hidden="true" /> : <Menu className="size-6" aria-hidden="true" />}
          </button>
        </div>
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
                <Link
                  href={link.href}
                  onClick={close}
                  aria-current={isCurrent(link, pathname) ? "page" : undefined}
                  className={cn(
                    "block hover:text-brand",
                    isCurrent(link, pathname) && "font-medium text-brand",
                  )}
                >
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
