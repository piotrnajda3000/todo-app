// import { storage } from "./list";
import events from "./libraries/pubsub";
import { Project, UserProject } from "./project";
import { Todo } from "./todo";
import { storageModule } from "./storage";

export default (function UI() {
  const init = (() => {
    // Init
    document.body.innerHTML = `
    <div id="topDisplay"></div>
      
    <div id="contentWrapper"></div>
    
    <div id="bottomNav">
        <button data-tab="projects">Projects</button>
        <button data-tab="lists">Lists</button>
        <button data-tab="inbox">Inbox</button>
    </div>
    `;

    /* Cache elements */
    // Wrappers
    const topDisplay = document.querySelector("#topDisplay");
    const contentWrapper = document.querySelector("#contentWrapper");
    const bottomNav = document.querySelector("#bottomNav");
    // Nav buttons
    const projectsButton = document.querySelector(
      'button[data-tab="projects"]'
    );
    const listsButton = document.querySelector('button[data-tab="lists"]');
    const inboxButton = document.querySelector('button[data-tab="inbox"]');

    // Add events listeners and bind events
    inboxButton.addEventListener("click", () =>
      events.publish("Display todos", { name: "Inbox", type: "list" })
    );
    listsButton.addEventListener("click", () =>
      events.publish("Switch tab", "lists")
    );
    projectsButton.addEventListener("click", () =>
      events.publish("Switch tab", "projects")
    );

    events.subscribe("Switch tab", (name) => display.listOf(name));
    events.subscribe("Display todos", ({ name, type }) =>
      display.todosOf(name, type)
    );
  })();

  const display = {
    // Display list of all projects or lists
    listOf: (type) => {
      const storage = storageModule.retrieve();

      reset.dynamicContent();

      let topName;
      if (type == "projects") {
        topName = "Projects";
      } else if (type == "lists") {
        topName = "Lists";
      }

      const span = document.createElement("span");
      span.setAttribute("id", "name");
      span.textContent = topName;
      topDisplay.append(span);

      if (storage.projects.length == 1) {
        contentWrapper.style.cssText = "display: flex; flex-direction: column;";
      } else {
        contentWrapper.style.cssText =
          "display: flex; flex-direction: column; justify-content: space-around;";
      }

      if (type == "projects") {
        const newProject = create.plusButton();
        newProject.addEventListener("click", () => {
          UserProject(prompt("Project name?"));
          display.storage("projects");
        });
      } else {
        const div = document.createElement("div");
        div.setAttribute("id", "newWrapper");
        contentWrapper.append(div);
      }

      for (const idx in storage[type]) {
        // Don't display the default project or list.
        if (!storage[type][idx].default) {
          let name = storage[type][idx].name;
          const div = document.createElement("div");
          div.classList.add("list");
          const span = document.createElement("span");
          span.textContent = name;
          div.append(span);
          contentWrapper.append(div);
          div.addEventListener("click", () => {
            if (type == "lists") {
              type = "list";
            } else {
              type = "project";
            }
            events.publish("Display todos", { name, type });
          });
        }
      }
    },
    // Display todos either type a project or a list
    todosOf: (name, type) => {
      const storage = storageModule.retrieve();
      console.log(`retrieved storage:`, storage);

      reset.dynamicContent();

      contentWrapper.style.cssText = "flex: 1";

      if (type == "list") {
        const list = storage.list(name);

        topDisplay.innerHTML = `
                  <span id="name">${list.name}</span>
                  `;

        const newTodo = create.plusButton();
        newTodo.addEventListener("click", () => {
          const todo = Todo({
            title: prompt("Title"),
            dueDate: prompt("Due?"),
          });
          storage.projects[0].addTodo(todo);
          events.publish("Display todos", { name, type });
        });

        for (const projectIdx in list.projects) {
          let projectObj = list.projects[projectIdx];
          let project = projectObj;
          create.todosFrom(project, type);
        }
      } else if (type == "project") {
        const project = storage.project(name);

        const newTodo = create.plusButton();
        newTodo.addEventListener("click", () => {
          const todo = Todo(prompt("Title"), prompt("Due?"));
          project.addTodo(todo);
          events.publish("Display todos", { name, type });
        });

        if (!project.default) {
          topDisplay.innerHTML = `
          <span class="material-icons" data-control="delete">delete</span>
          <span id="name">${project.name}</span>
          <span class="material-icons" data-control="rename">edit</span>
          `;
          bindEvents.projectUI(project);
        } else {
          topDisplay.innerHTML = `
          <span id="name">${project.name}</span>
          `;
        }

        create.todosFrom(project, type);
      }
    },
  };

  const create = {
    plusButton: () => {
      const newTodo = document.createElement("div");
      newTodo.setAttribute("id", "newWrapper");
      newTodo.innerHTML = '<span class="material-icons" id="new">add</span>';
      contentWrapper.append(newTodo);
      return newTodo;
    },
    todosFrom: (project, type) => {
      const todosObject = project.todos;

      for (const todoName in todosObject) {
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");
        contentWrapper.append(todoDiv);

        const todo = todosObject[todoName];

        for (const prop in todo) {
          if (todo.hasOwnProperty(prop)) {
            const todoProp = document.createElement("div");
            todoProp.classList.add(prop);
            todoProp.textContent = `${todo[prop]}`;
            todoDiv.append(todoProp);
          }
          if (todo.complete) {
            todoDiv.style.backgroundColor = "#00ff3780";
          } else {
            todoDiv.style.backgroundColor = "var(--light-background)";
          }
        }

        const todoControl = document.createElement("div");
        todoControl.classList.add("todoControl");
        todoControl.innerHTML = `
                        <span class="material-icons" data-control="deleteTodo">delete</span>
                        <span class="material-icons" data-control="expand_more">expand_more</span>
                        <span class="material-icons" data-control="toggleComplete">done</span>
                        <span class="material-icons" data-control="editTodo">edit</span>
                        `;

        todoDiv.append(todoControl);

        bindEvents.singleTodoUI(todo, todoDiv, todoControl, project, type);
      }
    },
  };

  const bindEvents = {
    projectUI: (project) => {
      const deleteProject = document.querySelector(
        'span[data-control="delete"]'
      );
      const renameProject = document.querySelector(
        'span[data-control="rename"]'
      );

      deleteProject.addEventListener("click", () => {
        project.delete();
        display.todosOf("Inbox", "list");
      });

      renameProject.addEventListener("click", () => {
        project.rename(prompt("New project name?"));
        display.todosOf(project.name, "project");
      });
    },
    singleTodoUI: (todo, todoDiv, todoControl, project, type) => {
      const storage = storageModule.retrieve();

      const expandMore = todoControl.querySelector(
        'span[data-control="expand_more"]'
      );

      const deleteTodo = todoControl.querySelector(
        'span[data-control="deleteTodo"]'
      );

      const toggleComplete = todoControl.querySelector(
        'span[data-control="toggleComplete"]'
      );

      const editTodo = todoControl.querySelector(
        'span[data-control="editTodo"]'
      );

      editTodo.addEventListener("click", function () {
        let title = todoDiv.querySelector(".title");
        let dueDate = todoDiv.querySelector(".dueDate");

        // Make the textarea expand to text's expanded height
        const titleInput = document.createElement("textarea");
        title.classList.add("expanded");
        let titleStyle = window.getComputedStyle(title);
        let titleHeight = titleStyle.getPropertyValue("height");
        titleHeight = `calc(${titleHeight} + 1rem)`;
        titleInput.style.height = titleHeight;

        titleInput.classList.add("editInput");

        const dueDateInput = document.createElement("input");
        dueDateInput.classList.add("editInput");

        const titleContent = title.textContent;
        const dueDateContent = dueDate.textContent;

        titleInput.value = titleContent;
        dueDateInput.value = dueDateContent;

        title = todoDiv.replaceChild(titleInput, title);
        dueDate = todoDiv.replaceChild(dueDateInput, dueDate);

        const editControlButtons = document.createElement("div");
        editControlButtons.classList.add("editControlButtons");

        const accept = document.createElement("button");
        accept.textContent = "Edit";
        accept.addEventListener(
          "click",
          function () {
            this.title = titleInput.value;
            this.dueDate = dueDateInput.value;
            display.todosOf(project.name, "project");
          }.bind(todo)
        );

        const cancel = document.createElement("button");
        cancel.textContent = "Cancel";
        cancel.addEventListener("click", function () {
          display.todosOf(project.name, "project");
        });

        editControlButtons.append(accept, cancel);

        todoDiv.insertBefore(editControlButtons, todoControl);
      });

      expandMore.addEventListener("click", function () {
        this.parentElement.previousElementSibling.previousElementSibling.classList.toggle(
          "expanded"
        );
      });

      deleteTodo.addEventListener("click", () => {
        console.log(`project:`, project);
        project.removeTodo(todo);

        // Determine whether the current tab is a project or list tab
        if (storage.project(project.name)) {
          type = "project";
        } else {
          type = "list";
        }
        events.publish("Display todos", { name: project.name, type: type });
      });

      toggleComplete.addEventListener(
        "click",
        function () {
          console.log(todo);
          let complete = todo.switchComplete();
          if (complete == true) {
            this.style.backgroundColor = "#00ff3780";
          } else {
            this.style.backgroundColor = "var(--light-background)";
          }
        }.bind(todoDiv)
      );

      // editTodo.addEventListener("click", function () {});
    },
  };

  const reset = {
    dynamicContent: () => {
      topDisplay.innerHTML = ``;
      contentWrapper.innerHTML = ``;
    },
  };

  return {
    display,
  };
})();
