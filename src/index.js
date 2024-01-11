import Header from './navBar/navBar'
import './style.css'
import itemCard from './item/item-ux'
import { showList, toDoArray } from './item/item-logic'
import theFooter from './footer/footer'


const content = document.querySelector('#content')
const theList = document.createElement('div')

theList.classList.add('listBody')

Header(content)
content.appendChild(theList)
if(toDoArray.length == 0){itemCard(content, theList); showList(theList)} else{showList(theList)}
theFooter(content)
