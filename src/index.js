import cipher from './cipher.js';
 
let password = document.getElementById("password").value;
let desplazamiento = parseInt(document.getElementById("desplazamiento").value);// para convertir estos valores a número
let boton = document.getElementById("cifrar");
let boton2 = document.getElementById("descifrar");


//INCIO
/*boton.addEventListener("click", function(){
  if (boton == false){
    document.getElementById("password_cifrada").style.display="none";
  }
  else {
    document.getElementById("password_cifrada").style.display="block";
  }
}, true)*/
boton.addEventListener("click", function(){
  document.getElementById("password_cifrada").hidden = true;
  document.getElementById("campo_vacio").hidden= false;
}, true);

boton.addEventListener("click", function(){
  if (password.length == 0 || isNaN(desplazamiento)) {
   document.getElementById("password_cifrada").innerText = "Los datos que ingresaste no son válidos.";
 } else {
   let passwordCifrada = cipher.encode(desplazamiento, password);
   document.getElementById("password_cifrada").innerText = "Aquí tienes tu contraseña segura:\n" + "\n" + passwordCifrada;
   //document.getElementById("password_cifrada").innerText = texto; 
 }
}, true)
 
boton2.addEventListener("click", function(){
 if (password.length == 0 || isNaN(desplazamiento)) {
   document.getElementById("password_cifrada").innerText = "Los datos que ingresaste no son válidos.";
 } else {
   let passwordCifrada = cipher.decode(desplazamiento, password);
   document.getElementById("password_cifrada").innerText = passwordCifrada;
   //document.getElementById("password_cifrada").innerText = texto; 
 }
}, true)


// Limpiar valores
//document.getElementById("clear"), () => {
  //document.getElementById("password").value="";
  //document.getElementById("desplazamiento").value="";
  //document.getElementById("password_cifrada").value="";
//}