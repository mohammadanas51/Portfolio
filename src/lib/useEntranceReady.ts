"use client";

import { useEffect, useState } from "react";
import { PORTFOLIO_ENTRANCE_READY_EVENT, PORTFOLIO_LOADER_ID } from "@/lib/page-loader-events";

/**
 * `false` until the initial full-page loader has finished its exit (or no loader is present).
 * Use this to delay `animate="show"` so motion runs after the overlay is gone.
 */
export function useEntranceReady() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const loader = document.getElementById(PORTFOLIO_LOADER_ID);
    if (!loader) {
      setReady(true);
      return;
    }

    const onReady = () => setReady(true);
    window.addEventListener(PORTFOLIO_ENTRANCE_READY_EVENT, onReady);
    return () => window.removeEventListener(PORTFOLIO_ENTRANCE_READY_EVENT, onReady);
  }, []);

  return ready;
}
