import cipher from './cipher.js';
 
let password = document.getElementById("password").value;
let desplazamiento = parseInt(document.getElementById("desplazamiento").value);// para convertir estos valores a número
let boton = document.getElementById("cifrar");
let boton2 = document.getElementById("descifrar");
 
boton.addEventListener("click", function(){
 if (password.length == 0 || isNaN(desplazamiento)) {
   document.getElementById("password_cifrada").innerText = "¡NO HAY NADA!";
 } else {
   let passwordCifrada = cipher.encode(desplazamiento, password);
   document.getElementById("password_cifrada").innerText = passwordCifrada;
   //document.getElementById("password_cifrada").innerText = texto; 
 }
}, true)
 
boton2.addEventListener("click", function(){
 if (password.length == 0 || isNaN(desplazamiento)) {
   document.getElementById("password_cifrada").innerText = "¡NO HAY NADA!";
 } else {
   let passwordCifrada = cipher.decode(desplazamiento, password);
   document.getElementById("password_cifrada").innerText = passwordCifrada;
   //document.getElementById("password_cifrada").innerText = texto; 
 }
}, true)
