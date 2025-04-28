const numeros = [-4, 2, 5, 6, 8]

// const numPositivos = numeros.filter(n => n > 0)
// const somaPositivos = numPositivos.reduce((soma, total) => soma + total, 0)

const numPositivos = numeros.filter(n => n > 0).reduce((soma, total) => soma + total, 0)

const numNegativos = numeros.filter(n => n < 0).length

console.log(`Quantidade de negativos: ${numNegativos}`)
console.log(`Soma de positivos: ${numPositivos}`)