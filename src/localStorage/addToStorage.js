export default function(id, task, notes, deadline) {
  const newItem = {
    taskName: task,
    taskNotes: notes,
    taskDue: deadline,
  };
  const localStorage = window.localStorage;
  localStorage.setItem(id, JSON.stringify(newItem));
}
