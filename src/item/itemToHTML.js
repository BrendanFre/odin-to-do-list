import { storage } from "../localStorage/checkStorage"
import deleteStorageItem from "../localStorage/deleteStorageItem"


export default function (list, parent) {
    while(parent.firstChild){
        parent.removeChild(0)
    }
    let itemId = 0
    console.log(typeof list)
    const htmlList = document.createElement('div')
    const mappingList =list.map((task) => {
        const nextNote = document.createElement('div')
        const noteTitle = document.createElement('div')
        const noteContent = document.createElement('div')
        const noteDate = document.createElement('div')
        const deleteButton = document.createElement('input')
        nextNote.classList.add('taskCard')
        noteTitle.textContent = `${task.taskName}`
        noteContent.textContent = `${task.taskNotes}`
        noteDate.textContent = task.taskDue

        deleteButton.type = "button"
        deleteButton.classList.add('deleteButton')
        deleteButton.textContent = "x"
        deleteButton.value = "x"
        console.log(itemId)
        deleteButton.addEventListener('click', ()=>deleteStorageItem(Id))

        nextNote.appendChild(noteTitle)
        nextNote.appendChild(noteContent)
        nextNote.appendChild(noteDate)
        nextNote.appendChild(deleteButton)
        parent.appendChild(nextNote)
        itemId ++
    })
}