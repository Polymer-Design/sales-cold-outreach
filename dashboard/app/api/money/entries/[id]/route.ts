import { NextResponse } from "next/server";
import { fail, guard } from "@/lib/api-guard";
import { deleteEntry } from "@/lib/money/store";

export async function DELETE(_req: Request, ctx: { params: Promise<{ id: string }> }) {
  const g = await guard();
  if ("error" in g) return g.error;
  const { id } = await ctx.params;
  try {
    await deleteEntry(id);
    return NextResponse.json({ ok: true });
  } catch (err) {
    return fail(err, "Couldn't delete.");
  }
}
