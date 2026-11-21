"use client";

import React from "react";
import { FiExternalLink } from "react-icons/fi";

const PublicationsSection = () => {
  return (
    <section id="research" className="py-16 sm:py-24 bg-[var(--surface)] text-[var(--text)] border-t border-[var(--rule)] transition-colors duration-200">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 border-b border-[var(--rule)] gap-4 mb-10">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)] mb-1">
              PEER-REVIEWED RESEARCH & AWARDS
            </p>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--text)]">
              Publications
            </h2>
          </div>

          <p className="font-mono text-xs text-[var(--text-muted)]">
            IEEE Xplore Digital Library Indexed
          </p>
        </div>

        {/* Featured Paper Block matching Nuwantha Card Style */}
        <div className="border border-[var(--rule)] bg-[var(--surface-sunken)] p-6 sm:p-10 space-y-6">
          <div className="flex flex-wrap items-center gap-2.5 font-mono text-xs">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-[var(--radius-mark)] bg-[var(--accent-fill)] text-[var(--on-accent)] font-bold text-[10px]">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--on-accent)]" />
              <span>IEEE CONFERENCE PAPER</span>
            </span>
            <span className="text-[var(--text-muted)]">
              ICAEEE 2024 · 3rd International Conference
            </span>
            <span className="text-[var(--text-muted)] hidden sm:inline">·</span>
            <span className="text-[var(--text-muted)]">
              DOI: 10.1109/ICAEEE62219.2024.10561780
            </span>
          </div>

          <h3 className="text-2xl sm:text-4xl font-extrabold text-[var(--text)] tracking-tight leading-snug">
            Classification of Malicious Financial Applications Using Naive Bayes and
            K-Nearest Neighbor Algorithms Based on Android Permission
          </h3>

          <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed max-w-4xl">
            Static permission analysis across 12,050 mobile application binaries. Constructed a 1,438-attribute
            feature matrix to identify financial malware vectors, achieving an 88.25% detection accuracy benchmark
            with K-Nearest Neighbors.
          </p>

          {/* Metric Callouts */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 font-mono text-xs">
            <div className="p-4 border border-[var(--rule)] bg-[var(--surface)]">
              <span className="text-[var(--text-muted)] text-[10px] uppercase block">Dataset Scale</span>
              <span className="text-[var(--text)] font-extrabold text-lg sm:text-xl font-sans">12,050 Samples</span>
            </div>

            <div className="p-4 border border-[var(--rule)] bg-[var(--surface)]">
              <span className="text-[var(--text-muted)] text-[10px] uppercase block">Feature Vector</span>
              <span className="text-[var(--text)] font-extrabold text-lg sm:text-xl font-sans">1,438 Attributes</span>
            </div>

            <div className="p-4 border border-[var(--rule)] bg-[var(--surface)]">
              <span className="text-[var(--text-muted)] text-[10px] uppercase block">KNN Benchmark</span>
              <span className="text-[var(--accent-text)] font-extrabold text-lg sm:text-xl font-sans">88.25% Accuracy</span>
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-[var(--rule)] flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
            <span className="text-[var(--text-muted)] text-[11px]">
              Published in IEEE Xplore Digital Library · IEEE Explore Publication
            </span>

            <a
              href="https://ieeexplore.ieee.org/document/10561780"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-[var(--radius-mark)] bg-[var(--accent-fill)] hover:opacity-90 text-[var(--on-accent)] font-bold transition-opacity text-xs"
            >
              <span>View on IEEE Xplore</span>
              <FiExternalLink />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;
