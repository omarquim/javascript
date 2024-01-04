var agora = new Date
var dia = agora.getDay()
var hora = agora.getHours()
console.log (`Agora sao ${hora} horas!`)
switch (dia) {
    case 0:
        console.log('domingo')
        break
    case 1:
        console.log ('segunda-feira')
        break
    case 2: 
        console.log ('teça-feira')
        break
    case 3:
        console.log ('quarta-feira')
        break
    case 4:
        console.log ('quinta-feira')
        break
    case 5:
        console.log ('sexta-feira')
        break
    case 6:
        console.log ('sabado')
        break    
}