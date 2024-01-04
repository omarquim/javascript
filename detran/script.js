function calcular() {
    let txtv = document.getElementById('txtvel')
    let res = window.document.querySelector('div#res')
    let vel = Number(txtv.value)
    res.innerHTML = `Sua velocidade é de: ${vel} km/h`
    if(vel >= 80) {
        res.innerHTML += `<p>Você está <strong>MULTADO</strong> por excesso de velocidade!</p>`
    }
    res.innerHTML += 'Use o cinto de segurança, e dirija com cuidado!'
}