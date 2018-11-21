var minhaFoto, albumFoto, indice, intervalo

function mudarFoto() {
    minhaFoto.setAttribute("src", albumFoto[indice])
    indice++

    if (indice >= albumFoto.length) {
        // clearInterval(intervalo)
        indice = 0
    }
}

function iniciar() {
    minhaFoto = document.querySelector("#espacofoto")
    albumFoto = ["_img/arco.jpg", "_img/basilica.jpg", "_img/coliseu.jpg", "_img/eifel.jpg"]
    indice = 0

    intervalo = setInterval(mudarFoto, 1000)
}

window.onload = iniciar