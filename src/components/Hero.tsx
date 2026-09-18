import React from "react";
import { profileData } from "@/data/profile";
import { Portrait } from "./Portrait";
import {
  ArrowRight,
  Download,
  Mail,
  Terminal,
  Code2,
  FolderGit2,
  CheckCircle,
} from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-grid">
      {/* Dynamic ambient radial glows */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[750px] h-[450px] bg-accent/15 rounded-full blur-[130px] pointer-events-none animate-glow-drift"
      />
      <div
        aria-hidden="true"
        className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-accent-soft/10 rounded-full blur-[100px] pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Hero Content (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6" data-reveal>
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-card border hairline text-xs font-medium text-fg shadow-sm hover:border-accent/40 transition-colors">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              <span className="text-fg-muted font-mono text-[11px] uppercase tracking-wider">
                {profileData.status}
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <p className="text-accent text-sm md:text-base font-mono tracking-wide font-medium flex items-center gap-2">
                <Terminal className="w-4 h-4" />
                <span>Hello world, I'm</span>
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-gradient leading-[1.08]">
                {profileData.name}
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight text-gradient-accent leading-snug">
                {profileData.role}
              </h2>
            </div>

            {/* Bio paragraph */}
            <p className="text-base sm:text-lg text-fg-muted max-w-2xl leading-relaxed">
              {profileData.bioHeadline}{" "}
              <span className="text-fg-subtle">
                Crafting robust applications with React, TypeScript, Node.js, and Python with a strong focus on algorithmic efficiency, clean architecture, and modern UX.
              </span>
            </p>

            {/* Quick Action CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-accent hover:bg-accent-strong text-white text-sm font-semibold transition-all duration-200 shadow-lg shadow-accent/25 hover:shadow-accent/40 hover:scale-[1.02]"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-card hover:bg-card-2 border hairline text-sm font-medium text-fg transition-all duration-200 hover:border-accent/40 hover:scale-[1.02]"
              >
                <Download className="w-4 h-4 text-accent" />
                <span>Resume / CV</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-surface hover:bg-card border hairline text-sm font-medium text-fg-muted hover:text-fg transition-colors"
              >
                <Mail className="w-4 h-4 text-fg-subtle" />
                <span>Contact</span>
              </a>
            </div>

            {/* Social links row */}
            <div className="flex items-center gap-3 pt-2">
              <span className="text-xs text-fg-subtle font-mono mr-1">Connect:</span>
              <a
                href={profileData.socials.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-xl bg-card hover:bg-card-2 border hairline text-fg-muted hover:text-accent transition-all duration-200 hover:scale-110 shadow-sm"
              >
                <FaGithub className="w-4 h-4" />
              </a>
              <a
                href={profileData.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-xl bg-card hover:bg-card-2 border hairline text-fg-muted hover:text-accent transition-all duration-200 hover:scale-110 shadow-sm"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
              <a
                href={profileData.socials.leetcode}
                target="_blank"
                rel="noreferrer"
                aria-label="LeetCode Profile"
                className="p-2.5 rounded-xl bg-card hover:bg-card-2 border hairline text-fg-muted hover:text-accent transition-all duration-200 hover:scale-110 shadow-sm"
              >
                <SiLeetcode className="w-4 h-4" />
              </a>
              <a
                href={profileData.socials.twitter}
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter Profile"
                className="p-2.5 rounded-xl bg-card hover:bg-card-2 border hairline text-fg-muted hover:text-accent transition-all duration-200 hover:scale-110 shadow-sm"
              >
                <FaXTwitter className="w-4 h-4" />
              </a>
            </div>

            {/* Stat Pill Row */}
            <div className="grid grid-cols-2 gap-3 pt-4 w-full max-w-md border-t hairline mt-4">
              {profileData.stats.map((stat, i) => (
                <div key={i} className="p-3.5 rounded-xl bg-card/60 border hairline">
                  <div className="text-xl sm:text-2xl font-black text-gradient leading-none">
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold text-fg mt-1 leading-tight">
                    {stat.label}
                  </div>
                  <div className="text-[10px] text-fg-subtle font-mono mt-0.5">
                    {stat.hint}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Hero Column: The Photograph (5 cols on lg) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end" data-reveal style={{ ["--d" as any]: "150ms" }}>
            <div className="w-full max-w-sm sm:max-w-md lg:max-w-none">
              <Portrait />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
