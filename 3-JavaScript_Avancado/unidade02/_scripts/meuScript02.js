// *** OPÇÃO 1 ***
var meuElemento = document.querySelector("#opcoesPizza")
var novaPizza = document.createElement("li")

// Adicionar novo li ao ul #opcoesPizza
meuElemento.appendChild(novaPizza)

// Atribuir valor ao novo item li
novaPizza.innerHTML = "Quatro Queijos"

// *** OPÇÃO 2 ***
meuElemento.appendChild(document.createElement("li")).innerHTML = "Margueritta"
meuElemento.appendChild(document.createElement("li")).innerHTML = "Brócolis"
meuElemento.appendChild(document.createElement("li")).innerHTML = "Camarão com Catupiry"