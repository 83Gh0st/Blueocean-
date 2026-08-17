import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Staff Portal",
  robots: { index: false, follow: false },
};

export default function InternalLayout({ children }: { children: React.ReactNode }) {
  return <div className="internal-shell">{children}</div>;
}
