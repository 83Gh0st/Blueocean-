"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const ARCS = [
  { r: 150, color: "#189BCE", delay: 0.5 },
  { r: 120, color: "#1674B7", delay: 0.68 },
  { r: 90, color: "#275A9C", delay: 0.86 },
  { r: 60, color: "#353571", delay: 1.04 },
];

// Describes an SVG arc path from startAngle to endAngle (degrees) around (cx,cy) at radius r.
function describeArc(cx: number, cy: number, r: number, startAngle: number, endAngle: number): string {
  const toRad = (deg: number) => ((deg - 90) * Math.PI) / 180;
  const start = { x: cx + r * Math.cos(toRad(endAngle)), y: cy + r * Math.sin(toRad(endAngle)) };
  const end = { x: cx + r * Math.cos(toRad(startAngle)), y: cy + r * Math.sin(toRad(startAngle)) };
  const largeArc = endAngle - startAngle <= 180 ? 0 : 1;
  return `M ${start.x} ${start.y} A ${r} ${r} 0 ${largeArc} 0 ${end.x} ${end.y}`;
}

function HeroWaveVisual() {
  return (
    <div className="hero-wave-visual">
      <div className="hero-wave-glow" aria-hidden="true" />
      <svg className="hero-wave-svg" viewBox="0 0 400 400">
        <motion.g
          style={{ transformOrigin: "200px 200px" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 140, repeat: Infinity, ease: "linear" }}
        >
          <circle className="hero-wave-ring" cx="200" cy="200" r="188" />
          <circle className="hero-wave-ring" cx="200" cy="200" r="150" />
          {ARCS.map((arc, i) => (
            <motion.path
              key={i}
              className="hero-wave-path"
              d={describeArc(200, 200, arc.r, -50, 220)}
              stroke={arc.color}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.1, delay: arc.delay, ease: [0.16, 1, 0.3, 1] }}
            />
          ))}
        </motion.g>

        {/* The one signature motion moment on the page: a slow ripple reading
            outward from the centre, standing in — quite literally — for
            "water innovation" rather than a decorative loop unrelated to
            what the company does. */}
        {[0, 1.7, 3.4].map((delay) => (
          <motion.circle
            key={delay}
            cx="200"
            cy="200"
            r="4"
            fill="none"
            stroke="#189bce"
            strokeWidth="1.25"
            initial={{ opacity: 0 }}
            animate={{ r: [4, 172], opacity: [0.5, 0] }}
            transition={{ duration: 5.1, delay: 1.7 + delay, repeat: Infinity, ease: "easeOut" }}
          />
        ))}

        <motion.circle
          cx="200"
          cy="200"
          r="4"
          fill="#189BCE"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        />
      </svg>
    </div>
  );
}

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="hero-photo">
        <Image
          src="/assets/hero.png"
          alt=""
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="hero-mesh" />
      <div className="hero-glow-accent" aria-hidden="true" />
      <div className="hero-grid" />
      <div className="grain" aria-hidden="true" />
      <div className="wrap hero-inner">
        <div>
          <motion.div
            className="eyebrow hero-eyebrow"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Chemical Manufacturing · Ajman, UAE
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
          >
            Empowering performance
            <br />
            <em>through water</em> innovation.
          </motion.h1>
          <motion.p
            className="lede"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.36, ease: [0.16, 1, 0.3, 1] }}
          >
            Reverse Osmosis, Chilled Water, Cooling Water, Boiler, Swimming Pool and Potable Water treatment
            chemistry, formulated and manufactured to a single, consistent standard.
          </motion.p>
          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link href="#contact" className="btn btn-primary">
              Request a quote
              <svg viewBox="0 0 30 24" fill="none" stroke="currentColor" strokeWidth="4">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
            <Link href="#capabilities" className="btn btn-ghost">
              Explore our capabilities
            </Link>
          </motion.div>
          <motion.div
            className="hero-stats"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <div className="hero-stat">
              <div className="v">6</div>
              <div className="l">Treatment Lines</div>
            </div>
            <div className="hero-stat">
              <div className="v">100%</div>
              <div className="l">UAE Manufactured</div>
            </div>
            <div className="hero-stat">
              <div className="v">48hr</div>
              <div className="l">Standard Dispatch</div>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <HeroWaveVisual />
        </motion.div>
      </div>

      <motion.div
        className="hero-scroll-cue"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <span className="hero-scroll-line" />
        <span className="hero-scroll-label">Scroll</span>
      </motion.div>
    </header>
  );
}
