"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ArrowLeft, LogOut } from "lucide-react";
import Logo from "@/components/Logo";

export default function InternalHeader() {
  const router = useRouter();
  const [loggingOut, setLoggingOut] = useState(false);

  async function handleLogout() {
    setLoggingOut(true);
    await fetch("/api/internal/logout", { method: "POST" });
    router.push("/internal/login");
    router.refresh();
  }

  return (
    <header className="internal-header">
      <Link href="/internal" className="internal-header-brand">
        <Logo variant="white" mark="icon" height={26} />
        Blue Ocean
        <span className="badge">Staff Portal</span>
      </Link>
      <div className="internal-header-actions">
        <Link href="/" className="internal-back-link">
          <ArrowLeft size={14} />
          Public site
        </Link>
        <button className="internal-logout-btn" onClick={handleLogout} disabled={loggingOut}>
          <LogOut size={13} style={{ marginRight: 6, display: "inline" }} />
          {loggingOut ? "Signing out..." : "Sign out"}
        </button>
      </div>
    </header>
  );
}
