import './item.css'
import { createTask, toDoArray } from './item-logic.js'
import { returnList, storage } from '../localStorage/checkStorage.js'
import itemToHTML from './itemToHTML.js'
import { deleteStorageItem } from '../localStorage/updateStorage.js'


export function itemCard(parent){
    const dialogBox = document.createElement('dialog')
    const subjectName = document.createElement('input')
    const notesBox = document.createElement('textarea')
    const deadlinePicker = document.createElement('input')
    const postButton = document.createElement('button')
    const listBody = document.querySelector('listBody')

    postButton.textContent = "Add ToDO List"
    postButton.addEventListener('click',()=>{
        const newTask = createTask(subjectName.value, notesBox.value, deadlinePicker.value)
        toDoArray.push(newTask)
        // console.log(newTask
        const theList = document.querySelector('.listBody')
        storageShow(theList)
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


export function storageShow(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild)
    }
    const newList = returnList()
    itemToHTML(newList, parent)
    
    }