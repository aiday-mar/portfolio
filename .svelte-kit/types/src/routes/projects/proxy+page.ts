// @ts-nocheck
import { loadProjects } from '$lib/data/projects';
import type { PageLoad } from './$types';

export const load = async () => {
    const projects = await loadProjects();
    const vscodeProjects = projects.filter((p) => p.meta.category === 'vscode').map((p) => p.meta);
    const personalProjects = projects
        .filter((p) => p.meta.category === 'personal')
        .map((p) => p.meta);
    return { vscodeProjects, personalProjects };
};
;null as any as PageLoad;