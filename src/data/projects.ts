export interface Project {
    title: string;
    description: string;
    tags: string[];
    link: string;
    github: string;
    category: "vscode" | "personal";
}

export const projects: Project[] = [
    {
        title: "E-Commerce Platform",
        description:
            "A full-stack e-commerce application with product management, cart functionality, and payment integration.",
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
        link: "#",
        github: "#",
        category: "personal",
    },
    {
        title: "Task Management App",
        description:
            "A collaborative task management tool with real-time updates, drag-and-drop, and team workspaces.",
        tags: ["React", "Node.js", "MongoDB", "Socket.io"],
        link: "#",
        github: "#",
        category: "personal",
    },
    {
        title: "Weather Dashboard",
        description:
            "A responsive weather dashboard that displays forecasts, maps, and historical weather data for any location.",
        tags: ["React", "REST API", "Chart.js", "Tailwind CSS"],
        link: "#",
        github: "#",
        category: "personal",
    },
    {
        title: "Blog Platform",
        description:
            "A markdown-based blog platform with syntax highlighting, SEO optimization, and a custom CMS.",
        tags: ["Next.js", "MDX", "Prisma", "PostgreSQL"],
        link: "#",
        github: "#",
        category: "vscode",
    },
    {
        title: "Chat Application",
        description:
            "A real-time messaging app with group chats, file sharing, and end-to-end encryption.",
        tags: ["React", "Firebase", "WebRTC", "Tailwind CSS"],
        link: "#",
        github: "#",
        category: "vscode",
    },
    {
        title: "Analytics Dashboard",
        description:
            "An interactive analytics dashboard with custom charts, data filtering, and CSV/PDF export functionality.",
        tags: ["Next.js", "D3.js", "PostgreSQL", "Redis"],
        link: "#",
        github: "#",
        category: "vscode",
    },
];

export const vscodeProjects = projects.filter((p) => p.category === "vscode");
export const personalProjects = projects.filter((p) => p.category === "personal");
