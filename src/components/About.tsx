import React, { useState } from "react";
import { profileData } from "@/data/profile";
import {
  Code,
  Cpu,
  Layers,
  Sparkles,
  Copy,
  Check,
  BrainCircuit,
  Workflow,
  Globe2,
} from "lucide-react";

export const About: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const codeSnippet = `const suraj: Developer = {
  name: "${profileData.name}",
  role: "Full-Stack Developer & CS Student",
  location: "${profileData.location}",
  status: "Open to Full-time & Internships",
  stack: {
    frontend: ["React 19", "TypeScript", "Tailwind CSS"],
    backend: ["Node.js", "Express", "PostgreSQL", "MongoDB"],
    ai_ml: ["Python", "PyTorch", "FastAPI", "OpenCV"],
    core: ["Data Structures & Algorithms", "Java", "C++"]
  },
  mindset: "Solve problems with simplicity, speed & clean architecture"
};`;

  const copyCode = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const pillars = [
    {
      icon: <Layers className="w-5 h-5 text-accent" />,
      title: "Full-Stack Web Architecture",
      description:
        "Building end-to-end, type-safe applications with React, TypeScript, Node.js, and modern relational/document databases. Obsessed with responsive UI, speed, and clean separation of concerns.",
      badge: "Frontend & Backend",
    },
    {
      icon: <BrainCircuit className="w-5 h-5 text-accent-soft" />,
      title: "AI / ML & Applied Intelligence",
      description:
        "Exploring neural networks, predictive models, and RAG systems using Python, PyTorch, and FastAPI. Integrating intelligent automation smoothly into modern user workflows.",
      badge: "Machine Learning",
    },
    {
      icon: <Cpu className="w-5 h-5 text-accent-strong" />,
      title: "Algorithmic Rigor & Systems",
      description:
        "Rigorous foundation in Computer Science fundamentals: time and space complexity, dynamic programming, tree traversals, and graphs with 100+ solved challenges on LeetCode.",
      badge: "DSA & Core CS",
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16" data-reveal>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-card border hairline text-xs font-mono text-accent mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>01 / ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-gradient">
            Engineering with curiosity, discipline &amp; purpose.
          </h2>
          <p className="mt-4 text-fg-muted text-base sm:text-lg leading-relaxed">
            I believe that great software is born at the intersection of solid theoretical principles and thoughtful, intuitive engineering.
          </p>
        </div>

        {/* Narrative & Code Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Narrative paragraphs */}
          <div className="lg:col-span-6 space-y-4 text-fg-muted text-sm sm:text-base leading-relaxed" data-reveal>
            {profileData.bioLong.map((para, idx) => (
              <p key={idx} className="p-4 rounded-2xl bg-card/40 border hairline">
                {para}
              </p>
            ))}

            {/* Core Values / Strengths pills */}
            <div className="pt-2 grid grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl bg-card/60 border hairline flex items-start gap-3">
                <Workflow className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-xs font-semibold text-fg">Agile &amp; Adaptive</h4>
                  <p className="text-[11px] text-fg-subtle mt-0.5">Quick to master new frameworks and deliver value fast.</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-card/60 border hairline flex items-start gap-3">
                <Globe2 className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-xs font-semibold text-fg">Production First</h4>
                  <p className="text-[11px] text-fg-subtle mt-0.5">Writing secure, testable, and maintainable solutions.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Code Card */}
          <div className="lg:col-span-6" data-reveal style={{ ["--d" as any]: "120ms" }}>
            <div className="rounded-2xl border hairline bg-card-2/90 shadow-2xl overflow-hidden backdrop-blur-md">
              {/* Terminal header */}
              <div className="flex items-center justify-between px-4 py-3 border-b hairline bg-surface/80">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-xs font-mono text-fg-subtle ml-2">suraj.profile.ts</span>
                </div>
                <button
                  type="button"
                  onClick={copyCode}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-card hover:bg-surface border hairline text-[11px] text-fg-muted hover:text-fg font-mono transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3 text-fg-subtle" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Code display */}
              <div className="p-5 font-mono text-xs sm:text-sm text-fg-muted overflow-x-auto leading-relaxed">
                <pre className="text-fg-muted">
                  <span className="text-accent-soft">const</span> <span className="text-fg font-bold">suraj</span>:{" "}
                  <span className="text-accent">Developer</span> = &#123;
                  {"\n"}  name: <span className="text-emerald-300">"{profileData.name}"</span>,
                  {"\n"}  role: <span className="text-emerald-300">"Full-Stack Developer &amp; CS Student"</span>,
                  {"\n"}  location: <span className="text-emerald-300">"{profileData.location}"</span>,
                  {"\n"}  status: <span className="text-emerald-300">"Open to Full-time &amp; Internships"</span>,
                  {"\n"}  stack: &#123;
                  {"\n"}    frontend: [<span className="text-sky-300">"React 19"</span>, <span className="text-sky-300">"TypeScript"</span>, <span className="text-sky-300">"Tailwind CSS"</span>],
                  {"\n"}    backend: [<span className="text-sky-300">"Node.js"</span>, <span className="text-sky-300">"Express"</span>, <span className="text-sky-300">"PostgreSQL"</span>, <span className="text-sky-300">"MongoDB"</span>],
                  {"\n"}    ai_ml: [<span className="text-sky-300">"Python"</span>, <span className="text-sky-300">"PyTorch"</span>, <span className="text-sky-300">"FastAPI"</span>, <span className="text-sky-300">"OpenCV"</span>],
                  {"\n"}    core: [<span className="text-sky-300">"Data Structures &amp; Algorithms"</span>, <span className="text-sky-300">"Java"</span>, <span className="text-sky-300">"C++"</span>]
                  {"\n"}  &#125;,
                  {"\n"}  mindset: <span className="text-emerald-300">"Solve problems with simplicity, speed &amp; clean architecture"</span>
                  {"\n"}&#125;;
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Pillar Cards with .spotlight */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="spotlight rounded-2xl border hairline bg-card p-6 transition-all duration-300 hover:border-accent/40 hover:-translate-y-1 shadow-lg"
              data-reveal
              style={{ ["--d" as any]: `${idx * 100}ms` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-surface border hairline flex items-center justify-center">
                  {pillar.icon}
                </div>
                <span className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-full bg-surface border hairline text-fg-subtle">
                  {pillar.badge}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-fg tracking-tight mb-2">
                {pillar.title}
              </h3>
              <p className="text-xs sm:text-sm text-fg-muted leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
