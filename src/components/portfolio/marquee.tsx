"use client";

import { MARQUEE_ITEMS } from "./data";

/**
 * Infinite tech-spec marquee strip separating hero from content.
 */
export function Marquee() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div
      className="relative z-10 overflow-hidden border-y border-pgr-line bg-pgr-panel/70 py-3"
      aria-hidden="true"
    >
      <div className="marquee-track flex w-max items-center gap-8 whitespace-nowrap">
        {items.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-8 font-hud text-[11px] tracking-[0.25em] text-pgr-dim"
          >
            {item}
            <span className="slash-deco text-pgr-cyan/50">/</span>
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-pgr-bg to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-pgr-bg to-transparent" />
    </div>
  );
}
