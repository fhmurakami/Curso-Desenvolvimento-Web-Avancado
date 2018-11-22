var agora

function mostrarHora() {
    agora = new Date()
    var hr = agora.getHours()
    var min = agora.getMinutes()
    var seg = agora.getSeconds()
    var mili = agora.getMilliseconds()

    var ponteiroHora = hr * 30 + min / 2
    var ponteiroMin = min * 6 + seg * 6 / 60
    var ponteiroSeg = seg * 6 + mili * 6 / 1000

    hora.style.transform = `rotate(${ponteiroHora}deg)`
    minuto.style.transform = `rotate(${ponteiroMin}deg)`
    segundo.style.transform = `rotate(${ponteiroSeg}deg)`
}

var intervalo = setInterval(mostrarHora, 1)