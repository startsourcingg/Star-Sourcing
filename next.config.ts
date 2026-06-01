import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allowlist every quality value used with next/image across the site.
    // Next.js 16 requires explicit configuration; defaults to [75] only.
    qualities: [75, 85],
  },
};

export default nextConfig;
