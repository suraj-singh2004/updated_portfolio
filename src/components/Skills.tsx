import React, { useState } from "react";
import { profileData } from "@/data/profile";
import {
  Code2,
  Database,
  Cpu,
  Terminal,
  Sparkles,
  Layers,
  Wrench,
  CheckCircle2,
} from "lucide-react";

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("All");

  const categories = [
    "All",
    "Languages",
    "Frontend Development",
    "Backend & Databases",
    "AI, ML & Data",
    "Tools & DevOps",
  ];

  const getCategoryIcon = (categoryName: string) => {
    switch (categoryName) {
      case "Languages":
        return <Code2 className="w-4 h-4 text-accent" />;
      case "Frontend Development":
        return <Layers className="w-4 h-4 text-accent-soft" />;
      case "Backend & Databases":
        return <Database className="w-4 h-4 text-emerald-400" />;
      case "AI, ML & Data":
        return <Cpu className="w-4 h-4 text-purple-400" />;
      case "Tools & DevOps":
        return <Wrench className="w-4 h-4 text-amber-400" />;
      default:
        return <Terminal className="w-4 h-4 text-accent" />;
    }
  };

  const filteredCategories =
    activeTab === "All"
      ? profileData.skillCategories
      : profileData.skillCategories.filter((c) => c.category === activeTab);

  return (
    <section id="skills" className="py-20 lg:py-28 relative bg-surface/30 border-y hairline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12" data-reveal>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-card border hairline text-xs font-mono text-accent mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>02 / TECHNICAL ARSENAL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-gradient">
            Tools, technologies &amp; frameworks I work with.
          </h2>
          <p className="mt-4 text-fg-muted text-base sm:text-lg leading-relaxed">
            A balanced stack spanning foundational algorithms, modern web interfaces, cloud backends, and data science.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10" data-reveal>
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 border hairline ${
                activeTab === cat
                  ? "bg-accent text-white border-accent shadow-md shadow-accent/20"
                  : "bg-card text-fg-muted hover:text-fg hover:bg-card-2"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat, idx) => (
            <div
              key={cat.category}
              className="spotlight rounded-2xl border hairline bg-card p-6 flex flex-col justify-between shadow-lg transition-all duration-300 hover:border-accent/40 hover:-translate-y-1"
              data-reveal
              style={{ ["--d" as any]: `${idx * 80}ms` }}
            >
              <div>
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="p-2 rounded-lg bg-surface border hairline">
                    {getCategoryIcon(cat.category)}
                  </div>
                  <h3 className="text-base font-bold text-fg tracking-tight">
                    {cat.category}
                  </h3>
                </div>

                <p className="text-xs text-fg-subtle mb-6 leading-relaxed">
                  {cat.description}
                </p>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((skill) => (
                    <div
                      key={skill.name}
                      className="group/pill inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface hover:bg-card-2 border hairline text-xs font-medium text-fg-muted hover:text-fg transition-all duration-150"
                    >
                      <CheckCircle2 className="w-3 h-3 text-accent/70 group-hover/pill:text-accent" />
                      <span>{skill.name}</span>
                      <span className="text-[10px] font-mono text-fg-subtle group-hover/pill:text-accent-soft ml-1">
                        · {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom footer bar */}
              <div className="mt-6 pt-4 border-t hairline flex items-center justify-between text-[11px] font-mono text-fg-subtle">
                <span>{cat.items.length} proficiencies</span>
                <span className="text-accent">Production Ready</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
