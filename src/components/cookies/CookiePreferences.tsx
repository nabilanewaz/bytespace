"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { createLocalStore } from "@/lib/localStore";

const STORAGE_KEY = "bytespace-cookie-preferences";

type Preferences = { analytics: boolean; marketing: boolean };
const DEFAULTS: Preferences = { analytics: false, marketing: false };

type Category = {
  id: string;
  title: string;
  text: string;
  /** The preference this switch controls, or null for cookies that are always on. */
  pref: keyof Preferences | null;
};

const categories: Category[] = [
  {
    id: "essential",
    title: "Essential",
    text: "Required for the site to work, such as remembering your cart. Always on.",
    pref: null,
  },
  {
    id: "analytics",
    title: "Analytics",
    text: "Help us understand which pages and courses are popular so we can improve them.",
    pref: "analytics",
  },
  {
    id: "marketing",
    title: "Marketing",
    text: "Let us show you relevant course recommendations on other sites.",
    pref: "marketing",
  },
];

const store = createLocalStore<Preferences>(STORAGE_KEY, DEFAULTS, (value) =>
  value && typeof value === "object"
    ? {
        analytics: Boolean((value as Preferences).analytics),
        marketing: Boolean((value as Preferences).marketing),
      }
    : null,
);

/** Cookie category switches, saved to localStorage. */
export function CookiePreferences() {
  const savedPrefs = store.useValue();
  // Unsaved toggles; null means "showing what's saved".
  const [draft, setDraft] = useState<Preferences | null>(null);
  const [saved, setSaved] = useState(false);
  const prefs = draft ?? savedPrefs;

  const save = (next: Preferences) => {
    store.set(next);
    setDraft(null);
    setSaved(true);
  };

  return (
    <div className="flex flex-col gap-4">
      {categories.map(({ id: categoryId, title, text, pref }) => {
        const locked = pref === null;
        const checked = pref === null || prefs[pref];
        const id = `cookie-${categoryId}`;
        return (
          <div key={categoryId} className="flex items-start justify-between gap-6 rounded-3xl border border-line-strong p-6">
            <div>
              <label htmlFor={id} className="font-display text-lg font-semibold text-ink">
                {title}
              </label>
              <p className="mt-1 text-base leading-relaxed" id={`${id}-desc`}>
                {text}
              </p>
            </div>
            <button
              id={id}
              type="button"
              role="switch"
              aria-checked={checked}
              aria-describedby={`${id}-desc`}
              disabled={locked}
              onClick={() => {
                if (pref === null) return;
                setSaved(false);
                setDraft({ ...prefs, [pref]: !prefs[pref] });
              }}
              className={cn(
                "relative mt-1 h-7 w-12 shrink-0 cursor-pointer rounded-full transition disabled:cursor-not-allowed disabled:opacity-60",
                checked ? "bg-brand" : "bg-line-strong",
              )}
            >
              <span
                aria-hidden="true"
                className={cn(
                  "absolute top-1 left-1 size-5 rounded-full bg-white shadow transition",
                  checked && "translate-x-5",
                )}
              />
            </button>
          </div>
        );
      })}

      <div className="mt-4 flex flex-wrap items-center justify-end gap-4">
        <p role="status" className="mr-auto text-base text-brand">
          {saved && "Your preferences have been saved."}
        </p>
        <Button variant="outline" size="lg" onClick={() => save(DEFAULTS)}>
          Reject optional
        </Button>
        <Button size="lg" onClick={() => save(prefs)}>
          Save preferences
        </Button>
      </div>
    </div>
  );
}
