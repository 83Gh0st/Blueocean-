"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { allProducts, chemistryClasses, productLines } from "@/lib/chemicals-data";
import ProductCard from "./ProductCard";
import Reveal from "../Reveal";

export default function CatalogClient() {
  const [query, setQuery] = useState("");
  const [activeClass, setActiveClass] = useState<string>("All");

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
                  <a key={line.id} href={`#${line.slug}`} className="cat-line-pill">
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
        productLines.map((line) => {
          const Icon = line.icon;
          return (
            <section className="wrap cat-line-section" id={line.slug} key={line.id}>
              <Reveal className="cat-line-head">
                <div className="cat-line-icon">
                  <Icon strokeWidth={1.8} />
                </div>
                <div>
                  <div className="eyebrow">{line.eyebrow}</div>
                  <h2>{line.name}</h2>
                  <p style={{ marginTop: "0.6rem", maxWidth: "46rem" }}>{line.description}</p>
                  <div className="applications">
                    {line.applications.map((a) => (
                      <span className="cat-app-chip" key={a}>
                        {a}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
              <div className="product-grid">
                {line.products.map((p) => (
                  <ProductCard key={p.id} product={{ ...p }} />
                ))}
              </div>
            </section>
          );
        })
      )}
    </>
  );
}
