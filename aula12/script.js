var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = (`Agora são ${hora} horas!`)
if (hora >= 0 && hora < 12) {
    //bom dia
    img.src = 'ex014/manha.webp'
    document.body.style.background = '#fed273'
} else if (hora >= 12 && hora < 18) {
    //boa tarde
    img.src = 'ex014/tarde.webp'
    document.body.style.background = '#935f36'
} else {
    //boa noite
    img.src = 'ex014/noite.webp'
    document.body.style.background = '#1b404d'
}