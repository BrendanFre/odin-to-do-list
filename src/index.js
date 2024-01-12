import Header from './navBar/navBar'
import './style.css'
import { itemCard, showList} from './item/item-ux'
import { toDoArray } from './item/item-logic'
import theFooter from './footer/footer'
import {checkStorage, returnItem, returnStorage} from './localStorage/checkStorage'
import { convertTodoString } from './localStorage/updateStorage'


if(checkStorage("localStorage")){
    returnStorage()
    convertTodoString("Play games", "all the games must be played", "If we don't we fail")
    returnItem("Play games")
}


const content = document.querySelector('#content')
const theList = document.createElement('div')

theList.classList.add('listBody')

Header(content)
content.appendChild(theList)
if(toDoArray.length == 0){itemCard(content, theList); showList(theList)} else{showList(theList)}
theFooter(content)
