import React, { useState, useEffect } from "react";
import { profileData } from "@/data/profile";
import { Menu, X, FileText, Send, Sparkles } from "lucide-react";

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Journey", href: "#journey" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-bg/85 backdrop-blur-md border-b hairline shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#"
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-card border hairline transition-all duration-300 group-hover:border-accent/50 group-hover:shadow-[0_0_16px_rgba(77,158,255,0.35)]">
              <span className="font-sans font-black text-sm tracking-tighter text-accent transition-transform duration-300 group-hover:scale-110">
                SS
              </span>
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-accent animate-pulse-soft" />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-sm text-fg tracking-tight flex items-center gap-1.5">
                {profileData.name}
              </span>
              <span className="text-[11px] font-mono text-fg-subtle leading-tight">
                CS · Full-Stack &amp; AI
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 px-4 py-1.5 rounded-full bg-surface/70 border hairline backdrop-blur-md shadow-sm">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-medium text-fg-muted hover:text-fg hover:bg-card-2/60 rounded-full transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button
              type="button"
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border hairline bg-card hover:bg-card-2 text-xs font-medium text-fg-muted hover:text-fg transition-all duration-200 hover:border-accent/40"
            >
              <FileText className="w-3.5 h-3.5 text-accent-soft" />
              <span>Resume</span>
            </button>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-gradient-to-r from-accent to-accent-strong hover:from-accent-strong hover:to-accent text-white text-xs font-semibold shadow-md shadow-accent/20 hover:shadow-accent/35 transition-all duration-200 hover:scale-[1.02]"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Get in Touch</span>
            </a>
          </div>

          {/* Mobile hamburger toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={onOpenResume}
              aria-label="View Resume"
              className="p-2 rounded-xl border hairline bg-card text-fg-muted hover:text-fg"
            >
              <FileText className="w-4 h-4 text-accent" />
            </button>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
              className="p-2 rounded-xl border hairline bg-card text-fg-muted hover:text-fg focus:outline-none"
            >
              {isOpen ? <X className="w-5 h-5 text-accent" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Panel with .nav-panel class from index.css */}
        <div className="nav-panel md:hidden" data-open={isOpen ? "true" : "false"}>
          <div className="pt-3 pb-4 space-y-2 border-t hairline mt-3">
            <div className="grid grid-cols-2 gap-2 pb-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-3 py-2 text-sm font-medium text-fg-muted hover:text-fg hover:bg-card rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-2 border-t hairline flex flex-col gap-2">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface/60 text-xs text-fg-subtle">
                <Sparkles className="w-3.5 h-3.5 text-accent" />
                <span>{profileData.status}</span>
              </div>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-2.5 rounded-xl bg-accent hover:bg-accent-strong text-white font-semibold text-sm transition-colors shadow-lg shadow-accent/20"
              >
                Contact Suraj
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
