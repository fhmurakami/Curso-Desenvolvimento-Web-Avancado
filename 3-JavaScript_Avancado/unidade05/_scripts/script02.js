function mudarCor(cor) {
    // document.querySelector("#janela").innerHTML = cor
    // document.querySelector("#janela").className = cor
    janela.className = cor
}

function iniciar() {
    botao1.addEventListener("click", function () {
        mudarCor("vermelho")
    })

    botao2.addEventListener("click", function () {
        mudarCor("azul")
    })
}

window.onload = iniciar;