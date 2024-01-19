import './footer.css'
export default function createFooter(parent) {
  const theFooter = document.createElement('div')
  const columnOne = document.createElement('div')
  const columnThree = document.createElement('div')
  const columnTwo = document.createElement('div')

  const colOneHeading = document.createElement('h2')
  const icons8 = document.createElement('div')
  const copyright = document.createElement('div')
  colOneHeading.textContent = "Thank You's"
  icons8.innerHTML = `<a target="_blank" href="https://icons8.com/icon/1501/plus">Plus</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>`

  columnOne.appendChild(colOneHeading)
  columnOne.appendChild(icons8)

  copyright.innerText = "©Brendan Freeman 2024"
  columnTwo.appendChild(copyright)

  theFooter.classList.add('footerBar')
  theFooter.appendChild(columnOne)
  theFooter.appendChild(columnTwo)
  theFooter.appendChild(columnThree)

  parent.appendChild(theFooter)
}