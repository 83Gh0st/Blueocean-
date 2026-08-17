const ITEMS = [
  "Chemical Manufacturing",
  "Reverse Osmosis",
  "Cooling Water Treatment",
  "Boiler Water Treatment",
  "Chilled Water Treatment",
  "Swimming Pool Treatment",
  "Potable Water Treatment",
  "Manufactured in Ajman, UAE",
];

export default function Marquee() {
  return (
    <div className="strip">
      <div className="strip-track">
        {[...ITEMS, ...ITEMS].map((item, i) => (
          <span className="strip-item" key={i}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
