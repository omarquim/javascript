var agora = new Date()
var hora = agora.getHours()
console.log (`Agora são ${hora} horas, tenha um(a)`)
if (hora < 12) {
    console.log('bom dia!')
} else if (hora < 17) {
    console.log ('boa tarde!')
} else {
    console.log ('Boa noite!')
} if (hora > 24) {
    console.log ('Hora inexistente')
}
