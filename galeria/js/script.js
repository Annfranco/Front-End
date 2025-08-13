// DOM 

const x = document.querySelector('#x')
const btneymar = document.querySelector('#btneymar')
const btcr7 = document.querySelector('#btcr7')
const btmessi = document.querySelector('#btmessi')

// Eventos
btneymar.addEventListener('click', neymar)
btcr7.addEventListener('click', cr7)
btmessi.addEventListener('click', messi)

// Funções

function neymar() {
    x.src = 'images/neymar.jpg'
}

function cr7() {
    x.src = 'images/cr7.jpg'
}

function messi() {
    x.src = 'images/messi.jpg'
}