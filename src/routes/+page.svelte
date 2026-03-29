<script lang="ts">
    import About from "$lib/components/About.svelte";
    import Projects from "$lib/components/Projects.svelte";
    import Skills from "$lib/components/Skills.svelte";

    let { data } = $props();
</script>

<main class="pt-20">
    <section
        class="relative flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center overflow-hidden px-6 text-center"
    >
        <!-- Animated gradient background blobs -->
        <div class="pointer-events-none absolute inset-0 -z-10">
            <div
                class="absolute left-1/2 top-1/4 h-72 w-72 -translate-x-1/2 rounded-full bg-purple-500/20 blur-3xl animate-[pulse_4s_ease-in-out_infinite]"
            ></div>
            <div
                class="absolute right-1/4 bottom-1/3 h-56 w-56 rounded-full bg-fuchsia-500/15 blur-3xl animate-[pulse_5s_ease-in-out_1s_infinite]"
            ></div>
            <div
                class="absolute left-1/4 bottom-1/4 h-48 w-48 rounded-full bg-indigo-500/15 blur-3xl animate-[pulse_6s_ease-in-out_2s_infinite]"
            ></div>
        </div>

        <p
            class="mb-4 text-sm font-medium uppercase tracking-widest text-purple-400"
        >
            Welcome to my portfolio
        </p>
        <h1
            class="mb-4 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-indigo-500 bg-clip-text text-6xl font-extrabold tracking-tight text-transparent sm:text-7xl md:text-8xl"
        >
            Hi!
        </h1>
        <p
            class="mb-2 text-2xl font-semibold text-zinc-800 dark:text-zinc-100 sm:text-3xl"
        >
            I'm Aiday Marlen Kyzy
        </p>
        <p
            class="max-w-xl text-lg leading-relaxed text-zinc-500 dark:text-zinc-400"
        >
            Software developer crafting beautiful &amp; functional web
            experiences.
        </p>

        <!-- Scroll indicator -->
        <div
            class="absolute bottom-8 flex flex-col items-center gap-2 text-zinc-400 animate-bounce"
        >
            <span class="text-xs tracking-wide uppercase">Scroll</span>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19 9l-7 7-7-7"
                />
            </svg>
        </div>
    </section>
    <Projects projects={data.projects} />
    <About />
    <Skills />
</main>
