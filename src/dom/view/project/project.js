import dom from "../../dom";
import { projects } from "../../..";
import { todoView } from "../todo/todo";
import { state } from "./stateContainer";
import {
  projectListButtons,
  editProjectButtons,
  newTodoButton,
  newProjectButton,
} from "./buttons";
import { editProjectNameForm } from "./forms";

export const projectView = (projectName) => {
  dom.lastViewedProject = projectName;

  if (state.editMode.projectHeading) {
    editProjectNameForm(projectName);
  } else {
    document.body.insertAdjacentHTML(
      "beforeend",
      `<h2 id="projectHeading">${projectName}</h2>`
    );
  }

  if (!state.editMode.projectHeading && !state.editMode.newTodo) {
    editProjectButtons(projectName);
  }

  // Create todos either in view, or edit mode
  const todosContainer = document.createElement("div");
  todosContainer.setAttribute("id", "todosContainer");
  if(!state.editMode.newTodo) {
    const project = projects.get(projectName);
    project.todos.forEach((todo) => {
      if (!todo.editMode) {
        todoView(todo, projectName, todosContainer).view();
      } else {
        todoView(todo, projectName, todosContainer).edit();
      }
    });
  }

  document.body.append(todosContainer);

  if(!state.editMode.newTodo) {
    todosContainer.append(newTodoButton(projectName));
    const projectsList = document.createElement("div");
    projectsList.append(...projectListButtons(), newProjectButton());
    document.body.append(projectsList);
  }



};
