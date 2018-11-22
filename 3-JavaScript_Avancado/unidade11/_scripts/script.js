// JavaScript Document
window.onload = function() {
    var url         = "http://api.openweathermap.org/data/2.5/weather?";
    var minhaAPI    = "";
    var resultado;
    var cidade;
    
    cidades.onchange  = function() {
        
		var ajax = null;
		if( window.XMLHttpRequest ) {   
			ajax = new XMLHttpRequest();
		} else if( window.ActiveXObject ) {
			ajax = new ActiveXObject('Msxml2.XMLHTTP');	
		}
        
        cidade = cidades.value

        if ( cidade != 0 ) {
            ajax.open("GET", `${url}appid=${minhaAPI}&q=${cidade}&units=metric&lang=pt` ,true);
            ajax.send(null);
            ajax.onreadystatechange = function() { 
                if (ajax.readyState == 4) {
                    if( ajax.status == 200 ) {
                        console.log(ajax.responseText)
                    }
                }
            }
        }
	};
}