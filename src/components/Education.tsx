import React from "react";
import { profileData } from "@/data/profile";
import {
  Sparkles,
  GraduationCap,
  Award,
  BookOpen,
  CheckCircle,
} from "lucide-react";

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12" data-reveal>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-card border hairline text-xs font-mono text-accent mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>05 / ACADEMIC FOUNDATION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-gradient">
            Education &amp; Core Computer Science
          </h2>

          <p className="mt-4 text-fg-muted text-base sm:text-lg leading-relaxed">
            Formal computer science rigor complemented by continuous hands-on
            software development.
          </p>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {profileData.education.map((edu, idx) => (
            <div
              key={idx}
              className="lg:col-span-8 spotlight rounded-2xl border hairline bg-card p-6 sm:p-8 shadow-xl"
              data-reveal
            >
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-surface border hairline flex items-center justify-center text-accent">
                    <GraduationCap className="w-6 h-6" />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-fg tracking-tight">
                      {edu.degree}
                    </h3>

                    <div className="text-xs sm:text-sm font-semibold text-accent mt-0.5">
                      {edu.field}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-end">
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-surface border hairline text-fg-subtle">
                    {edu.period}
                  </span>
                </div>
              </div>

              {/* Institution */}
              <div className="text-xs sm:text-sm text-fg-muted font-mono mb-6">
                Institution:{" "}
                <span className="text-fg">{edu.institution}</span>
              </div>

              {/* Coursework */}
              <div>
                <h4 className="text-xs font-semibold text-fg uppercase tracking-wider font-mono mb-3 flex items-center gap-2">
                  <BookOpen className="w-3.5 h-3.5 text-accent" />
                  <span>Key Coursework &amp; Competencies:</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {edu.coursework.map((course, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 p-2.5 rounded-lg bg-surface/70 border hairline text-xs text-fg-muted"
                    >
                      <CheckCircle className="w-3.5 h-3.5 text-accent/70 shrink-0" />
                      <span>{course}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Quick Academic Highlights side card */}
          <div
            className="lg:col-span-4 space-y-4"
            data-reveal
            style={{ ["--d" as any]: "150ms" }}
          >
            <div className="spotlight rounded-2xl border hairline bg-card p-6 shadow-xl">
              <div className="flex items-center gap-2.5 mb-3">
                <Award className="w-5 h-5 text-accent" />

                <h4 className="text-base font-bold text-fg">
                  Academic Highlights
                </h4>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-fg-muted leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>
                    Computer Science Engineering student with a focus on
                    software development.
                  </span>
                </li>

                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>
                    Currently developing skills in programming, web development,
                    and modern technologies.
                  </span>
                </li>

                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>
                    Continuously learning through academic work and practical
                    development experience.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};