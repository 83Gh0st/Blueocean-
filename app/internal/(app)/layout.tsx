import InternalHeader from "@/components/internal/InternalHeader";

export default function InternalAppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <InternalHeader />
      <main className="internal-main">{children}</main>
    </>
  );
}
