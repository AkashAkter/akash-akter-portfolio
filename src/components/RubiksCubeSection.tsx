"use client";

import React, { useState, useEffect, useRef } from "react";
import { FiRefreshCw, FiZap, FiCheckCircle, FiCompass, FiMaximize2 } from "react-icons/fi";

type CubeFace = "front" | "right" | "back" | "left" | "top" | "bottom";

interface FaceData {
  id: CubeFace;
  label: string;
  category: string;
  color: string;
  rotation: { x: number; y: number };
  tiles: string[];
}

const faces: Record<CubeFace, FaceData> = {
  front: {
    id: "front",
    label: "Neural Networks & ML",
    category: "Machine Learning",
    color: "#34d399",
    rotation: { x: -10, y: 15 },
    tiles: [
      "Neural Nets", "SVM Kernels", "KNN Vector",
      "Loss Optim", "Static Analysis", "Feature Space",
      "Scikit-Learn", "NumPy Math", "IEEE ICAEEE"
    ],
  },
  right: {
    id: "right",
    label: "Full-Stack Web Systems",
    category: "Frontend Architecture",
    color: "#60a5fa",
    rotation: { x: -10, y: -75 },
    tiles: [
      "Next.js 16", "React 19", "TypeScript",
      "Tailwind CSS", "Redux Toolkit", "Turbopack",
      "Partial Prerender", "WebSockets", "SSR Hydration"
    ],
  },
  back: {
    id: "back",
    label: "Cloud & DevOps",
    category: "Distributed Infra",
    color: "#f59e0b",
    rotation: { x: -10, y: -165 },
    tiles: [
      "Docker Engine", "Linux Kernel", "CI/CD Actions",
      "Microservices", "Nginx Proxy", "REST Gateway",
      "Redis Caching", "JWT Security", "Git Workflows"
    ],
  },
  left: {
    id: "left",
    label: "Backend & Databases",
    category: "Server Engines",
    color: "#a78bfa",
    rotation: { x: -10, y: 105 },
    tiles: [
      "Node.js Runtime", "Express APIs", "MongoDB Cloud",
      "PostgreSQL", "Mongoose ODM", "Stripe Checkout",
      "Auth Middlewares", "Connection Pool", "Async Pipelines"
    ],
  },
  top: {
    id: "top",
    label: "Academic Research & Thesis",
    category: "Publications",
    color: "#2dd4bf",
    rotation: { x: -80, y: 15 },
    tiles: [
      "PUST B.Sc.", "12,050 Apps", "1,438 Vectors",
      "88.25% Acc.", "Peer-Reviewed", "Malware Vectors",
      "PhD Inquiries", "Bytecode Scan", "IEEE Xplore"
    ],
  },
  bottom: {
    id: "bottom",
    label: "Data Structures & Core CS",
    category: "Algorithms",
    color: "#fb7185",
    rotation: { x: 75, y: 15 },
    tiles: [
      "Dynamic Prog.", "Graph DFS/BFS", "Sort Heuristics",
      "Binary Trees", "Big-O Analysis", "Hash Tables",
      "Vector Spaces", "Memoization", "Complexity Math"
    ],
  },
};

const RubiksCubeSection = () => {
  const [rotation, setRotation] = useState({ x: -15, y: 35 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [activeFace, setActiveFace] = useState<CubeFace>("front");
  const [inspectedTile, setInspectedTile] = useState<string>("Neural Nets");
  const [synergyScore, setSynergyScore] = useState(120);
  const [isShuffling, setIsShuffling] = useState(false);
  const autoRotateRef = useRef<boolean>(true);

  // Auto slow rotation when idle
  useEffect(() => {
    const interval = setInterval(() => {
      if (autoRotateRef.current && !isDragging) {
        setRotation((prev) => ({
          x: prev.x,
          y: (prev.y + 0.35) % 360,
        }));
      }
    }, 30);
    return () => clearInterval(interval);
  }, [isDragging]);

  // Mouse interaction
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    autoRotateRef.current = false;
    setDragStart({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const deltaX = e.clientX - dragStart.x;
    const deltaY = e.clientY - dragStart.y;
    setRotation((prev) => ({
      x: Math.max(-85, Math.min(85, prev.x - deltaY * 0.4)),
      y: prev.y + deltaX * 0.4,
    }));
    setDragStart({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setTimeout(() => {
      autoRotateRef.current = true;
    }, 1800);
  };

  // Touch interaction for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      setIsDragging(true);
      autoRotateRef.current = false;
      setDragStart({ x: e.touches[0].clientX, y: e.touches[0].clientY });
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || e.touches.length !== 1) return;
    const deltaX = e.touches[0].clientX - dragStart.x;
    const deltaY = e.touches[0].clientY - dragStart.y;
    setRotation((prev) => ({
      x: Math.max(-85, Math.min(85, prev.x - deltaY * 0.4)),
      y: prev.y + deltaX * 0.4,
    }));
    setDragStart({ x: e.touches[0].clientX, y: e.touches[0].clientY });
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    setTimeout(() => {
      autoRotateRef.current = true;
    }, 1800);
  };

  const snapToFace = (faceId: CubeFace) => {
    autoRotateRef.current = false;
    setActiveFace(faceId);
    setRotation(faces[faceId].rotation);
    setInspectedTile(faces[faceId].tiles[4]); // Center tile
    setSynergyScore((prev) => prev + 15);
  };

  const handleTileClick = (faceId: CubeFace, tile: string) => {
    setInspectedTile(tile);
    setActiveFace(faceId);
    setSynergyScore((prev) => prev + 10);
  };

  const handleShuffle = () => {
    setIsShuffling(true);
    autoRotateRef.current = false;
    const randomX = Math.floor(Math.random() * 120) - 60;
    const randomY = Math.floor(Math.random() * 360);
    setRotation({ x: randomX, y: randomY });

    const faceKeys = Object.keys(faces) as CubeFace[];
    const randomFace = faceKeys[Math.floor(Math.random() * faceKeys.length)];
    const randomTile = faces[randomFace].tiles[Math.floor(Math.random() * 9)];
    setActiveFace(randomFace);
    setInspectedTile(randomTile);

    setTimeout(() => {
      setIsShuffling(false);
      autoRotateRef.current = true;
    }, 800);
  };

  const handleAlign = () => {
    snapToFace("front");
    setSynergyScore((prev) => prev + 50);
  };

  return (
    <section id="matrix" className="py-16 sm:py-24 bg-[var(--surface)] text-[var(--text)] border-t border-[var(--rule)] select-none transition-colors duration-200">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 border-b border-[var(--rule)] gap-4 mb-10">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)] mb-1">
              3D INTERACTIVE ARCHITECTURE
            </p>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--text)]">
              Architecture & Research Cube
            </h2>
          </div>

          <p className="font-mono text-xs text-[var(--text-muted)]">
            Rotate 360° · Click faces to align technical stack
          </p>
        </div>

        {/* 3D Stage + HUD */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: 3D Rubik's Cube Canvas */}
          <div
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            className="lg:col-span-8 relative rounded-[var(--radius-mark)] bg-[var(--surface-sunken)] border border-[var(--rule)] p-6 sm:p-12 overflow-hidden flex flex-col items-center justify-center min-h-[420px] sm:min-h-[480px] cursor-grab active:cursor-grabbing shadow-xs transition-colors"
            style={{ perspective: "900px" }}
          >
            {/* Top HUD Stats */}
            <div className="absolute top-4 left-5 right-5 flex items-center justify-between font-mono text-xs text-[var(--text-muted)] pointer-events-none">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[var(--brand-lime)] animate-ping" />
                <span className="text-[var(--text)] font-bold text-[11px]">
                  ACTIVE FACE: {faces[activeFace].label}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-[var(--accent-text)] font-bold">
                  SYNERGY: {synergyScore} PTS
                </span>
              </div>
            </div>

            {/* 3D Rubik's Cube */}
            <div
              className={`relative w-48 h-48 sm:w-56 sm:h-56 transition-transform duration-100 ${
                isShuffling ? "scale-95" : "scale-100"
              }`}
              style={{
                transformStyle: "preserve-3d",
                transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
              }}
            >
              {/* Face 1: FRONT (AI & ML) */}
              <div
                className="absolute inset-0 grid grid-cols-3 gap-1.5 p-2 bg-[#121816]/95 border-2 border-[var(--color-accent)] rounded-[4px] shadow-lg"
                style={{
                  transform: "translateZ(104px)",
                  backfaceVisibility: "hidden",
                }}
              >
                {faces.front.tiles.map((tile, i) => (
                  <button
                    key={i}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleTileClick("front", tile);
                    }}
                    className={`rounded-[2px] p-1 text-[9px] sm:text-[10px] font-mono font-bold transition-all text-center flex items-center justify-center border ${
                      inspectedTile === tile
                        ? "bg-[var(--color-accent)] text-[#121816] border-white scale-105"
                        : "bg-[var(--color-surface)] text-[var(--color-text)] border-[var(--color-border)] hover:border-[var(--color-accent)]"
                    }`}
                  >
                    <span className="truncate">{tile}</span>
                  </button>
                ))}
              </div>

              {/* Face 2: BACK (Cloud & DevOps) */}
              <div
                className="absolute inset-0 grid grid-cols-3 gap-1.5 p-2 bg-[#121816]/95 border-2 border-[#f59e0b] rounded-[4px] shadow-lg"
                style={{
                  transform: "rotateY(180deg) translateZ(104px)",
                  backfaceVisibility: "hidden",
                }}
              >
                {faces.back.tiles.map((tile, i) => (
                  <button
                    key={i}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleTileClick("back", tile);
                    }}
                    className={`rounded-[2px] p-1 text-[9px] sm:text-[10px] font-mono font-bold transition-all text-center flex items-center justify-center border ${
                      inspectedTile === tile
                        ? "bg-[#f59e0b] text-[#121816] border-white scale-105"
                        : "bg-[var(--color-surface)] text-[var(--color-text)] border-[var(--color-border)] hover:border-[#f59e0b]"
                    }`}
                  >
                    <span className="truncate">{tile}</span>
                  </button>
                ))}
              </div>

              {/* Face 3: RIGHT (Full-Stack Web) */}
              <div
                className="absolute inset-0 grid grid-cols-3 gap-1.5 p-2 bg-[#121816]/95 border-2 border-[#60a5fa] rounded-[4px] shadow-lg"
                style={{
                  transform: "rotateY(90deg) translateZ(104px)",
                  backfaceVisibility: "hidden",
                }}
              >
                {faces.right.tiles.map((tile, i) => (
                  <button
                    key={i}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleTileClick("right", tile);
                    }}
                    className={`rounded-[2px] p-1 text-[9px] sm:text-[10px] font-mono font-bold transition-all text-center flex items-center justify-center border ${
                      inspectedTile === tile
                        ? "bg-[#60a5fa] text-[#121816] border-white scale-105"
                        : "bg-[var(--color-surface)] text-[var(--color-text)] border-[var(--color-border)] hover:border-[#60a5fa]"
                    }`}
                  >
                    <span className="truncate">{tile}</span>
                  </button>
                ))}
              </div>

              {/* Face 4: LEFT (Backend & Databases) */}
              <div
                className="absolute inset-0 grid grid-cols-3 gap-1.5 p-2 bg-[#121816]/95 border-2 border-[#a78bfa] rounded-[4px] shadow-lg"
                style={{
                  transform: "rotateY(-90deg) translateZ(104px)",
                  backfaceVisibility: "hidden",
                }}
              >
                {faces.left.tiles.map((tile, i) => (
                  <button
                    key={i}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleTileClick("left", tile);
                    }}
                    className={`rounded-[2px] p-1 text-[9px] sm:text-[10px] font-mono font-bold transition-all text-center flex items-center justify-center border ${
                      inspectedTile === tile
                        ? "bg-[#a78bfa] text-[#121816] border-white scale-105"
                        : "bg-[var(--color-surface)] text-[var(--color-text)] border-[var(--color-border)] hover:border-[#a78bfa]"
                    }`}
                  >
                    <span className="truncate">{tile}</span>
                  </button>
                ))}
              </div>

              {/* Face 5: TOP (Academic Research) */}
              <div
                className="absolute inset-0 grid grid-cols-3 gap-1.5 p-2 bg-[#121816]/95 border-2 border-[#2dd4bf] rounded-[4px] shadow-lg"
                style={{
                  transform: "rotateX(90deg) translateZ(104px)",
                  backfaceVisibility: "hidden",
                }}
              >
                {faces.top.tiles.map((tile, i) => (
                  <button
                    key={i}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleTileClick("top", tile);
                    }}
                    className={`rounded-[2px] p-1 text-[9px] sm:text-[10px] font-mono font-bold transition-all text-center flex items-center justify-center border ${
                      inspectedTile === tile
                        ? "bg-[#2dd4bf] text-[#121816] border-white scale-105"
                        : "bg-[var(--color-surface)] text-[var(--color-text)] border-[var(--color-border)] hover:border-[#2dd4bf]"
                    }`}
                  >
                    <span className="truncate">{tile}</span>
                  </button>
                ))}
              </div>

              {/* Face 6: BOTTOM (Algorithms & CS) */}
              <div
                className="absolute inset-0 grid grid-cols-3 gap-1.5 p-2 bg-[#121816]/95 border-2 border-[#fb7185] rounded-[4px] shadow-lg"
                style={{
                  transform: "rotateX(-90deg) translateZ(104px)",
                  backfaceVisibility: "hidden",
                }}
              >
                {faces.bottom.tiles.map((tile, i) => (
                  <button
                    key={i}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleTileClick("bottom", tile);
                    }}
                    className={`rounded-[2px] p-1 text-[9px] sm:text-[10px] font-mono font-bold transition-all text-center flex items-center justify-center border ${
                      inspectedTile === tile
                        ? "bg-[#fb7185] text-[#121816] border-white scale-105"
                        : "bg-[var(--color-surface)] text-[var(--color-text)] border-[var(--color-border)] hover:border-[#fb7185]"
                    }`}
                  >
                    <span className="truncate">{tile}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Bottom HUD Tip */}
            <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between text-xs font-mono text-[var(--color-text-muted)] pointer-events-none">
              <span className="text-[11px]">Swipe or drag with mouse to inspect all 6 dimensions</span>
              <span className="hidden sm:inline text-[11px]">Perspective: 3D CSS Core</span>
            </div>
          </div>

          {/* Right: Cube Control Panel & Inspector */}
          <div className="lg:col-span-4 space-y-4">
            {/* Inspected Node Card */}
            <div className="p-5 border border-[var(--rule)] bg-[var(--surface)] space-y-2">
              <span className="font-mono text-[10px] text-[var(--accent-text)] uppercase tracking-wider block font-semibold">
                Focused Component
              </span>
              <h3 className="text-xl font-extrabold text-[var(--text)] tracking-tight">
                {inspectedTile}
              </h3>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                Part of Akash&apos;s active portfolio — bridging empirical ML research models and production full-stack systems.
              </p>
            </div>

            {/* Face Snap Buttons */}
            <div className="p-5 border border-[var(--rule)] bg-[var(--surface)] space-y-3">
              <span className="font-mono text-[10px] text-[var(--text-muted)] uppercase tracking-wider block">
                Face Snap Controls
              </span>
              <div className="grid grid-cols-2 gap-2 font-mono text-xs">
                {(Object.keys(faces) as CubeFace[]).map((faceId) => (
                  <button
                    key={faceId}
                    onClick={() => snapToFace(faceId)}
                    className={`px-3 py-2 border text-left transition-all ${
                      activeFace === faceId
                        ? "bg-[var(--accent-fill)] text-[var(--on-accent)] font-bold border-transparent"
                        : "bg-[var(--surface-sunken)] border-[var(--rule)] text-[var(--text)] hover:border-[var(--text)]"
                    }`}
                  >
                    <span className="block text-[10px] opacity-75 uppercase">
                      {faces[faceId].category}
                    </span>
                    <span className="truncate block font-sans font-medium text-xs">
                      {faces[faceId].label}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Action Bar */}
            <div className="flex items-center gap-3 font-mono text-xs">
              <button
                onClick={handleShuffle}
                className="flex-1 py-2 px-3 border border-[var(--rule)] hover:border-[var(--text)] text-[var(--text)] flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <FiRefreshCw className={isShuffling ? "animate-spin" : ""} />
                <span>Shuffle Cube</span>
              </button>

              <button
                onClick={handleAlign}
                className="flex-1 py-2 px-3 bg-[var(--accent-fill)] text-[var(--on-accent)] font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity cursor-pointer"
              >
                <FiCheckCircle />
                <span>Align Face</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RubiksCubeSection;
