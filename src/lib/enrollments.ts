"use client";

import { courses } from "@/data/courses";
import { createLocalStore } from "@/lib/localStore";

const courseIds = new Set(courses.map((c) => c.id));

/** Ids of courses the visitor has checked out, saved in localStorage (newest last). */
const store = createLocalStore<string[]>("bytespace-enrollments", [], (value) =>
  Array.isArray(value)
    ? [...new Set(value.filter((id): id is string => typeof id === "string" && courseIds.has(id)))]
    : null,
);

export const enrollments = {
  add: (ids: string[]) => {
    const current = store.get();
    const added = ids.filter((id) => courseIds.has(id) && !current.includes(id));
    if (added.length) store.set([...current, ...added]);
  },
};

/** Enrolled course ids. Empty during server rendering and the first client render. */
export const useEnrollments = store.useValue;
