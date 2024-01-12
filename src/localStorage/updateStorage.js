export function convertTodoString(task, notes, deadline){
    const newItem = {
        taskName: task,
        taskNotes: notes,
        taskDue: deadline
    }
    const localStorage = window["localStorage"]

    localStorage.setItem(task, JSON.stringify(newItem) )
}