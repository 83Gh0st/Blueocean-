// ---------------------------------------------------------------------------
// Internal tools registry.
//
// This is the single place that defines what shows up on the /internal
// staff dashboard. It's intentionally empty of any real build right now —
// this is a clean slate you can drop tools into (accounting, ERP,
// inventory, CRM, whatever the business needs), not a finished product.
//
// To add a new internal tool later:
//
//   1. Create a folder under app/internal/(app)/<slug>/ with a page.tsx.
//      (It's automatically behind the password gate — see middleware.ts —
//      and automatically noindex/no-cache — see next.config.mjs.)
//   2. Add an entry to the array below with a matching `href` and flip its
//      status to "active" once it's ready.
//
// That's it — no other wiring needed. The dashboard grid below already
// covers any route under /internal automatically.
// ---------------------------------------------------------------------------

import type { LucideIcon } from "lucide-react";
import { Calculator, Boxes, Users, FileClock } from "lucide-react";

export interface InternalTool {
  slug: string;
  name: string;
  description: string;
  icon: LucideIcon;
  href: string;
  status: "active" | "coming-soon";
}

export const internalTools: InternalTool[] = [
  {
    slug: "accounting",
    name: "Accounting / ERP",
    description:
      "Placeholder for whatever finance or ERP system the business ends up needing: transactions, invoicing, inventory, ledgers, reporting. Not built yet.",
    icon: Calculator,
    href: "/internal/accounting",
    status: "coming-soon",
  },
  {
    slug: "inventory",
    name: "Inventory Tracker",
    description:
      "Raw material and finished-goods stock levels across the Ajman facility.",
    icon: Boxes,
    href: "/internal/inventory",
    status: "coming-soon",
  },
  {
    slug: "crm",
    name: "Customer & Enquiries",
    description:
      "Track quote requests, WhatsApp enquiries and follow-ups in one place.",
    icon: Users,
    href: "/internal/crm",
    status: "coming-soon",
  },
  {
    slug: "batch-log",
    name: "Batch & QC Log",
    description: "Production batch records and lab QC sign-off history.",
    icon: FileClock,
    href: "/internal/batch-log",
    status: "coming-soon",
  },
];
