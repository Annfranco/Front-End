// Criando um vetor.
const frutas = ['Maçã', 'Banana', 'Laranja']
console.log(frutas)

// Acessar elementos específicos.
console.log(frutas[0])
console.log(frutas[1])

// Adicionando elementos.
frutas.push('Uvas')
console.log(frutas)

// Remover elemento.
frutas.pop() // Remove o último elemento.
console.log(frutas)

frutas.splice(1,1) // Remove apenas o segundo elemento. 
// indice 1 e 1 elemento, pode ser colocado indice 1 e 2 elementos.
console.log(frutas)

// Percorrendo o vetor.
// Para cada fruta informar o indice.
frutas.forEach((fruta, index) => {
    console.log(`${index}: ${fruta}`)
})