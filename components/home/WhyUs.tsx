import ParallaxPhoto from "../ParallaxPhoto";
import Reveal, { RevealItem, StaggerGroup } from "../Reveal";

const REASONS = [
  {
    title: "In‑house formulation",
    copy: "Chemistry is developed and batched at our Ajman facility: full control over raw material sourcing and dosing concentration, batch to batch.",
  },
  {
    title: "System‑specific dosing",
    copy: "Our technical team reviews your feed water profile and system design before recommending a treatment program, not a generic product line.",
  },
  {
    title: "Consistent supply",
    copy: "Stocked formulations dispatch within 48 hours across the UAE, with bulk and scheduled delivery arrangements for facilities management contracts.",
  },
  {
    title: "On‑site technical support",
    copy: "Our team troubleshoots dosing issues, water test results and equipment fouling directly with your facilities or maintenance staff.",
  },
];

export default function WhyUs() {
  return (
    <section className="sec-pad" id="why">
      <div className="wrap">
        <Reveal className="sec-head">
          <div className="eyebrow">Why plants choose Blue Ocean</div>
          <h2>Manufactured, not repackaged.</h2>
        </Reveal>
        <div className="why-grid">
          <StaggerGroup className="why-list">
            {REASONS.map((reason, i) => (
              <RevealItem key={reason.title} className="why-item">
                <div className="why-index">{String(i + 1).padStart(2, "0")}</div>
                <div>
                  <h4>{reason.title}</h4>
                  <p>{reason.copy}</p>
                </div>
              </RevealItem>
            ))}
          </StaggerGroup>
          <Reveal className="why-visual">
<ParallaxPhoto
  src="/assets/factory1.png"
  alt="Chemical manufacturing facility interior"
  strength={40}
/>

            <div className="why-visual-scrim" />
            <div className="why-visual-content">
              <div className="eyebrow on-dark" style={{ marginBottom: "1rem" }}>
                Facility
              </div>
              <h4>Unit 12, Industrial Area 2, Ajman, UAE.</h4>
              <p>
                A dedicated manufacturing and blending facility supplying Reverse Osmosis, Cooling Water, Chilled
                Water, Boiler, Swimming Pool and Potable Water treatment chemicals across the UAE.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
