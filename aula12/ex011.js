var idade = 22
if (idade < 16) {
    console.log(`Você NÃO VOTA porque possui apenas ${idade} anos de idade.`)
} else if (idade < 18 || idade > 65) {
    console.log(`Seu voto é OPCIONAL porque você possui ${idade} anos de idade.`)
} else {
    console.log(`Seu voto é OBRIGATÓRIO porque você possui ${idade} anos de idade.`)
}