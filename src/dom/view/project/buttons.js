import { htmlToElement } from "../../helpers";
import { projects } from "../../..";
import dom from "../../dom";
import { state } from "./stateContainer";
import { newProjectForm, newTodoForm } from "./forms";

/* Project heading */

export function editProjectButtons(projectName) {
  const buttonsContainer = document.createElement("div");
  const editProject = createButton("Edit project");
  const deleteProject = createButton("Delete project");
  editProject.addEventListener("click", () => {
    state.editMode.projectHeading = true;
    dom.refreshDisplay(projectName);
  });
  deleteProject.addEventListener("click", () => {
    if (projects.storage.length > 1) {
      projects.remove(projectName);
      dom.refreshDisplay(projects.storage[0].name);
    } else {
      alert("I'll implement removing the last project later, maybe.");
    }
  });
  buttonsContainer.append(editProject, deleteProject);
  document.body.append(buttonsContainer);
}

export function editProjectChoiceButtons(
  editProjectDiv,
  projectName,
  projectNameInput
) {
  const renameButton = editProjectDiv.querySelector('button[type="submit"]');
  const cancelButton = editProjectDiv.querySelector('button[type="button"]');
  renameButton.addEventListener("click", (e) => {
    e.preventDefault();
    const newProjectName = projectNameInput.value;
    projects.get(projectName).rename(newProjectName);
    state.editMode.projectHeading = false;
    dom.refreshDisplay(newProjectName);
  });
  cancelButton.addEventListener("click", () => {
    state.editMode.projectHeading = false;
    dom.refreshDisplay(dom.lastViewedProject);
  });
}

/* New todo button */

export function newTodoButton(projectName) {
  let addTodo = `<button class="ctrlButton" data-control="newTodoForm">New todo</button>`;
  addTodo = htmlToElement(addTodo);
  addTodo.style.width = "var(--todo-max-width)";
  addTodo.addEventListener("click", () => {
    state.editMode.newTodo = true;
    dom.refreshDisplay(dom.lastViewedProject);
    newTodoForm(projectName); 
  })
  return addTodo;
}

/* Project list buttons and add button */

export function projectListButtons() {
  const buttons = [];
  for (const project of projects.storage) {
    const switchButton = createButton(project.name);
    switchButton.addEventListener("click", () => {
      dom.refreshDisplay(project.name);
    });
    buttons.push(switchButton);
  }
  return buttons;
}

export function newProjectButton() {
  const addButton = createButton("+");
  addButton.addEventListener("click", () => {
    const [newProjectDiv, newProjectInput] = newProjectForm();
    const submitButton = newProjectDiv.querySelector('button[type="submit"]');
    const cancelButton = newProjectDiv.querySelector('button[type="button"]');
    submitButton.addEventListener("click", (e) => {
      e.preventDefault();
      const newProjectName = newProjectInput.value;
      projects.add(newProjectName);
      dom.refreshDisplay(newProjectName);
    });
    cancelButton.addEventListener("click", () => { 
      dom.refreshDisplay(dom.lastViewedProject);
    });
  });
  return addButton;
}

export function createButton(text) {
  const html = `<button class="ctrlButton">${text}</button>`;
  return htmlToElement(html);
}
