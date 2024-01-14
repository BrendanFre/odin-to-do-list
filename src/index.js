import Header from './navBar/navBar'
import './style.css'
import { itemCard, showList} from './item/item-ux'
import { toDoArray } from './item/item-logic'
import theFooter from './footer/footer'
import {checkStorage, returnItem, returnList, returnStorage} from './localStorage/checkStorage'
import { convertTodoString } from './localStorage/updateStorage'
import itemToHTML from './item/itemToHTML'


const content = document.querySelector('#content')
const theList = document.createElement('div')
const storageItem = returnList()

theList.classList.add('listBody')

Header(content)
content.appendChild(theList)
if(toDoArray.length == 0){itemCard(content, theList); itemToHTML(storageItem, theList)} else{itemToHTML(storageItem, theList)}
theFooter(content)
