"use client";

import { GraduationCap, BadgeCheck, Trophy, ExternalLink } from "lucide-react";
import { SectionHeader, Reveal } from "./section-header";
import { CREDENTIALS } from "./data";

const CATEGORY_ICONS: Record<string, typeof GraduationCap> = {
  Education: GraduationCap,
  Certification: BadgeCheck,
  "Game Jam": Trophy,
};

export function Credentials() {
  return (
    <section
      id="credentials"
      aria-label="Education and credentials"
      className="relative border-t border-pgr-line bg-pgr-panel/30 py-20 md:py-28"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          num="04"
          title="EDUCATION & CREDENTIALS"
          subtitle="SERVICE RECORD"
        />

        <div className="grid gap-5 md:grid-cols-2">
          {CREDENTIALS.map((c, i) => {
            const Icon = CATEGORY_ICONS[c.category] ?? BadgeCheck;
            return (
              <Reveal key={c.code} delay={i * 0.07}>
                <article className="scan-sweep group flex h-full gap-5 border border-pgr-line bg-pgr-panel/70 p-6 transition-colors hover:border-pgr-cyan/50">
                  <div className="hud-corners-4 relative grid h-14 w-14 shrink-0 place-items-center border border-pgr-linebright/50 bg-pgr-bg/80">
                    <Icon className="h-6 w-6 text-pgr-cyan" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="mb-1.5 flex flex-wrap items-center gap-x-3 gap-y-1">
                      <span className="font-hud text-[10px] tracking-[0.25em] text-pgr-cyan">
                        {c.category.toUpperCase()}
                      </span>
                      <span className="font-hud text-[10px] tracking-[0.15em] text-pgr-dim">
                        {c.code}
                      </span>
                    </div>
                    <h3 className="font-display text-sm md:text-base tracking-[0.04em] text-white">
                      {c.title}
                    </h3>
                    <p className="mt-1.5 font-body text-sm font-semibold text-pgr-silver">
                      {c.org}
                    </p>
                    <p className="mt-1 font-hud text-[11px] tracking-[0.08em] text-pgr-dim">
                      {c.detail}
                    </p>
                    {c.link && (
                      <a
                        href={c.link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex items-center gap-1.5 font-hud text-[10px] tracking-[0.2em] text-pgr-cyan transition-colors hover:text-white"
                      >
                        {c.link.label}
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
