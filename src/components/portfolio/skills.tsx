"use client";

import { Cpu, Code2, Boxes, Wrench, Gauge } from "lucide-react";
import { SectionHeader, Reveal } from "./section-header";
import { SKILLS } from "./data";

const ICONS = [Cpu, Code2, Boxes, Wrench, Gauge];

export function Skills() {
  return (
    <section
      id="skills"
      aria-label="Technical skills"
      className="relative border-t border-pgr-line bg-pgr-panel/30 py-20 md:py-28"
    >
      <div className="pgr-grid absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader num="02" title="TECHNICAL SKILLS" subtitle="CAPABILITY MATRIX" />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((skill, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <Reveal key={skill.code} delay={i * 0.08}>
                <article className="hud-corners scan-sweep group flex h-full flex-col border border-pgr-line bg-pgr-panel/80 p-6 transition-all hover:border-pgr-cyan/50 hover:bg-pgr-panel2/80">
                  <div className="mb-5 flex items-center justify-between">
                    <Icon className="h-6 w-6 text-pgr-cyan" />
                    <span className="font-hud text-[10px] tracking-[0.2em] text-pgr-dim group-hover:text-pgr-cyan transition-colors">
                      {skill.code}
                    </span>
                  </div>
                  <h3 className="font-display text-sm tracking-[0.08em] text-white mb-3">
                    {skill.title.toUpperCase()}
                  </h3>
                  <p className="mb-6 flex-1 font-body text-sm font-medium leading-relaxed text-pgr-silver">
                    {skill.description}
                  </p>
                  <ul className="flex flex-wrap gap-2" aria-label={`${skill.title} tags`}>
                    {skill.tags.map((tag) => (
                      <li
                        key={tag}
                        className="clip-tag border border-pgr-linebright/60 bg-pgr-bg/70 px-2.5 py-1 font-hud text-[10px] tracking-[0.08em] text-pgr-silver transition-colors group-hover:border-pgr-cyan/40"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
