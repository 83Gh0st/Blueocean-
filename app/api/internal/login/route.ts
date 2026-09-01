import { NextResponse, type NextRequest } from "next/server";
import { createSessionToken, internalSessionCookie, verifyPassword } from "@/lib/auth";
import { checkRateLimit, clientKeyFromHeaders } from "@/lib/rate-limit";

// 8 attempts per 10 minutes per client, tracked in-memory (see lib/rate-limit.ts
// for what that does and doesn't protect against).
const MAX_ATTEMPTS = 8;
const WINDOW_MS = 10 * 60 * 1000;

export async function POST(request: NextRequest) {
  const clientKey = clientKeyFromHeaders(request.headers);
  const rateLimit = checkRateLimit(`login:${clientKey}`, MAX_ATTEMPTS, WINDOW_MS);
  if (rateLimit.limited) {
    return NextResponse.json(
      { error: "Too many attempts. Try again in a few minutes." },
      { status: 429, headers: { "Retry-After": String(rateLimit.retryAfterSeconds) } }
    );
  }

  let password: string | undefined;
  try {
    const body = await request.json();
    password = typeof body?.password === "string" ? body.password : undefined;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (!password) {
    return NextResponse.json({ error: "Password is required." }, { status: 400 });
  }

  let valid: boolean;
  try {
    valid = await verifyPassword(password);
  } catch (err) {
    // Detailed reason stays server-side — an unauthenticated caller only
    // ever sees a generic message, not which env var is missing.
    console.error("Internal login misconfigured:", err);
    return NextResponse.json({ error: "Something went wrong. Try again shortly." }, { status: 500 });
  }

  if (!valid) {
    // Small fixed delay on top of the rate limit above, so a single
    // request can't be used to time-probe whether a password prefix matched.
    await new Promise((resolve) => setTimeout(resolve, 400));
    return NextResponse.json({ error: "Incorrect password." }, { status: 401 });
  }

  const token = await createSessionToken();
  const response = NextResponse.json({ ok: true });
  response.cookies.set(internalSessionCookie.name, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: internalSessionCookie.maxAge,
  });
  return response;
}
