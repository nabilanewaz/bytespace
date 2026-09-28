"use client";

import { useSyncExternalStore } from "react";

const noSubscribe = () => () => {};

/**
 * False in the prerendered HTML and during hydration, true afterwards. Lets a page show a
 * loading state instead of the store's fallback (e.g. "Your cart is empty") before
 * localStorage has been read.
 */
export function useHydrated() {
  return useSyncExternalStore(noSubscribe, () => true, () => false);
}

/**
 * A value persisted in localStorage that components can subscribe to.
 * Every subscriber (and other open tabs) re-renders when it changes, and
 * server rendering always sees `fallback`, so there are no hydration mismatches.
 */
export function createLocalStore<T>(key: string, fallback: T, validate: (value: unknown) => T | null) {
  const listeners = new Set<() => void>();
  let cache: T | undefined;

  function get(): T {
    if (cache !== undefined) return cache;
    try {
      cache = validate(JSON.parse(localStorage.getItem(key) ?? "null")) ?? fallback;
    } catch {
      cache = fallback;
    }
    return cache;
  }

  function set(value: T) {
    cache = value;
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // Storage can be unavailable (private mode, quota); keep the value for this visit.
    }
    listeners.forEach((listener) => listener());
  }

  function subscribe(listener: () => void) {
    listeners.add(listener);
    const onStorage = (e: StorageEvent) => {
      if (e.key !== key) return;
      cache = undefined;
      listener();
    };
    window.addEventListener("storage", onStorage);
    return () => {
      listeners.delete(listener);
      window.removeEventListener("storage", onStorage);
    };
  }

  function useValue() {
    return useSyncExternalStore(subscribe, get, () => fallback);
  }

  return { get, set, useValue };
}
