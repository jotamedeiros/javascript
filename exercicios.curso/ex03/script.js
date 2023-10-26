function contar() {
    let inicio = document.getElementById('inicioId')
    let fim = document.getElementById('fimId')
    let passo = document.getElementById('passoId')
    let contagem = document.getElementById('contagem')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        contagem.innerHTML = 'Impossível contar pois faltam dados!'
    } else {
        contagem.innerHTML = 'Contando... <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <= 0) {
            alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }

        if (i < f) {
            // contagem crescente
            for(let c = i; c <= f; c += p) {
                contagem.innerHTML += ` ${c} \u{1F449}`
            }
        } else {
            // contagem decrescente
            for(let c = i; c >= f; c -= p) {
                contagem.innerHTML += ` ${c} \u{1F449}`
            }
        }
        contagem.innerHTML += `\u{1F3C1}`
    }
}