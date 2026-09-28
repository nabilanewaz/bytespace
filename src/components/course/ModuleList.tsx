import { Video } from "lucide-react";
import type { Module } from "@/data/courseDetails";

export function ModuleList({ modules }: { modules: Module[] }) {
  return (
    <ol className="flex flex-col gap-7">
      {modules.map((module) => (
        <li key={module.title} className="flex gap-4 sm:gap-[13px]">
          <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-lime sm:size-[72px] sm:rounded-3xl">
            <Video className="size-7 sm:size-9" strokeWidth={2.25} aria-hidden="true" />
          </span>
          <div>
            <h3 className="text-base text-ink sm:text-lg">{module.title}</h3>
            <p className="mt-1 text-base leading-[1.7] text-muted">{module.summary}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
