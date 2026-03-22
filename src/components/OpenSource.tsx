"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import OpenSourceCard from "./OpenSourceCards";
import { fadeUpItemVariants, sectionRevealVariants, viewportOnce } from "@/lib/motion";
import { useEntranceReady } from "@/lib/useEntranceReady";

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
  const reduce = useReducedMotion();
  const entranceReady = useEntranceReady();

  const cardList = {
    hidden: {},
    show: {
      transition: reduce ? { duration: 0 } : { staggerChildren: 0.06, delayChildren: 0.05 },
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
        Open Source
      </motion.p>

      <motion.div variants={cardList}>
        {contributions.map((c) => (
          <motion.div key={c.prUrl} variants={fadeUpItemVariants(reduce)}>
            <OpenSourceCard {...c} />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}

export default OpenSource;
