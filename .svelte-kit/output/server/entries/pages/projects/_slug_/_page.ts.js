import { a as loadProject } from "../../../../chunks/projects.js";
import { error } from "@sveltejs/kit";
const load = async ({ params }) => {
  const entry = await loadProject(params.slug);
  if (!entry) {
    error(404, "Project not found");
  }
  return { meta: entry.meta, content: entry.content };
};
export {
  load
};
