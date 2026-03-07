const skillCategories = [
    {
        title: "Frontend",
        skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS", "JavaScript"],
    },
    {
        title: "Backend",
        skills: ["Node.js", "Express", "Python", "REST APIs", "GraphQL", "PostgreSQL"],
    },
    {
        title: "Tools & DevOps",
        skills: ["Git", "Docker", "CI/CD", "AWS", "Vercel", "Linux"],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="px-6 py-24">
            <div className="mx-auto max-w-6xl">
                <h2 className="mb-4 text-center text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
                    Skills
                </h2>
                <div className="mx-auto mb-12 h-1 w-12 rounded bg-purple-600" />

                <div className="grid gap-8 md:grid-cols-3">
                    {skillCategories.map((category) => (
                        <div
                            key={category.title}
                            className="rounded-xl border border-purple-200/50 p-6 dark:border-purple-800/50"
                        >
                            <h3 className="mb-4 text-lg font-semibold text-zinc-900 dark:text-white">
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="rounded-lg bg-zinc-100 px-3 py-2 text-sm font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
