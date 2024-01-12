import './item.css'
import { createTask, toDoArray } from './item-logic.js'


export function itemCard(parent){
    const dialogBox = document.createElement('dialog')
    const subjectName = document.createElement('input')
    const notesBox = document.createElement('textarea')
    const deadlinePicker = document.createElement('input')
    const postButton = document.createElement('button')

    postButton.textContent = "Add ToDO List"
    postButton.addEventListener('click',()=>{
        const newTask = createTask(subjectName.value, notesBox.value, deadlinePicker.value)
        toDoArray.push(newTask)
        // console.log(newTask
        const theList = document.querySelector('.listBody')
        showList(theList)
        dialogBox.remove()

    })

    subjectName.type = "text"
    subjectName.placeholder = "Please input the item name."

    notesBox.name = "todoNotes"
    notesBox.placeholder = "Enter any notes."

    deadlinePicker.type= "date"


    dialogBox.classList.add('newItemBox')

    dialogBox.appendChild(subjectName)
    dialogBox.appendChild(notesBox)
    dialogBox.appendChild(deadlinePicker)
    dialogBox.appendChild(postButton)
    parent.appendChild(dialogBox)
    dialogBox.showModal()
}

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
    const noteDate = document.createElement('div')
    const deleteButton = document.createElement('input')
    nextNote.classList.add('taskCard')
    noteTitle.textContent = `${task.itemSubject}`
    noteContent.textContent = `${task.itemNotes}`
    noteDate.textContent = task.itemDeadline

    deleteButton.type= "button"
    deleteButton.classList.add('deleteButton')
    deleteButton.textContent = "x"
    deleteButton.value = "x"

    nextNote.appendChild(noteTitle)
    nextNote.appendChild(noteContent)
    nextNote.appendChild(noteDate)
    nextNote.appendChild(deleteButton)
    noteList.append(nextNote)
 })
 parent.appendChild(noteList)
}