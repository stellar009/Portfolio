"use client";

import { ArrowUp } from "lucide-react";
import { NAV_ITEMS, PROFILE } from "./data";

export function SiteFooter() {
  return (
    <footer className="relative border-t border-pgr-line bg-pgr-panel/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div className="text-center md:text-left">
            <p className="font-display text-xs tracking-[0.2em] text-white">
              {PROFILE.callsign}
              <span className="text-pgr-cyan">{" // "}</span>
              {PROFILE.name}
            </p>
            <p className="mt-2 font-hud text-[10px] tracking-[0.2em] text-pgr-dim">
              UNITY GAME DEVELOPER PORTFOLIO — © 2026 {PROFILE.name.toUpperCase()}
            </p>
          </div>

          <nav aria-label="Footer" className="hidden md:block">
            <ul className="flex items-center gap-5">
              {NAV_ITEMS.map((n) => (
                <li key={n.id}>
                  <a
                    href={`#${n.id}`}
                    className="font-hud text-[10px] tracking-[0.2em] text-pgr-dim transition-colors hover:text-pgr-cyan"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href="#top"
            aria-label="Back to top"
            className="clip-btn-sm grid h-11 w-11 place-items-center border border-pgr-linebright/60 text-pgr-silver transition-all hover:border-pgr-cyan hover:text-pgr-cyan"
          >
            <ArrowUp className="h-4.5 w-4.5" />
          </a>
        </div>
      </div>
      <div
        className="h-[3px] w-full bg-gradient-to-r from-transparent via-pgr-cyan/60 to-transparent"
        aria-hidden="true"
      />
    </footer>
  );
}
