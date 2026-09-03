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
 * A compact, list-style product row — code + name + one-line summary +
 * an inline enquire link, divided by a hairline rather than boxed in a
 * card. Used for treatment lines with few enough products (under 5) that
 * a full two-column image+list layout reads better than a card grid;
 * ProductCard (the fuller, bordered version) is still what the higher-
 * count lines and the search/filter results use.
 */
export default function ProductListRow({ product }: { product: ChemicalProduct }) {
  const enquiryMessage = `Hello Blue Ocean Chemicals, I'd like to enquire about ${product.code} (${product.name}).`;
  const FormIcon = FORM_ICON[product.form] ?? Package;

  return (
    <div className="cat-list-row">
      <div className="cat-list-row-top">
        <span className="cat-list-row-code">{product.code}</span>
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
