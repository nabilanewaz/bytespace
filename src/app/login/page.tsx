import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { auth, isGoogleAuthEnabled } from "@/auth";
import { AuthForm } from "@/components/auth/AuthForm";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { SocialLogin } from "@/components/auth/SocialLogin";
import { TextField } from "@/components/auth/TextField";
import { Button, ButtonLink } from "@/components/ui/Button";
import { signOutAction } from "@/lib/authActions";

export const metadata: Metadata = { title: "Sign In — ByteSpace" };

/** Friendly text for Auth.js error codes sent back as `?error=…`. */
function errorMessage(code: string | undefined) {
  if (!code) return undefined;
  if (code === "AccessDenied") return "Google sign-in was cancelled. Please try again.";
  return "Google sign-in didn't complete. Please try again.";
}

export default async function LoginPage({ searchParams }: PageProps<"/login">) {
  const { callbackUrl, error } = await searchParams;
  const redirectTo = typeof callbackUrl === "string" ? callbackUrl : "/";
  const session = isGoogleAuthEnabled ? await auth() : null;
  const user = session?.user;

  return (
    <AuthLayout
      tagline="Sign in with ease"
      description="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
      eyebrow="Sign In"
      title={user ? "You're signed in" : "Welcome Back"}
    >
      {user ? (
        <div className="mt-10 lg:mt-[52px]">
          <div className="flex items-center gap-4 rounded-2xl bg-surface p-5">
            {user.image && (
              <Image src={user.image} alt="" width={56} height={56} className="size-14 rounded-full object-cover" />
            )}
            <div className="min-w-0">
              <p className="truncate text-lg text-ink">{user.name}</p>
              <p className="truncate text-base text-muted">{user.email}</p>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink href="/search" size="lg">
              Browse courses
            </ButtonLink>
            <form action={signOutAction}>
              <Button type="submit" variant="outline" size="lg">
                Sign out
              </Button>
            </form>
          </div>
        </div>
      ) : (
        <>
          <AuthForm
            submitLabel="Sign In"
            successMessage={
              isGoogleAuthEnabled
                ? "Email sign-in isn't available in this demo. Please continue with Google."
                : "Sign-in isn't available yet. This is a demo."
            }
          >
            <TextField
              label="Email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="designer@example.com"
              required
            />
            <TextField
              label="Password"
              name="password"
              type="password"
              autoComplete="current-password"
              placeholder="********"
              required
            />
          </AuthForm>
          <SocialLogin
            googleEnabled={isGoogleAuthEnabled}
            redirectTo={redirectTo}
            error={errorMessage(typeof error === "string" ? error : undefined)}
          />
          <p className="mt-8 text-center text-lg text-muted">
            New user?{" "}
            <Link href="/register" className="text-brand hover:underline">
              Create an account
            </Link>
          </p>
        </>
      )}
    </AuthLayout>
  );
}
