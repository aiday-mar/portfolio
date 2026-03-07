export default function About() {
    return (
        <section id="about" className="px-6 py-24">
            <div className="mx-auto max-w-6xl">
                <h2 className="mb-4 text-center text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
                    About Me
                </h2>
                <div className="mx-auto mb-12 h-1 w-12 rounded bg-purple-600" />

                <div className="grid gap-12 md:grid-cols-2">
                    {/* Photo placeholder */}
                    <div className="flex items-center justify-center">
                        <div className="h-80 w-80 overflow-hidden rounded-2xl bg-gradient-to-br from-purple-100 to-fuchsia-100 dark:from-purple-900/30 dark:to-fuchsia-900/30">
                            <div className="flex h-full items-center justify-center text-6xl text-purple-600/50 dark:text-purple-400/50">
                                {"</>"}
                            </div>
                        </div>
                    </div>

                    {/* Bio */}
                    <div className="flex flex-col justify-center">
                        <h3 className="mb-4 text-xl font-semibold text-zinc-900 dark:text-white">
                            A developer who loves building things
                        </h3>
                        <p className="mb-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
                            I&apos;m a software developer with a passion for building web applications
                            that are both beautiful and functional. I enjoy working across the full
                            stack, from crafting pixel-perfect UIs to designing robust APIs.
                        </p>
                        <p className="mb-6 leading-relaxed text-zinc-600 dark:text-zinc-400">
                            When I&apos;m not coding, you can find me exploring new technologies,
                            contributing to open source, or learning about system design.
                        </p>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="rounded-lg border border-purple-200/50 p-4 dark:border-purple-800/50">
                                <p className="text-2xl font-bold text-purple-600">3+</p>
                                <p className="text-sm text-zinc-600 dark:text-zinc-400">Years Experience</p>
                            </div>
                            <div className="rounded-lg border border-purple-200/50 p-4 dark:border-purple-800/50">
                                <p className="text-2xl font-bold text-purple-600">20+</p>
                                <p className="text-sm text-zinc-600 dark:text-zinc-400">Projects Completed</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
