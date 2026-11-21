"use client";

import React from "react";
import { FiDownload, FiExternalLink } from "react-icons/fi";

const CvSection = () => {
  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "/AkashAkter.pdf";
    link.download = "AkashAkterResume.pdf";
    link.click();
  };

  const handleOpenPdf = () => {
    window.open("/AkashAkter.pdf", "_blank");
  };

  return (
    <section id="cv" className="py-16 sm:py-24 bg-[var(--surface)] text-[var(--text)] border-t border-[var(--rule)] transition-colors duration-200">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          {/* Left Column matching Nuwantha Page 5 (7 cols) */}
          <div className="md:col-span-7 space-y-6">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)] block mb-1">
                CV
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--text)]">
                Prefer a PDF?
              </h2>
              <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed mt-2 max-w-lg">
                My general CV: publications, full-stack systems architecture, academic transcripts,
                and machine learning benchmarks on two pages.
              </p>
            </div>

            {/* Hairline Metadata Table */}
            <div className="border-t border-[var(--rule)] font-mono text-xs space-y-2 max-w-md">
              <div className="flex justify-between py-2 border-b border-[var(--rule)]">
                <span className="text-[var(--text-muted)] uppercase text-[11px]">FORMAT</span>
                <span className="text-[var(--text)] font-bold">PDF</span>
              </div>
              <div className="flex justify-between py-2 border-b border-[var(--rule)]">
                <span className="text-[var(--text-muted)] uppercase text-[11px]">LENGTH</span>
                <span className="text-[var(--text)]">2 pages</span>
              </div>
              <div className="flex justify-between py-2 border-b border-[var(--rule)]">
                <span className="text-[var(--text-muted)] uppercase text-[11px]">UPDATED</span>
                <span className="text-[var(--text)]">November 2026</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 font-mono text-xs pt-2">
              <button
                onClick={handleResumeDownload}
                className="px-5 py-2.5 rounded-[var(--radius-mark)] bg-[var(--text)] text-[var(--surface)] hover:opacity-90 font-bold transition-opacity flex items-center gap-2 cursor-pointer shadow-sm"
              >
                <FiDownload />
                <span>Download CV (PDF)</span>
              </button>

              <button
                onClick={handleOpenPdf}
                className="px-4 py-2.5 rounded-[var(--radius-mark)] border border-[var(--rule)] hover:border-[var(--text)] text-[var(--text)] transition-colors flex items-center gap-2 cursor-pointer"
              >
                <span>Open in a new tab</span>
                <FiExternalLink />
              </button>
            </div>
          </div>

          {/* Right Column: PDF Preview Mockup (5 cols) */}
          <div className="md:col-span-5 flex justify-center md:justify-end">
            <div
              onClick={handleOpenPdf}
              className="group cursor-pointer w-full max-w-[280px] sm:max-w-[320px] bg-[#fbfbf9] text-[#171916] border border-[var(--rule)] p-5 sm:p-6 shadow-[0_20px_40px_rgba(0,0,0,0.4)] rounded-[2px] space-y-4 hover:scale-[1.02] transition-transform duration-300 select-none"
            >
              <div className="border-b border-[#e5e5dc] pb-3 flex justify-between items-center font-mono text-[9px] text-[#5e605a]">
                <span className="font-bold text-[#171916] text-[10px]">AKASH AKTER</span>
                <span>CURRICULUM VITAE</span>
              </div>

              <div className="space-y-2">
                <div className="h-2.5 bg-[#171916] w-3/4 rounded-[1px]" />
                <div className="h-1.5 bg-[#85877f] w-full rounded-[1px]" />
                <div className="h-1.5 bg-[#85877f] w-5/6 rounded-[1px]" />
              </div>

              <div className="pt-2 border-t border-[#e5e5dc] space-y-1.5">
                <div className="h-2 bg-[#171916] w-1/3 rounded-[1px]" />
                <div className="h-1 bg-[#85877f] w-full rounded-[1px]" />
                <div className="h-1 bg-[#85877f] w-full rounded-[1px]" />
                <div className="h-1 bg-[#85877f] w-4/5 rounded-[1px]" />
              </div>

              <div className="pt-2 border-t border-[#e5e5dc] space-y-1.5">
                <div className="h-2 bg-[#171916] w-2/5 rounded-[1px]" />
                <div className="h-1 bg-[#85877f] w-full rounded-[1px]" />
                <div className="h-1 bg-[#85877f] w-3/4 rounded-[1px]" />
              </div>

              <div className="pt-2 flex justify-between items-center text-[10px] font-mono font-bold text-[#3f6b00]">
                <span>Click to preview PDF</span>
                <span>→</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CvSection;
