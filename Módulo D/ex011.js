idade = 68

console.log(`Você tem ${idade} anos.`)
if (idade >= 18 && idade < 65) {
    console.log("Você deve votar.")
} else if (idade >= 16 || idade >= 65) {
    console.log("Você pode votar.")
} else if (idade < 16) {
    console.log("Você não pode votar")
}