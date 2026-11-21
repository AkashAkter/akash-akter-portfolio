import { Suspense } from "react";
import ProjectDetailsClient from "./ProjectDetailsClient";

export default function ProjectPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-slate-50 flex items-center justify-center">
          <div className="animate-pulse text-slate-400 text-lg">Loading project...</div>
        </div>
      }
    >
      <ProjectDetailsClient />
    </Suspense>
  );
}
