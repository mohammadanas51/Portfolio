"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { fadeUpItemVariants } from "@/lib/motion";
import { useEntranceReady } from "@/lib/useEntranceReady";

const Highlight = ({ children }: { children: React.ReactNode }) => (
  <span style={{ color: "var(--accent)", fontWeight: 500 }}>{children}</span>
);

function Hero() {
  const reduce = useReducedMotion();
  const entranceReady = useEntranceReady();

  const heroContainer = {
    hidden: {},
    show: {
      transition: reduce
        ? { duration: 0 }
        : { staggerChildren: 0.09, delayChildren: 0.04 },
    },
  };

  const nameVariants = {
    hidden: { opacity: reduce ? 1 : 0, y: reduce ? 0 : 28 },
    show: {
      opacity: 1,
      y: 0,
      transition: reduce
        ? { duration: 0 }
        : { type: "spring" as const, stiffness: 380, damping: 28, mass: 0.8 },
    },
  };

  const bioGroup = {
    hidden: {},
    show: {
      transition: reduce ? { duration: 0 } : { staggerChildren: 0.08 },
    },
  };

  return (
    <motion.section
      variants={heroContainer}
      initial="hidden"
      animate={entranceReady ? "show" : "hidden"}
      style={{ paddingTop: "64px", paddingBottom: "48px" }}
    >
      {/* Status badge */}
      <motion.div variants={fadeUpItemVariants(reduce)} style={{ marginBottom: "24px" }}>
        <motion.span
          whileHover={reduce ? undefined : { scale: 1.02, borderColor: "#52525b" }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
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
          <motion.span
            animate={
              reduce || !entranceReady
                ? undefined
                : { scale: [1, 1.15, 1], opacity: [1, 0.85, 1] }
            }
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: "#22c55e",
              display: "inline-block",
              boxShadow: "0 0 10px rgba(34, 197, 94, 0.55)",
            }}
          />
          Open to work · Remote-first
        </motion.span>
      </motion.div>

      {/* Name */}
      <motion.h1
        variants={nameVariants}
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
      </motion.h1>

      {/* Bio */}
      <motion.div variants={bioGroup} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <motion.p variants={fadeUpItemVariants(reduce)} style={{ color: "var(--muted)", fontSize: "1.05rem", lineHeight: 1.75 }}>
          I&apos;m a <Highlight>full-stack developer</Highlight> based in India, building web
          applications that solve <Highlight>real-world problems</Highlight>. I work primarily
          with the <Highlight>MERN stack</Highlight> — React, Node.js, Express, and MongoDB —
          and reach for TypeScript whenever I want to ship with confidence.
        </motion.p>
        <motion.p variants={fadeUpItemVariants(reduce)} style={{ color: "var(--muted)", fontSize: "1.05rem", lineHeight: 1.75 }}>
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
        </motion.p>
        <motion.p variants={fadeUpItemVariants(reduce)} style={{ color: "var(--muted)", fontSize: "1.05rem", lineHeight: 1.75 }}>
          Outside of building products, I actively contribute to{" "}
          <Highlight>open source</Highlight> — ranging from UI fixes to new features across
          popular repositories. I believe good software is built iteratively, with empathy for
          the user at every step.
        </motion.p>
      </motion.div>

      {/* Quick info row */}
      <motion.div
        variants={fadeUpItemVariants(reduce)}
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
        <motion.a
          href="mailto:mohammad.anas51@hotmail.com"
          whileHover={reduce ? undefined : { color: "#fff" }}
          transition={{ duration: 0.2 }}
          style={{ color: "var(--muted)" }}
        >
          mohammad.anas51@hotmail.com
        </motion.a>
      </motion.div>
    </motion.section>
  );
}

export default Hero;
