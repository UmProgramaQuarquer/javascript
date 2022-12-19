var ex = [27 , 1 , 84 ]
ex[3] = 69
ex.push(9)

console.log(`O vetor é o ${ex}. Em ordem crescente, o vetor fica: ${ex.sort()}`)
console.log(`O terceiro elemento é o ${ex[2]}. Seu tamanho é de ${ex.length} elementos.`)
if (ex.indexOf(69) == 2) { //Se ele não achar nenhum valor 69, o resultado do indexOf vai ser -1
    console.log('Nice')
} 