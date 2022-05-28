import dom from "../../dom";
import { projects } from "../../..";

import { mapValueToPriority } from "./priority";

function bindViewEvents(todo, { editButtons, rangeInput }) {
  const projectName = dom.lastViewedProject;

  // Handle priority bar change event

  bindChangeEvents(todo, rangeInput);

  // Handle view mode click events

  editButtons.forEach((button) => {
    button.addEventListener("click", () => {
      switch (button.dataset.control) {
        case "delete":
          projects.get(projectName).deleteTodo(todo.id);
          break;
        case "complete":
          todo.switchComplete();
          break;
        case "edit":
          todo.switchEditMode();
          todo.inputsToPersist = null;
          break;
      }
      dom.refreshDisplay(projectName);
    });
  });
}

function bindChangeEvents(todo, todoInputs) {
  const projectName = dom.lastViewedProject;

  todoInputs.forEach((input) => {
    input.addEventListener("change", (e) => {
      let { name: prop, value } = e.target;

      if (input.type === "range") {
        value = mapValueToPriority(+e.target.value);
      }

      todo.edit(prop, value);
      dom.refreshDisplay(projectName);

      // 0 = Now, 1 = Soon, etc.
    });
  });
}

function bindEditEvents(todo, editButtons, inputsToPersist) {
  const projectName = dom.lastViewedProject;

  editButtons.forEach((button) => {
    const control = button.dataset.control;
    button.addEventListener("click", () => {
      switch (control) {
        case "accept":
          const destinationProject = document.getElementById("project").value;
          if (destinationProject !== projectName) {
            projects.get(projectName).deleteTodo(todo.id);
            projects.get(destinationProject).addTodo(todo);
          }
          todo.switchEditMode();
          break;
        case "cancel":
          for (let [prop, value] of Object.entries(inputsToPersist)) {
            todo.edit(prop, value);
          }
          todo.switchEditMode();
          break;
        case "delete":
          projects.get(projectName).deleteTodo(todo.id);
          break;
        case "complete":
          todo.switchComplete();
          break;
      }
      dom.refreshDisplay(projectName);
    });
  });
}

export { bindChangeEvents, bindEditEvents, bindViewEvents };
