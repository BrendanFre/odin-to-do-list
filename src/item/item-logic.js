import { checkStorage } from "../localStorage/checkStorage"
import { addToStorage } from "../localStorage/updateStorage"
import { showList } from "./item-ux"
const todoArray = []
export let taskKey = 0


export function createTask(subject, notes, deadLine){
return createItem(subject, notes, deadLine)
}
const createItem = function(subject, notes, deadLine){
    if(checkStorage){
        addToStorage(taskKey, subject, notes, deadLine)
    }
    let status = "Not Started"

    let itemSubject = subject
    let itemNotes = notes
    let itemDeadline = deadLine
    let itemKey = taskKey
    taskKey += 1
    
    const getStatus = ()=> status;
    const actionStatus = ()=> status = "Actioning"
    const completedStatus = ()=> status = "Completed"
    const archiveStatus = () => status = "Archive"
    const deleteStatus = () => status = "deleted"

    return {getStatus, actionStatus, completedStatus, archiveStatus, deleteStatus,itemKey, itemSubject, itemNotes, itemDeadline}
}

export const toDoArray = []

