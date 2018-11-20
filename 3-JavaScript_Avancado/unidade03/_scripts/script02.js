window.onload = function () {
    var caixa = document.querySelector("input#nome")
    caixa.onfocus = function () {
        console.log("Foco na caixa de texto Nome")
    }

    caixa.onblur = function () {
        console.log("Blur na caixa de texto Nome")
    }
}