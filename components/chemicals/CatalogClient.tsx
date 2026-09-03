"use client";

import { useMemo, useState } from "react";
import { Search, ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { allProducts, chemistryClasses, productLines } from "@/lib/chemicals-data";
import ProductCard from "./ProductCard";
import ProductListRow from "./ProductListRow";

export default function CatalogClient() {
  const [query, setQuery] = useState("");
  const [activeClass, setActiveClass] = useState<string>("All");
  const [openLines, setOpenLines] = useState<Set<string>>(new Set(["ro"]));

  const filtering = query.trim().length > 0 || activeClass !== "All";

  const filteredFlat = useMemo(() => {
    const q = query.trim().toLowerCase();
    return allProducts().filter((p) => {
      const matchesQuery =
        !q ||
        p.code.toLowerCase().includes(q) ||
        p.name.toLowerCase().includes(q) ||
        p.summary.toLowerCase().includes(q) ||
        p.line.name.toLowerCase().includes(q);
      const matchesClass = activeClass === "All" || p.chemistryClass === activeClass;
      return matchesQuery && matchesClass;
    });
  }, [query, activeClass]);

  function toggleLine(id: string) {
    setOpenLines((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  return (
    <>
      <div className="cat-toolbar">
        <div className="wrap cat-toolbar-inner">
          <div className="cat-search">
            <Search strokeWidth={2} />
            <input
              type="text"
              placeholder="Search by product code, name or keyword..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Search chemical products"
            />
          </div>
          <div className="cat-filters">
            {["All", ...chemistryClasses].map((c) => (
              <button
                key={c}
                className={`cat-filter-chip ${activeClass === c ? "active" : ""}`}
                onClick={() => setActiveClass(c)}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
        {!filtering && (
          <div className="wrap">
            <nav className="cat-line-nav" aria-label="Jump to treatment line">
              {productLines.map((line) => {
                const Icon = line.icon;
                return (
                  <a
                    key={line.id}
                    href={`#${line.slug}`}
                    className="cat-line-pill"
                    onClick={() => setOpenLines((prev) => new Set(prev).add(line.id))}
                  >
                    <Icon strokeWidth={1.8} />
                    {line.shortName}
                  </a>
                );
              })}
            </nav>
          </div>
        )}
      </div>

      {filtering ? (
        <div className="wrap sec-pad" style={{ paddingTop: "3rem" }}>
          <p style={{ marginBottom: "1.6rem", fontSize: "0.9rem", color: "var(--ink-faint)" }}>
            {filteredFlat.length} {filteredFlat.length === 1 ? "product" : "products"} found
          </p>
          {filteredFlat.length > 0 ? (
            <div className="product-grid">
              {filteredFlat.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          ) : (
            <div className="cat-empty">
              <p>No products match your search. Try a different keyword, or clear the filter.</p>
            </div>
          )}
        </div>
      ) : (
        <div className="wrap cat-accordion">
          {productLines.map((line) => {
            const Icon = line.icon;
            const isOpen = openLines.has(line.id);
            return (
              <div className={`cat-accordion-row${isOpen ? " open" : ""}`} id={line.slug} key={line.id}>
                <button
                  type="button"
                  className="cat-accordion-header"
                  onClick={() => toggleLine(line.id)}
                  aria-expanded={isOpen}
                  aria-controls={`${line.id}-panel`}
                >
                  <div className="cat-accordion-bg">
                    <Image src={line.image} alt="" fill sizes="100vw" style={{ objectFit: "cover" }} />
                  </div>
                  <div className="cat-accordion-icon">
                    <Icon strokeWidth={1.8} />
                  </div>
                  <div className="cat-accordion-title">
                    <div className="eyebrow on-dark">{line.eyebrow}</div>
                    <h2>{line.name}</h2>
                  </div>
                  <div className="cat-accordion-meta">
                    <span className="cat-accordion-count">
                      {line.products.length} {line.products.length === 1 ? "product" : "products"}
                    </span>
                    <span className="cat-accordion-chevron">
                      <ChevronDown strokeWidth={2} />
                    </span>
                  </div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`${line.id}-panel`}
                      className="cat-accordion-body"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="cat-accordion-body-inner">
                        <p className="desc">{line.description}</p>
                        <div className="applications">
                          {line.applications.map((a) => (
                            <span className="cat-app-chip" key={a}>
                              {a}
                            </span>
                          ))}
                        </div>
                        <div className="cat-list">
                          {line.products.map((p) => (
                            <ProductListRow key={p.id} product={p} />
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
