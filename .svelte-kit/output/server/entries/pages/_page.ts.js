import { l as loadProjects } from "../../chunks/projects.js";
const load = async () => {
  const projects = await loadProjects();
  return { projects: projects.map((p) => p.meta) };
};
export {
  load
};
