"use client";

import React from "react";
import { motion } from "motion/react";
import OpenSourceCard from "./OpenSourceCards";

const contributions = [
  {
    repo: "Shubhashish-Chakraborty/prepnerdz",
    prNumber: "96",
    prUrl: "https://github.com/Shubhashish-Chakraborty/prepnerdz/pull/96",
    description: "Fixed a UI bug where the content behind the sidebar would turn black, causing poor readability.",
  },
  {
    repo: "Shubhashish-Chakraborty/prepnerdz",
    prNumber: "95",
    prUrl: "https://github.com/Shubhashish-Chakraborty/prepnerdz/pull/95",
    description: "Fixed a navbar layout bug that caused a bad UX on mobile viewport widths.",
  },
  {
    repo: "Shubhashish-Chakraborty/prepnerdz",
    prNumber: "63",
    prUrl: "https://github.com/Shubhashish-Chakraborty/prepnerdz/pull/63",
    description: "Added a Confirm Password input field to the Signup Page for better form validation UX.",
  },
  {
    repo: "Shubhashish-Chakraborty/prepnerdz",
    prNumber: "47",
    prUrl: "https://github.com/Shubhashish-Chakraborty/prepnerdz/pull/47",
    description: "Redesigned the 404 Not Found page with an improved layout and better visual hierarchy.",
  },
  {
    repo: "Shubhashish-Chakraborty/prepnerdz",
    prNumber: "42",
    prUrl: "https://github.com/Shubhashish-Chakraborty/prepnerdz/pull/42",
    description: "Added a Testimonial page to the platform, complete with a responsive card grid layout.",
  },
  {
    repo: "kestra-io/plugin-notifications",
    prNumber: "243",
    prUrl: "https://github.com/kestra-io/plugin-notifications/pull/243",
    description: "Fixed the Slack icon's padding to make it consistent across all pages in the plugin.",
  },
  {
    repo: "freeCodeCamp/contribute",
    prNumber: "743",
    prUrl: "https://github.com/freeCodeCamp/contribute/pull/743",
    description: "Added hover effects to the cards on the landing page for improved interactivity and visual feedback.",
  },
];

function OpenSource() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
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
        Open Source
      </p>

      <div>
        {contributions.map((c) => (
          <OpenSourceCard key={c.prUrl} {...c} />
        ))}
      </div>
    </motion.section>
  );
}

export default OpenSource;
