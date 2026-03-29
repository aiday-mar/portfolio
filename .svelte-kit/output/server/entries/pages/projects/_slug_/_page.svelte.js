import { h as head, b as escape_html, e as ensure_array_like, a as attr } from "../../../../chunks/index.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    const Content = data.content;
    head("gygcht", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>${escape_html(data.meta.title)} | Portfolio</title>`);
      });
      $$renderer3.push(`<meta name="description"${attr("content", data.meta.description)}/>`);
    });
    $$renderer2.push(`<main class="px-6 pb-24 pt-28"><div class="mx-auto max-w-3xl"><div class="mb-8"><a href="/projects" class="text-sm font-medium text-purple-600 transition-colors hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-300">← All Projects</a></div> <h1 class="mb-4 text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">${escape_html(data.meta.title)}</h1> <div class="mb-8 flex flex-wrap gap-2"><!--[-->`);
    const each_array = ensure_array_like(data.meta.tags);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let tag = each_array[$$index];
      $$renderer2.push(`<span class="rounded-full bg-purple-50 px-3 py-1 text-xs font-medium text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">${escape_html(tag)}</span>`);
    }
    $$renderer2.push(`<!--]--></div> <div class="mb-10 h-64 overflow-hidden rounded-xl bg-gradient-to-br from-purple-50 to-fuchsia-50 dark:from-purple-900/20 dark:to-fuchsia-900/20"><div class="flex h-full items-center justify-center text-6xl text-purple-600/20 dark:text-purple-400/20">&lt;/></div></div> <div class="mb-10"><h2 class="mb-4 text-xl font-semibold text-zinc-900 dark:text-white">About This Project</h2> <div class="prose prose-zinc dark:prose-invert leading-relaxed text-zinc-600 dark:text-zinc-400">`);
    Content($$renderer2, {});
    $$renderer2.push(`<!----></div></div> <div class="flex gap-4"><a${attr("href", data.meta.link)} class="inline-flex h-10 items-center justify-center rounded-full bg-purple-600 px-6 text-sm font-medium text-white transition-colors hover:bg-purple-700">Live Demo</a> <a${attr("href", data.meta.github)} class="inline-flex h-10 items-center justify-center rounded-full border border-purple-300 px-6 text-sm font-medium text-purple-900 transition-colors hover:bg-purple-50 dark:border-purple-700 dark:text-purple-200 dark:hover:bg-purple-900/30">GitHub</a></div></div></main>`);
  });
}
export {
  _page as default
};
