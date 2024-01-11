import './navBar.css'
import myLogo from './Logo.png'

export default function navBar(parent){
    const theBar = document.createElement('div')
    theBar.classList.add('theBar')
    theBar.appendChild(header(myLogo))
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