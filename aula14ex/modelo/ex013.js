var agora = new Date
var diasem = agora.getDay()
var hora = agora.getHours()
console.log(`agora são ${hora} horas!`)
/*
domingo = 0 
segunda = 1 
terça = 2
quarta = 3
quinta = 4
sexta = 5
sabado = 6
*/

//console.log (diasem)
switch (diasem) {
    case 0:
        console.log('domingo')
        break
    case 1 :
        console.log ('segunda-feira')
        break
    case 2:
        console.log ('terça-feira')
        break 
    case 3:
        console.log('quarta-feira')
        break
    case 4:
        console.log('quinta-feira')
        break
    case 5:
        console.log('sexta-feira')
        break
    case 6:
        console.log('sabado') 
        break  
    default:
        console.log('[ERRO] Dia invalido!') 
        break                            
}