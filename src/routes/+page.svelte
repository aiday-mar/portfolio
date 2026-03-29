<script lang="ts">
    import About from "$lib/components/About.svelte";
    import Projects from "$lib/components/Projects.svelte";
    import Skills from "$lib/components/Skills.svelte";

    let { data } = $props();
</script>

<main class="pt-20">
    <section class="px-6 pt-16 pb-6 text-center">
        <h1 class="mb-3 text-4xl font-bold tracking-tight text-purple-600">
            Hi!
        </h1>
        <p class="text-lg text-zinc-600 dark:text-zinc-400">
            My name is Aiday Marlen Kyzy. Welcome to my portfolio!
        </p>
    </section>
    <Projects projects={data.projects} />
    <About />
    <Skills />
</main>
