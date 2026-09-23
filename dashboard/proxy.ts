import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

// Uses getToken directly rather than the next-auth/middleware wrapper - it's a lower-level,
// more version-stable API that doesn't depend on next-auth tracking every Next.js middleware
// runtime change. The actual domain check already happened in lib/auth.ts's signIn callback;
// this just confirms a valid session exists before letting the request through.
export async function proxy(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  if (!token) {
    return NextResponse.redirect(new URL("/signin", req.url));
  }
  return NextResponse.next();
}

export const config = {
  // api/webhooks/* is deliberately excluded - those are called by external services
  // (e.g. Cal.com) with no session cookie, and authenticate themselves instead (see
  // app/api/webhooks/cal/route.ts's HMAC signature check).
  matcher: [
    "/((?!api/auth|api/webhooks|signin|_next/static|_next/image|favicon.ico|icon.svg).*)",
  ],
};
