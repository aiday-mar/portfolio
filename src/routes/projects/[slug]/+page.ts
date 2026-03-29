import { loadProject } from '$lib/data/projects';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
    const entry = await loadProject(params.slug);

    if (!entry) {
        error(404, 'Project not found');
    }

    return { meta: entry.meta, content: entry.content };
};
