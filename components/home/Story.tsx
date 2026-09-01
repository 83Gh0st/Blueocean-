import Link from "next/link";
import Image from "next/image";
import Reveal from "../Reveal";

export default function Story() {
  return (
    <section className="bleed-split">
      <Reveal as="div" className="bleed-split-text">
        <div className="eyebrow story-eyebrow">Our Story</div>
        <h2 className="editorial-head">
          Built on water.
          <br />
          <em>Proven</em> across the Gulf.
        </h2>
        <p className="story-lede">
          Blue Ocean started with a simple observation: the Gulf&rsquo;s water is some of the hardest and hottest
          any treatment programme has to deal with, and most of the chemistry on the market wasn&rsquo;t formulated
          for it. So we built our own: manufactured, tested and dispatched from a single facility in Ajman,
          rather than repackaged from somewhere else.
        </p>
        <div className="story-facts">
          <div className="story-fact">
            <div className="v">In-house</div>
            <div className="l">Formulation & QC</div>
          </div>
          <div className="story-fact">
            <div className="v">Ajman</div>
            <div className="l">UAE Manufacturing</div>
          </div>
          <div className="story-fact">
            <div className="v">Direct</div>
            <div className="l">Technical Partnership</div>
          </div>
        </div>
        <Link href="/about" className="story-link">
          Read our full story
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </Link>
      </Reveal>
      <Reveal as="div" className="bleed-split-photo" delay={0.1} y={0}>
        <Image
          src="https://images.unsplash.com/photo-1589725971211-7e86a631e2c2?fm=jpg&q=80&w=1800&auto=format&fit=crop"
          alt="Blue Ocean's manufacturing facility"
          fill
          sizes="(max-width: 900px) 100vw, 50vw"
        />
        <div className="bleed-split-caption">Unit 12, Industrial Area 2, Ajman</div>
      </Reveal>
    </section>
  );
}
