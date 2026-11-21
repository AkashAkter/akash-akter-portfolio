"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";
import { FiSun, FiMoon } from "react-icons/fi";

const navLinks = [
  { href: "#work", id: "work", label: "Work" },
  { href: "#projects", id: "projects", label: "Projects" },
  { href: "#about", id: "about", label: "About" },
  { href: "#certificates", id: "certificates", label: "Certificates" },
  { href: "#cv", id: "cv", label: "CV" },
  { href: "#contact", id: "contact", label: "Contact" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const [theme, setTheme] = useState<"ink" | "paper">("ink");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "paper") {
      setTheme("paper");
      document.documentElement.setAttribute("data-theme", "paper");
    } else {
      setTheme("ink");
      document.documentElement.removeAttribute("data-theme");
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "ink" ? "paper" : "ink";
    setTheme(nextTheme);
    if (nextTheme === "paper") {
      document.documentElement.setAttribute("data-theme", "paper");
      localStorage.setItem("theme", "paper");
    } else {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("theme", "ink");
    }
  };

  // Precise Viewport Scrollspy matching Nuwantha
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 120) {
        setActiveSection("");
        return;
      }

      for (let i = 0; i < navLinks.length; i++) {
        const link = navLinks[i];
        const section = document.getElementById(link.id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 240 && rect.bottom >= 140) {
            setActiveSection(link.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        suppressHydrationWarning
        className="fixed top-0 left-0 right-0 z-40 bg-[var(--surface)]/90 backdrop-blur-md border-b border-[var(--rule)] transition-colors duration-200"
      >
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 h-16 flex items-center justify-between">
          {/* Logo (Human-crafted, authentic typography in Schibsted Grotesk, No Space) */}
          <Link
            href="/"
            className="font-bold text-sm tracking-tight text-[var(--text)] hover:text-[var(--accent-text)] transition-colors flex items-center gap-1.5"
          >
            <span>AkashAkter</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-text)]" />
          </Link>

          {/* Desktop Navigation matching Nuwantha PDF */}
          <nav className="hidden md:flex items-center gap-6 font-mono text-xs">
            {navLinks.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`relative py-1 transition-colors ${
                    isActive
                      ? "text-[var(--text)] font-bold"
                      : "text-[var(--text-muted)] hover:text-[var(--text)] font-normal"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[var(--accent-fill)] rounded-full animate-in fade-in duration-150" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right: Available now Pill + Theme Switcher */}
          <div className="hidden sm:flex items-center gap-4">
            {/* Nuwantha Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[var(--radius-mark)] border border-[var(--rule)] bg-[var(--surface-sunken)] font-mono text-xs text-[var(--text)]">
              <span className="w-1.5 h-1.5 rounded-sm bg-[var(--accent-fill)] inline-block animate-pulse" />
              <span>Available now</span>
            </div>

            {/* Ink / Paper Mode Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 text-[var(--text-muted)] hover:text-[var(--text)] border border-[var(--rule)] rounded-[var(--radius-mark)] bg-[var(--surface-sunken)] hover:border-[var(--accent-text)] transition-colors cursor-pointer w-8 h-8 flex items-center justify-center"
              title={theme === "ink" ? "Switch to Paper mode" : "Switch to Ink mode"}
            >
              {mounted ? (
                theme === "ink" ? <FiSun size={13} /> : <FiMoon size={13} />
              ) : (
                <span className="w-3.5 h-3.5 inline-block" />
              )}
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 text-[var(--text-muted)] hover:text-[var(--text)] border border-[var(--rule)] rounded-[var(--radius-mark)] bg-[var(--surface-sunken)] cursor-pointer w-8 h-8 flex items-center justify-center"
            >
              {mounted ? (
                theme === "ink" ? <FiSun size={14} /> : <FiMoon size={14} />
              ) : (
                <span className="w-3.5 h-3.5 inline-block" />
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[var(--text)] border border-[var(--rule)] rounded-[var(--radius-mark)] bg-[var(--surface-sunken)] hover:border-[var(--accent-text)] transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <HiX size={20} /> : <HiMenu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm md:hidden animate-in fade-in duration-200"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="fixed top-0 right-0 bottom-0 w-3/4 max-w-xs bg-[var(--surface)] border-l border-[var(--rule)] p-6 flex flex-col justify-between shadow-2xl transition-colors duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[var(--rule)]">
                <span className="font-bold text-sm text-[var(--text)] tracking-tight">
                  AkashAkter
                </span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 text-[var(--text-muted)] hover:text-[var(--text)] border border-[var(--rule)] rounded-[var(--radius-mark)] cursor-pointer"
                >
                  <HiX size={18} />
                </button>
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[var(--radius-mark)] border border-[var(--rule)] bg-[var(--surface-sunken)] font-mono text-xs text-[var(--text)] w-full">
                <span className="w-1.5 h-1.5 rounded-sm bg-[var(--accent-fill)] inline-block animate-pulse" />
                <span>Available now</span>
              </div>

              <nav className="flex flex-col space-y-1 font-mono text-sm">
                {navLinks.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`px-3 py-2.5 rounded-[var(--radius-mark)] transition-colors flex items-center justify-between ${
                        isActive
                          ? "bg-[var(--surface-sunken)] text-[var(--accent-text)] font-bold border-l-2 border-[var(--accent-fill)]"
                          : "text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--surface-sunken)]"
                      }`}
                    >
                      <span>{item.label}</span>
                      {isActive && <span className="text-[10px] uppercase font-mono tracking-widest text-[var(--accent-text)]">Active</span>}
                    </a>
                  );
                })}
              </nav>
            </div>

            <div className="pt-6 border-t border-[var(--rule)] font-mono text-xs text-[var(--text-muted)] space-y-2">
              <p className="text-[10px] uppercase tracking-wider">
                PUST CSE · Web Developer @ Betopia
              </p>
              <a
                href="mailto:your.akash.akter08@gmail.com"
                className="text-[var(--text)] hover:text-[var(--accent-text)] truncate block text-xs"
              >
                your.akash.akter08@gmail.com
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
