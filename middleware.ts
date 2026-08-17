import { NextResponse, type NextRequest } from "next/server";
import { internalSessionCookie, verifySessionToken } from "@/lib/auth";

// Routes that must stay reachable *without* a valid session — the login
// page itself, and the API routes that create/destroy the session.
const PUBLIC_INTERNAL_PATHS = [
  "/internal/login",
  "/api/internal/login",
  "/api/internal/logout",
];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (PUBLIC_INTERNAL_PATHS.some((p) => pathname === p || pathname.startsWith(p + "/"))) {
    return NextResponse.next();
  }

  const token = request.cookies.get(internalSessionCookie.name)?.value;
  const isValid = await verifySessionToken(token);

  if (isValid) {
    return NextResponse.next();
  }

  // Page requests → redirect to the login screen with a return path.
  if (pathname.startsWith("/internal")) {
    const loginUrl = new URL("/internal/login", request.url);
    loginUrl.searchParams.set("from", pathname);
    return NextResponse.redirect(loginUrl);
  }

  // API requests → plain 401, no redirect.
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}

export const config = {
  matcher: ["/internal/:path*", "/api/internal/:path*"],
};
