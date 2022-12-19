var agr = new Date() //Pega o horário atual
var h = agr.getHours()
console.log(`Agora são ${h} horas.`)
if (h < 12) {
    console.log("Bom dia!")
} else if (h <= 18) {
    console.log("Boa tarde!")
} else {
    console.log("Boa noite!")
} 