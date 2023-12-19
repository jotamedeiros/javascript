let valores = [8, 1, 7, 4, 2, 9]

/*

console.log(num)

for (let pos = 0; pos <= valores.length; pos++) {
    console.log(`O índice ${pos} tem o elemento cujo valor é [${valores[pos]}]`)
}

*/

for (let pos in valores) {
    console.log(`A posição [${pos}] tem o valor ${valores[pos]}`)
}