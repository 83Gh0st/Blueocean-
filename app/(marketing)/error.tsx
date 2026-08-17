"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function MarketingError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div
      style={{
        minHeight: "70vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "6rem 2rem",
      }}
    >
      <div className="eyebrow">Something went wrong</div>
      <h1 style={{ marginTop: "1rem", fontSize: "clamp(1.8rem, 4vw, 2.6rem)" }}>This page hit a snag.</h1>
      <p style={{ marginTop: "1rem", maxWidth: "28rem" }}>
        Please try again, or head back home. If this keeps happening, let us know.
      </p>
      <div style={{ display: "flex", gap: "1rem", marginTop: "2rem", flexWrap: "wrap", justifyContent: "center" }}>
        <button onClick={reset} className="btn btn-primary">
          Try again
        </button>
        <Link href="/" className="btn btn-dark">
          Back to home
        </Link>
      </div>
    </div>
  );
}
