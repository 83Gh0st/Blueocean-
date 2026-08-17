import { NextResponse, type NextRequest } from "next/server";
import { createSessionToken, internalSessionCookie, verifyPassword } from "@/lib/auth";

export async function POST(request: NextRequest) {
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
    valid = verifyPassword(password);
  } catch {
    return NextResponse.json(
      { error: "The internal portal isn't configured yet. Set INTERNAL_APP_PASSWORD and INTERNAL_SESSION_SECRET." },
      { status: 500 }
    );
  }

  if (!valid) {
    // Small delay to blunt naive brute-force attempts without a real rate limiter.
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
