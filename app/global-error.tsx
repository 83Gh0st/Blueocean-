"use client";

import { useEffect } from "react";

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body>
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "2rem",
            background: "#0B0A2A",
            color: "#F7F9FC",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          <div style={{ fontFamily: "monospace", fontSize: "0.75rem", letterSpacing: "0.14em", color: "#189BCE", textTransform: "uppercase" }}>
            Something went wrong
          </div>
          <h1 style={{ marginTop: "1rem", fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 500 }}>
            This page hit a snag.
          </h1>
          <p style={{ marginTop: "1rem", color: "rgba(247,249,252,0.6)", maxWidth: "28rem" }}>
            Please try again. If this keeps happening, contact us and we&rsquo;ll take a look.
          </p>
          <button
            onClick={reset}
            style={{
              marginTop: "2rem",
              background: "#ffffff",
              color: "#0B0E1A",
              border: "none",
              borderRadius: "40px",
              padding: "0.9rem 2rem",
              fontWeight: 600,
              cursor: "pointer",
              fontSize: "0.95rem",
            }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
