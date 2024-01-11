
export default function createItem(title, comment, date){

    ToDo(title, comment, date)

}

const ToDo = function(subject, notes, deadLine){
    let status = "Not Started"

    let itemSubject = subject
    let itemNotes = notes
    let itemDeadline = deadLine
    
    const getStatus = ()=> status;
    const actionStatus = ()=> status = "Actioning"
    const completedStatus = ()=> status = "Completed"
    const archiveStatus = () => status = "Archive"
    const deleteStatus = () => status = "deleted"

    return {getStatus, actionStatus, completedStatus, archiveStatus, deleteStatus, itemSubject, itemNotes, itemDeadline}
}