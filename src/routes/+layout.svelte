<script lang="ts">
    import "../app.css";
    import { beforeNavigate } from "$app/navigation";
    import Navbar from "$lib/components/Navbar.svelte";
    import Footer from "$lib/components/Footer.svelte";

    let { children } = $props();

    beforeNavigate(() => {
        document.documentElement.style.scrollBehavior = "auto";
        requestAnimationFrame(() => {
            document.documentElement.style.scrollBehavior = "";
        });
    });
</script>

<svelte:head>
    <title>Portfolio | Software Developer</title>
    <meta
        name="description"
        content="Software developer portfolio — modern web applications with clean code and great user experiences."
    />
</svelte:head>

<Navbar />
{@render children()}
<Footer />
