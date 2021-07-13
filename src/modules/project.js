import events from "./libraries/pubsub";
import storage from "./storage";

const proto = {
  addTodo(todo) {
    this.todos[todo.title] = todo;
    events.publish("Update local storage");
  },
  removeTodo(todo) {
    delete this.todos[todo.title];
    events.publish("Update local storage");
  },
};

let editMethods = {
  rename(newName) {
    console.log(`storage:`, storage);
    this.name = newName;
    events.publish("Update local storage");
  },
  delete() {
    let projectIdx = this.projectIdx(this.name);
    this.projects.splice(projectIdx, 1);
    events.publish("Update local storage");
  },
};

const Project = (data) => (extendWith) => {
  let projectObj = Object.assign({}, proto, data, extendWith);

  events.publish("Created an object", {
    object: projectObj,
    type: "projects",
  });

  return projectObj;
};

const UserProject = (data) => Project(data)(editMethods);

export { Project, UserProject };
