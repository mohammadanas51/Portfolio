"use client";

import React, { useState } from "react";
import { FiGithub, FiChevronDown } from "react-icons/fi";
import { motion, AnimatePresence } from "motion/react";

interface OpenSourceCardProps {
  repo: string;
  prNumber?: string;
  prUrl: string;
  description: string;
}

function OpenSourceCard({ repo, prNumber, prUrl, description }: OpenSourceCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        borderRadius: "8px",
        marginBottom: "10px",
        overflow: "hidden",
        background: "var(--card-bg)",
        border: "1px solid var(--border)",
        transition: "border-color 0.2s",
      }}
      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "#52525b")}
      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--border)")}
    >
      {/* Header row */}
      <div
        onClick={() => setOpen((p) => !p)}
        style={{
          padding: "12px 16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
          cursor: "pointer",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px", flex: 1, minWidth: 0 }}>
          <FiGithub size={13} style={{ color: "var(--muted)", flexShrink: 0 }} />
          <span
            style={{
              fontSize: "0.85rem",
              fontWeight: 500,
              color: "var(--fg)",
              fontFamily: "var(--font-geist-mono)",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {repo}
          </span>
          {prNumber && (
            <span
              style={{
                fontSize: "0.65rem",
                padding: "2px 6px",
                borderRadius: "4px",
                flexShrink: 0,
                background: "#1a1a1a",
                border: "1px solid var(--border)",
                color: "var(--accent)",
                fontFamily: "var(--font-geist-mono)",
              }}
            >
              #{prNumber}
            </span>
          )}
        </div>

        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          style={{ color: "var(--muted)", flexShrink: 0, lineHeight: 0 }}
        >
          <FiChevronDown size={15} />
        </motion.div>
      </div>

      {/* Expandable body */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <div style={{ padding: "12px 16px", borderTop: "1px solid var(--border)" }}>
              <p style={{ fontSize: "0.85rem", color: "var(--muted)", lineHeight: 1.65, marginBottom: "12px" }}>
                <span style={{ color: "var(--accent)", marginRight: "6px" }}>›</span>
                {description}
              </p>
              <a
                href={prUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "5px",
                  fontSize: "0.75rem",
                  color: "var(--muted)",
                  fontFamily: "var(--font-geist-mono)",
                  transition: "color 0.2s",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#fff")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--muted)")}
              >
                <FiGithub size={12} />
                View Pull Request
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default OpenSourceCard;