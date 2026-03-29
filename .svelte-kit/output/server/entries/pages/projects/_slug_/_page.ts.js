import { p as projects } from "../../../../chunks/projects.js";
import { error } from "@sveltejs/kit";
const load = ({ params }) => {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) {
    error(404, "Project not found");
  }
  return { project };
};
export {
  load
};
