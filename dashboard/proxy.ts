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
  matcher: ["/((?!api/auth|signin|_next/static|_next/image|favicon.ico|icon.svg).*)"],
};
