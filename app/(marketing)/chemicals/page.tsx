import type { Metadata } from "next";
import CatalogHero from "@/components/chemicals/CatalogHero";
import CatalogClient from "@/components/chemicals/CatalogClient";
import CatalogBottomCta from "@/components/chemicals/CatalogBottomCta";

export const metadata: Metadata = {
  title: "Chemical Catalog: Reverse Osmosis, Cooling, Boiler, Pool & More",
  description:
    "Browse Blue Ocean's full range of water treatment chemicals across Reverse Osmosis, Chilled Water, Cooling Water, Boiler, Swimming Pool and Potable Water treatment lines.",
};

export default function ChemicalsPage() {
  return (
    <>
      {/* CatalogHero and CatalogClient share one wider canvas (see .cat-page-shell)
          so the hero, toolbar, and product sections all line up edge-to-edge —
          CatalogBottomCta deliberately sits outside it, back at the site's
          normal 1280px width, since a closing CTA reads better contained
          than sprawled across the full width the grid above needs. */}
      <div className="cat-page-shell">
        <CatalogHero />
        <CatalogClient />
      </div>
      <CatalogBottomCta />
    </>
  );
}
