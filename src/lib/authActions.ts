"use server";

import { signIn, signOut } from "@/auth";

/** Starts the Google OAuth flow and returns to `redirectTo` afterwards. */
export async function signInWithGoogle(redirectTo: string) {
  // Only allow same-site paths, never an absolute URL from the query string.
  const safe = redirectTo.startsWith("/") && !redirectTo.startsWith("//") ? redirectTo : "/";
  await signIn("google", { redirectTo: safe });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}
