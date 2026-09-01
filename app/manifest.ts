import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.legalName,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#F3F7FA",
    theme_color: "#0B0E1A",
    icons: [
      // 1. Point to your new SVG icon route handled automatically by Next.js
      { 
        src: "/icon", 
        sizes: "any", 
        type: "image/svg+xml" 
      },
      // 2. Fallback high-resolution icons required for Android/Chrome PWA installations
      { 
        src: "/icon", 
        sizes: "192x192", 
        type: "image/png" 
      },
      { 
        src: "/icon", 
        sizes: "512x512", 
        type: "image/png" 
      },
      // 3. Apple specific configuration
      { 
        src: "/apple-icon", 
        sizes: "180x180", 
        type: "image/png" 
      },
    ],
  };
}
