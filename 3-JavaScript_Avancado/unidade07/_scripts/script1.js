function controleFormulario(e) {
    e.preventDefault();
    
    var caixa_nome = nome.value;
    if ( caixa_nome == "") {
        mensagem.innerHTML = "Por favor, preencha este campo.";   
    }
}

function limparCaixa() {
    mensagem.innerHTML = "";   
}

function iniciar() {
    formViagem.onsubmit = controleFormulario;
    nome.onfocus = limparCaixa;
}

window.onload = iniciar;