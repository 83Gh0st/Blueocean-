"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/chemicals", label: "Products" },
  { href: "/#capabilities", label: "Capabilities" },
  { href: "/#why", label: "Why Us" },
  { href: "/#process", label: "Process" },
];

/**
 * A permanent frosted-glass bar — not a transparent-over-hero nav that swaps
 * logo/link colors on scroll. Every page on this site opens on a dark hero,
 * so a nav that's legible only when "solid" would be illegible at the top of
 * every single page. One consistent light surface, at every scroll position,
 * on every page, means the color logo and dark nav links are always
 * readable and the CTA button never has to change color to match its
 * surroundings (that color-matching is what made it invisible on mobile).
 */
export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.documentElement.classList.toggle("nav-open", open);
    return () => document.documentElement.classList.remove("nav-open");
  }, [open]);

  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <Link href="/" className="nav-brand" aria-label="Blue Ocean Chemicals — home">
        <Logo variant="color" height={44} />
      </Link>

      <div className={`nav-links ${open ? "open" : ""}`} id="navLinks">
        <div className="nav-links-top">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
        </div>
        <Link href="/#contact" className="nav-cta" onClick={() => setOpen(false)}>
          Request a Quote
        </Link>
      </div>

      <button
        className="nav-toggle"
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span />
        <span />
      </button>

      {open && <div className="nav-scrim" onClick={() => setOpen(false)} aria-hidden="true" />}
    </nav>
  );
}
