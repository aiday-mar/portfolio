import { l as loadProjects } from "../../../chunks/projects.js";
const load = async () => {
  const projects = await loadProjects();
  const vscodeProjects = projects.filter((p) => p.meta.category === "vscode").map((p) => p.meta);
  const personalProjects = projects.filter((p) => p.meta.category === "personal").map((p) => p.meta);
  return { vscodeProjects, personalProjects };
};
export {
  load
};
