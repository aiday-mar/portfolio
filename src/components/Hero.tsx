export default function Hero() {
    return (
        <section className="flex min-h-screen items-center justify-center px-6">
            <div className="max-w-3xl text-center">
                <p className="mb-4 text-sm font-medium uppercase tracking-widest text-blue-600 dark:text-blue-400">
                    Software Developer
                </p>
                <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight text-zinc-900 sm:text-6xl lg:text-7xl dark:text-white">
                    Hi, I&apos;m{" "}
                    <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                        Your Name
                    </span>
                </h1>
                <p className="mx-auto mb-10 max-w-xl text-lg text-zinc-600 dark:text-zinc-400">
                    I build modern web applications with clean code and great user experiences.
                    Passionate about creating software that makes a difference.
                </p>
                <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                    <a
                        href="#projects"
                        className="inline-flex h-12 items-center justify-center rounded-full bg-zinc-900 px-8 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
                    >
                        View My Work
                    </a>
                    <a
                        href="#contact"
                        className="inline-flex h-12 items-center justify-center rounded-full border border-zinc-300 px-8 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-white dark:hover:bg-zinc-800"
                    >
                        Get in Touch
                    </a>
                </div>
            </div>
        </section>
    );
}
