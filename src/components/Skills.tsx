"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { fadeUpItemVariants, sectionRevealVariants, viewportOnce } from "@/lib/motion";
import { useEntranceReady } from "@/lib/useEntranceReady";
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
  // { icon: SiRedux, label: "Redux", color: "#764ABC" },
  { icon: SiGit, label: "Git", color: "#F05032" },
];

function Skills() {
  const reduce = useReducedMotion();
  const entranceReady = useEntranceReady();

  const chipList = {
    hidden: {},
    show: {
      transition: reduce ? { duration: 0 } : { staggerChildren: 0.04, delayChildren: 0.08 },
    },
  };

  return (
    <motion.section
      variants={sectionRevealVariants(reduce)}
      initial="hidden"
      animate={entranceReady ? undefined : "hidden"}
      whileInView={entranceReady ? "show" : undefined}
      viewport={viewportOnce}
      style={{ padding: "40px 0", borderTop: "1px solid var(--border)" }}
    >
      <motion.p
        variants={fadeUpItemVariants(reduce)}
        style={{
          fontSize: "0.7rem",
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: "0.12em",
          marginBottom: "20px",
          color: "var(--muted)",
          fontFamily: "var(--font-geist-mono)",
        }}
      >
        Tech Stack
      </motion.p>

      <motion.div
        variants={chipList}
        style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}
      >
        {skills.map(({ icon: Icon, label, color }) => (
          <motion.span
            key={label}
            variants={fadeUpItemVariants(reduce)}
            whileHover={
              reduce
                ? undefined
                : {
                    scale: 1.05,
                    y: -3,
                    borderColor: "#71717a",
                    color: "#fff",
                  }
            }
            whileTap={reduce ? undefined : { scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 22 }}
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
            }}
          >
            <motion.span
              aria-hidden
              whileHover={reduce ? undefined : { rotate: [0, -8, 8, 0] }}
              transition={{ duration: 0.45 }}
              style={{ display: "inline-flex", lineHeight: 0 }}
            >
              <Icon size={12} style={{ color, flexShrink: 0 }} />
            </motion.span>
            {label}
          </motion.span>
        ))}
      </motion.div>
    </motion.section>
  );
}

export default Skills;
