<script lang="ts">
	let mobileOpen = $state(false);

	const navLinks = [
		{ href: '/projects', label: 'All Projects' },
		{ href: '/#about', label: 'About' },
		{ href: '/#skills', label: 'Skills' }
	];
</script>

<nav
	class="fixed top-0 z-50 w-full border-b border-purple-200/50 bg-white/80 backdrop-blur-md dark:border-purple-900/50 dark:bg-zinc-950/80"
>
	<div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
		<a href="/" class="text-xl font-bold tracking-tight text-zinc-900 dark:text-white">
			{'<Portfolio />'}
		</a>

		<!-- Desktop links -->
		<ul class="hidden gap-8 md:flex">
			{#each navLinks as link}
				<li>
					<a
						href={link.href}
						class="text-sm font-medium text-zinc-600 transition-colors hover:text-purple-700 dark:text-zinc-400 dark:hover:text-purple-300"
					>
						{link.label}
					</a>
				</li>
			{/each}
		</ul>

		<!-- Mobile menu button -->
		<button class="md:hidden" onclick={() => (mobileOpen = !mobileOpen)} aria-label="Toggle menu">
			<svg
				class="h-6 w-6 text-zinc-700 dark:text-zinc-300"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				{#if mobileOpen}
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M6 18L18 6M6 6l12 12"
					/>
				{:else}
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h16"
					/>
				{/if}
			</svg>
		</button>
	</div>

	<!-- Mobile menu -->
	{#if mobileOpen}
		<ul
			class="border-t border-purple-200/50 bg-white px-6 py-4 md:hidden dark:border-purple-900/50 dark:bg-zinc-950"
		>
			{#each navLinks as link}
				<li class="py-2">
					<a
						href={link.href}
						onclick={() => (mobileOpen = false)}
						class="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
					>
						{link.label}
					</a>
				</li>
			{/each}
		</ul>
	{/if}
</nav>
