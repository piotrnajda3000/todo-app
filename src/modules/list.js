import events from "./libraries/pubsub";
import storage from "./storage";

const List = (data) => {
  if (!Array.isArray(data.projects)) {
    data.projects = [data.projects];
  }

  const listObj = Object.assign({}, data);

  events.publish("Created an object", {
    object: listObj,
    type: "lists",
  });

  return listObj;
};

export { List };
