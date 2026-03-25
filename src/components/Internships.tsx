"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { fadeUpItemVariants, sectionRevealVariants, viewportOnce } from "@/lib/motion";
import { useEntranceReady } from "@/lib/useEntranceReady";

const internships = [
  {
    company: "Strackit Pvt Ltd",
    role: "Project Intern",
    dates: "September 2025 – Present",
    location: "Coimbatore, India",
    highlights: [
      "Worked on live client applications using the MERN stack across frontend and backend.",
      "Integrated and consumed GraphQL APIs to build E-commerce applications.",
      "Debugged production issues and enhanced features based on mentor feedback.",
      "Used AI developer tools to improve debugging speed and code quality.",
    ],
  },
  {
    company: "Calanjiyam Consultancies and Technologies",
    role: "Junior Associate Developer",
    dates: "March 2024 – May 2024",
    location: "Remote",
    highlights: [
      "Contributed to HRMS, Project Management, and Logs Maintenance systems.",
      "Worked across frontend and backend using React, JavaScript, PHP, and MySQL.",
    ],
  },
];

function Internships() {
  const reduce = useReducedMotion();
  const entranceReady = useEntranceReady();

  const listVariants = {
    hidden: {},
    show: {
      transition: reduce ? { duration: 0 } : { staggerChildren: 0.1, delayChildren: 0.04 },
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
        Internships
      </motion.p>

      <motion.div variants={listVariants} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {internships.map((job) => (
          <motion.article
            key={`${job.company}-${job.dates}`}
            variants={fadeUpItemVariants(reduce)}
            style={{
              borderRadius: "8px",
              padding: "16px",
              background: "var(--card-bg)",
              border: "1px solid var(--border)",
            }}
          >
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "baseline",
                justifyContent: "space-between",
                gap: "8px",
                marginBottom: "6px",
              }}
            >
              <h2
                style={{
                  margin: 0,
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  color: "var(--fg)",
                  fontFamily: "var(--font-geist-mono)",
                }}
              >
                {job.company}
              </h2>
              <span
                style={{
                  fontSize: "0.7rem",
                  color: "var(--muted)",
                  fontFamily: "var(--font-geist-mono)",
                  whiteSpace: "nowrap",
                }}
              >
                {job.dates}
              </span>
            </div>
            <p
              style={{
                margin: "0 0 4px 0",
                fontSize: "0.8rem",
                fontWeight: 500,
                color: "var(--accent)",
                fontFamily: "var(--font-geist-mono)",
              }}
            >
              {job.role}
            </p>
            <p
              style={{
                margin: "0 0 12px 0",
                fontSize: "0.75rem",
                color: "var(--muted)",
                fontFamily: "var(--font-geist-mono)",
              }}
            >
              {job.location}
            </p>
            <ul
              style={{
                margin: 0,
                paddingLeft: "18px",
                display: "flex",
                flexDirection: "column",
                gap: "6px",
                fontSize: "0.85rem",
                color: "var(--muted)",
                lineHeight: 1.6,
              }}
            >
              {job.highlights.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </motion.article>
        ))}
      </motion.div>
    </motion.section>
  );
}

export default Internships;
