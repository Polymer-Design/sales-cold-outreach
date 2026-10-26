import { balances, usd, usd2, type LedgerEntry } from "@/lib/money/split";

export default function MoneySummary({ entries, goal }: { entries: LedgerEntry[]; goal: number }) {
  const b = balances(entries);
  const paid = b.cardStart - b.card;
  return (
    <div className="stats">
      <div className="stat">
        <div className="label">Card balance</div>
        <div className="val">{usd2(b.card)}</div>
        <div className="sub2">{b.card > 0 ? `${usd(paid)} paid off so far` : b.cardHas ? "Paid off" : "Add the starting balance on the Card tab"}</div>
      </div>
      <div className="stat">
        <div className="label">Runway saved</div>
        <div className="val">{usd2(b.runway)}</div>
        <div className="sub2">{goal ? `Goal ${usd(goal)}` : "No goal set"}</div>
      </div>
      <div className="stat accent">
        <div className="label">Card / runway share now goes to</div>
        <div className="val">{b.card > 0 ? "The card" : "Runway"}</div>
        <div className="sub2">{b.card > 0 ? "Until it hits $0, then runway" : "Card is paid off"}</div>
      </div>
    </div>
  );
}
