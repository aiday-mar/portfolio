import { e as ensure_array_like, a as attr, b as escape_html, h as head } from "../../chunks/index.js";
import "clsx";
function Navbar($$renderer) {
  const navLinks = [
    { href: "/projects", label: "All Projects" },
    { href: "/#about", label: "About" },
    { href: "/#skills", label: "Skills" }
  ];
  $$renderer.push(`<nav class="fixed top-0 z-50 w-full border-b border-purple-200/50 bg-white/80 backdrop-blur-md dark:border-purple-900/50 dark:bg-zinc-950/80"><div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"><a href="/" class="text-xl font-bold tracking-tight text-zinc-900 dark:text-white">&lt;Portfolio /></a> <ul class="hidden gap-8 md:flex"><!--[-->`);
  const each_array = ensure_array_like(navLinks);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let link = each_array[$$index];
    $$renderer.push(`<li><a${attr("href", link.href)} class="text-sm font-medium text-zinc-600 transition-colors hover:text-purple-700 dark:text-zinc-400 dark:hover:text-purple-300">${escape_html(link.label)}</a></li>`);
  }
  $$renderer.push(`<!--]--></ul> <button class="md:hidden" aria-label="Toggle menu"><svg class="h-6 w-6 text-zinc-700 dark:text-zinc-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">`);
  {
    $$renderer.push("<!--[-1-->");
    $$renderer.push(`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>`);
  }
  $$renderer.push(`<!--]--></svg></button></div> `);
  {
    $$renderer.push("<!--[-1-->");
  }
  $$renderer.push(`<!--]--></nav>`);
}
function Footer($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    $$renderer2.push(`<footer class="border-t border-purple-200/50 px-6 py-8 dark:border-purple-900/50"><div class="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row"><p class="text-sm text-zinc-600 dark:text-zinc-400">© ${escape_html((/* @__PURE__ */ new Date()).getFullYear())} Your Name. All rights reserved.</p> <div class="flex gap-6"><a href="https://github.com" target="_blank" rel="noopener noreferrer" class="text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">GitHub</a> <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">LinkedIn</a> <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" class="text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">Twitter</a></div></div></footer>`);
  });
}
function _layout($$renderer, $$props) {
  let { children } = $$props;
  head("12qhfyh", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>Portfolio | Software Developer</title>`);
    });
    $$renderer2.push(`<meta name="description" content="Software developer portfolio — modern web applications with clean code and great user experiences."/>`);
  });
  Navbar($$renderer);
  $$renderer.push(`<!----> `);
  children($$renderer);
  $$renderer.push(`<!----> `);
  Footer($$renderer);
  $$renderer.push(`<!---->`);
}
export {
  _layout as default
};
