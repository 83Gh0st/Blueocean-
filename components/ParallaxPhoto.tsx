"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

interface ParallaxPhotoProps {
  src: string;
  alt: string;
  priority?: boolean;
  strength?: number;
  className?: string;
}

/** A full-bleed background photo that drifts gently as the section scrolls past. */
export default function ParallaxPhoto({ src, alt, priority = false, strength = 60, className }: ParallaxPhotoProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-strength, strength]);

  return (
    <div ref={ref} className={`ph ${className ?? ""}`}>
      <motion.div
        style={{
          y,
          position: "absolute",
          top: `-${strength}px`,
          left: 0,
          right: 0,
          bottom: `-${strength}px`,
          willChange: "transform",
        }}
      >
        <Image src={src} alt={alt} fill sizes="100vw" priority={priority} style={{ objectFit: "cover" }} />
      </motion.div>
    </div>
  );
}
