import React, { useState } from "react";
import { profileData } from "@/data/profile";
import {
  Sparkles,
  Mail,
  Copy,
  Check,
  Send,
  MessageSquare,
  MapPin,
  Clock,
  ArrowUpRight,
} from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    }, 900);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative bg-surface/30 border-t hairline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16" data-reveal>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-card border hairline text-xs font-mono text-accent mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>06 / GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-gradient">
            Let's build something remarkable together.
          </h2>
          <p className="mt-4 text-fg-muted text-base sm:text-lg leading-relaxed">
            Whether you have an internship opportunity, full-stack opening, open-source project, or simply want to chat about technology, my inbox is always open.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Contact Info & Cards */}
          <div className="lg:col-span-5 space-y-6" data-reveal>
            {/* Quick Email Card */}
            <div className="spotlight rounded-2xl border hairline bg-card p-6 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-surface border hairline flex items-center justify-center text-accent">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-surface border hairline text-emerald-400">
                  Fast Response
                </span>
              </div>
              <h3 className="text-base font-bold text-fg mb-1">Direct Email</h3>
              <p className="text-xs text-fg-subtle mb-4">
                Click below to copy my primary address or send an email directly.
              </p>

              <div className="flex items-center gap-2 p-2 rounded-xl bg-surface border hairline">
                <span className="text-xs font-mono text-fg px-2 truncate flex-1">
                  {profileData.email}
                </span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-lg bg-card hover:bg-card-2 border hairline text-xs font-medium text-fg flex items-center gap-1.5 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-mono text-[11px]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-fg-subtle" />
                      <span className="text-[11px]">Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="mt-3">
                <a
                  href={`mailto:${profileData.email}`}
                  className="w-full text-center block py-2 rounded-xl bg-card hover:bg-card-2 border hairline text-xs font-medium text-accent hover:text-accent-soft transition-colors"
                >
                  Open in Mail Client →
                </a>
              </div>
            </div>

            {/* Quick Details Card */}
            <div className="spotlight rounded-2xl border hairline bg-card p-6 shadow-xl space-y-3.5">
              <div className="flex items-center gap-3 text-xs sm:text-sm text-fg-muted">
                <MapPin className="w-4 h-4 text-accent shrink-0" />
                <span>Location: {profileData.location} (Open to remote worldwide &amp; relocation)</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-fg-muted">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Response Time: Typically within 24 hours</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-fg-muted">
                <MessageSquare className="w-4 h-4 text-accent-soft shrink-0" />
                <span>Preferred Contact: Email or LinkedIn</span>
              </div>
            </div>

            {/* Social Grid */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href={profileData.socials.github}
                target="_blank"
                rel="noreferrer"
                className="spotlight flex items-center justify-between p-3.5 rounded-xl border hairline bg-card hover:bg-card-2 transition-all group"
              >
                <div className="flex items-center gap-2.5">
                  <FaGithub className="w-4 h-4 text-fg" />
                  <span className="text-xs font-medium text-fg">GitHub</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-fg-subtle group-hover:text-accent transition-colors" />
              </a>

              <a
                href={profileData.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="spotlight flex items-center justify-between p-3.5 rounded-xl border hairline bg-card hover:bg-card-2 transition-all group"
              >
                <div className="flex items-center gap-2.5">
                  <FaLinkedin className="w-4 h-4 text-[#0a66c2]" />
                  <span className="text-xs font-medium text-fg">LinkedIn</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-fg-subtle group-hover:text-accent transition-colors" />
              </a>

              <a
                href={profileData.socials.leetcode}
                target="_blank"
                rel="noreferrer"
                className="spotlight flex items-center justify-between p-3.5 rounded-xl border hairline bg-card hover:bg-card-2 transition-all group"
              >
                <div className="flex items-center gap-2.5">
                  <SiLeetcode className="w-4 h-4 text-[#ffa116]" />
                  <span className="text-xs font-medium text-fg">LeetCode</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-fg-subtle group-hover:text-accent transition-colors" />
              </a>

              <a
                href={profileData.socials.twitter}
                target="_blank"
                rel="noreferrer"
                className="spotlight flex items-center justify-between p-3.5 rounded-xl border hairline bg-card hover:bg-card-2 transition-all group"
              >
                <div className="flex items-center gap-2.5">
                  <FaXTwitter className="w-4 h-4 text-fg" />
                  <span className="text-xs font-medium text-fg">Twitter / X</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-fg-subtle group-hover:text-accent transition-colors" />
              </a>
            </div>
          </div>

          {/* Right: Message Form */}
          <div className="lg:col-span-7" data-reveal style={{ ["--d" as any]: "120ms" }}>
            <div className="spotlight rounded-2xl border hairline bg-card p-6 sm:p-8 shadow-2xl relative">
              {submitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm flex items-center gap-3 animate-fade-up">
                  <Check className="w-5 h-5 text-emerald-400 shrink-0" />
                  <div>
                    <span className="font-bold">Message received!</span> Thank you for reaching out, Suraj will get back to you shortly.
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-fg-subtle">
                      Your Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-surface border hairline text-xs sm:text-sm text-fg placeholder:text-fg-subtle/50 focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-fg-subtle">
                      Email Address <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-surface border hairline text-xs sm:text-sm text-fg placeholder:text-fg-subtle/50 focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-fg-subtle">
                    Subject / Topic
                  </label>
                  <input
                    type="text"
                    placeholder="Full-Stack Internship Opportunity / Project Collaboration"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-surface border hairline text-xs sm:text-sm text-fg placeholder:text-fg-subtle/50 focus:outline-none focus:border-accent transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-fg-subtle">
                    Message <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell me about your project, team, or opportunity..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-surface border hairline text-xs sm:text-sm text-fg placeholder:text-fg-subtle/50 focus:outline-none focus:border-accent transition-colors resize-y"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-6 rounded-xl bg-accent hover:bg-accent-strong disabled:opacity-50 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-accent/25 transition-all duration-200 hover:scale-[1.01]"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message to Suraj</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
