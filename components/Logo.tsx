interface LogoProps {
  /** "color" for light backgrounds, "white" for dark backgrounds (internal portal icon). */
  variant?: "color" | "white";
  /** "full" is the wave mark + wordmark lockup. "icon" is the wave mark alone (compact spaces, favicons). */
  mark?: "full" | "icon";
  className?: string;
  style?: React.CSSProperties;
  /** Height in px of the wave mark — the wordmark scales to match. */
  height?: number;
  /**
   * Forces the wordmark to white regardless of `variant`. The coloured icon
   * reads fine on a dark background on its own (its lighter blues stand out
   * against navy) — it's specifically the *wordmark text* that needs to
   * switch to white there, since the icon's colour and the text colour are
   * otherwise two independent choices. Used for the coloured icon on the
   * footer's dark gradient.
   */
  onDark?: boolean;
}

const ICON_SRC = {
  color: "/brand/logo-color.svg",
  white: "/brand/logo-color.svg",
};

/**
 * Blue Ocean Chemicals' brand mark. The wave icon is the studio's original
 * artwork (public/brand/logo-icon-color.svg / logo-icon-white.png) — untouched,
 * same official colour codes, used everywhere (nav, footer, meta image) so
 * it's always the same mark rather than a colour swap per surface. The
 * wordmark next to it is set as real text rather than baked into the
 * artwork: the old flattened lockup held its own at poster size but turned
 * to mush at nav/footer height, since a fixed-aspect image can't reflow.
 * Real text stays crisp at any size and lets the mark and the wordmark
 * scale independently, so "bigger" just means changing `height`.
 */
export default function Logo({
  variant = "color",
  mark = "full",
  className,
  style,
  height = 40,
  onDark = false,
}: LogoProps) {
  if (mark === "icon") {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={ICON_SRC[variant]}
        alt="Blue Ocean Chemicals"
        className={className}
        style={{ height, width: "auto", display: "block", ...style }}
      />
    );
  }

  const textVariant = onDark ? "white" : variant;

  return (
    <span
      className={`logo-lockup logo-lockup--${textVariant} ${className ?? ""}`}
      style={{ ["--logo-h" as string]: `${height}px`, ...style }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={ICON_SRC[variant]} alt="" aria-hidden="true" className="logo-lockup-mark" />
      <span className="logo-lockup-word">
        <span className="logo-lockup-word-main">Blue Ocean</span>
        <span className="logo-lockup-word-sub">Chemicals</span>
      </span>
    </span>
  );
}
