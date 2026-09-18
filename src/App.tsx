import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Journey } from "@/components/Journey";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ResumeModal } from "@/components/ResumeModal";
import { useSpotlightAndReveal } from "@/hooks/useSpotlightAndReveal";

export function App() {
  const [resumeOpen, setResumeOpen] = useState(false);

  // Activate scroll reveal and spotlight mouse-tracking
  useSpotlightAndReveal();

  return (
    <div className="min-h-screen bg-bg text-fg selection:bg-accent/30 selection:text-white flex flex-col font-sans">
      <Navbar onOpenResume={() => setResumeOpen(true)} />
      <main className="flex-1">
        <Hero onOpenResume={() => setResumeOpen(true)} />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Education />
        <Contact />
      </main>
      <Footer />
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </div>
  );
}

export default App;
