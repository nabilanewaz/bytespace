"use client";

import { useState } from "react";
import { TextField } from "@/components/auth/TextField";
import { Button } from "@/components/ui/Button";

export const contactTopics = [
  { value: "general", label: "General question" },
  { value: "courses", label: "Courses & enrollment" },
  { value: "creator", label: "Becoming a creator" },
  { value: "affiliate", label: "Affiliate program" },
  { value: "feedback", label: "Feedback" },
];

/** Contact form. There is no backend, so a valid submit only shows a confirmation. */
export function ContactForm({ initialTopic }: { initialTopic?: string }) {
  const [sentTo, setSentTo] = useState<string | null>(null);
  const topic = contactTopics.some((t) => t.value === initialTopic) ? initialTopic : "general";

  if (sentTo) {
    return (
      <div role="status" className="rounded-3xl border border-line-strong p-8 text-center">
        <h2>Thanks for reaching out!</h2>
        <p>
          This is a demo, so your message wasn&rsquo;t actually sent. In the live product we&rsquo;d
          reply to <strong>{sentTo}</strong> within one business day.
        </p>
        <Button size="lg" variant="outline" className="mt-6" onClick={() => setSentTo(null)}>
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form
      className="flex flex-col gap-6 rounded-3xl border border-line-strong p-6 sm:p-10"
      onSubmit={(e) => {
        e.preventDefault();
        setSentTo(String(new FormData(e.currentTarget).get("email")));
      }}
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <TextField label="Name" name="name" autoComplete="name" placeholder="Jamie Davis" required />
        <TextField
          label="Email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="designer@example.com"
          required
        />
      </div>
      <div>
        <label htmlFor="contact-topic" className="text-sm text-ink">
          Topic
        </label>
        <select
          id="contact-topic"
          name="topic"
          defaultValue={topic}
          className="mt-2 h-[52px] w-full cursor-pointer rounded-xl border border-line bg-white px-5 text-lg text-ink outline-none focus:border-brand focus:ring-2 focus:ring-brand/15"
        >
          {contactTopics.map((t) => (
            <option key={t.value} value={t.value}>
              {t.label}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="contact-message" className="text-sm text-ink">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          minLength={10}
          rows={5}
          placeholder="How can we help?"
          className="mt-2 w-full rounded-xl border border-line px-6 py-4 text-lg text-ink outline-none placeholder:text-subtle focus:border-brand focus:ring-2 focus:ring-brand/15"
        />
      </div>
      <Button type="submit" size="lg" className="self-end">
        Send message
      </Button>
    </form>
  );
}
