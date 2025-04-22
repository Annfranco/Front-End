// Criando um vetor de objetos.
const usuarios = [
    {nome: 'Marta', idade: 30},
    {nome: 'José', idade: 35},
    {nome: 'Carla', idade: 25}
]

// console.log(usuarios)
// objetos são espaços de memoria onde se guarda mais de um objeto ou mais de uma variavel.
usuarios.forEach(usuario => {
    console.log(`Nome: ${usuario.nome} - Idade: ${usuario.idade}`)
})