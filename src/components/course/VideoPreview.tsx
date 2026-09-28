"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, X } from "lucide-react";

/**
 * Course preview poster with a play button. There's no preview video yet,
 * so pressing play shows a short notice instead of doing nothing.
 */
export function VideoPreview({ title }: { title: string }) {
  const [notice, setNotice] = useState(false);

  return (
    <div className="relative h-[220px] overflow-hidden rounded-3xl sm:h-[380px] lg:h-[479px]">
      <Image
        src="/images/course/video-poster.webp"
        alt={`Preview image for ${title}`}
        fill
        priority
        sizes="(min-width: 1280px) 725px, (min-width: 1024px) 60vw, 100vw"
        className="object-cover"
      />
      {notice ? (
        <div
          role="status"
          className="absolute inset-0 grid place-items-center bg-ink/60 p-6 text-center text-white backdrop-blur-sm"
        >
          <div>
            <p className="font-display text-xl font-semibold sm:text-2xl">Preview video coming soon</p>
            <p className="mt-2 text-base text-white/80">Enroll to get access to all lessons.</p>
            <button
              type="button"
              onClick={() => setNotice(false)}
              className="mx-auto mt-5 flex cursor-pointer items-center gap-2 rounded-full bg-white px-5 py-2 text-base text-ink transition hover:bg-lime"
            >
              <X className="size-4" aria-hidden="true" /> Close
            </button>
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setNotice(true)}
          aria-label="Play course preview"
          className="absolute top-1/2 left-1/2 grid size-[60px] -translate-1/2 cursor-pointer place-items-center rounded-full bg-white/90 shadow-card transition hover:scale-110 hover:bg-white"
        >
          <Play className="ml-1 size-6 fill-ink-soft text-ink-soft" aria-hidden="true" />
        </button>
      )}
    </div>
  );
}
