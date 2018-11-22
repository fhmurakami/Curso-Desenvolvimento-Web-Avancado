var intervalo

function setDoisDigitos(tempo) {
    if(tempo < 10) {
        return "0" + tempo
    } else {
        return tempo
    }
}

function mostrarHora() {
    agora = new Date()
    var hora = setDoisDigitos(agora.getHours())
    var minuto = setDoisDigitos(agora.getMinutes())
    var segundo = setDoisDigitos(agora.getSeconds())

    relogio.innerHTML = hora + ":" + minuto + ":" + segundo
}

function iniciar() {
    intervalo = setInterval(mostrarHora, 1000)
}

window.onload = iniciar