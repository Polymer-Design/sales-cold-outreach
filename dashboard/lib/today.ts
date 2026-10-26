// "Today" as an Eastern-time YYYY-MM-DD, computed on the server and passed to client
// components so server render and hydration agree on which week is "this week".
export function todayET(): string {
  return new Intl.DateTimeFormat("en-CA", { timeZone: "America/New_York" }).format(new Date());
}
