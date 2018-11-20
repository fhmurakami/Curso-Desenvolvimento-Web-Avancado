function atribuirTexto(texto) {
    nome.value = texto   
}

function iniciar() {
    botao.addEventListener("click",function () {
        atribuirTexto("Um texto qualquer")
    });
}

window.onload = iniciar