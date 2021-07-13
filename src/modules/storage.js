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
  let storage;

  const populate = () => {
    // console.log("[Start storage.init]");

    storage = Object.assign(proto, {
      lists: [],
      projects: [],
    });

    events.subscribe("Created an object", ({ object, type }) => {
      storage[type].push(object);
    });

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
  const getStorage = () => {
    return storage;
  };

  return {
    getStorage,
    populate,
  };
})();

export { storageModule };
