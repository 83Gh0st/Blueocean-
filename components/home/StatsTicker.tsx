import Reveal from "../Reveal";

const STATS = [
  { v: "6", suffix: "treatment lines", l: "Reverse Osmosis, Chilled, Cooling, Boiler, Pool and Potable Water" },
  { v: "100", suffix: "% UAE manufactured", l: "Formulated and batched at our Ajman facility" },
  { v: "48", suffix: "hr dispatch", l: "Standard lead time for stocked formulations across the UAE" },
  { v: "24", suffix: "/7 technical support", l: "Direct access to our team for dosing and equipment issues" },
];

export default function StatsTicker() {
  return (
    <section className="ticker-section">
      <div className="wrap">
        <div className="ticker-grid">
          {STATS.map((s, i) => (
            <Reveal key={s.l} delay={i * 0.06} className="ticker-cell">
              <div className="v">
                {s.v}
                <small>{s.suffix}</small>
              </div>
              <div className="l">{s.l}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
