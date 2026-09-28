"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

export function NewsletterForm() {
  const [subscribed, setSubscribed] = useState(false);

  return (
    <form
      className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6"
      onSubmit={(e) => {
        e.preventDefault();
        setSubscribed(true);
      }}
    >
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        placeholder="Enter your email"
        className="h-[52px] w-full rounded-full border border-line px-6 text-base text-ink outline-none placeholder:text-ink-soft focus:border-brand sm:max-w-[376px]"
      />
      <Button type="submit" size="lg">
        {subscribed ? "Subscribed!" : "Subscribe"}
      </Button>
    </form>
  );
}
