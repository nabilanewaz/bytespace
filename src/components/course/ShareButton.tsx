"use client";

import { useRef, useState } from "react";
import { Share2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

type Status = "idle" | "copied" | "failed";

const labels: Record<Status, string> = {
  idle: "Share",
  copied: "Link copied",
  failed: "Copy failed",
};

/** Copies text via the Clipboard API, falling back to a hidden textarea for older/insecure contexts. */
async function copyText(text: string) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.append(textarea);
    textarea.select();
    const ok = document.execCommand("copy");
    textarea.remove();
    return ok;
  }
}

/** Uses the native share sheet when available, otherwise copies the page link. */
export function ShareButton({ title, className }: { title: string; className?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const resetTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  async function share() {
    // Clear any message left over from a previous attempt.
    clearTimeout(resetTimer.current);
    setStatus("idle");
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({ title, url });
        return;
      } catch (error) {
        // The user closed the share sheet; nothing to report.
        if (error instanceof DOMException && error.name === "AbortError") return;
      }
    }
    setStatus((await copyText(url)) ? "copied" : "failed");
    resetTimer.current = setTimeout(() => setStatus("idle"), 2000);
  }

  return (
    <Button size="lg" onClick={share} className={className}>
      <Share2 className="size-5" aria-hidden="true" />
      <span aria-live="polite">{labels[status]}</span>
    </Button>
  );
}
