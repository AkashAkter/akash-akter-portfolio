"use client";

import React, { useState } from "react";
import { FiCheck, FiArrowUp } from "react-icons/fi";

const Footer = () => {
  const [copied, setCopied] = useState(false);
  const email = "your.akash.akter08@gmail.com";

  const fallbackCopyTextToClipboard = (text: string) => {
    try {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.top = "0";
      textArea.style.left = "0";
      textArea.style.position = "fixed";
      textArea.style.opacity = "0";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      const successful = document.execCommand("copy");
      document.body.removeChild(textArea);
      if (successful) {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch {
      // Fallback silently without throwing
    }
  };

  const handleCopy = () => {
    if (typeof navigator !== "undefined" && navigator?.clipboard?.writeText) {
      navigator.clipboard
        .writeText(email)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        })
        .catch(() => {
          fallbackCopyTextToClipboard(email);
        });
    } else {
      fallbackCopyTextToClipboard(email);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "/AkashAkter.pdf";
    link.download = "AkashAkterResume.pdf";
    link.click();
  };

  return (
    <footer
      id="contact"
      className="bg-[var(--accent-fill)] text-[var(--on-accent)] pt-20 sm:pt-28 pb-12 transition-colors duration-200 select-none"
    >
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 space-y-16">
        {/* Main Content matching Nuwantha PDF Page 5 */}
        <div className="space-y-8 max-w-4xl">
          <p className="font-mono text-xs uppercase tracking-widest font-extrabold opacity-80">
            RUN
          </p>

          <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-[96px] font-extrabold tracking-tight leading-[0.98]">
            Let&apos;s run<br />
            something<br />
            together.
          </h2>

          <p className="text-sm sm:text-base font-medium max-w-xl leading-relaxed opacity-90 pt-1">
            Available now · Open for prospective PhD graduate research collaborations and
            full-stack software architecture engineering roles.
          </p>

          {/* Email Copy Card matching Nuwantha */}
          <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-0 max-w-lg font-mono text-xs shadow-xl">
            <div className="px-4 py-3.5 bg-white text-black font-bold truncate flex-1 border border-black/20">
              {email}
            </div>

            <button
              onClick={handleCopy}
              className="px-6 py-3.5 bg-black text-white hover:bg-black/85 font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer shrink-0 border border-black"
            >
              {copied ? <FiCheck /> : null}
              <span>{copied ? "Copied" : "Copy email"}</span>
            </button>
          </div>

          {/* Action Pills matching Nuwantha */}
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs pt-2">
            <button
              onClick={handleResumeDownload}
              className="px-4 py-2 border border-black/80 hover:bg-black hover:text-white font-bold transition-colors cursor-pointer rounded-[var(--radius-mark)]"
            >
              Download CV
            </button>

            <a
              href="https://www.linkedin.com/in/akash08akter/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-black/80 hover:bg-black hover:text-white font-bold transition-colors rounded-[var(--radius-mark)]"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/AkashAkter"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-black/80 hover:bg-black hover:text-white font-bold transition-colors rounded-[var(--radius-mark)]"
            >
              GitHub
            </a>
          </div>

          <p className="font-mono text-xs opacity-80 pt-2">
            Also taking select freelance projects. References available on request.
          </p>
        </div>

        {/* Subfooter bottom row matching Nuwantha PDF Page 5 */}
        <div className="pt-8 border-t border-black/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs opacity-90">
          <div>
            <span>© 2026 AkashAkter · Bogura / Dhaka, Bangladesh</span>
          </div>

          <div className="flex items-center gap-6">
            <span>Built with Next.js · Updated Nov 2026</span>
            <button
              onClick={scrollToTop}
              className="hover:opacity-100 flex items-center gap-1 font-bold cursor-pointer transition-opacity"
            >
              <span>Back to top</span>
              <FiArrowUp />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
