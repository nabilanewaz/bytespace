"use server";

import { signIn, signOut } from "@/auth";

const ORIGIN = "http://same-site.invalid";

/**
 * Returns `path` as a same-site path, or "/" if it could point anywhere else.
 * It is parsed like a browser would, so tricks such as "//evil.example" or
 * "/\evil.example" (the backslash becomes a slash) resolve to another origin and are rejected.
 */
function safeRedirect(path: string) {
  if (!path.startsWith("/")) return "/";
  try {
    const url = new URL(path, ORIGIN);
    // The normalised path must not itself start with "//" (e.g. "/..//evil.example").
    if (url.origin !== ORIGIN || url.pathname.startsWith("//")) return "/";
    return url.pathname + url.search + url.hash;
  } catch {
    return "/";
  }
}

/** Starts the Google OAuth flow and returns to `redirectTo` afterwards. */
export async function signInWithGoogle(redirectTo: string) {
  await signIn("google", { redirectTo: safeRedirect(redirectTo) });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}
