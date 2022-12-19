var ex = [2, 7, 4, 9, 1]

for (let pos = 0; pos < ex.length; pos ++) {
    console.log(`A posição n°${pos + 1} tem o valor ${ex[pos]}.`)
}

console.log('ou')

ex.sort()
for (let pos in ex) { //Esse "in" só funciona pra array
console.log(`A posição n°${Number.parseInt(pos) + 1} tem o valor ${ex[pos]}`)
}