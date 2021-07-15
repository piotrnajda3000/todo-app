import events from "./libraries/pubsub";
import { DefaultProject, UserProject } from "./Project";
import { Todo } from "./Todo";
import { List } from "./List";

const Storage = (() => {
  const createEmptyStorage = () => {
    const proto = {
      getProject: function (name) {
        return this.projects.find((project) => project.name == name);
      },
      getProjectIdx: function (name) {
        return this.projects.findIndex((project) => project.name == name);
      },
      getList: function (name) {
        return this.lists.find((list) => list.name == name);
      },
      getTodo: function (todosTitle, todosProjectName) {
        const project = this.getProject(todosProjectName);
        for (const todo in project.todos) {
          if (todosTitle == project.todos[todo].title) {
            return project.todos[todo];
          }
        }
      },
    };
    return Object.assign(proto, {
      lists: [],
      projects: [],
    });
  };

  const init = () => {
    // console.log("[Start storage.init]");

    const storage = createEmptyStorage();
    bindStorageEvents(storage);

    // Populate storage
    const defaultProject = DefaultProject({
      name: "Inbox",
      todos: {},
    });

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

    defaultProject.addTodo(initTodo);
    userProject.addTodo(newNewTodo);
  };

  const getStorage = () => {
    const storage = Object.assign(
      createEmptyStorage(),
      JSON.parse(localStorage.getItem("storageLS"))
    );

    bindStorageEvents(storage);

    storage.projects.map((project) => {
      if (project.default) {
        project = Object.assign(project, DefaultProject());
      } else {
        project = Object.assign(project, UserProject());
      }

      for (let todo in project.todos) {
        // console.log(project.todos[todo]);
        // console.log(project.todos[todo].complete);

        project.todos[todo] = Object.assign(
          Todo({
            title: project.todos[todo].title,
            dueDate: project.todos[todo].dueDate,
            complete: project.todos[todo].complete,
            project: project.name,
          })
        );
      }
    });

    storage.lists[1] = List({
      name: "All Tasks",
      projects: storage.projects,
    });

    // It didnt work before, because I was passing in copies in a for..of loop, instead of references
    for (let list of Object.values(storage.lists)) {
      for (let [idx, project] of Object.entries(list.projects)) {
        // if (project) {
        list.projects[idx] = storage.getProject(project.name);
        // }
      }
    }

    return storage;
  };
  const bindStorageEvents = (storage) => {
    events.subscribe("Created an object", ({ object, type }) => {
      if (!storage[type].some((i) => i.name == object.name)) {
        storage[type].push(object);
        events.publish("Update local storage", storage);
        // console.log("pushed", type, object);
      }
    });

    events.subscribe("Update local storage", (storage) => {
      localStorage.setItem("storageLS", JSON.stringify(storage));
    });
  };

  return {
    init,
    getStorage,
  };
})();

export { Storage };
