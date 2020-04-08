//import cipher from './cipher.js';

//console.log(cipher);


function nombreAgente() {
  var nombre = document.getElementById("name-example").value;
  document.getElementById("comienzo").innerHTML = "Detective " + nombre + " empieza tu misión";

}

function textoNormal() {
  var escrito = document.getElementById("normal").value;
  var n = document.getElementById("numero").value;
  var texto = "";
  var termino = "";
  var i;
  for (i = 0; i < escrito.length; i++) {
    if (escrito.charCodeAt(i) >= 65 && escrito.charCodeAt(i) <= 90) {
      texto = (((escrito.charCodeAt(i) - 65) + parseInt(n)) % 26) + 65;
    }
    else if (escrito.charCodeAt(i) === 32) {
      texto = 32;
    }
    termino += String.fromCharCode(texto);
    document.getElementById("secreto").innerHTML = termino;
  }
}


function textoEncriptado() {
  var escrito = document.getElementById("secreto").value;
  var n = document.getElementById("numero").value;
  var texto = "";
  var termino = "";
  var i;
  for (i = 0; i < escrito.length; i++) {
    if (escrito.charCodeAt(i) >= 65 && escrito.charCodeAt(i) <= 90) {
      texto = (((escrito.charCodeAt(i) - 65) + parseInt(n)) % 26) + 65;
    }
    else if (escrito.charCodeAt(i) === 32) {
      texto = 32;
    }
    termino += String.fromCharCode(texto);
    document.getElementById("normal").innerHTML = termino;
  }
}














