"use client";

import { MapPin, Crosshair, DoorOpen, ShieldCheck } from "lucide-react";
import { SectionHeader, Reveal } from "./section-header";
import { ABOUT, PROFILE } from "./data";

const META = [
  { icon: MapPin, label: "LOCATION", value: PROFILE.location },
  { icon: Crosshair, label: "FOCUS", value: PROFILE.focus },
  { icon: DoorOpen, label: "OPEN TO", value: PROFILE.openTo },
];

export function About() {
  return (
    <section
      id="about"
      aria-label="About"
      className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28"
    >
      <SectionHeader num="01" title="ABOUT" subtitle="UNIT PROFILE" />

      <div className="grid gap-8 lg:grid-cols-5 lg:gap-10">
        {/* Bio */}
        <Reveal className="lg:col-span-3">
          <div className="hud-corners-4 h-full border border-pgr-line bg-pgr-panel/60 p-6 md:p-8">
            <div className="mb-5 flex items-center gap-3">
              <span className="font-hud text-[10px] tracking-[0.3em] text-pgr-cyan">
                BIO.LOG
              </span>
              <span className="data-line h-px flex-1" aria-hidden="true" />
              <ShieldCheck className="h-4 w-4 text-pgr-cyan" />
            </div>
            {ABOUT.paragraphs.map((p, i) => (
              <p
                key={i}
                className="mb-4 last:mb-0 font-body text-base md:text-lg font-medium leading-relaxed text-pgr-silver"
              >
                {p}
              </p>
            ))}
            <div className="mt-7 grid gap-px border border-pgr-line bg-pgr-line sm:grid-cols-3">
              {META.map((m) => (
                <div key={m.label} className="bg-pgr-bg/90 p-4">
                  <div className="flex items-center gap-2 text-pgr-cyan">
                    <m.icon className="h-3.5 w-3.5" />
                    <span className="font-hud text-[9px] tracking-[0.22em]">
                      {m.label}
                    </span>
                  </div>
                  <p className="mt-2 font-body text-sm font-semibold text-pgr-white">
                    {m.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Quick facts data table */}
        <Reveal delay={0.12} className="lg:col-span-2">
          <div className="h-full border border-pgr-line bg-pgr-panel/60">
            <div className="border-b border-pgr-line bg-pgr-panel2/80 px-6 py-4">
              <span className="font-hud text-[10px] tracking-[0.3em] text-pgr-cyan">
                QUICK_FACTS.TXT
              </span>
            </div>
            <dl className="divide-y divide-pgr-line">
              {ABOUT.quickFacts.map((f) => (
                <div
                  key={f.label}
                  className="group flex items-start gap-4 px-6 py-4 transition-colors hover:bg-pgr-cyan/5"
                >
                  <span className="mt-0.5 shrink-0 font-hud text-[9px] tracking-[0.15em] text-pgr-dim w-24">
                    {f.label}
                  </span>
                  <span className="font-body text-sm font-semibold leading-snug text-pgr-white group-hover:text-pgr-cyan transition-colors">
                    {f.value}
                  </span>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
