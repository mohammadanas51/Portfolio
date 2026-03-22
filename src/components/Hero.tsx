"use client";

import React from "react";
import { motion } from "motion/react";

const Highlight = ({ children }: { children: React.ReactNode }) => (
  <span style={{ color: "var(--accent)", fontWeight: 500 }}>{children}</span>
);

function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{ paddingTop: "64px", paddingBottom: "48px" }}
    >
      {/* Status badge */}
      <div style={{ marginBottom: "24px" }}>
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            fontSize: "0.75rem",
            padding: "4px 12px",
            borderRadius: "9999px",
            background: "var(--card-bg)",
            border: "1px solid var(--border)",
            color: "var(--muted)",
            fontFamily: "var(--font-geist-mono)",
          }}
        >
          <span
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: "#22c55e",
              display: "inline-block",
              animation: "pulse 2s cubic-bezier(0.4,0,0.6,1) infinite",
            }}
          />
          Open to work · Remote-first
        </span>
      </div>

      {/* Name */}
      <h1
        style={{
          fontSize: "2.5rem",
          fontWeight: 700,
          letterSpacing: "-0.03em",
          marginBottom: "20px",
          lineHeight: 1.1,
          color: "var(--fg)",
        }}
      >
        Mohammad Anas
      </h1>

      {/* Bio */}
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <p style={{ color: "var(--muted)", fontSize: "1.05rem", lineHeight: 1.75 }}>
          I&apos;m a <Highlight>full-stack developer</Highlight> based in India, building web
          applications that solve <Highlight>real-world problems</Highlight>. I work primarily
          with the <Highlight>MERN stack</Highlight> — React, Node.js, Express, and MongoDB —
          and reach for TypeScript whenever I want to ship with confidence.
        </p>
        <p style={{ color: "var(--muted)", fontSize: "1.05rem", lineHeight: 1.75 }}>
          I&apos;m the founder of{" "}
          <a
            href="https://commitpay.dev"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--accent)", textDecoration: "underline", textUnderlineOffset: "4px" }}
          >
            CommitPay
          </a>
          , a bootstrapped SaaS platform connecting open-source maintainers with beginner
          developers through <Highlight>paid issues</Highlight>. Grew to{" "}
          <Highlight>35+ signups</Highlight> in the first few weeks.
        </p>
        <p style={{ color: "var(--muted)", fontSize: "1.05rem", lineHeight: 1.75 }}>
          Outside of building products, I actively contribute to{" "}
          <Highlight>open source</Highlight> — ranging from UI fixes to new features across
          popular repositories. I believe good software is built iteratively, with empathy for
          the user at every step.
        </p>
      </div>

      {/* Quick info row */}
      <div
        style={{
          marginTop: "32px",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: "16px",
          fontSize: "0.875rem",
          color: "var(--muted)",
          fontFamily: "var(--font-geist-mono)",
        }}
      >
        <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          India
        </span>
        <span style={{ color: "var(--border)" }}>·</span>
        <a
          href="mailto:mohammad.anas51@hotmail.com"
          style={{ color: "var(--muted)", transition: "color 0.2s" }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#fff")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--muted)")}
        >
          mohammad.anas51@hotmail.com
        </a>
      </div>
    </motion.section>
  );
}

export default Hero;
