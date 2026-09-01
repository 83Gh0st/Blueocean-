import Link from "next/link";
import { whatsappHref } from "@/lib/site-config";
import Reveal from "../Reveal";

export default function CatalogBottomCta() {
  return (
    <section className="cat-bottom-cta">
      <div className="wrap">
        <Reveal
          style={{
            textAlign: "center",
            maxWidth: "40rem",
            margin: "0 auto",
          }}
        >
          <h2 style={{ color: "var(--white)" }}>Not sure which product fits your system?</h2>
          <p style={{ color: "rgba(247,249,252,0.65)", marginTop: "1rem" }}>
            Send us your feed water analysis or system specs and our technical team will recommend a dosing program,
            no obligation.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", marginTop: "2rem", flexWrap: "wrap" }}>
            <Link href="/#contact" className="btn btn-light">
              Request a recommendation
            </Link>
            <a href={whatsappHref()} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
              WhatsApp us
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
