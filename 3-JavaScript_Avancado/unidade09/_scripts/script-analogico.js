var agora

function mostrarHora() {
    agora = new Date()
    var hr = agora.getHours()
    var min = agora.getMinutes()
    var seg = agora.getSeconds()

    var ponteiroHora = hr * 30
    var ponteiroMin = min * 6
    var ponteiroSeg = seg * 6

    hora.style.transform = `rotate(${ponteiroHora}deg)`
    minuto.style.transform = `rotate(${ponteiroMin}deg)`
    segundo.style.transform = `rotate(${ponteiroSeg}deg)`
}

var intervalo = setInterval(mostrarHora, 1000)