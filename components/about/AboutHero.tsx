"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";

const STATS = [
  { v: "6", l: "Treatment Lines" },
  { v: "100%", l: "UAE Manufactured" },
  { v: "48hr", l: "Standard Dispatch" },
];

export default function AboutHero() {
  return (
    <header className="about-hero">
      <div className="about-hero-photo">
        <Image
          src="https://images.unsplash.com/photo-1726731782158-fcf6822b6ca4?fm=jpg&q=80&w=2400&auto=format&fit=crop"
          alt=""
          fill
          priority
          sizes="100vw"
        />
      </div>
      <div className="grain" aria-hidden="true" />
      <div className="wrap about-hero-inner">
        <Breadcrumb trail={[{ label: "About Us" }]} />
        <motion.div
          className="eyebrow hero-eyebrow"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Our Story
        </motion.div>
        <motion.h1
          className="editorial-head"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
        >
          Chemistry formulated
          <br />
          for <em>the Gulf&rsquo;s</em> hardest water.
        </motion.h1>
        <motion.p
          className="about-hero-lede"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.36, ease: [0.16, 1, 0.3, 1] }}
        >
          Blue Ocean For Chemicals Manufacturing LLC, a team of seasoned professionals manufacturing water
          treatment chemistry in Ajman, UAE, built around one idea: formulate for the water you actually have,
          not the water a generic product line assumes you have.
        </motion.p>
        <motion.div
          className="hero-stats about-hero-stats"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.55 }}
        >
          {STATS.map((s) => (
            <div className="hero-stat" key={s.l}>
              <div className="v">{s.v}</div>
              <div className="l">{s.l}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </header>
  );
}
