import "clsx";
import { e as ensure_array_like, b as escape_html } from "../../chunks/index.js";
import { P as ProjectCard } from "../../chunks/ProjectCard.js";
function About($$renderer) {
  $$renderer.push(`<section id="about" class="px-6 py-24"><div class="mx-auto max-w-6xl"><h2 class="mb-4 text-center text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">About Me</h2> <div class="mx-auto mb-12 h-1 w-12 rounded bg-purple-600"></div> <div class="grid gap-12 md:grid-cols-2"><div class="flex items-center justify-center"><div class="h-80 w-80 overflow-hidden rounded-2xl bg-gradient-to-br from-purple-100 to-fuchsia-100 dark:from-purple-900/30 dark:to-fuchsia-900/30"><div class="flex h-full items-center justify-center text-6xl text-purple-600/50 dark:text-purple-400/50">&lt;/></div></div></div> <div class="flex flex-col justify-center"><h3 class="mb-4 text-xl font-semibold text-zinc-900 dark:text-white">A developer who loves building things</h3> <p class="mb-4 leading-relaxed text-zinc-600 dark:text-zinc-400">I'm a software developer with a passion for building web applications that are
					both beautiful and functional. I enjoy working across the full stack, from
					crafting pixel-perfect UIs to designing robust APIs.</p> <p class="mb-6 leading-relaxed text-zinc-600 dark:text-zinc-400">When I'm not coding, you can find me exploring new technologies, contributing to
					open source, or learning about system design.</p> <div class="grid grid-cols-2 gap-4"><div class="rounded-lg border border-purple-200/50 p-4 dark:border-purple-800/50"><p class="text-2xl font-bold text-purple-600">3+</p> <p class="text-sm text-zinc-600 dark:text-zinc-400">Years Experience</p></div> <div class="rounded-lg border border-purple-200/50 p-4 dark:border-purple-800/50"><p class="text-2xl font-bold text-purple-600">20+</p> <p class="text-sm text-zinc-600 dark:text-zinc-400">Projects Completed</p></div></div></div></div></div></section>`);
}
function Projects($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { projects } = $$props;
    const PREVIEW_COUNT = 4;
    const previewProjects = projects.slice(0, PREVIEW_COUNT);
    $$renderer2.push(`<section id="projects" class="bg-zinc-50 px-6 pt-12 pb-24 dark:bg-zinc-900/50"><div class="mx-auto max-w-6xl"><h2 class="mb-4 text-center text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">Projects</h2> <div class="mx-auto mb-12 h-1 w-12 rounded bg-purple-600"></div> <div class="grid gap-8 md:grid-cols-2"><!--[-->`);
    const each_array = ensure_array_like(previewProjects);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let project = each_array[$$index];
      ProjectCard($$renderer2, { project });
    }
    $$renderer2.push(`<!--]--></div> `);
    if (projects.length > PREVIEW_COUNT) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="mt-12 text-center"><a href="/projects" class="inline-flex h-12 items-center justify-center rounded-full border border-purple-300 px-8 text-sm font-medium text-purple-900 transition-colors hover:bg-purple-50 dark:border-purple-700 dark:text-purple-200 dark:hover:bg-purple-900/30">View All Projects →</a></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div></section>`);
  });
}
function Skills($$renderer) {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "HTML/CSS",
        "JavaScript"
      ]
    },
    {
      title: "Backend",
      skills: [
        "Node.js",
        "Express",
        "Python",
        "REST APIs",
        "GraphQL",
        "PostgreSQL"
      ]
    },
    {
      title: "Tools & DevOps",
      skills: ["Git", "Docker", "CI/CD", "AWS", "Vercel", "Linux"]
    }
  ];
  $$renderer.push(`<section id="skills" class="px-6 py-24"><div class="mx-auto max-w-6xl"><h2 class="mb-4 text-center text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">Skills</h2> <div class="mx-auto mb-12 h-1 w-12 rounded bg-purple-600"></div> <div class="grid gap-8 md:grid-cols-3"><!--[-->`);
  const each_array = ensure_array_like(skillCategories);
  for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
    let category = each_array[$$index_1];
    $$renderer.push(`<div class="rounded-xl border border-purple-200/50 p-6 dark:border-purple-800/50"><h3 class="mb-4 text-lg font-semibold text-zinc-900 dark:text-white">${escape_html(category.title)}</h3> <div class="flex flex-wrap gap-2"><!--[-->`);
    const each_array_1 = ensure_array_like(category.skills);
    for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
      let skill = each_array_1[$$index];
      $$renderer.push(`<span class="rounded-lg bg-zinc-100 px-3 py-2 text-sm font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">${escape_html(skill)}</span>`);
    }
    $$renderer.push(`<!--]--></div></div>`);
  }
  $$renderer.push(`<!--]--></div></div></section>`);
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    $$renderer2.push(`<main class="pt-20"><section class="px-6 pt-16 pb-6 text-center"><h1 class="mb-3 text-4xl font-bold tracking-tight text-purple-600">Hi!</h1> <p class="text-lg text-zinc-600 dark:text-zinc-400">My name is Aiday Marlen Kyzy. Welcome to my portfolio!</p></section> `);
    Projects($$renderer2, { projects: data.projects });
    $$renderer2.push(`<!----> `);
    About($$renderer2);
    $$renderer2.push(`<!----> `);
    Skills($$renderer2);
    $$renderer2.push(`<!----></main>`);
  });
}
export {
  _page as default
};
