import events from "./libraries/pubsub";

const proto = {
  switchComplete() {
    this.complete = !this.complete;

    if (this.complete) {
      console.log("Completed!");
    } else if (!this.complete) {
      console.log("Not done (yet)!");
    }

    return this.complete;
  },
};

const Todo = (data) => {
  let todoObj = Object.assign(Object.create(proto), {
    title: data.title,
    dueDate: data.dueDate,
  });

  Object.defineProperty(todoObj, "complete", {
    value: data.complete || false,
    enumerable: false,
    writable: true,
  });

  return todoObj;
};

export { Todo };
