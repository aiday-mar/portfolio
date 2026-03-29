import type { SvelteComponent } from 'svelte';

export interface ProjectMeta {
    title: string;
    slug: string;
    description: string;
    tags: string[];
    link: string;
    github: string;
    category: 'vscode' | 'personal';
}

export interface ProjectEntry {
    meta: ProjectMeta;
    content: typeof SvelteComponent;
}

export async function loadProjects(): Promise<ProjectEntry[]> {
    const modules = import.meta.glob('/src/content/projects/*.md', { eager: true }) as Record<
        string,
        { default: typeof SvelteComponent; metadata: ProjectMeta }
    >;

    return Object.values(modules).map((mod) => ({
        meta: mod.metadata,
        content: mod.default
    }));
}

export async function loadProject(slug: string): Promise<ProjectEntry | undefined> {
    const projects = await loadProjects();
    return projects.find((p) => p.meta.slug === slug);
}
