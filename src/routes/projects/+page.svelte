<script lang="ts">
    import ProjectCard from "$lib/components/ProjectCard.svelte";

    let { data } = $props();
</script>

<svelte:head>
    <title>All Projects | Portfolio</title>
    <meta name="description" content="Browse all my projects and work." />
</svelte:head>

<main class="px-6 pb-24 pt-28">
    <div class="mx-auto max-w-6xl">
        <div class="mb-12">
            <a
                href="/"
                class="text-sm font-medium text-purple-600 transition-colors hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-300"
            >
                &larr; Back to Home
            </a>
        </div>

        <h1
            class="mb-4 text-4xl font-bold tracking-tight text-zinc-900 dark:text-white"
        >
            All Projects
        </h1>

        <!-- VS Code Work -->
        <h2
            class="mb-2 text-2xl font-bold tracking-tight text-zinc-900 dark:text-white"
        >
            VS Code Work
        </h2>
        <div
            class="mx-auto mb-8 ml-0 mr-auto h-1 w-12 rounded bg-purple-600"
        ></div>
        <div class="mb-20 grid gap-8 md:grid-cols-2">
            {#each data.vscodeProjects as project}
                <ProjectCard {project} />
            {/each}
        </div>

        <!-- Personal Work -->
        <h2
            class="mb-2 text-2xl font-bold tracking-tight text-zinc-900 dark:text-white"
        >
            Personal Work
        </h2>
        <div
            class="mx-auto mb-8 ml-0 mr-auto h-1 w-12 rounded bg-purple-600"
        ></div>
        <div class="grid gap-8 md:grid-cols-2">
            {#each data.personalProjects as project}
                <ProjectCard {project} />
            {/each}
        </div>
    </div>
</main>
