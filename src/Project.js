import uniqid from "uniqid";

const projectProto = {
  addTodo(todo) {
    this.todos.push(todo);
    return this;
  },
  deleteTodo(todoId) {
    const todoIdx = this.todos.findIndex((todo) => todo.id === todoId);
    this.todos.splice(todoIdx, 1);
    return this;
  },
  getTodo(todoId) {
    return this.todos.find((todo) => todo.id === todoId);
  },
  rename(newName) {
    this.name = newName;
  },
};

export default function Project(name) {
  const todos = [];
  const id = uniqid();
  return Object.assign(Object.create(projectProto), { name, id, todos });
}
