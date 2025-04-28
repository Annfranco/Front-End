const numeros = [1, 3, 4, 5, 6, 7]

const pares = numeros.filter(n => n % 2 === 0)
console.log(`Quantidade de números pares: ${pares} `)

const impares = numeros.filter(n => n % 2 !== 0).length // mostra a quantidade
console.log(`Quantidade de números impares: ${impares}`)

// Atividade pra casa colocar um contador pra aparecer a quantidade de números