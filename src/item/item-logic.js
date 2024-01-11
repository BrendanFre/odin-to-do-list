const todoArray = []


export function createTask(subject, notes, deadLine){
return createItem(subject, notes, "01/11/23")
}
const createItem = function(subject, notes, deadLine){
    let status = "Not Started"

    let itemSubject = subject
    let itemNotes = notes
    let itemDeadline = deadLine
    
    const getStatus = ()=> status;
    const actionStatus = ()=> status = "Actioning"
    const completedStatus = ()=> status = "Completed"
    const archiveStatus = () => status = "Archive"
    const deleteStatus = () => status = "deleted"

    return {todoArray, getStatus, actionStatus, completedStatus, archiveStatus, deleteStatus, itemSubject, itemNotes, itemDeadline}
}

export const toDoArray = []

export function showList(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild)
    }
    const noteList = document.createElement('div')
    noteList.classList.add('taskList')
    
 const visualList = toDoArray.map((task)=>{
    const nextNote = document.createElement('div')
    const noteTitle = document.createElement('div')
    const noteContent = document.createElement('div')
    nextNote.classList.add('taskCard')
    noteTitle.textContent = `${task.itemSubject}`
    noteContent.textContent = `${task.itemNotes}`

    nextNote.appendChild(noteTitle)
    nextNote.appendChild(noteContent)
    noteList.append(nextNote)
 })
 parent.appendChild(noteList)
}