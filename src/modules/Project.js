import events from "./libraries/pubsub";
import { Storage } from "./Storage";

const proto = {
  addTodo(todo) {
    const storage = Storage.getStorage();
    console.log(`1`, storage);
    console.log(`2`, this.name);
    const project = storage.getProject(this.name);
    todo.project = this.name;
    project.todos[todo.title] = todo;
    events.publish("Update local storage", storage);
  },
  removeTodo(todo) {
    // console.log("Removing", todo, "from", this.todos);
    const storage = Storage.getStorage();
    const project = storage.getProject(this.name);
    const todoID = storage.getTodo(todo.title, todo.project);

    delete project.todos[todo.title];
    // console.log(`after deleting:`, storage);
    events.publish("Update local storage", storage);
  },
};

let editMethods = {
  rename(newName) {
    const storage = Storage.getStorage();
    const project = storage.getProject(this.name);
    project.name = newName;
    events.publish("Update local storage", storage);
    return newName;
  },
  delete() {
    const storage = Storage.getStorage();
    const project = storage.getProject(this.name);
    let projectIdx = storage.getProjectIdx(this.name);
    storage.projects.splice(projectIdx, 1);
    events.publish("Update local storage", storage);
  },
};

const Project = (data) => (extendWith) => {
  let projectObj = Object.assign({}, proto, data, extendWith);

  if (projectObj.name) {
    events.publish("Created an object", {
      object: projectObj,
      type: "projects",
    });
  }

  return projectObj;
};

const DefaultProject = (name) => Project(name)({ default: true });
const UserProject = (data) => Project(data)(editMethods);

export { DefaultProject, UserProject };
