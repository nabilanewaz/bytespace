"use client";

import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { useAuthEnabled } from "@/components/auth/AuthProvider";

type Variant = "desktop" | "mobile";
type UserMenuProps = { variant: Variant; onNavigate?: () => void };

/** Sign In / Join Us links, or the signed-in user with a Sign out button. */
export function UserMenu(props: UserMenuProps) {
  // useSession only works under SessionProvider, which exists only when auth is enabled.
  return useAuthEnabled() ? <SessionUserMenu {...props} /> : <GuestLinks {...props} />;
}

function SessionUserMenu(props: UserMenuProps) {
  const { data: session, status } = useSession();

  if (status === "loading") {
    // Reserve roughly the space of the guest links to avoid layout shift.
    return (
      <span aria-hidden="true" className={props.variant === "desktop" ? "block h-6 w-[126px]" : "block h-11"} />
    );
  }
  if (!session?.user) return <GuestLinks {...props} />;

  const { name, email, image } = session.user;
  const firstName = name?.split(" ")[0] ?? email ?? "Account";
  const initial = firstName.charAt(0).toUpperCase();

  const avatar = image ? (
    <Image src={image} alt="" width={32} height={32} className="size-8 rounded-full object-cover" />
  ) : (
    <span className="grid size-8 place-items-center rounded-full bg-lime font-display text-sm font-semibold text-ink">
      {initial}
    </span>
  );

  const signOutButton = (className: string) => (
    <button
      type="button"
      onClick={() => {
        props.onNavigate?.();
        signOut({ redirectTo: "/" });
      }}
      className={className}
    >
      Sign out
    </button>
  );

  if (props.variant === "mobile") {
    return (
      <div className="flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3 text-ink">
          {avatar}
          <span className="truncate">{name ?? email}</span>
        </div>
        {signOutButton("shrink-0 cursor-pointer rounded-full border border-line px-4 py-2 text-ink")}
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3">
      <span className="flex items-center gap-2" title={email ?? undefined}>
        {avatar}
        <span className="max-w-[120px] truncate">{firstName}</span>
      </span>
      {signOutButton("cursor-pointer transition hover:text-lime")}
    </div>
  );
}

/** Sign-in link that returns to the current page, including its query (e.g. search filters). */
function loginHrefFor(pathname: string, query = "") {
  if (pathname === "/login" || pathname === "/register") return "/login";
  return `/login?callbackUrl=${encodeURIComponent(query ? `${pathname}?${query}` : pathname)}`;
}

function GuestLinks(props: UserMenuProps) {
  const pathname = usePathname();
  // useSearchParams needs a Suspense boundary on statically rendered pages;
  // until it resolves, the link returns to the path without its query.
  return (
    <Suspense fallback={<GuestLinksView {...props} pathname={pathname} loginHref={loginHrefFor(pathname)} />}>
      <GuestLinksWithQuery {...props} pathname={pathname} />
    </Suspense>
  );
}

function GuestLinksWithQuery(props: UserMenuProps & { pathname: string }) {
  const query = useSearchParams().toString();
  return <GuestLinksView {...props} loginHref={loginHrefFor(props.pathname, query)} />;
}

function GuestLinksView({
  variant,
  onNavigate,
  pathname,
  loginHref,
}: UserMenuProps & { pathname: string; loginHref: string }) {
  if (variant === "mobile") {
    return (
      <div className="flex gap-3">
        <Link
          href={loginHref}
          onClick={onNavigate}
          className="flex-1 rounded-full border border-line py-2.5 text-center text-ink"
        >
          Sign In
        </Link>
        <Link
          href="/register"
          onClick={onNavigate}
          className="flex-1 rounded-full bg-lime py-2.5 text-center text-ink"
        >
          Join Us
        </Link>
      </div>
    );
  }

  return (
    <>
      {[
        { path: "/login", href: loginHref, label: "Sign In" },
        { path: "/register", href: "/register", label: "Join Us" },
      ].map((link) => (
        <Link
          key={link.path}
          href={link.href}
          aria-current={pathname === link.path ? "page" : undefined}
          className="transition hover:text-lime"
        >
          {link.label}
        </Link>
      ))}
    </>
  );
}
