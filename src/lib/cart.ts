"use client";

import { courses } from "@/data/courses";
import { createLocalStore } from "@/lib/localStore";

const courseIds = new Set(courses.map((c) => c.id));

/**
 * Course ids in the cart, saved in localStorage. Anything read back from
 * storage is cleaned: unknown (e.g. removed) courses and duplicates are dropped,
 * so the navbar count always matches the cart page.
 */
const store = createLocalStore<string[]>("bytespace-cart", [], (value) =>
  Array.isArray(value)
    ? [...new Set(value.filter((id): id is string => typeof id === "string" && courseIds.has(id)))]
    : null,
);

export const cart = {
  add: (id: string) => {
    const ids = store.get();
    if (courseIds.has(id) && !ids.includes(id)) store.set([...ids, id]);
  },
  remove: (id: string) => store.set(store.get().filter((x) => x !== id)),
  clear: () => store.set([]),
};

/** Course ids in the cart. Empty during server rendering and the first client render. */
export const useCart = store.useValue;
