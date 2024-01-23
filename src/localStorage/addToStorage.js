export default (id, task, notes, deadline) => {
  const newItem = {
    taskName: task,
    taskNotes: notes,
    taskDue: deadline,
  };
  const { localStorage } = window;
  localStorage.setItem(id, JSON.stringify(newItem));
};
