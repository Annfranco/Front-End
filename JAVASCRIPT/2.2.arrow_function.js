// Criar uma arrow fuction
// arrow -  é uma função anômima pois não é criado um nome pra ela. 
const somar =  (a, b) => {
    return a + b
}

const subtrair = (a, b) => {
    return a - b
}

// Usado apenas quando a solução exige apenas uma linha
const multiplicar = (a, b) => a * b

const dividir = (a, b) => a / b

// Chamando a função
const soma = somar(2,4)
const subtracao = subtrair(2,4)
const multi = multiplicar(2,4)
const divisao = dividir(4,2)

// Exibindo
console.log(`Soma: ${soma}`)
console.log(`Subtração: ${subtracao}`)
console.log(`Multiplicação: ${multi}`)
console.log(`Divisão: ${divisao}`)