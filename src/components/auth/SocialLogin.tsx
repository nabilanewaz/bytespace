"use client";

import { useState } from "react";
import { useFormStatus } from "react-dom";
import { LoaderCircle } from "lucide-react";
import { signInWithGoogle } from "@/lib/authActions";

const providers = [
  {
    name: "Facebook",
    icon: (
      <svg viewBox="0 0 24 24" className="size-9" aria-hidden="true">
        <path
          fill="currentColor"
          d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07Z"
        />
      </svg>
    ),
  },
  {
    name: "Google",
    icon: (
      <svg viewBox="0 0 24 24" className="size-9" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12.24 10.29v3.9h6.47c-.28 1.66-1.97 4.87-6.47 4.87-3.9 0-7.08-3.23-7.08-7.2s3.18-7.2 7.08-7.2c2.22 0 3.7.95 4.55 1.76l3.1-2.98C17.9 1.6 15.3.5 12.24.5 5.9.5.77 5.63.77 11.97s5.13 11.47 11.47 11.47c6.62 0 11.01-4.65 11.01-11.2 0-.75-.08-1.33-.18-1.9H12.24Z"
        />
      </svg>
    ),
  },
];

const buttonClass =
  "grid size-[72px] cursor-pointer place-items-center rounded-2xl border border-line text-ink transition hover:border-brand hover:text-brand disabled:cursor-wait disabled:opacity-60";

type SocialLoginProps = {
  /** True when Google OAuth credentials are configured. */
  googleEnabled: boolean;
  /** Where to return after signing in. */
  redirectTo: string;
  /** Message for a failed sign-in (from the `?error=` query parameter). */
  error?: string;
};

export function SocialLogin({ googleEnabled, redirectTo, error }: SocialLoginProps) {
  const [chosen, setChosen] = useState<string | null>(null);

  return (
    <div className="mt-12 lg:mt-[70px]">
      <div className="flex items-center gap-3 text-lg text-subtle">
        <span className="h-px flex-1 bg-line" />
        or
        <span className="h-px flex-1 bg-line" />
      </div>
      <div className="mt-8 flex justify-center gap-4">
        {providers.map((p) =>
          p.name === "Google" && googleEnabled ? (
            <form key={p.name} action={signInWithGoogle.bind(null, redirectTo)}>
              <GoogleSubmit icon={p.icon} />
            </form>
          ) : (
            <button
              key={p.name}
              type="button"
              aria-label={`Continue with ${p.name}`}
              onClick={() => setChosen(p.name)}
              className={buttonClass}
            >
              {p.icon}
            </button>
          ),
        )}
      </div>
      <p role="status" className="mt-4 min-h-6 text-center text-sm text-brand">
        {chosen
          ? `${chosen} sign-in isn't available in this demo. Please ${googleEnabled ? "use Google or" : "use"} email instead.`
          : error}
      </p>
    </div>
  );
}

/** Submit button that shows a spinner while redirecting to Google. */
function GoogleSubmit({ icon }: { icon: React.ReactNode }) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      aria-label={pending ? "Redirecting to Google…" : "Continue with Google"}
      className={buttonClass}
    >
      {pending ? <LoaderCircle className="size-8 animate-spin" aria-hidden="true" /> : icon}
    </button>
  );
}
