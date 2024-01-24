import checkId from './checkId';

const generateId = () => {
  const newId = Math.random().toString(36).slice(2, 7);
  if (checkId(newId)) {
    return newId;
  }
  return generateId();
};

export default (task, notes, deadline) => {
  const newItem = {
    taskName: task,
    taskNotes: notes,
    taskDue: deadline,
  };
  const taskID = generateId();
  const { localStorage } = window;
  localStorage.setItem(taskID, JSON.stringify(newItem));
  return taskID;
};
