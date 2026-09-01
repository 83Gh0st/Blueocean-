"use client";

import { Suspense, useState, type FormEvent } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Lock } from "lucide-react";
import Logo from "@/components/Logo";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const from = searchParams.get("from") || "/internal";

  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/internal/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Something went wrong.");
        setLoading(false);
        return;
      }
      router.push(from);
      router.refresh();
    } catch {
      setError("Couldn't reach the server. Please try again.");
      setLoading(false);
    }
  }

  return (
    <div className="internal-login">
      <div className="internal-login-card">
        <Logo variant="white" mark="icon" height={40} className="internal-login-mark" />
        <h1>Staff Portal</h1>
        <p className="sub">
          Internal tools for Blue Ocean Chemicals staff: accounting, ERP and operational systems as they're
          built out. Enter the shared portal password to continue.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="internal-field">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoFocus
              placeholder="••••••••••••"
            />
          </div>
          <button type="submit" className="btn internal-submit" disabled={loading || !password}>
            <Lock size={16} strokeWidth={2} />
            {loading ? "Checking..." : "Enter portal"}
          </button>
          {error && <div className="internal-error">{error}</div>}
        </form>
        <Link href="/" className="internal-login-back">
          <ArrowLeft size={14} />
          Back to the public site
        </Link>
      </div>
    </div>
  );
}

export default function InternalLoginPage() {
  return (
    <Suspense fallback={null}>
      <LoginForm />
    </Suspense>
  );
}
