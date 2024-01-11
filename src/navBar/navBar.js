import './navBar.css'
import myLogo from './Logo.png'
import addImage from './plus.png'
import { itemCard } from '../item/item-logic.js'

export default function navBar(parent){
    const theBar = document.createElement('div')
    const emptyDiv = document.createElement('div')
    theBar.classList.add('theBar')
    theBar.appendChild(addNote(parent))
    theBar.appendChild(header(myLogo))
    theBar.appendChild(emptyDiv)
    parent.appendChild(theBar)

}

function header(logo){
    
    const theLogo = new Image()
    
    theLogo.src = logo
    theLogo.width = 50
    theLogo.height = 50
    theLogo.classList.add('logo')
    
    
    return theLogo
}

function addNote(parent){
    const addButton = new Image()
    const list = document.querySelector('listBody')

    addButton.src = addImage
    addButton.classList.add('addButton')
    addButton.addEventListener('click', ()=>{
        itemCard(parent, list)
        console.log('whoops')
    })

    return addButton
}