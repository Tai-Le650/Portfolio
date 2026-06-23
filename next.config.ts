import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    // Allow the SVG placeholder shipped in /public/projects.
    // Once you replace placeholder.svg with real screenshots (PNG/JPG/WebP),
    // you can remove both of these lines.
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
