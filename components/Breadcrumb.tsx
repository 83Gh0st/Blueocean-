import Link from "next/link";
import { Home, ChevronRight } from "lucide-react";

interface Crumb {
  label: string;
  href?: string;
}

/**
 * Quiet wayfinding trail for interior pages (About, Chemical Catalog), sat
 * above the eyebrow on dark hero sections. Always starts at Home so there's
 * an unmistakable, always-visible way back to the landing page beyond the
 * logo click — small, mono, out of the way of the real headline.
 */
export default function Breadcrumb({ trail }: { trail: Crumb[] }) {
  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      <Link href="/" className="breadcrumb-home">
        <Home strokeWidth={2} />
        Home
      </Link>
      {trail.map((item) => (
        <span className="breadcrumb-item" key={item.label}>
          <ChevronRight strokeWidth={2} className="breadcrumb-sep" />
          {item.href ? <Link href={item.href}>{item.label}</Link> : <span aria-current="page">{item.label}</span>}
        </span>
      ))}
    </nav>
  );
}
