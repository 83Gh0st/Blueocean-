import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  // The icon-only mark, paired with a real text wordmark below — the same
  // pairing used in the nav and footer, rather than the old flattened
  // lockup image (whose baked-in wordmark reads fine at poster size but
  // turns soft once it's downsized into a corner of a 1200×630 canvas).
  const logoData = await readFile(join(process.cwd(), "public/brand/logo-icon-white.png"));
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "linear-gradient(135deg, #0B0E1A 0%, #17264a 55%, #1d3f6b 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} alt="" width={92} height={84} style={{ objectFit: "contain" }} />
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <div style={{ display: "flex", color: "#ffffff", fontSize: 36, fontWeight: 700, letterSpacing: "-0.01em" }}>
              Blue Ocean
            </div>
            <div
              style={{
                display: "flex",
                color: "#8fd6ef",
                fontSize: 20,
                fontWeight: 600,
                letterSpacing: "3px",
                textTransform: "uppercase",
              }}
            >
              Chemicals
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ display: "flex", color: "#ffffff", fontSize: 58, fontWeight: 600, lineHeight: 1.1, maxWidth: 980 }}>
            Empowering performance through water innovation.
          </div>
          <div style={{ display: "flex", color: "#8fd6ef", fontSize: 26, fontWeight: 500 }}>
            Chemical manufacturing · Reverse Osmosis · Cooling · Boiler · Pool · Potable Water
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
