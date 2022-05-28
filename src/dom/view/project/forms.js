import { editProjectChoiceButtons } from "./buttons";
import { projects } from "../../..";

import Todo from "../../../Todo";
import { mapPriorityToValue, mapValueToPriority } from "../todo/priority";

import { state } from "./stateContainer";
import { htmlToElement } from "../../helpers";
import dom from "../../dom";

export const editProjectNameForm = (projectName) => {
  const editProjectDiv = document.createElement("div");
  const editProjectForm = `
  <form action="#" method="post">
    <div>
      <label for="projectHeadingName">
        <input type="text" name="projectHeadingName" id="projectHeadingName" value="${projectName}"/>
      </label>
    </div>
    <div>
      <button type="submit">Rename</button>
      <button type="button">Cancel</button>
    </div>
  </form>
`;
  editProjectDiv.insertAdjacentHTML("beforeend", editProjectForm);
  document.body.append(editProjectDiv);
  const projectNameInput = editProjectDiv.querySelector(
    'input[name="projectHeadingName"]'
  );
  editProjectChoiceButtons(editProjectDiv, projectName, projectNameInput);
};

export const newProjectForm = () => {
  const defaultName = projects.storage.length + 1;
  const newProjectDiv = document.createElement("div");
  const projectForm = `
      <form action="#" method="post">
        <div>
          <label for="newProject">New project 
            <input type="text" name="newProject" id="newProject" value="Project ${defaultName}"/>
          </label>
        </div>
        <div>
          <button type="submit">Add</button>
          <button type="button">Cancel</button>
        </div>
      </form>
    `;
  newProjectDiv.insertAdjacentHTML("beforeend", projectForm);
  document.body.append(newProjectDiv);
  const newProjectInput = newProjectDiv.querySelector(
    'input[name="newProject"]'
  );
  return [newProjectDiv, newProjectInput];
};

export const newTodoForm = (projectName) => {

  const defaultName = `Todo ${
    projects.get(projectName).todos.length + 1
  }`;

  let {title, priority, todoId, complete} = Todo(defaultName, "Soon"); 

  if (complete) {
    complete = "Done!";
  } else {
    complete = "Not done... yet!";
  }

  let newTodoForm = `
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
      </div>
      <div class="todoEdit">
        <button data-control="addTodo">Add</button>
        <button data-control="cancelTodo">Cancel</button>
      </div>
    </div>
    `;
  newTodoForm = htmlToElement(newTodoForm);
  
  const cancelTodo = newTodoForm.querySelector(`button[data-control="cancelTodo"]`);
  const addTodo = newTodoForm.querySelector(`button[data-control="addTodo"]`);



  addTodo.addEventListener("click", () => {
    state.editMode.newTodo = false;
    title = newTodoForm.querySelector(`input#title`).value;
    priority = newTodoForm.querySelector('input#priority').value;
    priority = mapValueToPriority(+priority);
    projects.get(projectName).addTodo(Todo(title, priority));
  })

  cancelTodo.addEventListener("click", () => {
    state.editMode.newTodo = false;
    dom.refreshDisplay(projectName);
  })

  const todosContainer = document.querySelector("#todosContainer");
  todosContainer.append(newTodoForm); 
};
