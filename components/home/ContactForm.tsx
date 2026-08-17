"use client";

import { useState, type FormEvent } from "react";
import { siteConfig } from "@/lib/site-config";

const SYSTEM_TYPES = [
  "Reverse Osmosis",
  "Chilled Water Treatment",
  "Cooling Water Treatment",
  "Boiler Water Treatment",
  "Swimming Pool Treatment",
  "Potable Water Treatment",
  "Other / Not sure",
];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot — bots fill every field, humans never see this one.
    if (data.get("company_website")) return;

    setSubmitting(true);
    const subject = encodeURIComponent(`Quote Request: ${data.get("system") || "General Enquiry"}`);
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nCompany: ${data.get("company")}\nEmail: ${data.get("email")}\nPhone: ${data.get(
        "phone"
      )}\nSystem: ${data.get("system")}\n\nMessage:\n${data.get("message")}`
    );
    window.location.href = `mailto:${siteConfig.contact.salesEmail}?subject=${subject}&body=${body}`;
    setStatus("sent");
    setSubmitting(false);
  }

  return (
    <form className="form-card" onSubmit={handleSubmit} autoComplete="off">
      <input type="text" name="company_website" className="field-honeypot" tabIndex={-1} autoComplete="off" />
      <div className="form-row">
        <div className="field">
          <label htmlFor="fname">Full name</label>
          <input type="text" id="fname" name="name" required placeholder="Your name" />
        </div>
        <div className="field">
          <label htmlFor="fcompany">Company</label>
          <input type="text" id="fcompany" name="company" placeholder="Company name" />
        </div>
      </div>
      <div className="form-row">
        <div className="field">
          <label htmlFor="femail">Email</label>
          <input type="email" id="femail" name="email" required placeholder="you@company.com" />
        </div>
        <div className="field">
          <label htmlFor="fphone">Phone</label>
          <input type="tel" id="fphone" name="phone" placeholder="+971" />
        </div>
      </div>
      <div className="field">
        <label htmlFor="fsystem">System type</label>
        <select id="fsystem" name="system" defaultValue="">
          <option value="">Select system type</option>
          {SYSTEM_TYPES.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>
      <div className="field">
        <label htmlFor="fmessage">Message</label>
        <textarea
          id="fmessage"
          name="message"
          required
          placeholder="Tell us about your system, capacity, and current treatment challenges..."
        />
      </div>
      <button type="submit" className="btn btn-primary form-submit" disabled={submitting}>
        Send request
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </button>
      <div className={`form-status ${status === "sent" ? "success" : ""}`}>
        {status === "sent" && `Opening your email client to send this request to ${siteConfig.contact.salesEmail}...`}
      </div>
      <p className="form-note">We typically respond within one business day.</p>
    </form>
  );
}
