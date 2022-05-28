import uniqid from "uniqid";

const TodoProto = {
  edit(prop, val) {
    this[prop] = val;
    return this;
  },
  switchComplete() {
    this.complete = this.complete ? false : true;
    return this;
  },
  switchEditMode() {
    this.editMode = this.editMode ? false : true;
    return this;
  },
};

export default function Todo(title, priority, dueDate) {
  return Object.assign({}, TodoProto, {
    title,
    priority,
    dueDate,
    complete: false,
    id: uniqid(),
  });
}
