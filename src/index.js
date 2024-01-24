import Header from './navBar/navBar';
import './style.css';
import theFooter from './footer/footer';
import singleItemUx from './item/single-item-ux/single-item-ux';

const content = document.querySelector('#content');
const theList = document.createElement('div');

theList.classList.add('listBody');

Header(content);
content.appendChild(theList);
theList.innerHTML = singleItemUx('yees', 'read', 'rwdsdsad');
theFooter(content);
