<script lang="ts">
    let { data } = $props();
    const Content = $derived(data.content);
</script>

<svelte:head>
    <title>{data.meta.title} | Portfolio</title>
    <meta name="description" content={data.meta.description} />
</svelte:head>

<main class="px-6 pb-24 pt-28">
    <div class="mx-auto max-w-3xl">
        <div class="mb-8">
            <a
                href="/projects"
                class="text-sm font-medium text-purple-600 transition-colors hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-300"
            >
                &larr; All Projects
            </a>
        </div>

        <!-- Header -->
        <h1
            class="mb-4 text-4xl font-bold tracking-tight text-zinc-900 dark:text-white"
        >
            {data.meta.title}
        </h1>

        <div class="mb-8 flex flex-wrap gap-2">
            {#each data.meta.tags as tag}
                <span
                    class="rounded-full bg-purple-50 px-3 py-1 text-xs font-medium text-purple-700 dark:bg-purple-900/30 dark:text-purple-300"
                >
                    {tag}
                </span>
            {/each}
        </div>

        <!-- Image placeholder -->
        <div
            class="mb-10 h-64 overflow-hidden rounded-xl bg-gradient-to-br from-purple-50 to-fuchsia-50 dark:from-purple-900/20 dark:to-fuchsia-900/20"
        >
            <div
                class="flex h-full items-center justify-center text-6xl text-purple-600/20 dark:text-purple-400/20"
            >
                {"</>"}
            </div>
        </div>

        <!-- Details (rendered from markdown) -->
        <div class="mb-10">
            <h2
                class="mb-4 text-xl font-semibold text-zinc-900 dark:text-white"
            >
                About This Project
            </h2>
            <div
                class="prose prose-zinc dark:prose-invert leading-relaxed text-zinc-600 dark:text-zinc-400"
            >
                <Content />
            </div>
        </div>

        <!-- Links -->
        <div class="flex gap-4">
            <a
                href={data.meta.link}
                class="inline-flex h-10 items-center justify-center rounded-full bg-purple-600 px-6 text-sm font-medium text-white transition-colors hover:bg-purple-700"
            >
                Live Demo
            </a>
            <a
                href={data.meta.github}
                class="inline-flex h-10 items-center justify-center rounded-full border border-purple-300 px-6 text-sm font-medium text-purple-900 transition-colors hover:bg-purple-50 dark:border-purple-700 dark:text-purple-200 dark:hover:bg-purple-900/30"
            >
                GitHub
            </a>
        </div>
    </div>
</main>
