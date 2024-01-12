import { showList } from "./item-ux"
const todoArray = []



export function createTask(subject, notes, deadLine){
return createItem(subject, notes, deadLine)
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

