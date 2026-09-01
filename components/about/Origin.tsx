import Image from "next/image";
import Link from "next/link";
import Reveal from "../Reveal";

const LINES = [
  { name: "Reverse Osmosis", slug: "reverse-osmosis" },
  { name: "Chilled Water", slug: "chilled-water" },
  { name: "Cooling Water", slug: "cooling-water" },
  { name: "Boiler Water", slug: "boiler-water" },
  { name: "Swimming Pool", slug: "swimming-pool" },
  { name: "Potable Water", slug: "potable-water" },
];

export default function Origin() {
  return (
    <section className="bleed-split">
      <Reveal as="div" className="bleed-split-text">
        <div className="origin-number">01</div>
        <div className="eyebrow">Where it started</div>
        <div className="origin-text">
          <p>
            Water treatment in the Gulf has to work harder than it does almost anywhere else. Feedwater arrives
            hotter, harder and saltier than most imported chemistry was ever formulated for, which means a
            product built for milder conditions elsewhere quietly under-performs the moment it&rsquo;s dosed into
            a system here.
          </p>
          <p>
            Blue Ocean was built to close that gap: a team of seasoned professionals across chemical
            manufacturing, water treatment technology and industrial operations, working from one facility in
            Ajman, formulating specifically for regional feedwater rather than adapting an off-the-shelf range to
            fit it.
          </p>
          <p>That meant starting with the chemistry, not the catalogue. Today, that&rsquo;s organised into six treatment lines:</p>
        </div>
        <div className="origin-lines">
          {LINES.map((line) => (
            <Link href={`/chemicals#${line.slug}`} className="cat-line-pill" key={line.slug}>
              {line.name}
            </Link>
          ))}
        </div>
      </Reveal>
      <Reveal as="div" className="bleed-split-photo" delay={0.1} y={0}>
        <Image
          src="https://images.unsplash.com/photo-1614935151651-0bea6508db6b?fm=jpg&q=80&w=1800&auto=format&fit=crop"
          alt="Lab technician testing water treatment chemistry"
          fill
          sizes="(max-width: 900px) 100vw, 50vw"
        />
        <div className="bleed-split-caption">Formulation & QC</div>
      </Reveal>
    </section>
  );
}
