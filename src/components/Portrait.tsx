import React, { useState } from "react";
import surajPhoto from "@/assets/portrait/suraj.jpg";
import { profileData } from "@/data/profile";
import { Sparkles, Maximize2, X, MapPin, CheckCircle2 } from "lucide-react";

interface PortraitProps {
  className?: string;
  cropClass?: string;
}

export const Portrait: React.FC<PortraitProps> = ({
  className = "",
  cropClass = "object-cover object-center",
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const imgSrc = surajPhoto || profileData.portraitUrl;

  return (
    <>
      <div className={`relative group ${className}`}>
        {/* Ambient atmospheric backdrop glow */}
        <div
          aria-hidden="true"
          className="absolute -inset-2 md:-inset-3 bg-gradient-to-tr from-accent/25 via-accent-strong/15 to-accent-soft/20 rounded-[2.5rem] blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        />

        {/* Decorative corner accent bracket */}
        <div
          aria-hidden="true"
          className="absolute -top-3 -right-3 w-16 h-16 border-t-2 border-r-2 border-accent/40 rounded-tr-3xl pointer-events-none transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-3 -left-3 w-16 h-16 border-b-2 border-l-2 border-accent/40 rounded-bl-3xl pointer-events-none transition-transform duration-500 group-hover:-translate-x-1 group-hover:translate-y-1"
        />

        {/* Card Frame */}
        <div className="relative rounded-[2rem] overflow-hidden border hairline bg-card/90 shadow-2xl backdrop-blur-sm p-2 transition-transform duration-500 ease-out group-hover:scale-[1.015]">
          <div className="relative w-full aspect-[3/4] rounded-[1.6rem] overflow-hidden bg-surface">
            {/* Loading placeholder skeleton */}
            {!loaded && (
              <div className="absolute inset-0 bg-surface animate-pulse flex items-center justify-center text-fg-subtle text-xs">
                Loading photo...
              </div>
            )}

            {/* The Real Hero Photo */}
            <img
              src={imgSrc}
              alt="Suraj Singh - Computer Science Student & Full-Stack Developer"
              width={858}
              height={1143}
              loading="eager"
              decoding="async"
              onLoad={() => setLoaded(true)}
              className={`w-full h-full ${cropClass} transition-all duration-700 ease-out group-hover:scale-105 ${
                loaded ? "opacity-100" : "opacity-0"
              }`}
            />

            {/* Subtle aesthetic gradient overlay at bottom for smooth contrast */}
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-bg/90 via-bg/40 to-transparent pointer-events-none"
            />

            {/* Quick action: expand full photo view */}
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              aria-label="View uncropped photograph"
              title="View full photograph"
              className="absolute top-3 right-3 p-2 rounded-full bg-bg/70 hover:bg-bg/95 border hairline text-fg-muted hover:text-fg backdrop-blur-md transition-all duration-200 opacity-0 group-hover:opacity-100 focus-visible:opacity-100 hover:scale-110 shadow-lg"
            >
              <Maximize2 className="w-4 h-4" />
            </button>

            {/* Bottom floating badge inside photo frame */}
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-bg/85 backdrop-blur-md border hairline text-xs font-medium text-fg shadow-lg">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>Open for roles</span>
              </div>

              <div className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-bg/85 backdrop-blur-md border hairline text-[11px] text-fg-muted font-mono shadow-lg">
                <MapPin className="w-3 h-3 text-accent" />
                <span>India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Floating chip 1: Tech stack highlight */}
        <div
          aria-hidden="true"
          className="hidden sm:flex absolute -bottom-5 -right-3 md:-right-6 items-center gap-2 px-3.5 py-2 rounded-xl bg-card-2/95 border hairline shadow-xl backdrop-blur-md text-xs text-fg font-medium transition-transform duration-500 group-hover:translate-y-[-2px]"
        >
          <div className="w-7 h-7 rounded-lg bg-accent/15 border border-accent/30 flex items-center justify-center text-accent">
            <Sparkles className="w-3.5 h-3.5" />
          </div>
          <div>
            <div className="text-[11px] text-fg-subtle leading-none">Focus Area</div>
            <div className="text-xs font-semibold text-fg mt-0.5">Full-Stack &amp; AI/ML</div>
          </div>
        </div>

        {/* Floating chip 2: CS Student badge */}
        <div
          aria-hidden="true"
          className="hidden sm:flex absolute -top-4 -left-3 md:-left-6 items-center gap-2 px-3 py-1.5 rounded-xl bg-card-2/95 border hairline shadow-xl backdrop-blur-md text-xs text-fg font-medium"
        >
          <CheckCircle2 className="w-3.5 h-3.5 text-accent-soft" />
          <span className="text-fg-muted font-mono text-[11px]">CS Undergrad · '28</span>
        </div>
      </div>

      {/* Full Photo Modal / Lightbox */}
      {modalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Full original photograph"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-up"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="relative max-w-2xl w-full max-h-[92vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setModalOpen(false)}
              className="absolute -top-12 right-0 p-2 rounded-full bg-surface border hairline text-fg hover:text-accent transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="rounded-2xl overflow-hidden border hairline bg-card shadow-2xl p-2 max-h-[80vh] flex items-center justify-center">
              <img
                src={imgSrc}
                alt="Suraj Singh original photograph"
                className="max-h-[76vh] w-auto object-contain rounded-xl"
              />
            </div>
            <div className="mt-3 text-center text-xs text-fg-subtle">
              Suraj Singh · Original Portrait Photo
            </div>
          </div>
        </div>
      )}
    </>
  );
};
