function atribuirTexto() {
    nome.value = "Maria"
}

function iniciar () {
    botao.addEventListener("click", atribuirTexto)
}

window.onload = iniciar