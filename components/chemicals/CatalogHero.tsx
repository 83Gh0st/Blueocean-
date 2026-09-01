import Breadcrumb from "@/components/Breadcrumb";

export default function CatalogHero() {
  return (
    <section className="cat-hero">
      <div className="grain" aria-hidden="true" />
      <div className="wrap">
        <Breadcrumb trail={[{ label: "Products" }]} />
        <div className="eyebrow on-dark">Full Product Catalog</div>
        <h1>Chemical listing, by treatment line.</h1>
        <p>
          Every formulation Blue Ocean manufactures, organised by the system it protects. Search by name, filter by
          chemistry type, or browse a full treatment line, then enquire directly on WhatsApp or by email.
        </p>
      </div>
    </section>
  );
}
