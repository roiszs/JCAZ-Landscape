import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Clickjacking
          { key: "X-Frame-Options", value: "DENY" },

          // XSS / MIME sniff
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },

          // COOP (origin isolation parcial)
          { key: "Cross-Origin-Opener-Policy", value: "same-origin" },

          // HSTS (solo funciona en HTTPS)
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },

          // CSP (versión “segura” sin romper Next)
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "base-uri 'self'",
              "object-src 'none'",
              "frame-ancestors 'none'",
              "img-src 'self' data: https:",
              "media-src 'self' https:",
              "font-src 'self' data: https:",
              // Next suele requerir inline scripts; sin nonce lo más práctico es permitirlo
              "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
              "style-src 'self' 'unsafe-inline'",
              "connect-src 'self' https:",
            ].join("; "),
          },
        ],
      },
    ];
  },
};
