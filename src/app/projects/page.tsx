import Link from "next/link";
import { vscodeProjects, personalProjects } from "@/data/projects";
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
                <p className="mb-16 text-zinc-600 dark:text-zinc-400">
                    A collection of all my work and side projects.
                </p>

                {/* VS Code Work */}
                <h2 className="mb-2 text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
                    VS Code Work
                </h2>
                <div className="mx-auto mb-8 h-1 w-12 rounded bg-purple-600 mr-auto ml-0" />
                <div className="mb-20 grid gap-8 md:grid-cols-2">
                    {vscodeProjects.map((project) => (
                        <ProjectCard key={project.title} project={project} />
                    ))}
                </div>

                {/* Personal Work */}
                <h2 className="mb-2 text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
                    Personal Work
                </h2>
                <div className="mx-auto mb-8 h-1 w-12 rounded bg-purple-600 mr-auto ml-0" />
                <div className="grid gap-8 md:grid-cols-2">
                    {personalProjects.map((project) => (
                        <ProjectCard key={project.title} project={project} />
                    ))}
                </div>
            </div>
        </main>
    );
}
