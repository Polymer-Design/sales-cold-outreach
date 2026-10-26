import { dbConfigured } from "../db.ts";
import { getSettings, listEntries } from "./store.ts";

// Everything a Money page needs, or null when the database isn't connected yet.
export async function loadMoney() {
  if (!dbConfigured()) return null;
  const [entries, settings] = await Promise.all([listEntries(), getSettings()]);
  return {
    entries,
    settings,
    // Shared, editable splits; until someone edits them they come straight from the config.
    splits: settings.splits ?? settings.pricing?.splits ?? null,
  };
}
export type MoneyData = NonNullable<Awaited<ReturnType<typeof loadMoney>>>;
