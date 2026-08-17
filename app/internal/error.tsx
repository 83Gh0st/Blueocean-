"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle } from "lucide-react";

export default function InternalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="internal-shell">
      <div
        style={{
          minHeight: "80vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "2rem",
        }}
      >
        <AlertTriangle size={28} style={{ color: "#e6c98a" }} />
        <h1 style={{ marginTop: "1rem", color: "#f4f7fb", fontSize: "1.5rem", fontWeight: 600 }}>
          This tool hit a snag.
        </h1>
        <p style={{ marginTop: "0.6rem", color: "rgba(231,236,245,0.55)", maxWidth: "26rem" }}>
          Please try again. If the problem continues, check that your database connection is configured correctly.
        </p>
        <div style={{ display: "flex", gap: "0.8rem", marginTop: "1.6rem" }}>
          <button onClick={reset} className="acct-btn">
            Try again
          </button>
          <Link href="/internal" className="acct-btn acct-btn-ghost">
            Back to dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
