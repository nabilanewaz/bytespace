import type { Metadata } from "next";
import Link from "next/link";
import { AuthForm } from "@/components/auth/AuthForm";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { TextField } from "@/components/auth/TextField";

export const metadata: Metadata = { title: "Create an Account — ByteSpace" };

export default function RegisterPage() {
  return (
    <AuthLayout
      tagline="Sign up and come in"
      description="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"
      eyebrow="Create an Account"
      title={
        <>
          Welcome to
          <br /> ByteSpace
        </>
      }
    >
      <AuthForm
        submitLabel="Continue"
        successMessage="Thanks! Registration opens soon. This is a demo."
      >
        <TextField
          label="Full Name"
          name="name"
          autoComplete="name"
          placeholder="Jamie Davis"
          required
        />
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
          autoComplete="new-password"
          placeholder="********"
          minLength={8}
          required
        />
      </AuthForm>
      <p className="mt-16 text-center text-lg text-muted lg:mt-[120px]">
        Already have an account?{" "}
        <Link href="/login" className="text-brand underline underline-offset-2 hover:decoration-2">
          Login
        </Link>
      </p>
    </AuthLayout>
  );
}
