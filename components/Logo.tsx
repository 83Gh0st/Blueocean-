interface LogoProps {
  /** "color" for light backgrounds, "white" for dark backgrounds (nav-on-hero, footer, internal portal). */
  variant?: "color" | "white";
  /** "full" is the wave + wordmark lockup. "icon" is the wave mark alone (compact spaces, favicons). */
  mark?: "full" | "icon";
  className?: string;
  style?: React.CSSProperties;
  /** Height in px — width follows automatically from the asset's own aspect ratio. */
  height?: number;
}

const SOURCES = {
  color: { full: "/brand/logo-color.svg", icon: "/brand/logo-icon-color.svg" },
  white: { full: "/brand/logo-white.png", icon: "/brand/logo-icon-white.png" },
};

/**
 * Blue Ocean Chemicals' real logo — extracted from the brand's official
 * colour-code artwork. Every usage across the site reads from these two
 * files (public/brand/logo-color.svg, public/brand/logo-white.png) plus
 * their icon-only counterparts. To swap in an updated logo later, replace
 * those four files — nothing else needs to change.
 */
export default function Logo({ variant = "color", mark = "full", className, style, height = 40 }: LogoProps) {
  const src = SOURCES[variant][mark];
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt="Blue Ocean Chemicals"
      className={className}
      style={{ height, width: "auto", display: "block", ...style }}
    />
  );
}
