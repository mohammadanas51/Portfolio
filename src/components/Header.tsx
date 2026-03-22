"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { useEntranceReady } from "@/lib/useEntranceReady";
import { DiGithubBadge } from "react-icons/di";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoIosDocument } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";

function Header() {
  const [copied, setCopied] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduce = useReducedMotion();
  const entranceReady = useEntranceReady();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleEmailCopy = () => {
    navigator.clipboard.writeText("mohammad.anas51@hotmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: scrolled ? "rgba(0,0,0,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        transition: "background 0.3s, border-color 0.3s",
      }}
    >
      <div
        style={{
          maxWidth: "768px",
          margin: "0 auto",
          padding: "16px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Name / Logo */}
        <motion.button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          initial={reduce ? false : { opacity: 0, x: -12 }}
          animate={
            entranceReady ? { opacity: 1, x: 0 } : { opacity: 0, x: reduce ? 0 : -12 }
          }
          transition={reduce ? { duration: 0 } : { duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: "var(--font-geist-mono)",
            fontSize: "0.875rem",
            fontWeight: 600,
            letterSpacing: "-0.01em",
            color: "var(--fg)",
            background: "none",
            border: "none",
            padding: 0,
            cursor: "pointer",
            textAlign: "left",
          }}
        >
          mdanas.me
        </motion.button>

        {/* Social Links */}
        <nav style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          {[
            { href: "https://github.com/mohammadanas51", label: "GitHub", icon: <DiGithubBadge size={20} /> },
            { href: "https://www.linkedin.com/in/mohammadanas51", label: "LinkedIn", icon: <FaLinkedin size={17} /> },
            { href: "https://x.com/MA76305", label: "Twitter", icon: <FaTwitter size={17} /> },
            {
              href: "https://drive.google.com/file/d/1PXhTzrtkVTC9MpNYy01sL0SyFfWTYn6g/view",
              label: "Resume",
              icon: <IoIosDocument size={19} />,
            },
          ].map(({ href, label, icon }, i) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              title={label}
              initial={reduce ? false : { opacity: 0, y: -8 }}
              animate={
                entranceReady ? { opacity: 1, y: 0 } : { opacity: 0, y: reduce ? 0 : -8 }
              }
              transition={
                reduce
                  ? { duration: 0 }
                  : { delay: 0.05 + i * 0.05, duration: 0.4, ease: [0.22, 1, 0.36, 1] }
              }
              whileHover={reduce ? undefined : { y: -2, color: "#fff" }}
              whileTap={reduce ? undefined : { scale: 0.92 }}
              style={{ color: "var(--muted)", lineHeight: 0 }}
            >
              {icon}
            </motion.a>
          ))}
          <motion.button
            onClick={handleEmailCopy}
            title={copied ? "Copied!" : "Copy email"}
            initial={reduce ? false : { opacity: 0, y: -8 }}
            animate={
              entranceReady ? { opacity: 1, y: 0 } : { opacity: 0, y: reduce ? 0 : -8 }
            }
            transition={
              reduce
                ? { duration: 0 }
                : { delay: 0.05 + 4 * 0.05, duration: 0.4, ease: [0.22, 1, 0.36, 1] }
            }
            whileHover={reduce ? undefined : { y: -2, color: "#fff" }}
            whileTap={reduce ? undefined : { scale: 0.92 }}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "var(--muted)",
              lineHeight: 1,
              padding: 0,
              position: "relative",
              overflow: "visible",
              display: "flex",
              alignItems: "center",
            }}
          >
            <MdOutlineEmail size={19} />
            <AnimatePresence>
              {copied && (
                <motion.span
                  initial={{ opacity: 0, y: 6, scale: 0.92, x: "-50%" }}
                  animate={{ opacity: 1, y: 0, scale: 1, x: "-50%" }}
                  exit={{ opacity: 0, y: 4, scale: 0.96, x: "-50%" }}
                  transition={{ type: "spring", stiffness: 420, damping: 28 }}
                  style={{
                    position: "absolute",
                    bottom: "-36px",
                    left: "50%",
                    fontSize: "0.7rem",
                    fontWeight: 400,
                    padding: "4px 10px",
                    borderRadius: "6px",
                    whiteSpace: "nowrap",
                    background: "#111111",
                    border: "1px solid #3f3f46",
                    color: "#ffffff",
                    fontFamily: "var(--font-geist-mono)",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
                    lineHeight: 1.4,
                    letterSpacing: "0.01em",
                    pointerEvents: "none",
                  }}
                >
                  copied!
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
