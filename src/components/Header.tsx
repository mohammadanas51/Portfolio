"use client";

import React, { useState, useEffect } from "react";
import { DiGithubBadge } from "react-icons/di";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoIosDocument } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";

function Header() {
  const [copied, setCopied] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
        <span
          style={{
            fontFamily: "var(--font-geist-mono)",
            fontSize: "0.875rem",
            fontWeight: 600,
            letterSpacing: "-0.01em",
            color: "var(--fg)",
          }}
        >
          anas.dev
        </span>

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
          ].map(({ href, label, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              title={label}
              style={{ color: "var(--muted)", transition: "color 0.2s", lineHeight: 0 }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#fff")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--muted)")}
            >
              {icon}
            </a>
          ))}
          <button
            onClick={handleEmailCopy}
            title={copied ? "Copied!" : "Copy email"}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "var(--muted)",
              lineHeight: 0,
              padding: 0,
              position: "relative",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#fff")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--muted)")}
          >
            <MdOutlineEmail size={19} />
            {copied && (
              <span
                style={{
                  position: "absolute",
                  bottom: "-32px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  fontSize: "0.7rem",
                  padding: "3px 8px",
                  borderRadius: "4px",
                  whiteSpace: "nowrap",
                  background: "var(--card-bg)",
                  border: "1px solid var(--border)",
                  color: "var(--fg)",
                  fontFamily: "var(--font-geist-mono)",
                }}
              >
                copied!
              </span>
            )}
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
