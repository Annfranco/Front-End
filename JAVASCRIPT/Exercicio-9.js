const notas = [
    {nota: 8},
    {nota: 6},
    {nota: 4}
]

const somaNotas = notas.reduce((total, somaNota) => total + somaNota.nota, 0)
console.log(`Soma das Notas: ${somaNotas}`)

media = somaNotas / 3
console.log(`Média: ${media}`)