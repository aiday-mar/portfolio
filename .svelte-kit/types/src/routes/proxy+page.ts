// @ts-nocheck
import { loadProjects } from '$lib/data/projects';
import type { PageLoad } from './$types';

export const load = async () => {
    const projects = await loadProjects();
    return { projects: projects.map((p) => p.meta) };
};
;null as any as PageLoad;