"use client";

import React from "react";
import Link from "next/link";

const Hero = () => {
  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "/AkashAkter.pdf";
    link.download = "AkashAkterResume.pdf";
    link.click();
  };

  return (
    <section className="pt-28 sm:pt-36 md:pt-40 pb-16 sm:pb-20 bg-[var(--surface)] text-[var(--text)] transition-colors duration-200">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 space-y-10 sm:space-y-12">
        {/* Main Display Heading matching Nuwantha PDF Page 1 */}
        <div className="space-y-8">
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[92px] font-extrabold tracking-tight leading-[0.98] text-[var(--text)]">
            I build software<br />
            that moves<br />
            <span className="inline-block bg-[var(--accent-fill)] text-[var(--on-accent)] px-3 sm:px-4 py-0.5 sm:py-1 rounded-[var(--radius-mark)] mr-2 sm:mr-3 my-1">
              beyond the
            </span><br className="sm:hidden" />
            <span className="inline-block bg-[var(--accent-fill)] text-[var(--on-accent)] px-3 sm:px-4 py-0.5 sm:py-1 rounded-[var(--radius-mark)] mr-2 sm:mr-3 my-1">
              development
            </span><br className="sm:hidden" />
            <span className="inline-block bg-[var(--accent-fill)] text-[var(--on-accent)] px-3 sm:px-4 py-0.5 sm:py-1 rounded-[var(--radius-mark)] mr-2 sm:mr-3 my-1">
              environment.
            </span>
          </h1>

          {/* Dev Environment to Production Divider matching Nuwantha */}
          <div className="flex items-center gap-3 py-2">
            <div className="h-[1px] bg-[var(--rule)] w-8 sm:w-16" />
            <span className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)] font-bold">
              DEV ENVIRONMENT → PRODUCTION
            </span>
            <div className="h-[1px] bg-[var(--rule)] w-8 sm:w-16" />
          </div>

          {/* Action Links matching Nuwantha */}
          <div className="flex items-center gap-6 font-mono text-xs sm:text-sm pt-1">
            <Link
              href="#work"
              className="font-bold text-[var(--text)] hover:text-[var(--accent-text)] flex items-center gap-1.5 transition-colors cursor-pointer group"
            >
              <span>See the work</span>
              <span className="text-base group-hover:translate-y-0.5 transition-transform duration-200">↓</span>
            </Link>

            <button
              onClick={handleResumeDownload}
              className="px-4 py-2 border border-[var(--rule)] hover:border-[var(--accent-text)] text-[var(--text)] font-semibold rounded-[var(--radius-mark)] transition-colors cursor-pointer"
            >
              Download CV
            </button>
          </div>
        </div>

        {/* 4-Column Bottom Metric Bar matching Nuwantha PDF Page 1 */}
        <div className="pt-10 border-t border-[var(--rule)] grid grid-cols-2 md:grid-cols-4 gap-8 font-mono text-xs">
          <div className="space-y-1">
            <p className="font-bold text-[var(--text)]">Computer Science & Engineering, PUST</p>
            <p className="text-[var(--text-muted)]">Full-stack developer · Bogura / Dhaka, Bangladesh</p>
          </div>

          <div className="space-y-1">
            <span className="text-4xl sm:text-5xl font-extrabold text-[var(--text)] font-sans tracking-tight block">
              3
            </span>
            <span className="text-[var(--text-muted)]">shipped, in use today</span>
          </div>

          <div className="space-y-1">
            <span className="text-4xl sm:text-5xl font-extrabold text-[var(--text)] font-sans tracking-tight block">
              12,050
            </span>
            <span className="text-[var(--text-muted)]">binaries in IEEE thesis</span>
          </div>

          <div className="space-y-1">
            <span className="text-4xl sm:text-5xl font-extrabold text-[var(--text)] font-sans tracking-tight block">
              2020
            </span>
            <span className="text-[var(--text-muted)]">building since</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
