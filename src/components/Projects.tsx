import Link from "next/link";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

const PREVIEW_COUNT = 4;

export default function Projects() {
    const previewProjects = projects.slice(0, PREVIEW_COUNT);

    return (
        <section id="projects" className="bg-zinc-50 px-6 pt-12 pb-24 dark:bg-zinc-900/50">
            <div className="mx-auto max-w-6xl">
                <h2 className="mb-4 text-center text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
                    Projects
                </h2>
                <div className="mx-auto mb-12 h-1 w-12 rounded bg-purple-600" />

                <div className="grid gap-8 md:grid-cols-2">
                    {previewProjects.map((project) => (
                        <ProjectCard key={project.title} project={project} />
                    ))}
                </div>

                {projects.length > PREVIEW_COUNT && (
                    <div className="mt-12 text-center">
                        <Link
                            href="/projects"
                            className="inline-flex h-12 items-center justify-center rounded-full border border-purple-300 px-8 text-sm font-medium text-purple-900 transition-colors hover:bg-purple-50 dark:border-purple-700 dark:text-purple-200 dark:hover:bg-purple-900/30"
                        >
                            View All Projects &rarr;
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
}
