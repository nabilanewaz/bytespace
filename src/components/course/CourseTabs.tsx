"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";

const tabs = [
  { label: "About", path: "" },
  { label: "Lessons", path: "/lessons" },
  { label: "Reviews", path: "/reviews" },
];

/** Tab bar for the course sub-pages; each tab is its own URL. */
export function CourseTabs({ slug }: { slug: string }) {
  const pathname = usePathname();
  const base = `/courses/${slug}`;

  return (
    <nav aria-label="Course sections">
      <ul className="flex gap-4">
        {tabs.map((tab) => {
          const href = base + tab.path;
          const active = pathname === href;
          return (
            <li key={tab.label}>
              <Link
                href={href}
                scroll={false}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "flex h-11 items-center rounded-full px-4 text-lg transition",
                  active ? "bg-lime text-ink" : "bg-surface text-ink-soft hover:bg-line",
                )}
              >
                {tab.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
