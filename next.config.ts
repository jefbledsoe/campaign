import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: `next build` writes plain HTML/CSS/JS to `out/` instead of
  // needing a Node server (GitHub Pages can only serve static files).
  output: "export",

  // The site is served from https://jefbledsoe.github.io/campaign/, not the
  // domain root. basePath prefixes every route and link with /campaign, and
  // also prefixes the /_next/ asset URLs, so no separate assetPrefix is needed.
  basePath: "/campaign",

  // next/image normally resizes images on a server at request time. There is
  // no server on Pages, so serve images as-is.
  images: { unoptimized: true },

  // Emit /campaign/index.html (folder + index.html) rather than campaign.html,
  // which is what Pages expects for a URL ending in a slash.
  trailingSlash: true,
};

export default nextConfig;
