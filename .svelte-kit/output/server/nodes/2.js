import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.K030Fuip.js","_app/immutable/chunks/BItsddS3.js","_app/immutable/chunks/6L0BFc63.js","_app/immutable/chunks/DdVOvvcg.js","_app/immutable/chunks/Dt4xED_p.js","_app/immutable/chunks/BhCVElpK.js","_app/immutable/chunks/BR0ERHtR.js","_app/immutable/chunks/CsuIYJ-4.js"];
export const stylesheets = [];
export const fonts = [];
