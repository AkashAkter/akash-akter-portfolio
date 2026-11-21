import { Suspense } from "react";
import ProjectDetailsClient from "./ProjectDetailsClient";

export default function ProjectPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[var(--surface)] text-[var(--text)] flex items-center justify-center font-mono">
          <div className="animate-pulse text-[var(--text-muted)] text-sm">
            Loading case study...
          </div>
        </div>
      }
    >
      <ProjectDetailsClient />
    </Suspense>
  );
}
