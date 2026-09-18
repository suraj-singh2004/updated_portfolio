import React, { useState } from "react";
import { profileData, Project } from "@/data/profile";
import {
  ExternalLink,
  Sparkles,
  Layers,
  ArrowUpRight,
  FolderGit2,
  CheckCircle,
} from "lucide-react";
import { FaGithub } from "react-icons/fa6";

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ["All", "Full-Stack", "AI/ML", "Web Apps"];

  const filteredProjects =
    filter === "All"
      ? profileData.projects
      : profileData.projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12" data-reveal>
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-card border hairline text-xs font-mono text-accent mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>03 / PORTFOLIO &amp; WORKS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-gradient">
              Featured Software Engineering Projects
            </h2>
            <p className="mt-4 text-fg-muted text-base sm:text-lg leading-relaxed">
              Real-world systems, algorithmic applications, and full-stack solutions built with clean code and modern developer practices.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 border hairline ${
                  filter === cat
                    ? "bg-accent text-white border-accent shadow-md shadow-accent/20"
                    : "bg-card text-fg-muted hover:text-fg hover:bg-card-2"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="spotlight rounded-2xl border hairline bg-card p-6 flex flex-col justify-between shadow-lg transition-all duration-300 hover:border-accent/40 hover:-translate-y-1 group"
              data-reveal
              style={{ ["--d" as any]: `${idx * 70}ms` }}
            >
              <div>
                {/* Header row */}
                <div className="flex items-center justify-between mb-3">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-surface border hairline text-[11px] font-mono font-medium text-accent">
                    <span>{project.category}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    {project.metrics && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-accent/10 border border-accent/20 text-accent font-semibold">
                        {project.metrics}
                      </span>
                    )}
                    {project.featured && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-semibold">
                        Featured
                      </span>
                    )}
                  </div>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl font-bold text-fg tracking-tight group-hover:text-accent transition-colors flex items-center justify-between">
                  <span>{project.title}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-accent" />
                </h3>
                <p className="text-xs font-medium text-fg-subtle mt-0.5 mb-3">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-fg-muted leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="space-y-1.5 mb-5 p-3 rounded-xl bg-surface/50 border hairline">
                  {project.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-[11px] text-fg-subtle leading-tight">
                      <span className="text-accent mt-0.5">•</span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5 pt-3 border-t hairline">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md bg-surface text-[11px] font-mono text-fg-subtle border hairline"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center justify-between pt-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-fg-muted hover:text-accent transition-colors"
                  >
                    <FaGithub className="w-3.5 h-3.5" />
                    <span>Source Code</span>
                  </a>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-accent hover:text-accent-soft transition-colors"
                    >
                      <span>Live Preview</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
