let num = [5, 8, 2, 9, 3]

num.sort()

num.push(1)

console.log(num)

console.log(`O vetor tem ${num.length} posições`)

console.log(`O primeiro valor do vetor é ${num[0]}`)

console.log(`O segundo valor do vetor é ${num[1]}`)

for (let pos = 0; pos <= num.length; pos++) {
    console.log(`O valor do elemento no índice ${pos} é [${num[pos]}]`)
}

