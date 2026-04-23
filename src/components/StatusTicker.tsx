 "use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const STATUSES: string[] = [
  "Status: Online",
  "Framework: Next.js",
  "Runtime: Node.js",
  "Mode: Clean Room",
  "Discipline: Systems Engineering",
];

const TICK_INTERVAL_MS = 2600;

export function StatusTicker() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((previous) => (previous + 1) % STATUSES.length);
    }, TICK_INTERVAL_MS);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const current = STATUSES[index];

  return (
    <div className="mono inline-flex items-center border border-[var(--color-border-subtle)] px-3 py-1 text-[11px] text-white/80 overflow-hidden min-w-[180px]">
      <span className="mr-2 h-1.5 w-1.5 rounded-full bg-emerald-400" />
      <div className="relative h-[1.1em] overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={current}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="block"
          >
            {current}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
}

