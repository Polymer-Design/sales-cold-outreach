import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { dbConfigured } from "@/lib/db";

// Shared preamble for the Planner/Money API routes: signed-in user + database present.
// Returns the user's email, or a ready-to-return error response.
export async function guard(): Promise<{ email: string } | { error: NextResponse }> {
  const session = await getServerSession(authOptions);
  const email = session?.user?.email;
  if (!email) return { error: NextResponse.json({ error: "Not signed in." }, { status: 401 }) };
  if (!dbConfigured()) {
    return {
      error: NextResponse.json(
        { error: "The database isn't connected yet - see dashboard/README.md (Neon setup)." },
        { status: 503 },
      ),
    };
  }
  return { email };
}

export function fail(err: unknown, fallback: string, status = 500) {
  return NextResponse.json({ error: err instanceof Error ? err.message : fallback }, { status });
}

export async function readJson<T>(req: Request): Promise<T | null> {
  try {
    return (await req.json()) as T;
  } catch {
    return null;
  }
}
