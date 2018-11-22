// JavaScript Document
window.onload = function() {

	document.querySelector("#botao").onclick = function() {
		var ajax = null;
		if( window.XMLHttpRequest ) {   
			ajax = new XMLHttpRequest();
		} else if( window.ActiveXObject ) {
			ajax = new ActiveXObject('Msxml2.XMLHTTP');	
		}
        
		ajax.open("GET","pagina_dados.txt",true);
		ajax.send(null);
		ajax.onreadystatechange = function() { 
			if (ajax.readyState == 4) {
				if (ajax.status == 200) {
					document.querySelector("#janela").innerHTML = ajax.responseText
				}
			}
		}
	}
}