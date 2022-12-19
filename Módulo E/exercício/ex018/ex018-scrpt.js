function contar() {
    var n1 = document.querySelector("input#txti")
    var n2 = document.querySelector("input#txtf")
    var intervalo = document.querySelector("input#txtp")
    var res = document.querySelector("div#res")

    if (n1.value.length == 0 || n2.value.length == 0 || intervalo.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
        window.alert('[ERRO] Dados faltando! Verifique novamente.')
    } else {
        res.innerHTML = 'Contando: </br>'

        var n1_n = Number(n1.value)
        var n2_n = Number(n2.value)
        var intervalo_n = Number(intervalo.value)

        if (intervalo_n <= 0) {
            window.alert('Passo inválido! Considerando Passo = 1')
            intervalo_n = 1
        }

        if (n1_n < n2_n) {
            //Contagem crescente
            for (cont = n1_n; cont <= n2_n; cont += intervalo_n) {
                res.innerHTML += `${cont} \u{1F449} `
            }
        } else {
            //Contagem decrescente
            for (cont = n1_n; cont >= n2_n; cont -= intervalo_n) {
                res.innerHTML += `${cont} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}