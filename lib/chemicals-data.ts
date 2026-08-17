// ---------------------------------------------------------------------------
// Chemical product catalog — original Blue Ocean Chemicals content.
//
// Every product name, code, and description on this page is Blue Ocean's
// own naming convention and copy, written from scratch. The six treatment
// lines mirror the ones already on the Blue Ocean site; the "chemistry
// class" tags (antiscalant, corrosion inhibitor, biocide, etc.) are
// standard, generic industry terminology used across the entire water
// treatment sector — not brand-specific language borrowed from any
// competitor.
// ---------------------------------------------------------------------------

import type { LucideIcon } from "lucide-react";
import {
  Droplets,
  Snowflake,
  Fan,
  Flame,
  Waves,
  GlassWater,
} from "lucide-react";

export type ChemistryClass =
  | "Antiscalant"
  | "Corrosion Inhibitor"
  | "Biocide — Oxidising"
  | "Biocide — Non-oxidising"
  | "Membrane Cleaner"
  | "Dechlorination"
  | "Oxygen Scavenger"
  | "Alkalinity & pH Control"
  | "Dispersant"
  | "Sanitiser"
  | "Flocculant & Clarifier"
  | "Algaecide"
  | "Disinfection"
  | "Conditioning";

export type ProductForm = "Liquid" | "Powder" | "Granular" | "Tablet";

export interface ChemicalProduct {
  id: string;
  code: string;
  name: string;
  chemistryClass: ChemistryClass;
  form: ProductForm;
  summary: string;
  benefits: string[];
  packaging: string[];
}

export interface ProductLine {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  eyebrow: string;
  icon: LucideIcon;
  headline: string;
  description: string;
  applications: string[];
  products: ChemicalProduct[];
}

export const productLines: ProductLine[] = [
  {
    id: "ro",
    slug: "reverse-osmosis",
    name: "Reverse Osmosis & Desalination",
    shortName: "Reverse Osmosis",
    eyebrow: "Line 01 · Membrane Chemistry",
    icon: Droplets,
    headline: "Protect membrane life, hold your rejection rate.",
    description:
      "A programme built around the membrane: antiscalants that keep feedwater hardness in solution, cleaners matched to the fouling you actually have, and biocide protection for standby trains. Formulated to perform across the harder, warmer feedwater typical of Gulf desalination intakes.",
    applications: [
      "Brackish & seawater RO",
      "Boiler feedwater pre-treatment",
      "Process & pharmaceutical water",
      "Standby / mothballed trains",
    ],
    products: [
      {
        id: "boc-ro-210",
        code: "BOC-RO 210",
        name: "Antiscalant Concentrate",
        chemistryClass: "Antiscalant",
        form: "Liquid",
        summary:
          "A phosphonate and polymer blend that keeps calcium carbonate, sulphate and silica in solution well past their normal saturation point, so membranes run cleaner for longer between cleans.",
        benefits: [
          "Extends intervals between chemical cleans",
          "Effective across a wide pH and temperature range",
          "Compatible with common pre-treatment dosing skids",
        ],
        packaging: ["25 kg drum", "200 L drum", "1,000 L IBC"],
      },
      {
        id: "boc-ro-330",
        code: "BOC-RO 330",
        name: "Alkaline Membrane Cleaner",
        chemistryClass: "Membrane Cleaner",
        form: "Powder",
        summary:
          "High-pH cleaning blend targeted at organic and biological fouling layers, restoring flux without attacking membrane polymer or element housings.",
        benefits: [
          "Lifts organic and biofilm fouling from the membrane surface",
          "Formulated to be gentle on element seals and housings",
          "Dissolves cleanly for consistent clean-in-place dosing",
        ],
        packaging: ["20 kg bag", "200 kg drum"],
      },
      {
        id: "boc-ro-340",
        code: "BOC-RO 340",
        name: "Acidic Membrane Cleaner",
        chemistryClass: "Membrane Cleaner",
        form: "Powder",
        summary:
          "Low-pH cleaner for scale and metal-oxide fouling — calcium carbonate, iron and manganese deposits that alkaline cleans alone won't shift.",
        benefits: [
          "Dissolves mineral scale and iron fouling",
          "Restores normalised permeate flow after hard-water upsets",
          "Pairs with BOC-RO 330 for a full two-step CIP",
        ],
        packaging: ["20 kg bag", "200 kg drum"],
      },
      {
        id: "boc-ro-415",
        code: "BOC-RO 415",
        name: "Membrane Preservative & Biocide",
        chemistryClass: "Biocide — Non-oxidising",
        form: "Liquid",
        summary:
          "Non-oxidising biocide for standby or seasonally idle RO trains, preventing biological growth on the membrane surface during shutdown periods.",
        benefits: [
          "Protects membranes during standby or storage",
          "Non-oxidising formulation — safe for polyamide membranes",
          "Simple single-dose preservation protocol",
        ],
        packaging: ["25 L drum", "200 L drum"],
      },
      {
        id: "boc-ro-120",
        code: "BOC-RO 120",
        name: "Dechlorination Agent",
        chemistryClass: "Dechlorination",
        form: "Liquid",
        summary:
          "Sodium metabisulphite-based dosing solution that neutralises residual chlorine ahead of the membrane bank, protecting polyamide elements from oxidative damage.",
        benefits: [
          "Prevents chlorine-related membrane degradation",
          "Fast-reacting, precise residual control",
          "Straightforward inline dosing at the RO skid inlet",
        ],
        packaging: ["25 kg drum", "200 kg drum"],
      },
    ],
  },
  {
    id: "chilled",
    slug: "chilled-water",
    name: "Chilled Water Treatment",
    shortName: "Chilled Water",
    eyebrow: "Line 02 · Closed Loop Treatment",
    icon: Snowflake,
    headline: "Closed loops, protected for the long run.",
    description:
      "Closed chilled water systems only fail when something is overlooked — a top-up that dilutes inhibitor, a mixed-metal loop with no molybdate protection, a corner where biofilm quietly builds. Our closed-loop range is dosed once, monitored occasionally, and built to stay stable for years.",
    applications: [
      "Chiller barrels & plate exchangers",
      "Fan coil & AHU circuits",
      "Condenser water loops",
      "Glycol-dosed low-temperature loops",
    ],
    products: [
      {
        id: "boc-ch-810",
        code: "BOC-CH 810",
        name: "Nitrite-Based Corrosion Inhibitor",
        chemistryClass: "Corrosion Inhibitor",
        form: "Liquid",
        summary:
          "A nitrite-based inhibitor package that lays down a passive oxide film on steel surfaces — the standard, well-proven choice for closed steel chilled and heating loops.",
        benefits: [
          "Forms a stable passive layer on mild steel",
          "Simple field test kit available for residual monitoring",
          "Cost-effective for single-metal (steel) systems",
        ],
        packaging: ["25 L drum", "200 L drum", "1,000 L IBC"],
      },
      {
        id: "boc-ch-820",
        code: "BOC-CH 820",
        name: "Molybdate-Based Inhibitor",
        chemistryClass: "Corrosion Inhibitor",
        form: "Liquid",
        summary:
          "A low-toxicity molybdate and azole blend suited to mixed-metallurgy loops — steel, copper and aluminium together — where a single-metal inhibitor falls short.",
        benefits: [
          "Protects steel, copper and aluminium in the same loop",
          "Effective at low dose concentrations",
          "No nitrite content, suited to sites that restrict it",
        ],
        packaging: ["25 L drum", "200 L drum"],
      },
      {
        id: "boc-ch-830",
        code: "BOC-CH 830",
        name: "Closed System Biocide",
        chemistryClass: "Biocide — Non-oxidising",
        form: "Liquid",
        summary:
          "A broad-spectrum biocide for closed loops where slow-moving water and warm plant rooms create pockets for microbial growth and biofilm.",
        benefits: [
          "Controls bacterial growth in low-flow zones",
          "Compatible with nitrite and molybdate inhibitor packages",
          "Low dose rate, infrequent shock-dosing schedule",
        ],
        packaging: ["25 L drum", "200 L drum"],
      },
      {
        id: "boc-ch-840",
        code: "BOC-CH 840",
        name: "Glycol System Inhibitor Package",
        chemistryClass: "Corrosion Inhibitor",
        form: "Liquid",
        summary:
          "An inhibitor package purpose-built for glycol-dosed circuits, protecting metal surfaces the glycol itself does nothing to defend once it starts to degrade.",
        benefits: [
          "Buffers glycol breakdown acids before they attack metal",
          "Formulated for compatibility with propylene & ethylene glycol",
          "Extends usable life of the glycol charge",
        ],
        packaging: ["25 L drum", "200 L drum"],
      },
    ],
  },
  {
    id: "cooling",
    slug: "cooling-water",
    name: "Cooling Water Treatment",
    shortName: "Cooling Water",
    eyebrow: "Line 03 · Open Loop Treatment",
    icon: Fan,
    headline: "Built for evaporation, heat and open exposure.",
    description:
      "Open recirculating systems concentrate everything the make-up water carries in, then add sunlight and warmth on top. Our cooling water range is calibrated to local hardness and cycles of concentration, so scale, corrosion and biological growth stay controlled through the peak of a Gulf summer.",
    applications: [
      "Cooling towers, all-metal & FRP",
      "Condenser water circuits",
      "Evaporative condensers",
      "District cooling plants",
    ],
    products: [
      {
        id: "boc-ct-510",
        code: "BOC-CT 510",
        name: "All-Organic Corrosion & Scale Inhibitor",
        chemistryClass: "Corrosion Inhibitor",
        form: "Liquid",
        summary:
          "A phosphonate / polymer terpolymer blend that controls both scale and corrosion in a single product, calibrated for higher cycles of concentration in hard make-up water.",
        benefits: [
          "Combines scale and corrosion control in one dosing point",
          "Holds performance at elevated cycles of concentration",
          "Phosphorus-managed formulation for discharge compliance",
        ],
        packaging: ["25 L drum", "200 L drum", "1,000 L IBC"],
      },
      {
        id: "boc-ct-610",
        code: "BOC-CT 610",
        name: "Stabilised Oxidising Biocide",
        chemistryClass: "Biocide — Oxidising",
        form: "Liquid",
        summary:
          "A bromine-based oxidising biocide that stays active across a wider pH range than chlorine alone — a core control measure for Legionella and general microbial load.",
        benefits: [
          "Effective across alkaline cooling water pH",
          "Fast-acting kill of planktonic bacteria and algae",
          "Supports HSE-aligned Legionella control programmes",
        ],
        packaging: ["25 kg drum", "200 kg drum"],
      },
      {
        id: "boc-ct-620",
        code: "BOC-CT 620",
        name: "Non-Oxidising Biocide",
        chemistryClass: "Biocide — Non-oxidising",
        form: "Liquid",
        summary:
          "An isothiazolinone-based biocide rotated with the oxidising programme to control organisms that build resistance to oxidising biocides alone, and to knock down established biofilm.",
        benefits: [
          "Penetrates and disrupts existing biofilm",
          "Rotational use reduces resistant-organism risk",
          "Effective against algae as well as bacteria",
        ],
        packaging: ["25 L drum", "200 L drum"],
      },
      {
        id: "boc-ct-705",
        code: "BOC-CT 705",
        name: "Dispersant & Deposit Controller",
        chemistryClass: "Dispersant",
        form: "Liquid",
        summary:
          "Keeps suspended solids, dust and dead biomass in suspension so they leave through blowdown and filtration instead of settling on heat-transfer surfaces.",
        benefits: [
          "Reduces fouling on condenser and heat-exchanger surfaces",
          "Improves blowdown efficiency",
          "Complements both scale and corrosion inhibitor packages",
        ],
        packaging: ["25 L drum", "200 L drum"],
      },
    ],
  },
  {
    id: "boiler",
    slug: "boiler-water",
    name: "Boiler Water Treatment",
    shortName: "Boiler Water",
    eyebrow: "Line 04 · Steam Chemistry",
    icon: Flame,
    headline: "Pure steam, protected metal, lower fuel bills.",
    description:
      "Scale and oxygen corrosion are the two failure modes that quietly cost the most in a steam plant — a millimetre of scale on a heat-transfer surface is a measurable jump in fuel burn. Our boiler range is dosed to hold alkalinity, strip dissolved oxygen, and keep the condensate return line from turning acidic.",
    applications: [
      "Fire-tube & water-tube steam boilers",
      "Hot water generators",
      "Condensate return systems",
      "Low, medium & high-pressure plant",
    ],
    products: [
      {
        id: "boc-bw-910",
        code: "BOC-BW 910",
        name: "Catalysed Sulphite Oxygen Scavenger",
        chemistryClass: "Oxygen Scavenger",
        form: "Liquid",
        summary:
          "A catalysed sodium sulphite formulation that reacts rapidly with dissolved oxygen, protecting boiler shell, feed lines and economiser tubing on low and medium-pressure plant.",
        benefits: [
          "Economical, fast-reacting oxygen control",
          "Well suited to low & medium-pressure fire-tube boilers",
          "Simple residual sulphite test for dose verification",
        ],
        packaging: ["25 kg drum", "200 kg drum", "1,000 kg IBC"],
      },
      {
        id: "boc-bw-915",
        code: "BOC-BW 915",
        name: "Carbohydrazide Oxygen Scavenger",
        chemistryClass: "Oxygen Scavenger",
        form: "Liquid",
        summary:
          "A volatile, low-solids scavenger for high-pressure and high-purity applications, where added dissolved solids from sulphite dosing aren't acceptable.",
        benefits: [
          "Leaves no added dissolved solids in boiler water",
          "Suited to high-pressure and high-purity systems",
          "Passivates metal surfaces as it scavenges oxygen",
        ],
        packaging: ["25 L drum", "200 L drum"],
      },
      {
        id: "boc-bw-920",
        code: "BOC-BW 920",
        name: "Alkalinity & Phosphate Treatment",
        chemistryClass: "Alkalinity & pH Control",
        form: "Liquid",
        summary:
          "A phosphate-based programme that buffers alkalinity and precipitates hardness salts as a soft, mobile sludge — controlled scale, not scale prevention by hope.",
        benefits: [
          "Maintains protective alkalinity at the boiler metal",
          "Converts hardness into removable, non-adherent sludge",
          "Supports efficient, predictable blowdown control",
        ],
        packaging: ["25 kg drum", "200 kg drum"],
      },
      {
        id: "boc-bw-930",
        code: "BOC-BW 930",
        name: "Neutralising Amine Blend",
        chemistryClass: "Corrosion Inhibitor",
        form: "Liquid",
        summary:
          "A blended neutralising amine that travels with steam into the condensate line, holding pH above the point where carbonic acid starts eating into the return system.",
        benefits: [
          "Protects the full length of the condensate return line",
          "Blended amine volatility ratios for even distribution",
          "Reduces iron pickup entering the boiler feed tank",
        ],
        packaging: ["25 L drum", "200 L drum"],
      },
      {
        id: "boc-bw-940",
        code: "BOC-BW 940",
        name: "Polymer Sludge Conditioner",
        chemistryClass: "Dispersant",
        form: "Liquid",
        summary:
          "A polymer dispersant that keeps precipitated solids mobile inside the boiler, preventing them from baking onto heat-transfer surfaces between blowdown cycles.",
        benefits: [
          "Prevents sludge from adhering to boiler tubes",
          "Improves blowdown efficiency and heat transfer",
          "Compatible with phosphate and chelant programmes",
        ],
        packaging: ["25 L drum", "200 L drum"],
      },
    ],
  },
  {
    id: "pool",
    slug: "swimming-pool",
    name: "Swimming Pool Treatment",
    shortName: "Swimming Pool",
    eyebrow: "Line 05 · Pool Sanitation",
    icon: Waves,
    headline: "Guest-ready water, every single morning.",
    description:
      "Bather load, sun exposure and Gulf heat all push against pool water chemistry at once. Our pool range is formulated for that combination — steady sanitiser residuals, buffered alkalinity, and clarity that holds through a full day of heavy use.",
    applications: [
      "Hotel & resort pools",
      "Residential & community pools",
      "Water parks & splash pads",
      "Therapy & hydrotherapy pools",
    ],
    products: [
      {
        id: "boc-pl-110",
        code: "BOC-PL 110",
        name: "Stabilised Chlorine Sanitiser",
        chemistryClass: "Sanitiser",
        form: "Granular",
        summary:
          "A stabilised chlorine sanitiser (cyanuric-acid protected) that resists rapid UV burn-off, holding an effective residual through long, sun-exposed Gulf pool days.",
        benefits: [
          "UV-stabilised for outdoor pools in high sun exposure",
          "Consistent, fast-dissolving free chlorine residual",
          "Reduces top-up frequency versus unstabilised chlorine",
        ],
        packaging: ["25 kg drum", "50 kg drum"],
      },
      {
        id: "boc-pl-130",
        code: "BOC-PL 130",
        name: "pH Buffer & Alkalinity Increaser",
        chemistryClass: "Alkalinity & pH Control",
        form: "Granular",
        summary:
          "Sodium bicarbonate-based buffer that raises and holds total alkalinity, keeping pH stable between tests instead of swinging with every bather load.",
        benefits: [
          "Stabilises pH between routine testing rounds",
          "Reduces sanitiser demand caused by pH drift",
          "Gentle on tiling, grouting and pool plant",
        ],
        packaging: ["25 kg bag"],
      },
      {
        id: "boc-pl-150",
        code: "BOC-PL 150",
        name: "Flocculant & Clarifier",
        chemistryClass: "Flocculant & Clarifier",
        form: "Liquid",
        summary:
          "A fast-acting clarifier that binds fine suspended particles into filterable floc, turning hazy water crystal clear well ahead of opening time.",
        benefits: [
          "Clears cloudy water without a full backwash cycle",
          "Compatible with sand and cartridge filtration",
          "Fast visible results — ideal ahead of peak hours",
        ],
        packaging: ["5 L bottle", "25 L drum"],
      },
      {
        id: "boc-pl-170",
        code: "BOC-PL 170",
        name: "Algaecide",
        chemistryClass: "Algaecide",
        form: "Liquid",
        summary:
          "A polyquat-based algaecide used alongside routine sanitising to prevent algae bloom in warm, sun-exposed water — non-foaming and safe for bather-loaded pools.",
        benefits: [
          "Prevents algae bloom in warm outdoor pools",
          "Non-foaming formulation, safe during bather hours",
          "Extends interval between shock treatments",
        ],
        packaging: ["5 L bottle", "25 L drum"],
      },
    ],
  },
  {
    id: "potable",
    slug: "potable-water",
    name: "Potable Water Treatment",
    shortName: "Potable Water",
    eyebrow: "Line 06 · Potable Water Chemistry",
    icon: GlassWater,
    headline: "Safe to drink, reliably, at every outlet.",
    description:
      "Potable supply chemistry has to get one thing right, every time: water that's genuinely safe at the point of use. Our potable water range covers disinfection, distribution-side corrosion control and taste conditioning — formulated to potable-grade standards throughout.",
    applications: [
      "Municipal & community supply",
      "Hotel & residential potable systems",
      "Bottled & bulk drinking water",
      "Camp & remote-site supply",
    ],
    products: [
      {
        id: "boc-pw-210",
        code: "BOC-PW 210",
        name: "Potable-Grade Disinfection Solution",
        chemistryClass: "Disinfection",
        form: "Liquid",
        summary:
          "Food and drinking-water grade sodium hypochlorite, dosed for reliable microbiological control at the point of entry into a potable distribution system.",
        benefits: [
          "Formulated to potable / food-grade standard",
          "Consistent available-chlorine strength for accurate dosing",
          "Suitable for municipal and private supply systems",
        ],
        packaging: ["25 L drum", "200 L drum", "1,000 L IBC"],
      },
      {
        id: "boc-pw-230",
        code: "BOC-PW 230",
        name: "Potable Corrosion Control",
        chemistryClass: "Corrosion Inhibitor",
        form: "Liquid",
        summary:
          "A food-grade orthophosphate blend that lays down a protective film inside distribution pipework, controlling metal pickup and discoloured-water complaints.",
        benefits: [
          "Reduces iron, lead and copper pickup in distribution lines",
          "Food-grade formulation approved for potable use",
          "Improves clarity and taste consistency at the tap",
        ],
        packaging: ["25 L drum", "200 L drum"],
      },
      {
        id: "boc-pw-250",
        code: "BOC-PW 250",
        name: "Conditioning & Taste-Odour Control",
        chemistryClass: "Conditioning",
        form: "Liquid",
        summary:
          "An activated-carbon-compatible conditioning agent used ahead of distribution to reduce chlorinous taste and odour without compromising disinfection residual.",
        benefits: [
          "Improves taste and odour at point of consumption",
          "Maintains required disinfectant residual",
          "Simple in-line dosing, no additional equipment required",
        ],
        packaging: ["25 L drum", "200 L drum"],
      },
    ],
  },
];

export const chemistryClasses: ChemistryClass[] = [
  "Antiscalant",
  "Corrosion Inhibitor",
  "Biocide — Oxidising",
  "Biocide — Non-oxidising",
  "Membrane Cleaner",
  "Dechlorination",
  "Oxygen Scavenger",
  "Alkalinity & pH Control",
  "Dispersant",
  "Sanitiser",
  "Flocculant & Clarifier",
  "Algaecide",
  "Disinfection",
  "Conditioning",
];

export function allProducts() {
  return productLines.flatMap((line) =>
    line.products.map((product) => ({ ...product, line }))
  );
}
