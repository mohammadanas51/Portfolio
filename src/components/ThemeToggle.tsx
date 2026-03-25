"use client";

import React, { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Sun, Moon } from "lucide-react";
import { useEntranceReady } from "@/lib/useEntranceReady";

type Theme = "dark" | "light";

const STORAGE_KEY = "theme";
const THEME_SWITCH_TRANSITION_MS = 260;

function readInitialTheme(): Theme {
  if (typeof window === "undefined") return "dark";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored === "light" || stored === "dark" ? stored : "dark";
}

export default function ThemeToggle() {
  const reduce = useReducedMotion();
  const entranceReady = useEntranceReady();

  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const initial = readInitialTheme();
    setTheme(initial);
    document.documentElement.dataset.theme = initial;
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.add("theme-transition");
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Ignore storage failures (incognito, blocked, etc.)
    }
    document.documentElement.dataset.theme = next;
    window.setTimeout(() => {
      document.documentElement.classList.remove("theme-transition");
    }, THEME_SWITCH_TRANSITION_MS);
  };

  const icon = theme === "dark" ? <Sun size={17} /> : <Moon size={17} />;
  const label = theme === "dark" ? "Switch to light mode" : "Switch to dark mode";

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      initial={reduce ? false : { opacity: 0, y: -8 }}
      animate={
        entranceReady ? { opacity: 1, y: 0 } : { opacity: 0, y: reduce ? 0 : -8 }
      }
      transition={reduce ? { duration: 0 } : { delay: 0.25, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      whileHover={reduce ? undefined : { y: -2, color: "#fff" }}
      whileTap={reduce ? undefined : { scale: 0.92 }}
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        color: "var(--muted)",
        lineHeight: 0,
        padding: 0,
        display: "flex",
        alignItems: "center",
      }}
    >
      {icon}
    </motion.button>
  );
}

