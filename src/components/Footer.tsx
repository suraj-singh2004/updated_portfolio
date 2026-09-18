import React from "react";
import { profileData } from "@/data/profile";
import { ArrowUp, Heart, Sparkles } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t hairline bg-card/60 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand info */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-surface border hairline flex items-center justify-center font-bold text-accent text-sm">
              SS
            </div>
            <div>
              <div className="text-sm font-bold text-fg">{profileData.name}</div>
              <div className="text-xs text-fg-subtle font-mono">
                Computer Science Student &amp; Full-Stack Developer
              </div>
            </div>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            <a
              href={profileData.socials.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-lg bg-surface hover:bg-card-2 border hairline text-fg-muted hover:text-accent transition-colors"
            >
              <FaGithub className="w-4 h-4" />
            </a>
            <a
              href={profileData.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-lg bg-surface hover:bg-card-2 border hairline text-fg-muted hover:text-accent transition-colors"
            >
              <FaLinkedin className="w-4 h-4" />
            </a>
            <a
              href={profileData.socials.leetcode}
              target="_blank"
              rel="noreferrer"
              aria-label="LeetCode"
              className="p-2 rounded-lg bg-surface hover:bg-card-2 border hairline text-fg-muted hover:text-accent transition-colors"
            >
              <SiLeetcode className="w-4 h-4" />
            </a>
            <a
              href={profileData.socials.twitter}
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
              className="p-2 rounded-lg bg-surface hover:bg-card-2 border hairline text-fg-muted hover:text-accent transition-colors"
            >
              <FaXTwitter className="w-4 h-4" />
            </a>
          </div>

          {/* Back to top */}
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-surface hover:bg-card-2 border hairline text-xs font-mono text-fg-muted hover:text-fg transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-accent" />
          </button>
        </div>

        <div className="mt-8 pt-8 border-t hairline flex flex-col sm:flex-row items-center justify-between text-xs text-fg-subtle font-mono gap-4">
          <div>
            © {new Date().getFullYear()} {profileData.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5">
            <span>Built with React 19, TypeScript &amp; Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
