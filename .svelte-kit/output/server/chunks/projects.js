import "clsx";
const metadata$5 = {
  "title": "Analytics Dashboard",
  "slug": "analytics-dashboard",
  "description": "An interactive analytics dashboard with custom charts, data filtering, and CSV/PDF export functionality.",
  "tags": ["Next.js", "D3.js", "PostgreSQL", "Redis"],
  "link": "#",
  "github": "#",
  "category": "vscode"
};
const { title: title$5, slug: slug$5, description: description$5, tags: tags$5, link: link$5, github: github$5, category: category$5 } = metadata$5;
function Analytics_dashboard_md($$renderer) {
  $$renderer.push(`<p>Created a comprehensive analytics dashboard for visualizing business metrics. Built with Next.js and D3.js for highly customizable, interactive charts including line graphs, bar charts, pie charts, and heatmaps. Users can filter data by date range, category, and custom dimensions. Supports exporting reports as CSV or PDF. The backend uses PostgreSQL for data storage and Redis for caching frequently accessed queries.</p>`);
}
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Analytics_dashboard_md,
  metadata: metadata$5
}, Symbol.toStringTag, { value: "Module" }));
const metadata$4 = {
  "title": "Blog Platform",
  "slug": "blog-platform",
  "description": "A markdown-based blog platform with syntax highlighting, SEO optimization, and a custom CMS.",
  "tags": ["Next.js", "MDX", "Prisma", "PostgreSQL"],
  "link": "#",
  "github": "#",
  "category": "vscode"
};
const { title: title$4, slug: slug$4, description: description$4, tags: tags$4, link: link$4, github: github$4, category: category$4 } = metadata$4;
function Blog_platform_md($$renderer) {
  $$renderer.push(`<p>Built a developer-focused blog platform using Next.js and MDX for rich markdown content with embedded React components. Features include syntax highlighting for code blocks, automatic table of contents generation, SEO metadata management, and a custom content management system backed by Prisma and PostgreSQL. The platform supports draft/published states, tags, and full-text search.</p>`);
}
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Blog_platform_md,
  metadata: metadata$4
}, Symbol.toStringTag, { value: "Module" }));
const metadata$3 = {
  "title": "Chat Application",
  "slug": "chat-application",
  "description": "A real-time messaging app with group chats, file sharing, and end-to-end encryption.",
  "tags": ["React", "Firebase", "WebRTC", "Tailwind CSS"],
  "link": "#",
  "github": "#",
  "category": "vscode"
};
const { title: title$3, slug: slug$3, description: description$3, tags: tags$3, link: link$3, github: github$3, category: category$3 } = metadata$3;
function Chat_application_md($$renderer) {
  $$renderer.push(`<p>Developed a full-featured chat application with React and Firebase. Supports one-on-one and group conversations, file and image sharing, read receipts, and typing indicators. Implemented WebRTC for voice and video calls. The app uses Firebase Authentication for user management and Firestore for real-time message syncing. Styled with Tailwind CSS for a clean, responsive interface across all devices.</p>`);
}
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Chat_application_md,
  metadata: metadata$3
}, Symbol.toStringTag, { value: "Module" }));
const metadata$2 = {
  "title": "E-Commerce Platform",
  "slug": "e-commerce-platform",
  "description": "A full-stack e-commerce application with product management, cart functionality, and payment integration.",
  "tags": ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
  "link": "#",
  "github": "#",
  "category": "personal"
};
const { title: title$2, slug: slug$2, description: description$2, tags: tags$2, link: link$2, github: github$2, category: category$2 } = metadata$2;
function E_commerce_platform_md($$renderer) {
  $$renderer.push(`<p>Built a complete e-commerce solution from scratch using Next.js and TypeScript. The platform features a product catalog with search and filtering, a shopping cart with real-time updates, user authentication, and Stripe payment integration. The admin dashboard allows managing products, orders, and customer data. Implemented server-side rendering for SEO optimization and used Tailwind CSS for a responsive, modern UI.</p>`);
}
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: E_commerce_platform_md,
  metadata: metadata$2
}, Symbol.toStringTag, { value: "Module" }));
const metadata$1 = {
  "title": "Task Management App",
  "slug": "task-management-app",
  "description": "A collaborative task management tool with real-time updates, drag-and-drop, and team workspaces.",
  "tags": ["React", "Node.js", "MongoDB", "Socket.io"],
  "link": "#",
  "github": "#",
  "category": "personal"
};
const { title: title$1, slug: slug$1, description: description$1, tags: tags$1, link: link$1, github: github$1, category: category$1 } = metadata$1;
function Task_management_app_md($$renderer) {
  $$renderer.push(`<p>Developed a Trello-inspired task management application with real-time collaboration features. Users can create workspaces, organize tasks into boards and columns, and drag-and-drop tasks between stages. Built with React on the frontend and Node.js with MongoDB on the backend. Socket.io enables real-time updates so team members see changes instantly. Features include task assignments, due dates, labels, comments, and activity logging.</p>`);
}
const __vite_glob_0_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Task_management_app_md,
  metadata: metadata$1
}, Symbol.toStringTag, { value: "Module" }));
const metadata = {
  "title": "Weather Dashboard",
  "slug": "weather-dashboard",
  "description": "A responsive weather dashboard that displays forecasts, maps, and historical weather data for any location.",
  "tags": ["React", "REST API", "Chart.js", "Tailwind CSS"],
  "link": "#",
  "github": "#",
  "category": "personal"
};
const { title, slug, description, tags, link, github, category } = metadata;
function Weather_dashboard_md($$renderer) {
  $$renderer.push(`<p>Created an interactive weather dashboard that fetches data from multiple weather APIs. Users can search for any location and view current conditions, hourly forecasts, and 7-day predictions. Features include interactive weather maps, historical data charts built with Chart.js, and saved favorite locations. The app is fully responsive and includes both light and dark themes with smooth animations.</p>`);
}
const __vite_glob_0_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Weather_dashboard_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
async function loadProjects() {
  const modules = /* @__PURE__ */ Object.assign({ "/src/content/projects/analytics-dashboard.md": __vite_glob_0_0, "/src/content/projects/blog-platform.md": __vite_glob_0_1, "/src/content/projects/chat-application.md": __vite_glob_0_2, "/src/content/projects/e-commerce-platform.md": __vite_glob_0_3, "/src/content/projects/task-management-app.md": __vite_glob_0_4, "/src/content/projects/weather-dashboard.md": __vite_glob_0_5 });
  return Object.values(modules).map((mod) => ({
    meta: mod.metadata,
    content: mod.default
  }));
}
async function loadProject(slug2) {
  const projects = await loadProjects();
  return projects.find((p) => p.meta.slug === slug2);
}
export {
  loadProject as a,
  loadProjects as l
};
