// Criando um vetor de objetos.
const usuarios = [
    {nome: 'Marta', idade: 30},
    {nome: 'José ', idade: 35},
    {nome: 'Carla', idade: 25}
]

console.log('Listando todos os usuarios.')
usuarios.forEach(usuario =>
    console.log(`Nome: ${usuario.nome} | Idade: ${usuario.idade}`))

// Filtrar idade maior que 30.
const idadeMaiorQue30 = usuarios.filter(usuario => usuario.idade > 30)
// console.log(idadeMaiorQue30)

console.log('\nIdade maior que 30.')
idadeMaiorQue30.forEach(usuario => {
    console.log(`Nome: ${usuario.nome} | Idade: ${usuario.idade} `)
})

// Encontrar um usuário específico.
const usuarioEncontrado = usuarios.find(usuario => usuario.nome === 'Marta')

// Devolve um objeto
console.log("\nEncontrando usuário.")
console.log(usuarioEncontrado) // Resposta como objeto.
console.log(`Nome: ${usuarioEncontrado.nome} | Idade: ${usuarioEncontrado.idade}`)

// Buscar em uma lista apenas nomes.
console.log('\nLista com nomes dos usuários.')
const apenasNomes = usuarios.map(usuario => usuario.nome)
apenasNomes.forEach(nome => console.log(nome))

console.log('\nLista com nomes dos usuários - numerado.')
apenasNomes.forEach((nome, index) => console.log(`${++index}: ${nome}`))

// i = 1
// console.log(i++) // primeiro mostra o valor inicial e depois tem acréscimo
// console.log(i)
// y = 10
// console.log(++y) // primeiro faz a operação de acréscimo, antes de mostrar

// Somando todas as idades.
console.log('\nSoma de todas as idades.')
const somaIdades = usuarios.reduce((total, usuario) => total + usuario.idade, 0)
console.log(`Soma das Idades: ${somaIdades}`)

// Transformar elementos. 
const numeros = [2, 4, 6, 8, 9]

console.log('\nOperação de multiplicação - dobrar valor.')
const numerosDobrados = numeros.map(n => n * 2) // map - cria uma nova lista com determinado valor
console.log(numeros)
console.log(numerosDobrados)

console.log('\nFiltrando números pares.')
const pares = numeros.filter(n => n % 2 === 0)
console.log(pares)

console.log('\nSomando todos os números.')
const total = numeros.reduce((soma, atual) => soma + atual, 0)
console.log(total)