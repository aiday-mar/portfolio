<script lang="ts">
    import { onMount } from "svelte";

    let { data } = $props();
    const Content = $derived(data.content);

    let contentEl: HTMLElement;

    onMount(() => {
        renderMermaid();
    });

    async function renderMermaid() {
        if (!contentEl) return;
        const codeEls = contentEl.querySelectorAll("code.language-mermaid");
        if (codeEls.length === 0) return;

        const mermaid = (await import("mermaid")).default;
        mermaid.initialize({
            startOnLoad: false,
            theme: "base",
            themeVariables: {
                primaryColor: "#ede9fe",
                primaryTextColor: "#4c1d95",
                primaryBorderColor: "#a78bfa",
                lineColor: "#7c3aed",
                secondaryColor: "#f3e8ff",
                tertiaryColor: "#faf5ff",
                fontFamily: "ui-sans-serif, system-ui, sans-serif",
                fontSize: "18px",
                clusterBkg: "#f5f3ff",
                clusterBorder: "#c4b5fd",
                edgeLabelBackground: "#ffffff",
                nodeTextColor: "#3b0764",
            },
            flowchart: {
                padding: 20,
                nodeSpacing: 60,
                rankSpacing: 80,
                useMaxWidth: true,
            },
        });

        for (const codeEl of codeEls) {
            const pre = codeEl.parentElement;
            if (!pre) continue;
            const text = codeEl.textContent ?? "";
            const id = `mermaid-${crypto.randomUUID().slice(0, 8)}`;
            const { svg } = await mermaid.render(id, text);
            const div = document.createElement("div");
            div.className = "mermaid-diagram";
            div.innerHTML = svg;
            pre.replaceWith(div);
        }
    }
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

        <!-- Details (rendered from markdown) -->
        <div class="mb-10">
            <div
                bind:this={contentEl}
                class="prose prose-zinc dark:prose-invert leading-relaxed text-zinc-600 dark:text-zinc-400"
            >
                <Content />
            </div>
        </div>

        <!-- Links -->
        {#if data.meta.link || data.meta.github}
            <div class="flex gap-4">
                {#if data.meta.link}
                    <a
                        href={data.meta.link}
                        class="inline-flex h-10 items-center justify-center rounded-full bg-purple-600 px-6 text-sm font-medium text-white transition-colors hover:bg-purple-700"
                    >
                        Live Demo
                    </a>
                {/if}
                {#if data.meta.github}
                    <a
                        href={data.meta.github}
                        class="inline-flex h-10 items-center justify-center rounded-full border border-purple-300 px-6 text-sm font-medium text-purple-900 transition-colors hover:bg-purple-50 dark:border-purple-700 dark:text-purple-200 dark:hover:bg-purple-900/30"
                    >
                        GitHub
                    </a>
                {/if}
            </div>
        {/if}
    </div>
</main>

<style>
    :global(.mermaid-diagram) {
        background: linear-gradient(135deg, #faf5ff, #f3e8ff, #ede9fe);
        border: 1px solid #ddd6fe;
        border-radius: 1rem;
        padding: 2rem;
        margin: 1.5rem 0;
        display: flex;
        justify-content: center;
        box-shadow:
            0 4px 6px -1px rgb(139 92 246 / 0.1),
            0 2px 4px -2px rgb(139 92 246 / 0.1);
    }
    :global(.mermaid-diagram svg) {
        max-width: 100%;
        height: auto;
    }
</style>
