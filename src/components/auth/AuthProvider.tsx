"use client";

import { createContext, useContext } from "react";
import { SessionProvider } from "next-auth/react";

const AuthEnabledContext = createContext(false);

/**
 * Provides the session to client components, but only when Google sign-in is
 * configured. Without credentials the app never calls /api/auth, so there are
 * no failed requests or console errors on the demo deployment.
 */
export function AuthProvider({ enabled, children }: { enabled: boolean; children: React.ReactNode }) {
  return (
    <AuthEnabledContext value={enabled}>
      {enabled ? <SessionProvider>{children}</SessionProvider> : children}
    </AuthEnabledContext>
  );
}

/** Whether real Google sign-in is available. */
export function useAuthEnabled() {
  return useContext(AuthEnabledContext);
}
