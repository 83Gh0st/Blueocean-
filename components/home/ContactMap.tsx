import { ExternalLink, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

/**
 * Google Maps embed via the key-free `output=embed` query format — no API
 * key or billing account required. Swap `siteConfig.address.mapsQuery` for
 * your exact street address (or a "lat,lng" pair) once you have precise
 * coordinates for the facility.
 */
export default function ContactMap() {
  const src = `https://maps.google.com/maps?q=${encodeURIComponent(siteConfig.address.mapsQuery)}&z=15&output=embed`;

  return (
    <div className="map-card">
      <iframe
        src={src}
        title={`Map to ${siteConfig.legalName}`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
      <a href={siteConfig.address.mapsHref} target="_blank" rel="noopener noreferrer" className="map-card-cta">
        <MapPin size={14} />
        Get directions
        <ExternalLink size={12} />
      </a>
    </div>
  );
}
