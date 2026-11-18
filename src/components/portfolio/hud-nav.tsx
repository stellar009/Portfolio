"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NAV_ITEMS, PROFILE } from "./data";

/**
 * Fixed HUD navigation bar with scroll progress line,
 * active section tracking, and a mobile drawer.
 */
export function HudNav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 28 });

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const sections = NAV_ITEMS.map((n) => document.getElementById(n.id));
      let current = "";
      for (const s of sections) {
        if (s && s.getBoundingClientRect().top <= 140) current = s.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-pgr-bg/90 backdrop-blur-md border-b border-pgr-line"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      {/* scroll progress */}
      <motion.div
        style={{ scaleX: progress }}
        className="absolute bottom-0 left-0 h-[2px] w-full origin-left bg-pgr-cyan"
        aria-hidden="true"
      />
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        {/* Logo */}
        <a href="#top" className="group flex items-center gap-3">
          <span className="relative grid h-8 w-8 place-items-center border border-pgr-cyan/60 clip-btn-sm">
            <span className="font-display text-[10px] text-pgr-cyan">DV</span>
            <span className="absolute -right-[3px] -top-[3px] h-1.5 w-1.5 bg-pgr-cyan pulse-dot" />
          </span>
          <span className="hidden sm:block font-display text-xs tracking-[0.18em] text-white">
            {PROFILE.callsign}
            <span className="text-pgr-cyan">{" // "}</span>PORTFOLIO
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={active === item.id ? "true" : undefined}
                className={`group relative flex items-center gap-1.5 px-3 py-2 font-hud text-[11px] tracking-[0.2em] transition-colors ${
                  active === item.id
                    ? "text-pgr-cyan"
                    : "text-pgr-silver hover:text-white"
                }`}
              >
                <span className="text-[9px] text-pgr-dim group-hover:text-pgr-cyan">
                  {item.num}
                </span>
                {item.label}
                <span
                  className={`absolute bottom-0 left-1/2 h-px -translate-x-1/2 bg-pgr-cyan transition-all ${
                    active === item.id ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                  aria-hidden="true"
                />
              </a>
            </li>
          ))}
        </ul>

        {/* Status chip */}
        <div className="hidden lg:flex items-center gap-2 border border-pgr-line px-3 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-pgr-cyan pulse-dot" />
          <span className="font-hud text-[10px] text-pgr-silver tracking-[0.15em]">
            ONLINE
          </span>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="md:hidden grid h-10 w-10 place-items-center border border-pgr-line text-pgr-silver hover:text-pgr-cyan hover:border-pgr-cyan/50 transition-colors"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden border-t border-pgr-line bg-pgr-bg/95 backdrop-blur-md">
          <ul className="px-4 py-3 space-y-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-3 px-3 py-3 font-hud text-sm tracking-[0.2em] ${
                    active === item.id
                      ? "text-pgr-cyan bg-pgr-panel"
                      : "text-pgr-silver"
                  }`}
                >
                  <span className="text-[10px] text-pgr-dim">{item.num}</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
