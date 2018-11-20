function pegarPosicaoMouse(e) {
    var posX = document.querySelector("#posicaoX")
    var posY = document.querySelector("#posicaoY")
    posX.innerHTML = e.clientX
    posY.innerHTML = e.clientY

    if (e.clientY < 10) {
        var minhaJanela = document.querySelector("#janela")
        minhaJanela.style.display = "block"
    }
}

document.addEventListener("mousemove", pegarPosicaoMouse)