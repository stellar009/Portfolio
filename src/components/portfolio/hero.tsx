"use client";

import { motion } from "framer-motion";
import { ChevronDown, Mail, FolderGit2, FileDown } from "lucide-react";
import { ParticleField } from "./particle-field";
import { PROFILE, STATS, RESUME } from "./data";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (d: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: d, ease: "easeOut" as const },
  }),
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
      aria-label="Introduction"
    >
      {/* Backgrounds */}
      <div className="pgr-grid absolute inset-0" aria-hidden="true" />
      <ParticleField density={80} />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(8,9,9,0.7)_78%)]"
        aria-hidden="true"
      />
      {/* cyan corner glow */}
      <div
        className="absolute -top-32 right-0 h-96 w-96 rounded-full bg-pgr-cyan/10 blur-[120px]"
        aria-hidden="true"
      />

      {/* Left vertical deco */}
      <div
        className="vertical-rl absolute left-4 top-1/2 hidden -translate-y-1/2 select-none font-hud text-[10px] tracking-[0.4em] text-pgr-dim lg:block"
        aria-hidden="true"
      >
        NODE {"//"} {PROFILE.location.toUpperCase()} — 19.0760° N / 72.8777° E
      </div>
      {/* Right vertical deco */}
      <div
        className="vertical-rl absolute right-4 top-1/2 hidden -translate-y-1/2 rotate-180 select-none font-hud text-[10px] tracking-[0.4em] text-pgr-dim lg:block"
        aria-hidden="true"
      >
        FRAME RATE {'>'} STABILITY {'>'} FEATURES
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl">
          {/* Status line */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.1}
            className="mb-6 inline-flex items-center gap-2.5 border border-pgr-cyan/40 bg-pgr-cyan/5 px-3 py-1.5"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-pgr-cyan pulse-dot" />
            <span className="font-hud text-[10px] sm:text-xs text-white tracking-[0.22em]">
              {PROFILE.status}
            </span>
          </motion.div>

          {/* Name with glitch */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.2}
            className="font-hud text-xs sm:text-sm text-pgr-silver tracking-[0.35em] mb-4"
          >
            <span className="slash-deco">{"///"}</span> DEVELOPER PROFILE DETECTED
          </motion.p>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.3}
            className="font-display leading-[1.08] text-white"
            aria-label="DHEERAJ VISHWAKARMA"
          >
            <span
              aria-hidden="true"
              className="glitch block text-[clamp(1.6rem,6vw,4.2rem)] tracking-[0.06em]"
              data-text="DHEERAJ"
            >
              DHEERAJ
            </span>
            <span
              aria-hidden="true"
              className="glitch block text-[clamp(1.6rem,6vw,4.2rem)] tracking-[0.06em] text-pgr-cyan glow-cyan"
              data-text="VISHWAKARMA"
            >
              VISHWAKARMA
            </span>
          </motion.h1>

          {/* Role */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.45}
            className="mt-6 font-display text-[clamp(0.7rem,1.6vw,1rem)] tracking-[0.22em] text-pgr-silver"
          >
            {PROFILE.role.toUpperCase()}
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.55}
            className="mt-4 max-w-2xl text-base sm:text-lg font-body font-medium text-pgr-silver leading-relaxed"
          >
            {PROFILE.intro}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.68}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="clip-btn group inline-flex items-center gap-2.5 bg-pgr-cyan px-7 py-3.5 font-hud text-xs sm:text-sm tracking-[0.2em] text-pgr-bg transition-all hover:bg-white hover:shadow-[0_0_30px_rgba(89,214,255,0.35)]"
            >
              <FolderGit2 className="h-4 w-4" />
              VIEW PROJECTS
            </a>
            <a
              href={RESUME.url}
              download={RESUME.filename}
              className="clip-btn group inline-flex items-center gap-2.5 border border-pgr-linebright bg-pgr-panel/60 px-7 py-3.5 font-hud text-xs sm:text-sm tracking-[0.2em] text-pgr-white backdrop-blur-sm transition-all hover:border-pgr-cyan hover:text-pgr-cyan"
            >
              <FileDown className="h-4 w-4" />
              RESUME
            </a>
            <a
              href="#contact"
              className="clip-btn group inline-flex items-center gap-2.5 border border-pgr-linebright bg-pgr-panel/60 px-7 py-3.5 font-hud text-xs sm:text-sm tracking-[0.2em] text-pgr-white backdrop-blur-sm transition-all hover:border-pgr-cyan hover:text-pgr-cyan"
            >
              <Mail className="h-4 w-4" />
              GET IN TOUCH
            </a>
          </motion.div>

          {/* Stats */}
          <motion.dl
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.82}
            className="mt-14 grid max-w-2xl grid-cols-1 gap-px border border-pgr-line bg-pgr-line sm:grid-cols-3"
          >
            {STATS.map((s) => (
              <div
                key={s.label}
                className="scan-sweep bg-pgr-panel/80 px-5 py-5 text-center sm:text-left"
              >
                <dt className="order-2 font-hud text-[10px] tracking-[0.18em] text-pgr-dim mt-1">
                  {s.label}
                </dt>
                <dd className="order-1 font-display text-2xl sm:text-3xl text-pgr-cyan">
                  {s.value}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-pgr-dim hover:text-pgr-cyan transition-colors"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          className="block"
        >
          <ChevronDown className="h-6 w-6" />
        </motion.span>
      </motion.a>
    </section>
  );
}
