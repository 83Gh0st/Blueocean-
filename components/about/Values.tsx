import Reveal, { RevealItem, StaggerGroup } from "../Reveal";

const VALUES = [
  {
    title: "Quality, batch to batch",
    copy: "Every formulation is tested against spec before it leaves the facility: consistency you can dose against, not a range that drifts between deliveries.",
  },
  {
    title: "Safety, built in",
    copy: "Sound health, safety and environmental practice runs through manufacturing, handling and delivery, not bolted on as a compliance checkbox.",
  },
  {
    title: "Sustainability, in the formulation",
    copy: "Dosing programs are sized to the system, not oversold: less product wasted, less chemical load on the environment your water returns to.",
  },
  {
    title: "Partnership, not a price list",
    copy: "Our technical team reviews your feedwater and system design directly, and stays reachable after the sale for dosing and troubleshooting support.",
  },
];

export default function Values() {
  return (
    <section className="sec-pad" style={{ background: "var(--white)" }}>
      <div className="wrap">
        <Reveal className="sec-head">
          <div className="eyebrow">What we hold ourselves to</div>
          <h2>Four things that don&rsquo;t flex.</h2>
        </Reveal>
        <StaggerGroup className="values-grid">
          {VALUES.map((value, i) => (
            <RevealItem key={value.title} className="value-tile">
              <div className="value-number">{String(i + 1).padStart(2, "0")}</div>
              <h3>{value.title}</h3>
              <p>{value.copy}</p>
            </RevealItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
