import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "2rem",
        background: "var(--ink)",
        color: "var(--foam)",
      }}
    >
      <div className="eyebrow on-dark">404</div>
      <h1 style={{ color: "var(--white)", marginTop: "1rem", fontSize: "clamp(2rem, 5vw, 3rem)" }}>
        This page drifted off course.
      </h1>
      <p style={{ color: "rgba(247,249,252,0.6)", marginTop: "1rem", maxWidth: "30rem" }}>
        The page you&rsquo;re looking for doesn&rsquo;t exist. Let&rsquo;s get you back to solid ground.
      </p>
      <Link href="/" className="btn btn-light" style={{ marginTop: "2rem" }}>
        Back to home
      </Link>
    </div>
  );
}
