import events from "./libraries/pubsub";
import { Storage } from "./Storage";

const proto = {
  switchComplete() {
    const storage = Storage.getStorage();
    const todo = storage.getTodo(this.title, this.project);
    todo.complete = !todo.complete;
    events.publish("Update local storage", storage);
    return todo.complete;
  },
  edit(newTitle, newDueDate) {
    const storage = Storage.getStorage();
    const todo = storage.getTodo(this.title, this.project);
    const project = storage.getProject(this.project);
    delete project.todos[this.title];
    project.todos[newTitle] = Todo({
      title: newTitle,
      dueDate: newDueDate,
      project: this.project,
    });
    console.log(project.todos);
    // todo.title = newTitle;
    // todo.dueDate = newDueDate;
    events.publish("Update local storage", storage);
  },
};

const Todo = (data) => {
  // console.log(data);
  let todoObj = Object.assign(Object.create(proto), {
    title: data.title,
    dueDate: data.dueDate,
  });

  Object.defineProperty(todoObj, "complete", {
    value: data.complete || false,
    enumerable: true,
    writable: true,
    configurable: false,
  });

  Object.defineProperty(todoObj, "project", {
    value: data.project,
    enumerable: false,
    writable: true,
  });

  return todoObj;
};

export { Todo };
