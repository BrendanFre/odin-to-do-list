import './item.css'
import { createTask, showList, toDoArray } from './item-logic.js'

export default function itemCard(parent, list){
    const dialogBox = document.createElement('dialog')
    const subjectName = document.createElement('input')
    const notesBox = document.createElement('textarea')
    const postButton = document.createElement('button')

    postButton.textContent = "Add ToDO List"
    postButton.addEventListener('click',()=>{
        const newTask = createTask(subjectName.value, notesBox.value, "01/2/32")
        toDoArray.push(newTask)
        // console.log(newTask)
        // console.log(toDoArray)
        showList(list)
        dialogBox.remove()

    })

    subjectName.type = "text"
    subjectName.placeholder = "Please input the item name."

    notesBox.name = "todoNotes"
    notesBox.placeholder = "Enter any notes."

    dialogBox.classList.add('newItemBox')

    dialogBox.appendChild(subjectName)
    dialogBox.appendChild(notesBox)
    dialogBox.appendChild(postButton)
    parent.appendChild(dialogBox)
    dialogBox.showModal()
}