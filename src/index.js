
import cipher from './cipher.js';

document.getElementById("juego").addEventListener("click",nombreAgente) ;
function nombreAgente(){
  var nombre= document.getElementById("name-example").value;
document.getElementById("comienzo").innerHTML="Detective "+nombre+ " empieza tu misión"; 
}

document.getElementById("botonCifrar").addEventListener("click",textoNormal);

function textoNormal(){
  let n =document.getElementById("numero").value;
  let escrito = document.getElementById("normal").value;
  //let termino=document.getElementById("secreto").innerHTML = termino;
  cipher.encode(n,escrito);
}


document.getElementById("botonDescifrar").addEventListener("click",textoEncriptado);

function textoEncriptado(){
  let n =document.getElementById("numero").value;
  let escrito = document.getElementById("normal").value;
  //let termino=document.getElementById("secreto").innerHTML = termino;
  cipher.decode(n,escrito);
}
