function tabuada() {
    let num = window.document.getElementById('txtn')
    let tab = window.document.getElementById('stab')
    if (num.value.length == 0) {
        window.alert('[ERRO] dados incompletos')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${c*n}`
            tab.appendChild(item)
            c++
        }
    }
}