"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { fadeUpItemVariants, viewportOnce } from "@/lib/motion";
import { useEntranceReady } from "@/lib/useEntranceReady";

function Footer() {
  const year = new Date().getFullYear();
  const reduce = useReducedMotion();
  const entranceReady = useEntranceReady();

  const row = {
    hidden: {},
    show: {
      transition: reduce ? { duration: 0 } : { staggerChildren: 0.1 },
    },
  };

  return (
    <footer style={{ borderTop: "1px solid var(--border)", padding: "32px 0" }}>
      <motion.div
        variants={row}
        initial="hidden"
        animate={entranceReady ? undefined : "hidden"}
        whileInView={entranceReady ? "show" : undefined}
        viewport={viewportOnce}
        style={{
          maxWidth: "768px",
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "12px",
          fontSize: "0.75rem",
          color: "var(--muted)",
          fontFamily: "var(--font-geist-mono)",
        }}
      >
        <motion.span variants={fadeUpItemVariants(reduce)}>© {year} Mohammad Anas</motion.span>
        <motion.a
          variants={fadeUpItemVariants(reduce)}
          href="mailto:mohammad.anas51@hotmail.com"
          whileHover={reduce ? undefined : { color: "#fff", x: 2 }}
          transition={{ type: "spring", stiffness: 400, damping: 28 }}
          style={{ color: "var(--muted)", textDecoration: "none" }}
        >
          mohammad.anas51@hotmail.com
        </motion.a>
      </motion.div>
    </footer>
  );
}

export default Footer;
