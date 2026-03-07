import Link from "next/link";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export const metadata = {
  title: "All Projects | Portfolio",
  description: "Browse all my projects and work.",
};

export default function ProjectsPage() {
  return (
    <main className="px-6 pb-24 pt-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <Link
            href="/"
            className="text-sm font-medium text-purple-600 transition-colors hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-300"
          >
            &larr; Back to Home
          </Link>
        </div>

        <h1 className="mb-4 text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
          All Projects
        </h1>
        <p className="mb-12 text-zinc-600 dark:text-zinc-400">
          A collection of all my work and side projects.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </main>
  );
}
