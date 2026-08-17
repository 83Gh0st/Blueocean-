"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Reveal from "../Reveal";

// -----------------------------------------------------------------------
// Placeholder journey structure — framed as chapters rather than dated
// milestones since exact founding/expansion dates weren't provided. Swap
// these four chapters for the business's real history and dates whenever
// they're available; the layout and animation don't need to change.
// -----------------------------------------------------------------------
const CHAPTERS = [
  {
    n: "01",
    title: "Foundation",
    copy: "A small team of chemical manufacturing and water treatment professionals sets out to formulate for Gulf feedwater specifically, rather than adapt an imported range to fit it.",
  },
  {
    n: "02",
    title: "Building the range",
    copy: "The chemistry expands from a single treatment programme into the six lines supplied today — Reverse Osmosis, Chilled Water, Cooling Water, Boiler, Swimming Pool and Potable Water.",
  },
  {
    n: "03",
    title: "Scaling manufacturing",
    copy: "In-house formulation and batch testing move into a dedicated facility in Ajman's Industrial Area 2 — full control over raw material sourcing and dosing concentration, batch to batch.",
  },
  {
    n: "04",
    title: "Today",
    copy: "Stocked formulations dispatch UAE-wide within 48 hours, backed by a technical team that works directly with facilities and maintenance staff on dosing, not a call centre queue.",
  },
];

export default function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.8", "end 0.4"] });
  const fill = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="sec-pad">
      <div className="wrap">
        <Reveal className="sec-head" style={{ margin: "0 auto 3.2rem", textAlign: "center", maxWidth: "34rem" }}>
          <div className="eyebrow" style={{ justifyContent: "center" }}>
            Our journey
          </div>
          <h2>From one formulation to six treatment lines.</h2>
        </Reveal>
        <div className="timeline" ref={ref}>
          <div className="timeline-track">
            <motion.div className="timeline-track-fill" style={{ scaleY: fill }} />
          </div>
          {CHAPTERS.map((chapter, i) => (
            <Reveal key={chapter.n} delay={i * 0.05} className="timeline-item">
              <div className="timeline-node">{chapter.n}</div>
              <h3>{chapter.title}</h3>
              <p>{chapter.copy}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
