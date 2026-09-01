interface LogoProps {
  /** "color" for light backgrounds, "white" for dark backgrounds (nav, footer, internal portal). */
  variant?: "color" | "white";
  /** "full" is the wave mark + wordmark lockup. "icon" is the wave mark alone (compact spaces, favicons). */
  mark?: "full" | "icon";
  className?: string;
  style?: React.CSSProperties;
  /** Height in px of the wave mark — the wordmark scales to match. */
  height?: number;
}

const ICON_SRC = {
  color: "/brand/logo-icon-color.svg",
  white: "/brand/logo-icon-white.png",
};

/**
 * Blue Ocean Chemicals' brand mark. The wave icon is the studio's original
 * artwork (public/brand/logo-icon-color.svg / logo-icon-white.png) — untouched,
 * same official colour codes. The wordmark next to it is set as real text
 * rather than baked into the artwork: the old flattened lockup held its own
 * at poster size but turned to mush at nav/footer height, since a fixed-aspect
 * image can't reflow. Real text stays crisp at any size and lets the mark and
 * the wordmark scale independently, so "bigger" just means changing `height`.
 */
export default function Logo({ variant = "color", mark = "full", className, style, height = 40 }: LogoProps) {
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

  return (
    <span
      className={`logo-lockup logo-lockup--${variant} ${className ?? ""}`}
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
