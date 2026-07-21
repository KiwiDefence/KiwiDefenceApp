import type { NextConfig } from "next";

const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.google.com https://www.gstatic.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https:",
  "font-src 'self'",
  "frame-src https://www.google.com",
  "connect-src 'self' https:",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
].join("; ")

const isStaticExport = process.env.STATIC_EXPORT === "true"

const nextConfig: NextConfig = {
  ...(isStaticExport ? {
    output: "export" as const,
    basePath: "/KiwiDefenceApp",
    assetPrefix: "/KiwiDefenceApp/",
    trailingSlash: true,
    images: { unoptimized: true },
  } : {}),
  devIndicators: false,
  poweredByHeader: false,
  ...(isStaticExport ? {} : {
    async headers() {
      return [
        {
          source: "/(.*)",
          headers: [
            { key: "Content-Security-Policy", value: csp },
            { key: "X-Frame-Options", value: "DENY" },
            { key: "X-Content-Type-Options", value: "nosniff" },
            { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          ],
        },
      ]
    },
  }),
};

export default nextConfig;
