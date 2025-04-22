const notas = [
    {matematica: 8},
    {historia: 6},
    {portugues: 4}
]

const mediaNotas = notas.reduce((total, usuario) => total + usuario.idade, 0)
console.log(`Soma das Idades: ${somaIdades}`)