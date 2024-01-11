import createItem from "./item-logic";
import './item.css'

export default function itemCard(parent){
    const dialogBox = document.createElement('dialog')
    const subjectName = document.createElement('input')
    const notesBox = document.createElement('textarea')

    subjectName.type = "text"
    subjectName.placeholder = "Please input the item name."

    notesBox.name = "todoNotes"
    notesBox.placeholder = "Enter any notes."

    dialogBox.classList.add('newItemBox')

    dialogBox.appendChild(subjectName)
    dialogBox.appendChild(notesBox)
    parent.appendChild(dialogBox)
    dialogBox.showModal()
}