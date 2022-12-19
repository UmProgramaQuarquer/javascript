function carregar() {
    var msg = document.querySelector("div#msg")
    var img = document.querySelector("img#imagem")
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //Manhã
        img.src = 'manha.png'
        document.body.style.backgroundColor = 'rgb(254, 203, 88)'
    } else if (hora >= 12 && hora < 18) {
        //Tarde
        img.src = 'tarde.jpg'
        document.body.style.backgroundColor = 'rgb(250, 169, 2)'
    } else {
        //Noite
        img.src = 'noite.jpg'
        document.body.style.backgroundColor = 'rgb(41, 84, 135)'
    }
}
