import type { Metadata } from "next";
import CatalogHero from "@/components/chemicals/CatalogHero";
import CatalogClient from "@/components/chemicals/CatalogClient";
import CatalogBottomCta from "@/components/chemicals/CatalogBottomCta";

export const metadata: Metadata = {
  title: "Chemical Catalog — Reverse Osmosis, Cooling, Boiler, Pool & More",
  description:
    "Browse Blue Ocean's full range of water treatment chemicals across Reverse Osmosis, Chilled Water, Cooling Water, Boiler, Swimming Pool and Potable Water treatment lines.",
};

export default function ChemicalsPage() {
  return (
    <>
      <CatalogHero />
      <CatalogClient />
      <CatalogBottomCta />
    </>
  );
}
