"use client";

import React from "react";
import { motion } from "motion/react";
import {
  SiReact, SiNextdotjs, SiTypescript, SiNodedotjs, SiExpress,
  SiMongodb, SiMysql, SiFirebase, SiGit, SiTailwindcss, SiJavascript, SiRedux,
} from "react-icons/si";

const skills = [
  { icon: SiReact, label: "React", color: "#61DAFB" },
  { icon: SiNextdotjs, label: "Next.js", color: "#ffffff" },
  { icon: SiTypescript, label: "TypeScript", color: "#3178C6" },
  { icon: SiJavascript, label: "JavaScript", color: "#F7DF1E" },
  { icon: SiNodedotjs, label: "Node.js", color: "#339933" },
  { icon: SiExpress, label: "Express", color: "#ffffff" },
  { icon: SiMongodb, label: "MongoDB", color: "#47A248" },
  { icon: SiMysql, label: "MySQL", color: "#4479A1" },
  { icon: SiFirebase, label: "Firebase", color: "#FFCA28" },
  { icon: SiTailwindcss, label: "Tailwind", color: "#06B6D4" },
  { icon: SiGit, label: "Git", color: "#F05032" },
];

function Skills() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
      style={{ padding: "40px 0", borderTop: "1px solid var(--border)" }}
    >
      <p
        style={{
          fontSize: "1rem",
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: "0.12em",
          marginBottom: "20px",
          color: "var(--muted)",
          fontFamily: "var(--font-geist-mono)",
        }}
      >
        Tech Stack
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
        {skills.map(({ icon: Icon, label, color }) => (
          <span
            key={label}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "0.8rem",
              padding: "6px 12px",
              borderRadius: "9999px",
              border: "1px solid var(--border)",
              background: "var(--card-bg)",
              color: "var(--muted)",
              fontFamily: "var(--font-geist-mono)",
              cursor: "default",
              transition: "border-color 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "#71717a";
              (e.currentTarget as HTMLElement).style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
              (e.currentTarget as HTMLElement).style.color = "var(--muted)";
            }}
          >
            <Icon size={12} style={{ color, flexShrink: 0 }} />
            {label}
          </span>
        ))}
      </div>
    </motion.section>
  );
}

export default Skills;
