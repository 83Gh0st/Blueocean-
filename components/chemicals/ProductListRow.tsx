import { MessageCircle, Droplet, Package, Pill } from "lucide-react";
import type { ChemicalProduct } from "@/lib/chemicals-data";
import { whatsappHref } from "@/lib/site-config";

const FORM_ICON = {
  Liquid: Droplet,
  Powder: Package,
  Granular: Package,
  Tablet: Pill,
} as const;

/**
 * A compact, list-style product row — name + one-line summary + an
 * inline enquire link, divided by a hairline rather than boxed in a
 * card. Used inside the accordion's expanded panel, one per product.
 */
export default function ProductListRow({ product }: { product: ChemicalProduct }) {
  const enquiryMessage = `Hello Blue Ocean Chemicals, I'd like to enquire about ${product.code} (${product.name}).`;
  const FormIcon = FORM_ICON[product.form] ?? Package;

  return (
    <div className="cat-list-row">
      <div className="cat-list-row-top">
        <span className="cat-list-row-form">
          <FormIcon strokeWidth={1.8} />
          {product.form}
        </span>
      </div>
      <h4>{product.name}</h4>
      <p>{product.summary}</p>
      <a href={whatsappHref(enquiryMessage)} target="_blank" rel="noopener noreferrer" className="cat-list-row-enquire">
        <MessageCircle strokeWidth={2} />
        Enquire
      </a>
    </div>
  );
}
