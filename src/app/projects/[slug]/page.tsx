import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

export function generateStaticParams() {
    return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    return params.then(({ slug }) => {
        const project = projects.find((p) => p.slug === slug);
        if (!project) return { title: "Project Not Found" };
        return {
            title: `${project.title} | Portfolio`,
            description: project.description,
        };
    });
}

export default async function ProjectDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <main className="px-6 pb-24 pt-28">
            <div className="mx-auto max-w-3xl">
                <div className="mb-8">
                    <Link
                        href="/projects"
                        className="text-sm font-medium text-purple-600 transition-colors hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-300"
                    >
                        &larr; All Projects
                    </Link>
                </div>

                {/* Header */}
                <h1 className="mb-4 text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
                    {project.title}
                </h1>

                <div className="mb-8 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="rounded-full bg-purple-50 px-3 py-1 text-xs font-medium text-purple-700 dark:bg-purple-900/30 dark:text-purple-300"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Image placeholder */}
                <div className="mb-10 h-64 overflow-hidden rounded-xl bg-gradient-to-br from-purple-50 to-fuchsia-50 dark:from-purple-900/20 dark:to-fuchsia-900/20">
                    <div className="flex h-full items-center justify-center text-6xl text-purple-600/20 dark:text-purple-400/20">
                        {"</>"}
                    </div>
                </div>

                {/* Details */}
                <div className="mb-10">
                    <h2 className="mb-4 text-xl font-semibold text-zinc-900 dark:text-white">
                        About This Project
                    </h2>
                    <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
                        {project.details}
                    </p>
                </div>

                {/* Links */}
                <div className="flex gap-4">
                    <a
                        href={project.link}
                        className="inline-flex h-10 items-center justify-center rounded-full bg-purple-600 px-6 text-sm font-medium text-white transition-colors hover:bg-purple-700"
                    >
                        Live Demo
                    </a>
                    <a
                        href={project.github}
                        className="inline-flex h-10 items-center justify-center rounded-full border border-purple-300 px-6 text-sm font-medium text-purple-900 transition-colors hover:bg-purple-50 dark:border-purple-700 dark:text-purple-200 dark:hover:bg-purple-900/30"
                    >
                        GitHub
                    </a>
                </div>
            </div>
        </main>
    );
}
