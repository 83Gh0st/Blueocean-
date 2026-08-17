import Reveal from "../Reveal";
import ContactForm from "./ContactForm";
import ContactMap from "./ContactMap";
import { siteConfig, whatsappHref } from "@/lib/site-config";

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="ico">
      <path d="M12 22s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="ico">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .3 2 .6 3a2 2 0 0 1-.5 2L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2-.5c1 .3 2 .5 3 .6a2 2 0 0 1 1.7 2Z" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="ico">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m2 7 10 6 10-6" />
    </svg>
  );
}
function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="ico">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </svg>
  );
}

export default function ContactSection() {
  return (
    <section className="sec-pad" id="contact">
      <div className="wrap">
        <Reveal className="sec-head">
          <div className="eyebrow">Get in touch</div>
          <h2>Talk to our technical team.</h2>
          <p>Send us your feed water analysis or system details, and we&rsquo;ll come back with a dosing recommendation.</p>
        </Reveal>
        <div className="contact-grid">
          <Reveal>
            <ContactMap />
            <div className="contact-info-item">
              <PinIcon />
              <div>
                <div className="lbl">Facility</div>
                <div className="val">{siteConfig.address.full}</div>
              </div>
            </div>
            <div className="contact-info-item">
              <PhoneIcon />
              <div>
                <div className="lbl">Phone</div>
                <div className="contact-multi">
                  <div className="contact-multi-row">
                    <span className="contact-multi-tag">Sales</span>
                    <a className="val" href={siteConfig.contact.salesPhoneHref}>
                      {siteConfig.contact.salesPhone}
                    </a>
                  </div>
                  <div className="contact-multi-row">
                    <span className="contact-multi-tag">Accounts</span>
                    <a className="val" href={siteConfig.contact.accountsPhoneHref}>
                      {siteConfig.contact.accountsPhone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-info-item">
              <MailIcon />
              <div>
                <div className="lbl">Email</div>
                <a className="val" href={`mailto:${siteConfig.contact.salesEmail}`}>
                  {siteConfig.contact.salesEmail}
                </a>
              </div>
            </div>
            <div className="contact-info-item">
              <ClockIcon />
              <div>
                <div className="lbl">Hours</div>
                <div className="val">Sat – Thu, 8:00 AM – 6:00 PM (GST)</div>
              </div>
            </div>
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{ marginTop: "1.6rem", width: "100%", justifyContent: "center" }}
            >
              Chat on WhatsApp instead
            </a>
          </Reveal>
          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
