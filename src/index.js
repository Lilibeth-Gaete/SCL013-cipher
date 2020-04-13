import cifrado from './cipher.js';


document.getElementById("juego").addEventListener("click",nombreAgente) ;
function nombreAgente(){
  var nombre= document.getElementById("name-example").value;
document.getElementById("comienzo").innerHTML="Detective "+nombre+ " empieza tu misión"; 
}

document.getElementById("botonCifrar").addEventListener("click",textoNormal);

function textoNormal(){
  let n =document.getElementById("numero").value;
  let escrito = document.getElementById("normal").value;
 cifrado.encode(n,escrito);
 document.getElementById("secreto").innerHTML = cifrado.encode(n,escrito);
}

document.getElementById("botonDescifrar").addEventListener("click",textoEncriptado);

function textoEncriptado(){
 let n =document.getElementById("numero").value;
let escrito = document.getElementById("secreto").value;
 cifrado.decode(n,escrito);
 document.getElementById("normal").innerHTML = cifrado.decode(n,escrito);
  }