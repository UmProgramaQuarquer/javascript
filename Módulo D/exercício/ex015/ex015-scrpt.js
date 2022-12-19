function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formAno = document.querySelector("input#txtano")
    var res = document.querySelector("div#res")
    if (formAno.value.length == 0 || formAno.value > ano) {
        window.alert("[ERRO] Verifique os dados e tente novamente")
    } else {
        var formSex = document.getElementsByName("radsex")
        var idade = ano - Number(formAno.value)
        var gênero = ""
        var img = document.createElement("img")
        img.setAttribute("id","foto")
        if (formSex[0].checked) {
            gênero = "um homem"
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute("src","criança-m.jpg")
            } else if (idade < 21) {
                //Jovem
                img.setAttribute("src","jovem-m.jpg")
            } else if (idade < 50) {
                //Adulto
                img.setAttribute("src","adulto-m.jpg")
            } else {
                //Idoso
                img.setAttribute("src","idoso-m.jpg")
            }
        } else if (formSex[1].checked) {
            gênero = "uma mulher"
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute("src","criança-f.jpg")
            } else if (idade < 21) {
                //Jovem
                img.setAttribute("src","jovem-f.jpg")
            } else if (idade < 50) {
                //Adulto
                img.setAttribute("src","adulto-f.jpg")
            } else {
                //Idoso
                img.setAttribute("src","idoso-f.jpg")
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos ${gênero} de ${idade} anos.`
        res.appendChild(img)
    }
}