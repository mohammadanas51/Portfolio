"use client";

import React from "react";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ borderTop: "1px solid var(--border)", padding: "32px 0" }}>
      <div
        style={{
          maxWidth: "768px",
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontSize: "0.75rem",
          color: "var(--muted)",
          fontFamily: "var(--font-geist-mono)",
        }}
      >
        <span>© {year} Mohammad Anas</span>
        <a
          href="mailto:mohammad.anas51@hotmail.com"
          style={{ color: "var(--muted)", transition: "color 0.2s", textDecoration: "none" }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#fff")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--muted)")}
        >
          mohammad.anas51@hotmail.com
        </a>
      </div>
    </footer>
  );
}

export default Footer;
