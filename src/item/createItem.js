import { checkStorage } from "../localStorage/checkStorage";
import addToStorage from '../localStorage/addToStorage'

export let taskKey = 0;

export default function(subject, notes, deadLine) {
    if(checkStorage) {
        addToStorage(taskKey, subject, notes, deadLine);
    }
    let status = "Not Started";

    let itemSubject = subject;
    let itemNotes = notes;
    let itemDeadline = deadLine;
    let itemKey = taskKey;
    taskKey++;
    
    const getStatus = ()=> status;
    const actionStatus = ()=> status = "Actioning";
    const completedStatus = ()=> status = "Completed";
    const archiveStatus = () => status = "Archive";
    const deleteStatus = () => status = "deleted";

    return {getStatus, actionStatus, completedStatus, archiveStatus, deleteStatus,itemKey, itemSubject, itemNotes, itemDeadline};
}
