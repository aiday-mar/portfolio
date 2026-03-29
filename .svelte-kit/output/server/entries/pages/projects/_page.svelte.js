import { h as head, e as ensure_array_like } from "../../../chunks/index.js";
import { v as vscodeProjects, a as personalProjects } from "../../../chunks/projects.js";
import { P as ProjectCard } from "../../../chunks/ProjectCard.js";
function _page($$renderer) {
  head("rqn88j", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>All Projects | Portfolio</title>`);
    });
    $$renderer2.push(`<meta name="description" content="Browse all my projects and work."/>`);
  });
  $$renderer.push(`<main class="px-6 pb-24 pt-28"><div class="mx-auto max-w-6xl"><div class="mb-12"><a href="/" class="text-sm font-medium text-purple-600 transition-colors hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-300">← Back to Home</a></div> <h1 class="mb-4 text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">All Projects</h1> <p class="mb-16 text-zinc-600 dark:text-zinc-400">A collection of all my work and side projects.</p> <h2 class="mb-2 text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">VS Code Work</h2> <div class="mx-auto mb-8 ml-0 mr-auto h-1 w-12 rounded bg-purple-600"></div> <div class="mb-20 grid gap-8 md:grid-cols-2"><!--[-->`);
  const each_array = ensure_array_like(vscodeProjects);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let project = each_array[$$index];
    ProjectCard($$renderer, { project });
  }
  $$renderer.push(`<!--]--></div> <h2 class="mb-2 text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">Personal Work</h2> <div class="mx-auto mb-8 ml-0 mr-auto h-1 w-12 rounded bg-purple-600"></div> <div class="grid gap-8 md:grid-cols-2"><!--[-->`);
  const each_array_1 = ensure_array_like(personalProjects);
  for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
    let project = each_array_1[$$index_1];
    ProjectCard($$renderer, { project });
  }
  $$renderer.push(`<!--]--></div></div></main>`);
}
export {
  _page as default
};
