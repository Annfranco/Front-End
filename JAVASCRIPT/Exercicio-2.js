const idade = 100

if (idade >= 65) {
    console.log("Maiores de 65 anos, voto não obrigatório.")

} else if ( idade >= 18) {
    console.log("Maiores de 18 anos, voto obrigatório.")

} else if (idade >= 16 && idade <= 17) {
    console.log("Jovens entre 16 a 17 anos, voto opcional.")

} else if (idade < 16) {
    console.log("Menores de 16 anos, não podem votar.")

}