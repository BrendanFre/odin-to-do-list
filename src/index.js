import Header from './navBar/navBar'
import './style.css'
import itemCard from './item/item-ux'
import { showList, toDoArray } from './item/item-logic'

const content = document.querySelector('#content')

Header(content)
if(toDoArray.length == 0){itemCard(content)} else{showList(content)}
