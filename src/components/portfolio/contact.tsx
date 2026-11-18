"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, Gamepad2, Send, FileDown } from "lucide-react";
import { SectionHeader, Reveal } from "./section-header";
import { PROFILE, RESUME } from "./data";

const LINKS = [
  {
    icon: Github,
    label: "GITHUB",
    value: PROFILE.githubHandle,
    href: PROFILE.github,
  },
  {
    icon: Linkedin,
    label: "LINKEDIN",
    value: PROFILE.linkedinHandle,
    href: PROFILE.linkedin,
  },
  {
    icon: Gamepad2,
    label: "ITCH.IO",
    value: PROFILE.itchHandle,
    href: PROFILE.itch,
  },
  {
    icon: FileDown,
    label: "RESUME",
    value: RESUME.label,
    href: RESUME.url,
    download: RESUME.filename,
  },
  {
    icon: Mail,
    label: "EMAIL",
    value: PROFILE.email,
    href: `mailto:${PROFILE.email}`,
  },
  {
    icon: Phone,
    label: "PHONE",
    value: PROFILE.phone,
    href: `tel:${PROFILE.phoneHref}`,
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      aria-label="Contact"
      className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28"
    >
      <SectionHeader num="05" title="CONTACT" subtitle="COMM LINK" />

      <div className="grid gap-10 lg:grid-cols-5">
        {/* CTA panel */}
        <Reveal className="lg:col-span-3">
          <div className="hud-corners-4 relative h-full overflow-hidden border border-pgr-line bg-pgr-panel/70 p-8 md:p-10">
            <div
              className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-pgr-cyan/10 blur-[90px]"
              aria-hidden="true"
            />
            <p className="font-hud text-[10px] tracking-[0.3em] text-pgr-cyan">
              OPEN TO ENTRY-LEVEL UNITY GAME-DEV ROLES AND COLLABORATIVE
              PROJECTS
            </p>
            <h3 className="mt-5 font-display text-2xl sm:text-3xl md:text-4xl leading-tight tracking-[0.05em] text-white">
              LET&apos;S BUILD SOMETHING
              <br />
              <span className="text-pgr-cyan glow-cyan">PLAYERS REMEMBER.</span>
            </h3>
            <p className="mt-6 max-w-lg font-body text-base md:text-lg font-medium leading-relaxed text-pgr-silver">
              Whether you&apos;re hiring for a Unity role, planning a game jam
              team, or just want to talk shaders and rendering pipelines — my
              inbox is open. I usually reply within a day.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <motion.a
                href={`mailto:${PROFILE.email}`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="clip-btn inline-flex items-center gap-2.5 bg-pgr-cyan px-7 py-3.5 font-hud text-xs sm:text-sm tracking-[0.2em] text-pgr-bg transition-colors hover:bg-white"
              >
                <Send className="h-4 w-4" />
                SEND TRANSMISSION
              </motion.a>
            </div>
            <p className="mt-8 font-hud text-xs tracking-[0.12em] text-pgr-silver">
              <a
                href={`mailto:${PROFILE.email}`}
                className="text-pgr-cyan hover:text-white transition-colors underline-offset-4 hover:underline"
              >
                {PROFILE.email}
              </a>
            </p>
          </div>
        </Reveal>

        {/* Comms directory */}
        <Reveal delay={0.12} className="lg:col-span-2">
          <div className="h-full border border-pgr-line bg-pgr-panel/70">
            <div className="border-b border-pgr-line bg-pgr-panel2/80 px-6 py-4">
              <span className="font-hud text-[10px] tracking-[0.3em] text-pgr-cyan">
                COMMS DIRECTORY
              </span>
            </div>
            <ul className="divide-y divide-pgr-line">
              {LINKS.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target={l.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      l.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    download={l.download}
                    className="group flex items-center gap-4 px-6 py-4 transition-colors hover:bg-pgr-cyan/5"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center border border-pgr-linebright/50 text-pgr-cyan transition-colors group-hover:border-pgr-cyan group-hover:bg-pgr-cyan group-hover:text-pgr-bg">
                      <l.icon className="h-4.5 w-4.5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-hud text-[9px] tracking-[0.25em] text-pgr-dim">
                        {l.label}
                      </span>
                      <span className="block truncate font-body text-sm font-semibold text-pgr-white group-hover:text-pgr-cyan transition-colors">
                        {l.value}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
