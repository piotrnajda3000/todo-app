import events from "./libraries/pubsub";
import { Project, UserProject } from "./project";
import { Todo } from "./todo";
import { List } from "./list";

const proto = {
  project: function (name) {
    console.log(`this:`, this);
    for (let project of this.projects) {
      if (project.name == name) {
        return project;
      }
    }
  },
  projectIdx: function (name) {
    for (let [idx, project] of Object.entries(this.projects)) {
      if (project.name == name) {
        return idx;
      }
    }
  },
  list: function (name) {
    // console.log(`list:`, this);
    for (let list of this.lists) {
      if (list.name == name) {
        return list;
      }
    }
  },
};

const storageModule = (() => {
  const populate = () => {
    // console.log("[Start storage.init]");

    const storage = Object.assign(proto, {
      lists: [],
      projects: [],
    });

    bindEvents(storage);

    // Populate storage
    const defaultProject = Project({
      name: "Inbox",
      todos: {},
    })({ default: true });

    let userProject = UserProject({
      name: "Your project",
      todos: {},
    });

    // Create initial lists
    const inbox = List({
      name: "Inbox",
      projects: defaultProject,
      default: true,
    });

    const all = List({
      name: "All Tasks",
      projects: storage.projects,
    });

    // Create initial todos and add them to initial projects
    let initTodo = Todo({
      title: "Welcome",
      dueDate: "20-05-2000",
    });

    let newNewTodo = Todo({
      title: "Hello",
      dueDate: "01-01-2000",
    });

    // Does it make sense to store todo objects? I think so, because then, we have a reference...
    defaultProject.addTodo(initTodo);
    userProject.addTodo(newNewTodo);

    // console.log(`Storage after populating: `, storage);

    // console.log(
    //   `Local storage after populating:`,
    //   localStorage.getItem("storageLS")
    // );
  };
  const bindEvents = (storage) => {
    events.subscribe("Created an object", ({ object, type }) => {
      if (!storage[type].some((item) => item.name === object.name)) {
        storage[type].push(object);
        events.publish("Update local storage");
      }
    });
    events.subscribe("Update local storage", () => {
      localStorage.setItem("storageLS", JSON.stringify(storage));
    });
  };
  const retrieve = () => {
    // console.log(events.events);
    let storage = JSON.parse(localStorage.getItem("storageLS"));
    bindEvents(storage);
    storage = rebuildMethods(storage);
    // console.log(`retrieved storage:`, storage);
    return storage;
  };
  const rebuildMethods = (storage) => {
    // console.log(`rebuilding:`, storage);
    Object.assign(storage, proto);

    // Rebuild object methods after JSON
    for (let [idx, project] of Object.entries(storage.projects)) {
      if (project.default) {
        storage.projects[idx] = Project({
          name: project.name,
          todos: project.todos,
        })({ default: true });
      } else {
        storage.projects[idx] = UserProject({
          name: project.name,
          todos: project.todos,
        });
      }
      for (let [idx, todo] of Object.entries(project.todos)) {
        project.todos[idx] = Todo({
          title: todo.title,
          dueDate: todo.dueDate,
          complete: todo.complete || false,
        });
      }
    }

    storage.lists[0] = List({
      name: "Inbox",
      projects: storage.projects[0],
      default: true,
    });

    storage.lists[1] = List({
      name: "All Tasks",
      projects: storage.projects,
    });

    return storage;
  };

  return {
    populate,
    retrieve,
  };
})();

export { storageModule };
