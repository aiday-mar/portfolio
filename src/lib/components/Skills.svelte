<script lang="ts">
	const skillCategories = [
		{
			title: "Frontend",
			skills: ["React", "Svelte", "TypeScript", "HTML/CSS", "JavaScript"],
		},
		{
			title: "Backend",
			skills: ["Node.js", "Esbuild", "Python"],
		},
		{
			title: "Tools & DevOps",
			skills: ["Git", "Docker", "Azure", "Vercel", "Linux"],
		},
	];
</script>

<section id="skills" class="px-6 py-24">
	<div class="mx-auto max-w-6xl">
		<h2
			class="mb-4 text-center text-3xl font-bold tracking-tight text-zinc-900 dark:text-white"
		>
			Skills
		</h2>
		<div class="mx-auto mb-12 h-1 w-12 rounded bg-purple-600"></div>

		<div class="grid gap-8 md:grid-cols-3">
			{#each skillCategories as category}
				<div
					class="rounded-xl border border-purple-200/50 p-6 dark:border-purple-800/50"
				>
					<h3
						class="mb-4 text-lg font-semibold text-zinc-900 dark:text-white"
					>
						{category.title}
					</h3>
					<div class="flex flex-wrap gap-2">
						{#each category.skills as skill}
							<span
								class="rounded-lg bg-zinc-100 px-3 py-2 text-sm font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
							>
								{skill}
							</span>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
