function fazerTabuada() {
    var num = document.querySelector('input#num')
    var tabuada = document.querySelector('select#seltab')
    if (num.value.length == 0) {
        window.alert('Porfavor, coloque um número.')
    } else {
        var num_n = Number(num.value)
        tabuada.innerHTML = ''
        for (c = 1; c <= 10; c++) {
            var item = document.createElement('option')
            item.text = `${num_n} X ${c} = ${num_n * c}`
            tabuada.appendChild(item)
        }
    }
}