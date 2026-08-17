"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Package, FlaskConical, Microscope, Tag, Warehouse, Truck } from "lucide-react";
import Reveal from "../Reveal";

const NODES = [
  { cx: 40, cy: 180, label: "Raw Material", sub: "Intake & QC", labelY: 214, subY: 230, icon: Package },
  { cx: 240, cy: 80, label: "Formulation", sub: "Batch mixing", labelY: 51, subY: 106, icon: FlaskConical },
  { cx: 440, cy: 180, label: "Lab Testing", sub: "Spec verification", labelY: 214, subY: 230, icon: Microscope },
  { cx: 640, cy: 280, label: "Fill & Label", sub: "Batch coded", labelY: 314, subY: 330, icon: Tag },
  { cx: 840, cy: 80, label: "Warehouse", sub: "Ajman Industrial 2", labelY: 51, subY: 106, icon: Warehouse },
  { cx: 1040, cy: 180, label: "Dispatch", sub: "UAE-wide delivery", labelY: 214, subY: 230, icon: Truck },
];

const PATH_D =
  "M40,180 C140,180 140,80 240,80 C340,80 340,180 440,180 C540,180 540,280 640,280 C740,280 740,80 840,80 C940,80 940,180 1040,180 C1090,180 1090,180 1160,180";

export default function ProcessFlow() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.35 });

  return (
    <section className="process" id="process">
      <div className="grain" aria-hidden="true" />
      <div className="wrap">
        <Reveal className="sec-head">
          <div className="eyebrow on-dark">How a batch reaches your plant</div>
          <h2>From raw chemistry to certified delivery.</h2>
          <p>One traceable line, from formulation through to the dosing point at your facility. Scroll to trace a batch.</p>
        </Reveal>
        <div className="flow-svg-wrap" ref={ref}>
          <svg className="flow-svg" viewBox="0 0 1200 360" preserveAspectRatio="xMidYMid meet">
            <defs>
              <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#353571" />
                <stop offset="35%" stopColor="#275A9C" />
                <stop offset="70%" stopColor="#1674B7" />
                <stop offset="100%" stopColor="#189BCE" />
              </linearGradient>
              <filter id="flowGlow" x="-60%" y="-60%" width="220%" height="220%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <path className="flow-path" d={PATH_D} />
            <motion.path
              className="flow-path-anim"
              d={PATH_D}
              stroke="url(#flowGradient)"
              filter="url(#flowGlow)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: inView ? 1 : 0 }}
              transition={{ duration: 2.6, ease: [0.16, 1, 0.3, 1] }}
            />

            {/* Traveling batch marker — the section's one signature motion,
                looping once the line has drawn in. It literalises "scroll to
                trace a batch" instead of leaving that line as a caption with
                nothing on screen actually doing it. */}
            {inView && (
              <circle r={5} className="flow-traveler" opacity="0">
                <animate
                  attributeName="opacity"
                  values="0;1;1;0"
                  keyTimes="0;0.05;0.92;1"
                  dur="5.5s"
                  begin="2.6s"
                  repeatCount="indefinite"
                />
                <animateMotion path={PATH_D} dur="5.5s" begin="2.6s" repeatCount="indefinite" />
              </circle>
            )}

            {NODES.map((node, i) => {
              const Icon = node.icon;
              return (
                <motion.g
                  key={node.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.35 + i * 0.34, ease: [0.16, 1, 0.3, 1] }}
                  style={{ transformOrigin: `${node.cx}px ${node.cy}px` }}
                >
                  <circle cx={node.cx} cy={node.cy} r={16} className="flow-node-glow" />
                  <circle cx={node.cx} cy={node.cy} r={14} className="flow-node show" />
                  <Icon
                    x={node.cx - 7}
                    y={node.cy - 7}
                    width={14}
                    height={14}
                    strokeWidth={2}
                    className="flow-icon"
                  />
                  <text x={node.cx} y={node.labelY} textAnchor="middle" className="flow-label show">
                    {node.label}
                  </text>
                  <text x={node.cx} y={node.subY} textAnchor="middle" className="flow-sub show">
                    {node.sub}
                  </text>
                </motion.g>
              );
            })}
            <motion.g
              initial={{ opacity: 0, scale: 0.5 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.35 + 6 * 0.34, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: "1160px 180px" }}
            >
              <circle cx={1160} cy={180} r={11} className="flow-node-final-glow" />
              <circle cx={1160} cy={180} r={7} fill="#189BCE" stroke="#189BCE" />
              <text x={1160} y={150} textAnchor="middle" className="flow-label show">
                Your Plant
              </text>
            </motion.g>
          </svg>
        </div>
      </div>
    </section>
  );
}
