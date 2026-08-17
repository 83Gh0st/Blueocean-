interface WaveDividerProps {
  onDark?: boolean;
  className?: string;
}

/**
 * The one recurring signature motif, abstracted from the crest of Blue
 * Ocean's real logo mark — a quiet gradient line that threads between
 * sections instead of a hard rule or another card shadow.
 */
export default function WaveDivider({ onDark, className }: WaveDividerProps) {
  return (
    <svg
      className={`wave-divider ${onDark ? "on-dark" : ""} ${className ?? ""}`}
      viewBox="0 0 1200 28"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="wave-divider-gradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#353571" />
          <stop offset="38%" stopColor="#275A9C" />
          <stop offset="68%" stopColor="#1674B7" />
          <stop offset="100%" stopColor="#189BCE" />
        </linearGradient>
      </defs>
      <path
        d="M0,14 C150,26 300,2 450,14 C600,26 750,2 900,14 C1000,22 1100,6 1200,14"
        stroke="url(#wave-divider-gradient)"
        opacity={onDark ? 0.5 : 0.4}
      />
    </svg>
  );
}
