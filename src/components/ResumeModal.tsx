import React from "react";
import { profileData } from "@/data/profile";
import { X, Printer, Download, ExternalLink, Mail, Phone, MapPin, Globe } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm animate-fade-up"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] bg-card border hairline rounded-2xl shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b hairline bg-surface/90">
          <div className="flex items-center gap-2">
            <span className="font-bold text-sm text-fg tracking-tight">
              Curriculum Vitae / Resume
            </span>
            <span className="text-xs font-mono text-fg-subtle">
              · {profileData.name}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface hover:bg-card border hairline text-xs font-medium text-fg-muted hover:text-fg transition-colors"
            >
              <Printer className="w-3.5 h-3.5 text-accent" />
              <span>Print / Save PDF</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-surface text-fg-muted hover:text-fg transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Resume Sheet */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-8 bg-card text-fg">
          {/* Header */}
          <div className="border-b hairline pb-6">
            <h1 className="text-2xl sm:text-3xl font-black text-fg tracking-tight">
              {profileData.name}
            </h1>
            <p className="text-sm font-semibold text-accent mt-1">
              {profileData.role}
            </p>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-fg-subtle font-mono mt-3">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-accent" />
                {profileData.location}
              </span>
              <span className="flex items-center gap-1">
                <Mail className="w-3 h-3 text-accent" />
                {profileData.email}
              </span>
              <a
                href={profileData.socials.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 hover:text-fg"
              >
                <FaGithub className="w-3 h-3" />
                github.com/surajsingh
              </a>
              <a
                href={profileData.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 hover:text-fg"
              >
                <FaLinkedin className="w-3 h-3 text-[#0a66c2]" />
                linkedin.com/in/surajsingh
              </a>
            </div>
          </div>

          {/* Education */}
          <section className="space-y-3">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-accent border-b hairline pb-1">
              Education
            </h2>
            {profileData.education.map((edu, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <div>
                  <div className="text-sm font-bold text-fg">
                    {edu.degree} in {edu.field}
                  </div>
                  <div className="text-xs text-fg-muted">{edu.institution}</div>
                  <div className="text-xs text-fg-subtle mt-1">
                    Relevant Coursework: {edu.coursework.slice(0, 5).join(", ")}
                  </div>
                </div>
                <div className="text-right sm:shrink-0 text-xs font-mono text-fg-subtle">
                  <div>{edu.period}</div>
                  <div className="text-emerald-400 font-bold">{edu.score}</div>
                </div>
              </div>
            ))}
          </section>

          {/* Technical Skills */}
          <section className="space-y-3">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-accent border-b hairline pb-1">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <span className="font-bold text-fg">Languages:</span>{" "}
                <span className="text-fg-muted">Java, Python, TypeScript, JavaScript (ES6+), C++, SQL, HTML5/CSS3</span>
              </div>
              <div>
                <span className="font-bold text-fg">Frontend:</span>{" "}
                <span className="text-fg-muted">React 19, Next.js, Tailwind CSS v4, Vite, Redux/Zustand</span>
              </div>
              <div>
                <span className="font-bold text-fg">Backend &amp; DB:</span>{" "}
                <span className="text-fg-muted">Node.js, Express, PostgreSQL, MongoDB, RESTful APIs, Redis</span>
              </div>
              <div>
                <span className="font-bold text-fg">AI / ML &amp; Tools:</span>{" "}
                <span className="text-fg-muted">PyTorch, Scikit-learn, OpenCV, FastAPI, Git/GitHub, Docker</span>
              </div>
            </div>
          </section>

          {/* Key Projects */}
          <section className="space-y-4">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-accent border-b hairline pb-1">
              Selected Projects
            </h2>
            {profileData.projects.slice(0, 3).map((proj) => (
              <div key={proj.id} className="space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                  <div className="text-sm font-bold text-fg flex items-center gap-2">
                    <span>{proj.title}</span>
                    <span className="text-xs font-normal text-fg-subtle">| {proj.subtitle}</span>
                  </div>
                  <div className="text-xs font-mono text-fg-subtle">
                    {proj.tags.slice(0, 3).join(", ")}
                  </div>
                </div>
                <p className="text-xs text-fg-muted leading-relaxed">
                  {proj.description}
                </p>
                <ul className="list-disc list-inside text-xs text-fg-subtle space-y-0.5">
                  {proj.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* Experience / Milestones */}
          <section className="space-y-3">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-accent border-b hairline pb-1">
              Experience &amp; Leadership
            </h2>
            {profileData.journey.slice(0, 2).map((item, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                  <div className="text-sm font-bold text-fg">
                    {item.role} · <span className="font-normal text-fg-muted">{item.organization}</span>
                  </div>
                  <div className="text-xs font-mono text-fg-subtle">{item.year}</div>
                </div>
                <p className="text-xs text-fg-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </section>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t hairline bg-surface/90 flex items-center justify-between text-xs text-fg-subtle font-mono">
          <span>Suraj Singh · Portfolio &amp; Resume 2026</span>
          <button
            type="button"
            onClick={onClose}
            className="text-accent hover:underline"
          >
            Close preview
          </button>
        </div>
      </div>
    </div>
  );
};
