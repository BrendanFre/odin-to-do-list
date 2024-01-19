import './item.css';
import createItem from './createItem';
import quitButton from './x-square.svg';
/**
 * This function creates the dialog box that allows the user to create a new todo.
 * @param {*} parent 
 */

export function itemCard(parent){
  const dialogBox = document.createElement('dialog');
  const dialogTopBar = document.createElement('div');
  const todoTitle = document.createElement('input');
  const todoNotes = document.createElement('textarea');
  const todoDue = document.createElement('input');
  const postButton = document.createElement('button');

  postButton.textContent = "Add ToDo List";
  


  todoTitle.type = "text";
  todoTitle.placeholder = "Please input the item name.";
  todoNotes.name = "todoNotes";
  todoNotes.placeholder = "Enter any notes.";
  todoDue.type= "date";
  dialogBox.classList.add('newItemBox');
  DialogTop(dialogBox);
  dialogBox.appendChild(todoTitle);
  dialogBox.appendChild(todoNotes);
  dialogBox.appendChild(todoDue);
  dialogBox.appendChild(postButton);
  postButton.addEventListener('click',()=>{
    console.log("button pushed")
    const todoTitleValue = todoTitle.value;
    const todoNotesValue = todoNotes.value;
    const todoDueValue = todoDue.value;
    createItem(todoTitleValue, todoNotesValue, todoDueValue);
    postButton.parentElement.remove()
    })
  parent.appendChild(dialogBox)
};

function DialogTop(parent) {
  const mainBar = document.createElement('div');
  const mainTitle = document.createElement('div');
  const mainExit = document.createElement('img');

  mainBar.classList.add('dialogTopBar')

  mainTitle.textContent = "Please enter your note:";
  mainExit.src = quitButton;

  mainBar.appendChild(mainTitle);
  mainBar.appendChild(mainExit);
  parent.appendChild(mainBar)

}