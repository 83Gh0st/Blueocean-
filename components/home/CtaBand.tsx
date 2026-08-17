import Link from "next/link";
import ParallaxPhoto from "../ParallaxPhoto";
import Reveal from "../Reveal";
import { whatsappHref } from "@/lib/site-config";

export default function CtaBand() {
  return (
    <section className="sec-pad">
      <div className="wrap">
        <Reveal className="cta-band">
          <ParallaxPhoto
            src="https://images.unsplash.com/photo-1509390288171-ce2088f7d08e?fm=jpg&q=80&w=2200&auto=format&fit=crop"
            alt="Water treatment plant equipment"
            strength={25}
          />
          <div className="cta-band-scrim" />
          <h3>Tell us about your system, and we&rsquo;ll recommend the right dosing program.</h3>
          <div className="cta-band-actions">
            <Link href="/#contact" className="btn btn-light">
              Start a conversation
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
