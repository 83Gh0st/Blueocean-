// A locked-down but honest Content-Security-Policy: this site loads no
// third-party scripts, analytics, or trackers, and only ever fetches its
// own /api/internal/* routes — so the allowlist below is short by design,
// not by omission. 'unsafe-inline' is kept for script-src/style-src
// because Next.js's own hydration bootstrap and this codebase's inline
// `style={{}}` usage both rely on it; removing it would need a
// nonce-per-request setup (middleware-generated nonces threaded through
// every Script/style tag), which is a real upgrade worth doing later but
// is more surface than is safe to change untested in one pass.
//
// 'unsafe-eval' is added to script-src ONLY in development: Next.js's Fast
// Refresh (the dev-server hot-reload runtime) evaluates module code as a
// string, which a strict CSP blocks — that's the
// "Evaluating a string as JavaScript violates..." error in `next dev`.
// Production never uses eval for this, so the production policy stays
// without it; this isn't a security loosening, dev and prod get different
// policies.
const isDev = process.env.NODE_ENV !== "production";

const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "img-src 'self' data: https://images.unsplash.com",
  "font-src 'self' data: https://fonts.gstatic.com",
  "connect-src 'self'",
  // The contact page embeds a Google Maps iframe (components/home/ContactMap.tsx) —
  // frame-src has to explicitly allow it, or the CSP blocks the map along
  // with everything else it's meant to keep out.
  "frame-src https://maps.google.com https://www.google.com",
  "frame-ancestors 'none'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "upgrade-insecure-requests",
].join("; ");

// Applied to every response. Individually:
// - CSP: see above.
// - X-Frame-Options: belt-and-braces clickjacking defence alongside
//   frame-ancestors, for older browsers that don't read CSP frame-ancestors.
// - X-Content-Type-Options: stops browsers guessing (sniffing) a
//   different MIME type than what's declared, which is how a malicious
//   upload can end up executed as a script/HTML.
// - Referrer-Policy: sends the full URL as a referrer only to our own
//   origin; other sites just get the bare origin, not the full path.
// - Permissions-Policy: this site never needs the camera, microphone,
//   geolocation, USB, or payment APIs, so they're switched off outright
//   rather than left default-on for any script that ends up running here.
// - Strict-Transport-Security: tells browsers to only ever hit this site
//   over HTTPS, for a year, including subdomains — preload is left off
//   on purpose since submitting to the browser preload list is hard to
//   reverse if this site's hosting setup ever changes.
const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()",
  },
  { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
      {
        // Internal tools should never be indexed or cached by intermediaries.
        source: "/internal/:path*",
        headers: [
          { key: "X-Robots-Tag", value: "noindex, nofollow, noarchive" },
          { key: "Cache-Control", value: "no-store" },
        ],
      },
      {
        // Same reasoning for the internal API surface itself.
        source: "/api/internal/:path*",
        headers: [
          { key: "X-Robots-Tag", value: "noindex, nofollow, noarchive" },
          { key: "Cache-Control", value: "no-store" },
        ],
      },
    ];
  },
};

export default nextConfig;
