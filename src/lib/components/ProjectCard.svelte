<script lang="ts">
	import type { ProjectMeta } from '$lib/data/projects';

	let { project }: { project: ProjectMeta } = $props();
</script>

<a
	href="/projects/{project.slug}"
	class="group block rounded-xl border border-purple-200/50 bg-white/80 p-6 transition-shadow hover:shadow-lg hover:shadow-purple-200/30 dark:border-purple-800/50 dark:bg-zinc-950/80"
>
	<div
		class="mb-4 h-48 overflow-hidden rounded-lg bg-gradient-to-br from-purple-50 to-fuchsia-50 dark:from-purple-900/20 dark:to-fuchsia-900/20"
	>
		<div
			class="flex h-full items-center justify-center text-4xl text-purple-600/30 dark:text-purple-400/30"
		>
			{'</>'}
		</div>
	</div>

	<h3 class="mb-2 text-xl font-semibold text-zinc-900 dark:text-white">
		{project.title}
	</h3>
	<p class="mb-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
		{project.description}
	</p>

	<div class="mb-4 flex flex-wrap gap-2">
		{#each project.tags as tag}
			<span
				class="rounded-full bg-purple-50 px-3 py-1 text-xs font-medium text-purple-700 dark:bg-purple-900/30 dark:text-purple-300"
			>
				{tag}
			</span>
		{/each}
	</div>

	<div class="flex gap-4">
		<span
			class="text-sm font-medium text-purple-600 transition-colors group-hover:text-purple-800 dark:text-purple-400 dark:group-hover:text-purple-300"
		>
			View Details &rarr;
		</span>
	</div>
</a>
