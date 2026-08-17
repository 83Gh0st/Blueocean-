import Reveal, { RevealItem, StaggerGroup } from "../Reveal";

const WHO_WE_SERVE = [
  {
    title: "Hotels & Hospitality",
    copy: "Pool, chilled water and boiler treatment for resorts and hotel groups.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M3 21h18M5 21V8l7-4 7 4v13M9 21v-6h6v6" />
      </svg>
    ),
  },
  {
    title: "Real Estate & FM",
    copy: "Scheduled cooling and chilled water programs for property managers.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M4 21V9l8-6 8 6v12M9 21v-5h6v5" />
      </svg>
    ),
  },
  {
    title: "Industrial & Manufacturing",
    copy: "Boiler and RO process water chemistry for production facilities.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3" y="7" width="18" height="13" rx="1" />
        <path d="M8 7V4h8v3" />
      </svg>
    ),
  },
  {
    title: "Pool Contractors",
    copy: "Bulk pool chemical supply for maintenance and contracting companies.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 2v20M2 12h20" />
        <circle cx="12" cy="12" r="9" />
      </svg>
    ),
  },
];

const SERVICES = [
  {
    title: "Flushing & Passivation",
    copy: "New systems flushed and passivated before handover.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M4 4h16M4 4v16M4 4l16 16M20 4v16M20 4L4 20" />
      </svg>
    ),
  },
  {
    title: "HSE Consultancy",
    copy: "Sound health, safety and environmental practice, built in.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 2 4 6v6c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V6l-8-4z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Turnkey Contracts",
    copy: "Dosing systems, monitoring and reporting under one contract.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M3 12h4l3 8 4-16 3 8h4" />
      </svg>
    ),
  },
  {
    title: "Technical Support",
    copy: "Direct access to engineers, not a call centre queue.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21c0-4 4-6 8-6s8 2 8 6" />
      </svg>
    ),
  },
];

export default function Capabilities() {
  return (
    <section className="sec-pad" id="capabilities" style={{ background: "var(--white)" }}>
      <div className="wrap">
        <Reveal className="sec-head">
          <div className="eyebrow">Who we work with</div>
          <h2>Built for facilities that can&rsquo;t afford downtime.</h2>
        </Reveal>

        <StaggerGroup className="capabilities-merged">
          <div className="cap-group-label">Industries we supply</div>
          {WHO_WE_SERVE.map((item) => (
            <RevealItem key={item.title} className="cap-tile">
              <div className="ico">{item.icon}</div>
              <h4>{item.title}</h4>
              <p>{item.copy}</p>
            </RevealItem>
          ))}
          <div className="cap-group-label">Beyond the chemistry</div>
          {SERVICES.map((item) => (
            <RevealItem key={item.title} className="cap-tile">
              <div className="ico">{item.icon}</div>
              <h4>{item.title}</h4>
              <p>{item.copy}</p>
            </RevealItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
