function parimpar(n) {
    if (n % 2 == 0) {
        return 'par'
    } else {
        return 'ímpar'
    }
}

let res = parimpar(1912)
console.log(res)