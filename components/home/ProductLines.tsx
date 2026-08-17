import Link from "next/link";
import { productLines } from "@/lib/chemicals-data";
import Reveal from "../Reveal";

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="line-row-arrow">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export default function ProductLines() {
  return (
    <section className="sec-pad" id="capabilities">
      <div className="wrap">
        <Reveal className="sec-head">
          <div className="eyebrow">Product range</div>
          <h2>Six treatment lines, one formulation standard.</h2>
          <p>
            Each line is engineered for the chemistry of the system it protects: documented specifications, not
            improvised mixes.
          </p>
        </Reveal>

        <div className="line-list">
          {productLines.map((line, i) => {
            const Icon = line.icon;
            return (
              <Reveal key={line.id} delay={i * 0.04} y={16}>
                <Link href={`/chemicals#${line.slug}`} className="line-row">
                  <span className="line-index">{String(i + 1).padStart(2, "0")}</span>
                  <span className="line-row-icon">
                    <Icon strokeWidth={1.5} />
                  </span>
                  <span className="line-row-name">{line.shortName}</span>
                  <span className="line-row-desc">{line.description.slice(0, 108)}…</span>
                  <ArrowIcon />
                </Link>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1} style={{ marginTop: "2.4rem" }}>
          <Link href="/chemicals" className="btn btn-outline">
            View the full chemical catalog
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
