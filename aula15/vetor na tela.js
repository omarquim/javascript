let n = [9,8,6,4,7]

console.log(n)
for (let pos =0;pos < n.length; pos++) {
    console.log(`a posição ${pos} representa o numero ${n[pos]}`)
}
console.log(`meu vetor tem ${n.length} elementos`)
for(let pos in n) {
    console.log(`a posição ${pos} representa o número ${n[pos]}`)
}
console.log(`a posição do elemento ${n[4]} é ${n.indexOf(7)}`)