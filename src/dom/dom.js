import { projectView } from "./view/project/project";

const refreshDisplay = (projectName) => {
  document.body.innerHTML = "";
  projectView(projectName);
};

export default {
  refreshDisplay,
  lastViewedProject: null,
};
