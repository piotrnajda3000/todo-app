import "./index.css";

import Todo from "./Todo";
import Project from "./Project";

import dom from "./dom/dom";

export const projects = {
  storage: [Project("Inbox"), Project("Your Project")],
  get(name) {
    return this.storage.find((project) => project.name === name);
  },
  add(name) {
    return this.storage.push(Project(name));
  },
  remove(name) {
    this.storage = this.storage.filter((project) => project.name !== name);
  },
};

const defaultTodos = [
  Todo("Todo 1", "Now"),
  Todo("Todo 2", "Later"),
  Todo("Todo 3", "Soon"),
];

projects.get("Inbox").addTodo(defaultTodos[0]);
projects.get("Inbox").addTodo(defaultTodos[1]);
projects.get("Your Project").addTodo(defaultTodos[2]);

console.log(projects);

dom.refreshDisplay("Inbox");
