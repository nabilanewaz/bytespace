"use client";

import { useState } from "react";
import { Share2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

/** Uses the native share sheet when available, otherwise copies the page link. */
export function ShareButton({ title, className }: { title: string; className?: string }) {
  const [copied, setCopied] = useState(false);

  async function share() {
    const url = window.location.href;
    if (navigator.share) {
      await navigator.share({ title, url }).catch(() => {});
      return;
    }
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <Button size="lg" onClick={share} className={className}>
      <Share2 className="size-5" aria-hidden="true" />
      <span aria-live="polite">{copied ? "Link copied" : "Share"}</span>
    </Button>
  );
}
