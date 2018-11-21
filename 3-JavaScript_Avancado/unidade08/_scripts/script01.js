function mudarFoto() {
    var minhaFoto = document.querySelector("#espacofoto")
    minhaFoto.setAttribute("src", "_img/arco.jpg")
}

function iniciar() {
    setTimeout(mudarFoto, 5000)
}

window.onload = iniciar