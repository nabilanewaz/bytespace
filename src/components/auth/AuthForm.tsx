"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

type AuthFormProps = {
  submitLabel: string;
  /** Shown after a valid submit, since there is no backend yet. */
  successMessage: string;
  children: React.ReactNode;
};

/**
 * Wraps the auth fields. There is no backend yet, so a valid submit shows
 * `successMessage` and nothing is sent anywhere.
 */
export function AuthForm({ submitLabel, successMessage, children }: AuthFormProps) {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="mt-10 flex flex-col gap-6 lg:mt-[52px]"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      {children}
      <div className="flex items-center justify-between gap-4">
        <p role="status" className="text-sm text-brand">
          {submitted && successMessage}
        </p>
        <Button type="submit" size="lg">
          {submitLabel}
        </Button>
      </div>
    </form>
  );
}
