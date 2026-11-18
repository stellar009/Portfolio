"use client";

import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

/**
 * PGR-style section header: numbered index, slashes, display title.
 */
export function SectionHeader({
  num,
  title,
  subtitle,
}: {
  num: string;
  title: string;
  subtitle?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="mb-10 md:mb-14">
      <motion.div
        initial={{ opacity: 0, x: -24 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="flex items-center gap-3"
      >
        <span className="font-hud text-xs md:text-sm text-pgr-cyan tracking-[0.25em]">
          {num}
        </span>
        <span className="slash-deco font-hud text-xs md:text-sm">{"///"}</span>
        <span className="data-line h-px flex-1" aria-hidden="true" />
        {subtitle && (
          <span className="font-hud text-[10px] md:text-xs text-pgr-dim tracking-[0.2em] uppercase">
            {subtitle}
          </span>
        )}
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.55, delay: 0.08, ease: "easeOut" }}
        className="font-display text-white text-2xl sm:text-3xl md:text-4xl tracking-[0.08em] mt-4"
      >
        {title}
      </motion.h2>
    </div>
  );
}

/**
 * Reveal-on-scroll wrapper used across sections.
 */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 26 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
