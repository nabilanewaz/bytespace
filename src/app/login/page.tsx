import type { Metadata } from "next";
import Link from "next/link";
import { AuthForm } from "@/components/auth/AuthForm";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { SocialLogin } from "@/components/auth/SocialLogin";
import { TextField } from "@/components/auth/TextField";

export const metadata: Metadata = { title: "Sign In — ByteSpace" };

export default function LoginPage() {
  return (
    <AuthLayout
      tagline="Sign in with ease"
      description="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
      eyebrow="Sign In"
      title="Welcome Back"
    >
      <AuthForm
        submitLabel="Sign In"
        successMessage="Sign-in isn't available yet. This is a demo."
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
      <SocialLogin />
      <p className="mt-8 text-center text-lg text-muted">
        New user?{" "}
        <Link href="/register" className="text-brand hover:underline">
          Create an account
        </Link>
      </p>
    </AuthLayout>
  );
}
