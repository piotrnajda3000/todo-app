import { bindChangeEvents, bindEditEvents, bindViewEvents } from "./bindEvents";

import { mapPriorityToValue } from "./priority";

import { projects } from "../../..";

export function todoView(todo, projectName, todosContainer) {
  // Shared between View and Edit modes

  let { title, priority, complete, id: todoId } = todo;

  if (todo.complete) {
    complete = "Done!";
  } else {
    complete = "Not done... yet!";
  }

  // Display todo in View mode

  const view = () => {
    // Generate and append HTML to website

    const viewTemplate = `
    <div class="todo" data-todo_id="${todoId}" data-project_name="${projectName}">
      <p>${title}</p>
      <label for="priority">
            <input type="range" value="${mapPriorityToValue(
              priority
            )}" min="0" max="3" name="priority" id="priority"/>${priority}
      </label>
      <p>${complete}</p>
      <div class="todoEdit">
        <button data-control="edit">Edit</button>
        <button data-control="delete">Delete</button>
        <button data-control="complete">Complete</button>
      </div>
    </div>
    `;

    todosContainer.insertAdjacentHTML("beforeend", viewTemplate);

    // Cache DOM

    const todoDiv = todosContainer.querySelector(
      `div[data-todo_id="${todoId}"`
    );
    const todoControls = {
      editButtons: [...todoDiv.querySelectorAll(".todoEdit button")],
      rangeInput: [todoDiv.querySelector(`label input[type="range"]`)],
    };

    bindViewEvents(todo, todoControls);
  };

  // Display todo in Edit mode

  const edit = () => {
    const editTemplate = `
    <div class="todo" data-todo_id="${todoId}" data-project_name="${projectName}">
      <div class="todoInputs">
        <label for="title">
          <input type="text" value="${title}" name="title" id="title"/>
        </label>
        <label for="priority">
          <input type="range" value="${mapPriorityToValue(
            priority
          )}" min="0" max="3" name="priority" id="priority"/>${priority}
        </label>
        <p>${complete}</p>
        <label for="project">Project
          <select id="project" name="project">
            ${makeProjectDropdown()}
          </select>
        </label>
      </div>
      <div class="todoEdit">
        <button data-control="cancel">Cancel</button>
        <button data-control="delete">Delete</button>
        <button data-control="accept">Accept</button>
        <button data-control="complete">Complete</button>
      </div>
    </div>
      `;

    function makeProjectDropdown() {
      return projects.storage.map((project) => {
        if (project.name === projectName) {
          return `<option value="${project.name}" selected>${project.name}</option>`;
        } else {
          return `<option value="${project.name}">${project.name}</option>`;
        }
      });
    }

    // Append and cache DOM

    todosContainer.insertAdjacentHTML("beforeend", editTemplate);
    const todoDiv = todosContainer.querySelector(
      `div[data-todo_id="${todoId}"`
    );
    const editButtons = [...todoDiv.querySelectorAll(".todoEdit button")];

    // Handle input change events

    const todoInputs = [
      ...todosContainer.querySelectorAll(
        `div[data-todo_id="${todoId}"] div.todoInputs label input`
      ),
    ];

    bindChangeEvents(todo, todoInputs);

    // Used for restoring values after pressing 'Cancel'

    if (todo.inputsToPersist === null) {
      todo.inputsToPersist = {
        title,
      };
    }

    bindEditEvents(todo, editButtons, todo.inputsToPersist);
  };

  return {
    view,
    edit,
  };
}
