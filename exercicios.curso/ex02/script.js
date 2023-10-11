function verificar() {
    var campo = document.querySelector('div#campo')
    var campoimg = document.querySelector('div#campoimg')
    var paragrafo = document.querySelector('p#paragrafo')
    var anoNasc = document.querySelector('input#anoNasc')
    var ano = Number(anoNasc)
    var idade = (2023 - ano)
    var sexo = document.getElementsByName('sexo')
    var img = document.querySelector('img#image')
    

    campo.style.height = '360px'
    campoimg.style.display = 'flex'

/*
    if (sexo == 'M') {
        if (idade <= 3) {
            img.src = 'imagens/masc-bebe.jpg'
            paragrafo.innerHTML = `Detectamos Homem com ${idade} anos.`
        } else if (idade <= 7) {
            img.src = 'imagens/masc-criança.jpeg'
            paragrafo.innerHTML = `Detectamos Homem com ${idade} anos.`
        } else if (idade <= 17) {
            img.src = 'imagens/masc-adolescente.jpg'
            paragrafo.innerHTML = `Detectamos Homem com ${idade} anos.`
        } else if (idade <= 40) {
            img.src = 'imagens/masc-homem.jpg'
            paragrafo.innerHTML = `Detectamos Homem com ${idade} anos.`
        } else if (idade <= 55) {
            img.src = 'imagens/masc-velho.jpg'
            paragrafo.innerHTML = `Detectamos Homem com ${idade} anos.`
        } else if (idade <= 110) {
            img.src = 'imagens/masc-idoso.jpg'
            paragrafo.innerHTML = `Detectamos Homem com ${idade} anos.`
        }
    } else if (sexo == 'F') {
        if (idade <= 3) {
            img.src = 'imagens/fem-bebe.jpg'
            paragrafo.innerHTML = `Detectamos Mulher com ${idade} anos.`
        } else if (idade <= 7) {
            img.src = 'imagens/fem-criança.jpg'
            paragrafo.innerHTML = `Detectamos Mulher com ${idade} anos.`
        } else if (idade <= 17) {
            img.src = 'imagens/fem-adolescente.jpg'
            paragrafo.innerHTML = `Detectamos Mulher com ${idade} anos.`
        } else if (idade <= 40) {
            img.src = 'imagens/fem-homem.jpg'
            paragrafo.innerHTML = `Detectamos Mulher com ${idade} anos.`
        } else if (idade <= 55) {
            img.src = 'imagens/fem-velho.jpg'
            paragrafo.innerHTML = `Detectamos Mulher com ${idade} anos.`
        } else if (idade <= 110) {
            img.src = 'imagens/fem-idoso.jpg'
            paragrafo.innerHTML = `Detectamos Mulher com ${idade} anos.`
        }
    }
*/
}
