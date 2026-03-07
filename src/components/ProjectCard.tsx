import { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group rounded-xl border border-purple-200/50 bg-white/80 p-6 transition-shadow hover:shadow-lg hover:shadow-purple-200/30 dark:border-purple-800/50 dark:bg-zinc-950/80">
      <div className="mb-4 h-48 overflow-hidden rounded-lg bg-gradient-to-br from-purple-50 to-fuchsia-50 dark:from-purple-900/20 dark:to-fuchsia-900/20">
        <div className="flex h-full items-center justify-center text-4xl text-purple-600/30 dark:text-purple-400/30">
          {"</>"}
        </div>
      </div>

      <h3 className="mb-2 text-xl font-semibold text-zinc-900 dark:text-white">
        {project.title}
      </h3>
      <p className="mb-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
        {project.description}
      </p>

      <div className="mb-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-purple-50 px-3 py-1 text-xs font-medium text-purple-700 dark:bg-purple-900/30 dark:text-purple-300"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-4">
        <a
          href={project.link}
          className="text-sm font-medium text-purple-600 transition-colors hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-300"
        >
          Live Demo &rarr;
        </a>
        <a
          href={project.github}
          className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}
