<script lang="ts">
	import { projects } from '$lib/data/projects';
	import ProjectCard from '$lib/components/ProjectCard.svelte';

	const PREVIEW_COUNT = 4;
	const previewProjects = projects.slice(0, PREVIEW_COUNT);
</script>

<section id="projects" class="bg-zinc-50 px-6 pt-12 pb-24 dark:bg-zinc-900/50">
	<div class="mx-auto max-w-6xl">
		<h2
			class="mb-4 text-center text-3xl font-bold tracking-tight text-zinc-900 dark:text-white"
		>
			Projects
		</h2>
		<div class="mx-auto mb-12 h-1 w-12 rounded bg-purple-600"></div>

		<div class="grid gap-8 md:grid-cols-2">
			{#each previewProjects as project}
				<ProjectCard {project} />
			{/each}
		</div>

		{#if projects.length > PREVIEW_COUNT}
			<div class="mt-12 text-center">
				<a
					href="/projects"
					class="inline-flex h-12 items-center justify-center rounded-full border border-purple-300 px-8 text-sm font-medium text-purple-900 transition-colors hover:bg-purple-50 dark:border-purple-700 dark:text-purple-200 dark:hover:bg-purple-900/30"
				>
					View All Projects &rarr;
				</a>
			</div>
		{/if}
	</div>
</section>
