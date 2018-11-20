function detectarTecla(e) {
    console.log(e.keyCode)
    console.log(e.key)

    var tecla = e.keyCode
    var meuParagrafo = document.querySelector("p")

    switch(tecla) {
        case 37:
            meuParagrafo.innerHTML = "Esquerda"
            break
        case 38:
            meuParagrafo.innerHTML = "Cima"
            break
        case 39:
            meuParagrafo.innerHTML = "Direita"
            break
        case 40:
            meuParagrafo.innerHTML = "Baixo"
            break
    }
}
document.addEventListener("keydown", detectarTecla)