function verificar() {
    var campo = document.querySelector('div#campo')
    var campoimg = document.querySelector('div#campoimg')
    var img = document.querySelector('img#image')
    var paragrafo = document.querySelector('p#paragrafo')
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var sexo = document.getElementsByName('sexo')

    campo.style.height = '360px'
    campoimg.style.display = 'flex'


    if (fAno.value.length == 0 || fAno.value > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var idade = ano - Number(fAno.value)
        var genero = ''
        if (sexo[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <= 3) {
                img.setAttribute('src', 'imagens/masc-bebe.jpg')
            } else if (idade <= 7) {
                img.setAttribute('src', 'imagens/masc-criança.jpeg')
            } else if (idade <= 17) {
                img.setAttribute('src', 'imagens/masc-adolescente.jpg')
            } else if (idade <= 40) {
                img.setAttribute('src', 'imagens/masc-homem.jpg')
            } else if (idade <= 55) {
                img.setAttribute('src', 'imagens/masc-velho.jpg')
            } else {
                img.setAttribute('src', 'imagens/masc-idoso.jpg')
            }
        } else if (sexo[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <= 3) {
                img.setAttribute('src', 'imagens/fem-bebe.jpg')
            } else if (idade <= 7) {
                img.setAttribute('src', 'imagens/fem-criança.jpeg')
            } else if (idade <= 17) {
                img.setAttribute('src', 'imagens/fem-adolescente.jpg')
            } else if (idade <= 40) {
                img.setAttribute('src', 'imagens/fem-mulher.jpg')
            } else if (idade <= 55) {
                img.setAttribute('src', 'imagens/fem-velha.jpg')
            } else {
                img.setAttribute('src', 'imagens/fem-idosa.jpg')
            }
        }
        paragrafo.style.textAlign = 'center'
        paragrafo.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    }
}
