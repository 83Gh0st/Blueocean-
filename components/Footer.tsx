import Link from "next/link";
import Logo from "./Logo";
import { siteConfig } from "@/lib/site-config";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-top">
          <div className="foot-col">
            <div className="foot-brand">
              <Logo variant="color" onDark height={42} />
            </div>
            <p>
              Chemical manufacturer based in Ajman, United Arab Emirates. Water treatment technologies for Reverse
              Osmosis, Chilled Water, Cooling Water, Boiler, Swimming Pool and Potable Water systems.
            </p>
          </div>
          <div className="foot-col">
            <h5>Products</h5>
            <Link href="/chemicals#reverse-osmosis">Reverse Osmosis</Link>
            <Link href="/chemicals#chilled-water">Chilled Water Treatment</Link>
            <Link href="/chemicals#cooling-water">Cooling Water Treatment</Link>
            <Link href="/chemicals#boiler-water">Boiler Water Treatment</Link>
            <Link href="/chemicals#swimming-pool">Swimming Pool Treatment</Link>
            <Link href="/chemicals#potable-water">Potable Water Treatment</Link>
          </div>
          <div className="foot-col">
            <h5>Company</h5>
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/#capabilities">Capabilities</Link>
            <Link href="/#why">Why Blue Ocean</Link>
            <Link href="/#process">Our Process</Link>
            <Link href="/#contact">Contact</Link>
          </div>
          <div className="foot-col">
            <h5>Contact</h5>
            <p>
              {siteConfig.address.line1}
              <br />
              {siteConfig.address.line2}
            </p>
            <div className="foot-contact-rows">
              <div className="foot-contact-row">
                <span className="foot-tag">Sales</span>
                <a href={siteConfig.contact.salesPhoneHref}>{siteConfig.contact.salesPhone}</a>
              </div>
              <div className="foot-contact-row">
                <span className="foot-tag">General</span>
                <a href={`mailto:${siteConfig.contact.generalEmail}`}>{siteConfig.contact.generalEmail}</a>
              </div>
              <div className="foot-contact-row">
                <span className="foot-tag">Sales</span>
                <a href={`mailto:${siteConfig.contact.salesEmail}`}>{siteConfig.contact.salesEmail}</a>
              </div>
            </div>
          </div>
        </div>
        <div className="foot-bottom">
          <span>
            © {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.
          </span>
          <span>Ajman, United Arab Emirates</span>
        </div>
      </div>
    </footer>
  );
}
