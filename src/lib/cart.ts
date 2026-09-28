"use client";

import { createLocalStore } from "@/lib/localStore";

/** Course ids in the cart, saved in localStorage. */
const store = createLocalStore<string[]>("bytespace-cart", [], (value) =>
  Array.isArray(value) ? value.filter((id): id is string => typeof id === "string") : null,
);

export const cart = {
  add: (id: string) => {
    const ids = store.get();
    if (!ids.includes(id)) store.set([...ids, id]);
  },
  remove: (id: string) => store.set(store.get().filter((x) => x !== id)),
  clear: () => store.set([]),
};

/** Course ids in the cart. Empty during server rendering and the first client render. */
export const useCart = store.useValue;
