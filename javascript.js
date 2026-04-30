
/*function numero_alfanumerico(){
	switch($numero){
		case($numero==1){
			echo "uno";
			break;
		}	
	
		case($numero==2){
			echo "dos";
			break;
		}
	
		case($numero==3){
			echo "tres";
			break;
		}
	
		case($numero==4){
			echo "cuatro";
			break;
		}
	
		case($numero==5){
			echo "cinco";
			break;
		}
	
		case($numero==6){
			echo "seis";
			break;
		}
	
		case($numero==7){
			echo "siete";
			break;
		}
	
		case($numero==8){
			echo "ocho";
			break;
		}
	
		case($numero==9){
			echo "nueve";
			break;
		}
	
		default{
			$nuemro = 0;
		}
	}
}

/*

$(function(){
    $(".val").click(function(e){
         e.preventDefault();
          var a = $(this).attr("value");
          $(".pantalla").append(a);
          $(".salida").val($(".salida").val() + a);
    });

     $(".equal").click(function(){
          $(".salida").val(eval($(".salida").val()));
          $(".pantalla").html(eval($(".salida").val()));
     });

     $(".clear").click(function(){
          $(".salida").val("");
          $(".pantalla").html("");
     });

     $(".min").click(function(){
         $(".cal").stop().animate({width: "0px", height: "0px", marginLeft: "700px", marginTop: "1000px"}, 500);
        setTimeout(function(){$(".cal").css("display", "none")}, 600);
     });

     $(".close").click(function(){
          $(".cal").css("display", "none");
     })
})

*/

/*
function enviaPost(){
$.post('http:httpbin.org/post',function(response){alert('La respuesta es: ' +response); });
}

function enviaPost(){
	var nombre = document.getElementById("nombre");
	var apellido = document.getElementById("apellido");
	var edad = document.getElementById("edad");
	var sexo = document.getElementById("sexo");
	var parametro = {
		"nombre" : nombre.value,
		"apellido" : apellido.value,
		"edad" : edad.value,
		"sexo" : sexo.value
	};

	
	$.ajax({
		data: parametro,
		url: 'http://httpbin.org/post',
		type: 'post',
		timeout: 3000,
		success: function(response){
			alert("nombre=" + encodeURIComponent(nombre.value) + "&apellido=" + encodeURIComponent(apellido.value) + "&edad=" + encodeURIComponent(edad.value) + "&sexo=" + encodeURIComponent(sexo.value));
		}
	});
	
}
/*
//Post request con string
function envia(){
	if(window.XMLHttpRequest){
		peticion_http = new XMLHttpRequest();
	}
	peticion_http.onreadystatechange = imprime;
	//Llamamos con el método post
	peticion_http.open("POST","http://httpbin.org/post", true);
	//Establecemos las cabeceras
	peticion_http.setRequestHeader("Content-Type", "application/x-www-form-urlwncoded");
	peticion_http.send(creaString());
	function imprime(){
		if(peticion_http.readyState == 4){
			if(peticion_http.status == 200){
				alert(peticion_http.responseText);
			}
		}
	}
}

function creaString(){
	
	return "nombre=" + encodeURIComponent(nombre.value) + "&apellido=" + encodeURIComponent(apellido.value) + "&edad=" + encodeURIComponent(edad.value) + "&sexo=" + encodeURIComponent(sexo.value);
}
*/
/*
alert("Hola Mundo");


var nombre=prompt("Escribeme algo");
alert(nombre);

var premio =["Paris", "5", "Azul", "Pizza", "Peces"];
var respuesta = new Array(5);


var pregunta=prompt("Diga una ciudad");

	respuesta[0] = pregunta;

	
var pregunta1=prompt("Diga un número");

	respuesta[1] = pregunta1;


var pregunta2=prompt("Diga un color");

	respuesta[2] = pregunta2;


var pregunta3=prompt("Diga una comida");

	respuesta[3] = pregunta3;


var pregunta4=prompt("Diga una mascota");

	respuesta[4] = pregunta4;



for(var i=0;i < respuesta.length; i++){
	if(respuesta[i]==premio[i]){
		alert(respuesta[i]);
	}else{
		alert("Por favor siga intentándo");
	}
}

var modelos = ["Monovolumen", "Berlina","Todoterreno"];

modelos.push("Roadster");
alert(modelos);

modelos.unshift("Deportivo");

alert(modelos);


valor =prompt("Escribe una frase"); 
 alert("La frase tiene: " + valor.length + " Letras"); 
 var contador=0; 
 for(var i =0;i<valor.length;i++){ 
 	contador=0;
 	for(j=0;j<valor.length;j++){ 
		if(valor[i] == valor[j]) contador++; 
		} 
 		alert ("El caracter "+valor[i]+" se repite "+contador+" veces.");
	}
	
	
var n = new Array(5);
var premio =["Paris", "5", "Azul", "Pizza", "Peces"]; 
var respuesta = ["Diga una ciudad","Diga un número", "Diga un color","Diga una comida","Diga una mascota"] 
for(var i=0; respuesta.length; i++){ 
	for(var j=0;j < respuesta.length; j++){ 
		 n[j]=prompt(respuesta[j]); 
		if(n[j]==premio[j]){ 
			alert(n[j]); 
			
			} 
			else alert ("error");
		} 
	}	
	
function frase(){
	
	var valor =prompt("Escribe una frase");	
	alert("La frase tiene: "+valor.length +" Letras");
		
	var contador = 0;
		
	for(var i =0;i<valor.length;i++){
		contador=0;
		for(var j=0;j<valor.length;j++){
			if(valor[i] == valor[j]) { contador++;}
		}
			alert("El caracter "+valor[i]+" se repite "+contador+" veces");
	}
}
	
frase();

var valor1=prompt("Introduzca el primer valor");

var valor2=prompt("Introduzca el segundo valor");

function sumaValores(valor1,valor2){
	var suma = parseInt(valor1) + parseInt(valor2);
	if(suma>100){
		return suma;
		alert(suma);
	}else{
		alert("La suma es inferior a 100");
	}
}


alert(sumaValores(valor1,valor2));



$(document).ready(function(){

	$("div").mouseover(function(event){
	 alert("Has hecho click en el botón");
	});
});

$(document).ready(function(){
	
	$("#botonActivador").click(function(event){
		alert("Has hecho click en el botón");
	});

$(document).ready(function(){
	$("#botonActivador").mouseover(function(event){
	$("ul#listas").append("<li>Elementos</li>");
	});
});

var req = new XMLHttpRequest();
req.open('GET','http://httpbin.org',false);
req.send(null);
if(req.status==200){alert(req.responseText);} else {alert("error");}

var req = new XMLHttpRequest();
	alert(req);
req.open('GET','file:///C:/Users/elijo/Documents/PHP%20JAVA%20%20MYSQL%202019/Códigos%20html%20css/Deberes/index.html',false);
req.send(null);
if(req.status==0){alert(req.responseText);} else {alert("error");}

$.ajax({
	data: parametros,
	url: 'http://httpbin.org/post',
	type: 'post',
	timeout: 3000,
	success: function(response){
		$('#prueba').html(response);
	}
});

var req = new XMLHttpRequest();
req.open('GET','http://nuestrapágina.org',false);
req.send(null);
if(req.status==200){alert(req.responseText);}


function carga(){
	//Obtener la instancia del objeto XMLHttpRequest
	if(windows.XTMLHttpRequest){
		peticion_http = new XMLHttpRequest();
	} else if(window.ActiveXObject){
		peticion_http.onreadystatechange = muestraContenido;
		
		peticion_http.open('GET','http//google.es',true);
		peticion_http.send(null);
		
		function muestraContenido(){
			if(peticion_http.readyState==4){
				if(peticion_http.status==200){
					alert(peticion_http.responseText);
				}
			}
		}
	}
}

//Post request con string
function envia(){
	if(window.XMLHttpRequest){
		peticion_http = new XMLHttpRequest();
	}
	peticion_http.onreadystatechange = imprime;
	//Llamamos con el método post
	peticion_http.open("POST","http://httpbin.org/post", true);
	//Establecemos las cabeceras
	peticion_http.setRequestHeader("Content-Type", "application/x-www-form-urlwncoded");
	peticion_http.send(creaString());
	function imprime(){
		if(peticion_http.readyState == 4){
			if(peticion_http.status == 200){
				alert(peticion_http.responseText);
			}
		}
	}
}

function creaString(){
	var nombre = document.getElementById("nombre");
	var apellido = document.getElementById("apellido");
	
	return "nombre=" + encodeURIComponent(nombre.value) + "&apellido=" + encodeURIComponent(apellido.value) + "&edad=" + encodeURIComponent(edad.value) + "&sexo=" + encodeURIComponent(sexo.value);
}



//Post request con JSON
function envia(){
	if(window.XMLHttpRequest){
		peticion_http = new XMLHttpRequest();
	}
	peticion_http.onreadystatechange = imprime;
	//Llamamos con el método post
	peticion_http.open("POST","http://httpbin.org/post", true);
	//Establecemos las cabeceras
	peticion_http.setRequestHeader("Content-Type", "application/x-www-form-urlwncoded");
	peticion_http.send(creaJSON());
	function imprime(){
		if(peticion_http.readyState == 4){
			if(peticion_http.status == 200){
				alert(peticion_http.responseText);
			}
		}
	}


function creaJSON(){
	var nombre = document.getElementById("nombre");
	var apellido = document.getElementById("apellido");
	var edad = document.getElementById("edad");
	var telefono = document.getElementById("telefono");
	
	var persona = new Object();
		persona.nombre = nombre.value;
		persona.apellido = apellido.value;
		persona.telefono = telefono.value;
		persona.edad = edad.value;
		
var myJSON = JSON.stringify(persona);

	return myJSON;
	}


}


//GEt request con string
function envia(){
	if(window.XMLHttpRequest){
		peticion_http = new XMLHttpRequest();
	}
	peticion_http.onreadystatechange = imprime;
	//Llamamos con el método GET
	var direccion = "http://httpbin.org/get" + "?" +creaString();
	peticion_http.open("GET",direccion, true);
	//Establecemos las cabeceras
	peticion_http.send();
	function imprime(){
		if(peticion_http.readyState == 4){
			if(peticion_http.status == 200){
				alert(peticion_http.responseText);
			}
		}
	}
}

function creaString(){
	var nombre = document.getElementById("nombre");
	var apellido = document.getElementById("apellido");
	
	return "nombre=" + encodeURIComponent(nombre.value) + "&apellido=" + encodeURIComponent(apellido.value);
}


function crea_query_string(){
	var nombre = document.getElementById("nombre");
	var apellido = document.getElementById("apellido");
	
	return "nombre=" + encodeURIComponent(nombre.value) + "&apellido=" + encodeURIComponent(apellido.value);
}

function creaString(){
	var nombre = document.getElementById("nombre");
	var apellido = document.getElementById("apellido");
	
	return "nombre=" + encodeURIComponent(nombre.value) + "&apellido=" + encodeURIComponent(apellido.value);
}



//$.get("http://httpbin.org/get",function(response){alert("La respuesta es: "+response); });
}	
*/