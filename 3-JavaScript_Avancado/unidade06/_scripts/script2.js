function pegarPosicaoMouse(e) {
    var posX = document.querySelector("#posicaoX")
    var posY = document.querySelector("#posicaoY")
    posX.innerHTML = e.clientX
    posY.innerHTML = e.clientY
}

document.addEventListener("mousemove", pegarPosicaoMouse)