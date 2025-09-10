const real = document.querySelector('#real')
const botao = document.querySelector('#botao')
const resultado = document.querySelector('#resultado')

botao.addEventListener('click', calcular_moeda)

function calcular_moeda(){
    valor = Number(real.value)
    dolar = valor/5.41
    resultado.textContent /*imprimir em algo vazio*/ = `O valor em dolar é US$ ${dolar.toFixed(2)}`
}