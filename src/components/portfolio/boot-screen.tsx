"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const BOOT_LINES = [
  "> CONNECTED WITH ASTRIX NETWORK",
  "> INITIALIZING COMMAND UNIT ...",
  "> LOADING RENDER PIPELINE [URP] ... OK",
  "> COMPILING SHADER VARIANTS ... OK",
  "> ESTABLISHING CONSTRUCT LINK ...",
  "> WELCOME, COMMANDANT.",
];

/**
 * PGR-style system boot overlay. Plays once on first load,
 * auto-dismisses, and can be skipped by click.
 */
export function BootScreen() {
  const [visible, setVisible] = useState(true);
  const [lines, setLines] = useState(0);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      timers.push(setTimeout(() => setVisible(false), 0));
      return () => timers.forEach(clearTimeout);
    }
    BOOT_LINES.forEach((_, i) => {
      timers.push(
        setTimeout(() => setLines(i + 1), 150 * (i + 1))
      );
    });
    timers.push(setTimeout(() => setVisible(false), 150 * BOOT_LINES.length + 900));
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="boot"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => setVisible(false)}
          className="fixed inset-0 z-[100] bg-pgr-bg flex items-center justify-center cursor-pointer"
          role="dialog"
          aria-label="System initializing. Click to skip."
        >
          <div className="pgr-grid absolute inset-0 opacity-60" aria-hidden="true" />
          <div className="relative w-[min(90vw,480px)]">
            <div className="hud-corners-4 border border-pgr-line bg-pgr-panel/80 p-5 md:p-7">
              <div className="flex items-center justify-between mb-5">
                <span className="font-hud text-[10px] md:text-xs text-pgr-cyan tracking-[0.3em]">
                  SYSTEM BOOT
                </span>
                <span className="font-hud text-[10px] md:text-xs text-pgr-dim tracking-[0.2em] blink">
                  _
                </span>
              </div>
              <div className="font-hud text-[11px] md:text-sm text-pgr-silver space-y-1.5 min-h-[150px]">
                {BOOT_LINES.slice(0, lines).map((line, i) => (
                  <motion.p
                    key={line}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className={
                      i === BOOT_LINES.length - 1 ? "text-pgr-cyan" : undefined
                    }
                  >
                    {line}
                  </motion.p>
                ))}
              </div>
              <div className="mt-5 h-[3px] w-full bg-pgr-panel2 overflow-hidden">
                <motion.div
                  className="h-full bg-pgr-cyan"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{
                    duration: 0.15 * BOOT_LINES.length + 0.6,
                    ease: "easeInOut",
                  }}
                />
              </div>
              <p className="mt-3 font-hud text-[10px] text-pgr-dim tracking-[0.2em] text-right">
                CLICK TO SKIP
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
