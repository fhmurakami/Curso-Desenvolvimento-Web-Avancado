window.onload = function () {
    var meu_pais = document.querySelector("#pais")

    meu_pais.onchange = function () {
        console.log(meu_pais.value)
    }
}