// ---------------------------------------------------------------------------
// Lightweight session auth for the /internal staff portal.
//
// This is intentionally simple: one shared passphrase (INTERNAL_APP_PASSWORD)
// gates the whole portal, and a signed, expiring cookie keeps you logged in.
// It's built on the Web Crypto API (not Node's `crypto` module) so the exact
// same code works whether this runs in Next.js Middleware (Edge runtime) or
// in a Route Handler (Node runtime).
//
// This is appropriate for a small internal tool used by a handful of trusted
// staff. If you later need per-person logins, audit trails, or role-based
// access, swap this for a proper auth provider (e.g. NextAuth.js / Auth.js)
// — the middleware.ts gate and the route layout are already structured so
// that swap only touches this file and the login route.
// ---------------------------------------------------------------------------

const COOKIE_NAME = "bo_internal_session";
const SESSION_TTL_SECONDS = 60 * 60 * 24 * 7; // 7 days

function getSecret(): string {
  const secret = process.env.INTERNAL_SESSION_SECRET;
  if (!secret) {
    throw new Error(
      "INTERNAL_SESSION_SECRET is not set. Add it to your environment variables (see .env.example)."
    );
  }
  return secret;
}

function base64UrlEncode(bytes: Uint8Array): string {
  let binary = "";
  for (const b of bytes) binary += String.fromCharCode(b);
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

async function hmacSign(payload: string, secret: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const signature = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(payload));
  return base64UrlEncode(new Uint8Array(signature));
}

function constantTimeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let mismatch = 0;
  for (let i = 0; i < a.length; i++) {
    mismatch |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return mismatch === 0;
}

/** Compares a submitted password against INTERNAL_APP_PASSWORD in constant time. */
export function verifyPassword(candidate: string): boolean {
  const expected = process.env.INTERNAL_APP_PASSWORD;
  if (!expected) {
    throw new Error(
      "INTERNAL_APP_PASSWORD is not set. Add it to your environment variables (see .env.example)."
    );
  }
  // Pad to equal length first so constantTimeEqual's length check doesn't leak
  // the real password length via early return timing.
  return candidate.length === expected.length && constantTimeEqual(candidate, expected);
}

/** Creates a signed, expiring session token to store in the session cookie. */
export async function createSessionToken(): Promise<string> {
  const expiresAt = Math.floor(Date.now() / 1000) + SESSION_TTL_SECONDS;
  const payload = `v1.${expiresAt}`;
  const signature = await hmacSign(payload, getSecret());
  return `${payload}.${signature}`;
}

/** Verifies a session token's signature and expiry. */
export async function verifySessionToken(token: string | undefined): Promise<boolean> {
  if (!token) return false;
  const parts = token.split(".");
  if (parts.length !== 3) return false;
  const [version, expiresAtStr, signature] = parts;
  const payload = `${version}.${expiresAtStr}`;

  const expected = await hmacSign(payload, getSecret());
  if (!constantTimeEqual(signature, expected)) return false;

  const expiresAt = Number(expiresAtStr);
  if (!Number.isFinite(expiresAt) || Date.now() / 1000 > expiresAt) return false;

  return true;
}

export const internalSessionCookie = {
  name: COOKIE_NAME,
  maxAge: SESSION_TTL_SECONDS,
};
