import './navBar.css';
import myLogo from './Logo.png';
import addImage from './plus-square.svg';
import { itemCard } from '../item/item-ux';

function header(logo) {
  const theLogo = new Image();
  theLogo.src = logo;
  theLogo.width = 50;
  theLogo.height = 50;
  theLogo.classList.add('logo');
  return theLogo;
}

function addNote(parent) {
  const addButton = new Image();
  const taskList = document.querySelector('.listBody');
  addButton.src = addImage;
  addButton.width = 33;
  addButton.height = 33;
  addButton.classList.add('addButton');
  addButton.addEventListener('click', () => { console.log(taskList); itemCard(parent, taskList); });
  return addButton;
}

export default function navBar(parent) {
  const theBar = document.createElement('div');
  const emptyDiv = document.createElement('div');
  theBar.classList.add('theBar');
  theBar.appendChild(addNote(parent));
  theBar.appendChild(header(myLogo));
  theBar.appendChild(emptyDiv);
  parent.appendChild(theBar);
}
