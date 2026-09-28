import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

/**
 * Google sign-in only works once these are set (in `.env.local` or on Vercel):
 * AUTH_SECRET, AUTH_GOOGLE_ID and AUTH_GOOGLE_SECRET. Without them the site
 * falls back to the demo message on the login page and never calls Auth.js.
 */
export const isGoogleAuthEnabled = Boolean(
  process.env.AUTH_SECRET && process.env.AUTH_GOOGLE_ID && process.env.AUTH_GOOGLE_SECRET,
);

export const { handlers, auth, signIn, signOut } = NextAuth({
  // Reads AUTH_GOOGLE_ID / AUTH_GOOGLE_SECRET from the environment.
  providers: [Google],
  // No database: the session lives in an encrypted, http-only cookie.
  session: { strategy: "jwt" },
  // Needed for `next start` and preview URLs; Vercel's production host is trusted either way.
  trustHost: true,
  pages: {
    signIn: "/login",
    // Failed or cancelled sign-ins come back to the login page with ?error=…
    error: "/login",
  },
});
