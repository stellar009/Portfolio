import { BootScreen } from "@/components/portfolio/boot-screen";
import { HudNav } from "@/components/portfolio/hud-nav";
import { Hero } from "@/components/portfolio/hero";
import { Marquee } from "@/components/portfolio/marquee";
import { About } from "@/components/portfolio/about";
import { Skills } from "@/components/portfolio/skills";
import { Projects } from "@/components/portfolio/projects";
import { Credentials } from "@/components/portfolio/credentials";
import { Contact } from "@/components/portfolio/contact";
import { SiteFooter } from "@/components/portfolio/site-footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-pgr-bg text-pgr-white">
      <BootScreen />
      <HudNav />

      {/* CRT overlays */}
      <div className="pgr-scanlines" aria-hidden="true" />
      <div className="pgr-vignette" aria-hidden="true" />

      <main className="flex-1">
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Projects />
        <Credentials />
        <Contact />
      </main>

      <SiteFooter />
    </div>
  );
}
