function gerar() {
    let num = window.document.getElementById('txtn')
    let tab = window.document.getElementById('stab')
    if(num.value.length == 0) {
        window.alert('[ERRO] preencha todos os dados!')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${c} X ${n} = ${c*n}`
            tab.appendChild(item)
            c++
        }
    }
}