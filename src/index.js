import Header from './navBar/navBar';
import './style.css';
import theFooter from './footer/footer';
import refreshUI from './localStorage/refreshUI';

const content = document.querySelector('#content');
const theList = document.createElement('div');

theList.classList.add('listBody');

Header(content);
content.appendChild(theList);
refreshUI(theList);

theFooter(content);
