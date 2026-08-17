import Image from "next/image";
import Reveal from "../Reveal";

const IMAGES = [
  {
    cls: "gallery-tile-a",
    src: "https://images.unsplash.com/photo-1513828646384-e4d8ec30d2bb?fm=jpg&q=80&w=1600&auto=format&fit=crop",
    alt: "Process equipment at the manufacturing facility",
    caption: "Process Equipment",
  },
  {
    cls: "gallery-tile-b",
    src: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?fm=jpg&q=80&w=1400&auto=format&fit=crop",
    alt: "Laboratory glassware used for quality testing",
    caption: "Quality Testing",
  },
  {
    cls: "gallery-tile-c",
    src: "https://images.unsplash.com/photo-1627052428109-576e839d100a?fm=jpg&q=80&w=1400&auto=format&fit=crop",
    alt: "Exterior of an industrial manufacturing facility",
    caption: "Facility",
  },
  {
    cls: "gallery-tile-d",
    src: "https://images.unsplash.com/photo-1513828742140-ccaa28f3eda0?fm=jpg&q=80&w=1000&auto=format&fit=crop",
    alt: "Manufacturing equipment",
    caption: "Manufacturing",
  },
  {
    cls: "gallery-tile-e",
    src: "https://images.unsplash.com/photo-1636747423727-2d39d0aa9796?fm=jpg&q=80&w=1000&auto=format&fit=crop",
    alt: "Warehouse building against the sky",
    caption: "Warehouse & Dispatch",
  },
  {
    cls: "gallery-tile-f",
    src: "https://images.unsplash.com/photo-1566226196556-ef949ce5f1a3?fm=jpg&q=80&w=1000&auto=format&fit=crop",
    alt: "Industrial facility in Ajman, UAE",
    caption: "Ajman, UAE",
  },
];

export default function Gallery() {
  return (
    <section className="sec-pad" style={{ background: "var(--white)" }}>
      <div className="wrap">
        <Reveal className="sec-head">
          <div className="eyebrow">Inside the facility</div>
          <h2>Where the chemistry actually gets made.</h2>
        </Reveal>
        <div className="gallery-grid">
          {IMAGES.map((img, i) => (
            <Reveal as="div" key={img.cls} delay={i * 0.05} y={16} className={`gallery-tile ${img.cls}`}>
              <Image src={img.src} alt={img.alt} fill sizes="(max-width: 780px) 50vw, 33vw" />
              <div className="gallery-caption">{img.caption}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
