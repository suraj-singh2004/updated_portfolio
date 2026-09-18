import React from "react";
import { profileData } from "@/data/profile";
import { Sparkles, Calendar, Briefcase, GraduationCap, Trophy } from "lucide-react";

export const Journey: React.FC = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case "education":
        return <GraduationCap className="w-3.5 h-3.5 text-accent" />;
      case "achievement":
        return <Trophy className="w-3.5 h-3.5 text-amber-400" />;
      default:
        return <Briefcase className="w-3.5 h-3.5 text-accent-soft" />;
    }
  };

  return (
    <section id="journey" className="py-20 lg:py-28 relative bg-surface/20 border-t hairline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16" data-reveal>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-card border hairline text-xs font-mono text-accent mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>04 / EXPERIENCE &amp; MILESTONES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-gradient">
            My Engineering Journey &amp; Milestones
          </h2>
          <p className="mt-4 text-fg-muted text-base sm:text-lg leading-relaxed">
            From discovering algorithmic logic to architecting production web apps and diving deep into intelligent computing systems.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-8 border-l border-white/10 max-w-4xl space-y-12">
          {profileData.journey.map((item, idx) => (
            <div
              key={idx}
              className="relative group"
              data-reveal
              style={{ ["--d" as any]: `${idx * 100}ms` }}
            >
              {/* Timeline Node using the .timeline-node class */}
              <div className="timeline-node absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-card border-2 border-accent flex items-center justify-center transition-transform duration-300 group-hover:scale-125">
                <div className="w-2 h-2 rounded-full bg-accent" />
              </div>

              {/* Content Card with .spotlight */}
              <div className="spotlight rounded-2xl border hairline bg-card p-6 shadow-md transition-all duration-300 hover:border-accent/40 group-hover:-translate-y-0.5">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="p-1.5 rounded-lg bg-surface border hairline">
                      {getIcon(item.type)}
                    </span>
                    <span className="text-xs font-mono font-medium text-accent">
                      {item.organization}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface border hairline text-xs font-mono text-fg-subtle">
                    <Calendar className="w-3 h-3" />
                    <span>{item.year}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-fg tracking-tight mt-1">
                  {item.title}
                </h3>
                <h4 className="text-xs font-medium text-fg-subtle mb-3">
                  {item.role}
                </h4>

                <p className="text-xs sm:text-sm text-fg-muted leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t hairline">
                  {item.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 rounded-md bg-surface text-[11px] font-mono text-fg-subtle border hairline"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
