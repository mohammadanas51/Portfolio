"use client";

import React, { useState } from "react";
import { FiGithub, FiExternalLink, FiChevronDown } from "react-icons/fi";
import { motion, AnimatePresence } from "motion/react";

interface ProjectCardProps {
  title: string;
  summary: string;
  descriptionPoints: string[];
  githubUrl?: string;
  liveUrl?: string;
  tags?: string[];
}

function ProjectCard({ title, summary, descriptionPoints, githubUrl, liveUrl, tags = [] }: ProjectCardProps) {
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
      {/* Header row — always visible, click to expand */}
      <div
        onClick={() => setOpen((p) => !p)}
        style={{
          padding: "14px 16px",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: "16px",
          cursor: "pointer",
        }}
      >
        <div style={{ flex: 1, minWidth: 0 }}>
          {/* Title + tags */}
          <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: "8px", marginBottom: "4px" }}>
            <span
              style={{
                fontWeight: 600,
                fontSize: "0.875rem",
                color: "var(--fg)",
                fontFamily: "var(--font-geist-mono)",
              }}
            >
              {title}
            </span>
            {tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontSize: "0.65rem",
                  padding: "2px 6px",
                  borderRadius: "4px",
                  background: "#1a1a1a",
                  border: "1px solid var(--border)",
                  color: "var(--muted)",
                  fontFamily: "var(--font-geist-mono)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
          {/* Summary */}
          <p style={{ fontSize: "0.85rem", color: "var(--muted)", lineHeight: 1.6 }}>
            {summary}
          </p>
        </div>

        {/* Chevron */}
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          style={{ color: "var(--muted)", flexShrink: 0, marginTop: "2px", lineHeight: 0 }}
        >
          <FiChevronDown size={15} />
        </motion.div>
      </div>

      {/* Expandable details */}
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
            <div style={{ padding: "14px 16px", borderTop: "1px solid var(--border)" }}>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                {descriptionPoints.map((point, i) => (
                  <li
                    key={i}
                    style={{ display: "flex", gap: "8px", fontSize: "0.85rem", color: "var(--muted)", lineHeight: 1.6 }}
                  >
                    <span style={{ color: "var(--accent)", flexShrink: 0 }}>›</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer links — always visible */}
      <div
        style={{
          padding: "10px 16px",
          borderTop: "1px solid var(--border)",
          display: "flex",
          alignItems: "center",
          gap: "16px",
        }}
      >
        {githubUrl && (
          <a
            href={githubUrl}
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
            Repo
          </a>
        )}
        {liveUrl && (
          <a
            href={liveUrl}
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
            <FiExternalLink size={12} />
            Visit
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
