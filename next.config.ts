import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Don't let `next dev` recreate AGENTS.md / CLAUDE.md.
  agentRules: false,
  images: {
    // Google account profile photos, shown in the navbar after sign-in.
    remotePatterns: [{ protocol: "https", hostname: "lh3.googleusercontent.com" }],
  },
};

export default nextConfig;
