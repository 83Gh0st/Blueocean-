import { Check, MessageCircle, Droplet, Package, Pill } from "lucide-react";
import { motion } from "framer-motion";
import type { ChemicalProduct } from "@/lib/chemicals-data";
import { whatsappHref } from "@/lib/site-config";

const FORM_ICON = {
  Liquid: Droplet,
  Powder: Package,
  Granular: Package,
  Tablet: Pill,
} as const;

export default function ProductCard({ product }: { product: ChemicalProduct }) {
  const enquiryMessage = `Hello Blue Ocean Chemicals, I'd like to enquire about ${product.code} — ${product.name}.`;
  const FormIcon = FORM_ICON[product.form] ?? Package;

  return (
    <motion.div
      className="product-card"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="product-card-top">
        <span className="product-form">
          <FormIcon strokeWidth={1.8} />
          {product.form}
        </span>
        <span className="product-code">{product.code}</span>
      </div>

      <div className="product-card-head">
        <div className="product-class">{product.chemistryClass}</div>
        <h4>{product.name}</h4>
      </div>

      <p className="product-summary">{product.summary}</p>

      <ul className="product-benefits">
        {product.benefits.map((b) => (
          <li key={b}>
            <Check strokeWidth={2.5} />
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <div className="product-card-foot">
        <span className="product-packaging">{product.packaging.join(" · ")}</span>
        <a
          href={whatsappHref(enquiryMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="product-enquire"
        >
          <MessageCircle strokeWidth={2} />
          Enquire
        </a>
      </div>
    </motion.div>
  );
}
