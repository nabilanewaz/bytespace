import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Don't let `next dev` recreate AGENTS.md / CLAUDE.md.
  agentRules: false,
};

export default nextConfig;
