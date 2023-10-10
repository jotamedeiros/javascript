
function carregar() {
    var hatual = new Date()
    var hora = hatual.getHours()
    var minutos = hatual.getMinutes()

    var bg = document.querySelector('body')
    var par = document.querySelector('p#paragrafo')
    var img = document.querySelector('img#imagem')

    if (hora < 6) {
        bg.style.backgroundColor = 'gray'
        par.innerText = `Agora são ${hora}:${minutos}`
        img.src = 'imagens/madrugada.jpg'
    } else if (hora >= 6 && hora <= 12) {
        bg.style.backgroundColor = 'lightblue'
        par.innerText = `Agora são ${hora}:${minutos}`
        img.src = 'imagens/dia.jpg'
    } else if (hora >= 13 && hora <= 18) {
        bg.style.backgroundColor = 'orange'
        par.innerText = `Agora são ${hora}:${minutos}`
        img.src = 'imagens/tarde.jpg'
    } else {
        bg.style.backgroundColor = 'darkblue'
        par.innerText = `Agora são ${hora}:${minutos}`
        img.src = 'imagens/noite.jpg'
    }
}