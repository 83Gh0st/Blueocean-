import Link from "next/link";
import { internalTools } from "@/lib/internal-tools";

export default function InternalDashboardPage() {
  return (
    <div>
      <div className="internal-eyebrow">Staff Portal</div>
      <h1>Internal Tools</h1>
      <p className="lede">
        Everything here is private to Blue Ocean staff. It never appears on the public site or in search
        results. Add a new tool any time by dropping a folder under <code>app/internal/</code> and registering it
        in <code>lib/internal-tools.ts</code>.
      </p>

      <div className="tool-grid">
        {internalTools.map((tool) => {
          const Icon = tool.icon;
          const isActive = tool.status === "active";
          const card = (
            <>
              <span className={`tool-card-status ${tool.status}`}>
                {isActive ? "Active" : "Coming soon"}
              </span>
              <div className="tool-card-icon">
                <Icon strokeWidth={1.8} />
              </div>
              <h3>{tool.name}</h3>
              <p>{tool.description}</p>
            </>
          );

          return isActive ? (
            <Link href={tool.href} key={tool.slug} className="tool-card is-active">
              {card}
            </Link>
          ) : (
            <div key={tool.slug} className="tool-card is-disabled">
              {card}
            </div>
          );
        })}
      </div>
    </div>
  );
}
