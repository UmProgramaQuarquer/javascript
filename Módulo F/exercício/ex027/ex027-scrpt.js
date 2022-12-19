var num = document.querySelector('input#num')
var tabl = document.querySelector('select#tabl')
var res = document.querySelector('div#res')
var lista = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function add() {
    if (isNumero(num.value) && !inLista(num.value, lista)) {
        lista.push(Number(num.value))
        let opt = document.createElement('option')
        opt.text = `Número adicionado: ${num.value}`
        tabl.appendChild(opt)
    } else {
        window.alert('Valor inválido ou jáencontrado na lista!')
    }
    num.value = ''
    num.focus()
}

function finish() {
    if (lista.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        var tot = lista.length
        var maior = lista[0]
        var menor = lista[0]
        var soma = 0
        var media = 0
        for(let pos in lista) {
            soma += lista[pos]
            media = soma / lista.length
            if (lista[pos] > maior)
                maior = lista[pos]
            if (lista[pos] < menor)
                menor = lista[pos]
        }
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} número(s) cadastrado(s).</p>`
        res.innerHTML += `<p>O maior valor cadastrado é ${maior} e o menor é ${menor}.`
        res.innerHTML += `<p>A soma dos desses valores é de ${soma}, com média ${media}</p>`

    }
}