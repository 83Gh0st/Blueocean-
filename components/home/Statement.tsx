"use client";

import { motion, useInView } from "framer-motion";
import { useMemo, useRef } from "react";

const TEXT =
  "At Blue Ocean Chemicals, we are a team of seasoned professionals with a shared vision to deliver high‑quality, innovative, and sustainable chemical solutions for water treatment. With decades of combined experience across chemical manufacturing, water treatment technologies, and industrial operations, we bring deep industry knowledge and a hands‑on approach to everything we do. From formulation to production, we prioritise quality, safety, and sustainability at every stage.";

export default function Statement() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const words = useMemo(() => TEXT.split(" "), []);

  return (
    <section className="statement">
      <div className="wrap">
        <div className="eyebrow">Our approach</div>
        <blockquote ref={ref} style={{ marginTop: "1.4rem" }}>
          {words.map((word, i) => (
            <motion.span
              key={i}
              className="word"
              animate={{ opacity: inView ? 1 : 0.2 }}
              transition={{ duration: 0.5, delay: inView ? i * 0.012 : 0 }}
              style={{ display: "inline-block" }}
            >
              {word}&nbsp;
            </motion.span>
          ))}
        </blockquote>
        <div className="attrib">Blue Ocean For Chemicals Manufacturing LLC</div>
      </div>
    </section>
  );
}
