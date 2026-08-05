// The real Polymer mark: seven dots in a flag/pennant arrangement (two top-right,
// three across the middle, one bottom-left) - not a generic 2x2 grid. Brand teal
// (#2ee6c5) is the same dot color regardless of background; only the wordmark text
// next to it changes color for light vs. dark backgrounds (handled by CSS, not here).
export default function PolymerMark({ size = 22 }: { size?: number }) {
  const d = 8.4; // center-to-center dot spacing
  const r = 3.6; // dot radius
  const dots: [number, number][] = [
    [d, 0], [d * 2, 0],
    [0, d], [d, d], [d * 2, d],
    [0, d * 2],
  ];
  const box = d * 2 + r * 2;

  return (
    <svg
      viewBox={`${-r} ${-r} ${box} ${box}`}
      width={size}
      height={size}
      aria-hidden="true"
    >
      {dots.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={r} fill="#2ee6c5" />
      ))}
    </svg>
  );
}
