function mudarCor(cor) {
    janela.style.backgroundColor = cor
}

function iniciar () {
    botao1.addEventListener("click", function () {
        mudarCor("yellow")
    })

    botao2.addEventListener("click", function () {
        mudarCor("red")
    })
}

window.onload = iniciar