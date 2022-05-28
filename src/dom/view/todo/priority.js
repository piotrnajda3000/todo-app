const priorityValue = {
  Maybe: 0,
  Later: 1,
  Soon: 2,
  Now: 3,
};

// Later = 1

export function mapPriorityToValue(priority) {
  return priorityValue[priority];
}

// 1 = Later

export function mapValueToPriority(value) {
  return Object.keys(priorityValue).find((key) => priorityValue[key] === value);
}
