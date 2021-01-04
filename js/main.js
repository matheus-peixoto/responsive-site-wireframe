let hamburguerMenu = document.querySelector('.hamburguer-menu')
let linksHamburguerMenu = document.querySelector('.links-hamburguer-menu')
let closeHamburguerMenuSymbol = document.querySelector('.close-menu')
let hamburguerMenuLines = document.querySelector('.lines')
hamburguerMenu.addEventListener('click', () => {
    linksHamburguerMenu.classList.toggle('display-block')
    closeHamburguerMenuSymbol.classList.toggle('display-block')
    hamburguerMenuLines.classList.toggle('display-none')
})

let searchHeaderBbtn = document.querySelector('.search-header-btn')
let mainSearchInput = document.getElementById('mainSearchInput')
console.log(mainSearchInput)
searchHeaderBbtn.addEventListener('click', (e) => {
    e.preventDefault()
    console.log("a")
    mainSearchInput.focus()
})