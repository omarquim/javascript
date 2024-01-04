let num = [5,8,2,9,3]
num.push(1)
num.sort()
console.log(num)
console.log(`o vetor tem ${num.length} posições.`)
console.log(`O primeiro elemento do vetor é o número ${num[0]}.`)
let pos = num.indexOf(8)
if (pos == -1){
    console.log('esse número não foi identificado no vetor')
} else {
console.log(`o valor esta na posição ${pos}`)
}