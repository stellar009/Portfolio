"use client";

import { ExternalLink, Download, Github } from "lucide-react";
import { SectionHeader, Reveal } from "./section-header";
import { PROJECTS, type Project } from "./data";

const ACCENTS: Record<
  Project["accent"],
  { text: string; border: string; bg: string; bar: string }
> = {
  cyan: {
    text: "text-pgr-cyan",
    border: "hover:border-pgr-cyan/60",
    bg: "bg-pgr-cyan",
    bar: "bg-pgr-cyan/70",
  },
  red: {
    text: "text-pgr-red",
    border: "hover:border-pgr-red/60",
    bg: "bg-pgr-red",
    bar: "bg-pgr-red/70",
  },
  amber: {
    text: "text-pgr-amber",
    border: "hover:border-pgr-amber/60",
    bg: "bg-pgr-amber",
    bar: "bg-pgr-amber/70",
  },
};

const LINK_ICONS: Record<string, typeof Download> = {
  DOWNLOAD: Download,
  "PLAY LIVE": ExternalLink,
  SOURCE: Github,
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const a = ACCENTS[project.accent];
  return (
    <Reveal delay={index * 0.05}>
      <article
        id={project.id}
        className={`hud-corners group relative overflow-hidden border border-pgr-line bg-pgr-panel/70 transition-colors ${a.border}`}
      >
        {/* accent edge */}
        <span
          className={`absolute inset-y-0 left-0 w-[3px] ${a.bar}`}
          aria-hidden="true"
        />
        {/* watermark code */}
        <span
          className={`pointer-events-none absolute -right-2 -top-6 select-none font-display text-[6rem] leading-none opacity-[0.05] ${a.text}`}
          aria-hidden="true"
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        <div className="p-6 md:p-9">
          {/* Header row */}
          <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
            <div>
              <div className="mb-2 flex flex-wrap items-center gap-3">
                <span className={`font-hud text-[10px] tracking-[0.3em] ${a.text}`}>
                  {project.code}
                </span>
                <span className="data-line w-10" aria-hidden="true" />
                <span className="font-hud text-[10px] tracking-[0.15em] text-pgr-dim">
                  {project.type.toUpperCase()}
                </span>
              </div>
              <h3 className="font-display text-xl sm:text-2xl md:text-3xl tracking-[0.06em] text-white">
                {project.name}
              </h3>
              <p className="mt-2 font-hud text-[11px] tracking-[0.12em] text-pgr-silver">
                {project.role.toUpperCase()}
              </p>
            </div>
            <span className="border border-pgr-line bg-pgr-bg/70 px-3 py-1.5 font-hud text-[10px] tracking-[0.15em] text-pgr-silver">
              {project.period}
            </span>
          </div>

          <p className="mb-7 max-w-3xl font-body text-base font-medium leading-relaxed text-pgr-silver">
            {project.description}
          </p>

          {/* Mission log */}
          <div className="mb-7 border border-pgr-line bg-pgr-bg/60">
            <div className="border-b border-pgr-line px-4 py-2.5">
              <span className={`font-hud text-[10px] tracking-[0.3em] ${a.text}`}>
                MISSION LOG {'///'} KEY RESULTS
              </span>
            </div>
            <ul className="space-y-3 p-4 md:p-5">
              {project.highlights.map((h, i) => (
                <li key={i} className="flex gap-3">
                  <span
                    className={`mt-1 shrink-0 font-hud text-[10px] ${a.text}`}
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="font-body text-sm font-medium leading-relaxed text-pgr-silver">
                    {h}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Stack + links */}
          <div className="flex flex-wrap items-center justify-between gap-5">
            <ul className="flex flex-wrap gap-2" aria-label="Tech stack">
              {project.stack.map((s) => (
                <li
                  key={s}
                  className={`clip-tag border border-pgr-linebright/50 bg-pgr-bg/70 px-2.5 py-1 font-hud text-[10px] tracking-[0.08em] text-pgr-silver`}
                >
                  {s}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              {project.links.map((l) => {
                const Icon = LINK_ICONS[l.label] ?? Download;
                return (
                  <a
                    key={l.label}
                    href={l.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`clip-btn-sm inline-flex items-center gap-2 border px-4 py-2.5 font-hud text-[11px] tracking-[0.18em] transition-all ${
                      l.label === "SOURCE"
                        ? "border-pgr-linebright/60 text-pgr-silver hover:border-pgr-cyan hover:text-pgr-cyan"
                        : `${a.text} border-current/40 bg-current/10 hover:brightness-125`
                    }`}
                    style={
                      l.label !== "SOURCE"
                        ? {
                            borderColor: "rgba(255,255,255,0.18)",
                            backgroundColor: "rgba(255,255,255,0.04)",
                          }
                        : undefined
                    }
                  >
                    <Icon className="h-3.5 w-3.5" />
                    {l.label}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export function Projects() {
  return (
    <section
      id="projects"
      aria-label="Projects"
      className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28"
    >
      <SectionHeader
        num="03"
        title="PROJECTS"
        subtitle="MISSION ARCHIVE"
      />
      <Reveal className="mb-10">
        <p className="max-w-xl font-body text-base md:text-lg font-medium text-pgr-silver">
          A mix of shipped titles, in-development work, and game-jam sprints.
        </p>
      </Reveal>
      <div className="space-y-8 md:space-y-10">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}
