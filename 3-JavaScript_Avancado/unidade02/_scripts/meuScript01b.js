// var elemento = document.getElementsByTagName("li")
var elemento = document.querySelectorAll("li")

// console.log(elemento.length)
// console.log(elemento[4].innerHTML)

for (var i = 0; i < elemento.length; i++) {
    console.log(elemento[i].innerText)
}