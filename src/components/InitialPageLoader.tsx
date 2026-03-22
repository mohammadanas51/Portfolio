"use client";

import { useLayoutEffect, useRef, useState } from "react";
import {
  PORTFOLIO_ENTRANCE_READY_EVENT,
  PORTFOLIO_LOADER_ID,
} from "@/lib/page-loader-events";

const MIN_VISIBLE_MS = 720;
const EXIT_TRANSITION_MS = 400;
const EXIT_TRANSITION_REDUCED_MS = 120;

/** Visible % on first frame (avoids sub-pixel “idle” bar). */
const LOADER_START_PCT = 5;
/** Minimum crawl while exponential is still near zero. % per ms (~10%/s). */
const LOADER_LINEAR_FLOOR_PER_MS = 0.01;

/**
 * Game-style creep toward `cap`: exponential slowdown, but never below a visible
 * starting width or linear floor (no long “stuck at empty” phase).
 */
function fakeProgressWhileLoading(elapsedMs: number, cap: number, tau: number): number {
  const exp = cap * (1 - Math.exp(-elapsedMs / tau));
  const linear = elapsedMs * LOADER_LINEAR_FLOOR_PER_MS;
  return Math.min(cap, Math.max(LOADER_START_PCT, exp, linear));
}

export default function InitialPageLoader() {
  const containerRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const mountWallRef = useRef(Date.now());
  const dismissedRef = useRef(false);
  const [ariaNow, setAriaNow] = useState(Math.round(LOADER_START_PCT));
  const [gone, setGone] = useState(false);
  const [exiting, setExiting] = useState(false);

  useLayoutEffect(() => {
    const container = containerRef.current;
    const fill = fillRef.current;
    if (!container || !fill) return;

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    let raf = 0;
    let progress = LOADER_START_PCT;
    fill.style.width = `${progress}%`;
    let loadComplete = document.readyState === "complete";
    const effectStart = performance.now();

    const onLoad = () => {
      loadComplete = true;
    };
    if (!loadComplete) {
      window.addEventListener("load", onLoad, { once: true });
    }

    const exitMs = reduced ? EXIT_TRANSITION_REDUCED_MS : EXIT_TRANSITION_MS;

    const dismiss = () => {
      if (dismissedRef.current) return;
      dismissedRef.current = true;
      cancelAnimationFrame(raf);
      setExiting(true);
      window.setTimeout(() => {
        window.dispatchEvent(new CustomEvent(PORTFOLIO_ENTRANCE_READY_EVENT));
        setGone(true);
      }, exitMs + 40);
    };

    let lastAria = Math.round(LOADER_START_PCT);
    const tick = () => {
      if (dismissedRef.current) return;

      const elapsed = performance.now() - effectStart;
      const wallElapsed = Date.now() - mountWallRef.current;
      const minOk = wallElapsed >= MIN_VISIBLE_MS;

      if (!loadComplete) {
        if (reduced) {
          progress = Math.min(82, Math.max(LOADER_START_PCT, elapsed * 0.02));
        } else {
          progress = fakeProgressWhileLoading(elapsed, 88, 5200);
        }
      } else if (reduced) {
        progress = 100;
      } else {
        const target = 100;
        progress += (target - progress) * 0.065;
        if (progress > 99.97) progress = 100;
      }

      fill.style.width = `${progress}%`;
      const rounded = Math.min(100, Math.round(progress));
      if (rounded !== lastAria) {
        lastAria = rounded;
        setAriaNow(rounded);
      }

      if (loadComplete && progress >= 100 && minOk) {
        dismiss();
        return;
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("load", onLoad);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (gone) return null;

  return (
    <div
      ref={containerRef}
      id={PORTFOLIO_LOADER_ID}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={ariaNow}
      aria-valuetext={`${ariaNow}% loaded`}
      aria-busy={!exiting && ariaNow < 100}
      className={exiting ? "portfolio-page-loader--exiting" : undefined}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 2147483646,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
        background: "var(--bg)",
      }}
    >
      <div className="portfolio-loader__linear-track" aria-hidden>
        <div
          ref={fillRef}
          className="portfolio-loader__linear-fill portfolio-loader__linear-fill--determinate"
          style={{ width: `${LOADER_START_PCT}%` }}
        />
      </div>
      <p
        style={{
          margin: 0,
          fontSize: "0.75rem",
          fontWeight: 600,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "var(--muted)",
          fontFamily: "var(--font-geist-mono), ui-monospace, monospace",
        }}
      >
        Loading
      </p>
    </div>
  );
}
