import cipher from './cipher.js';
 
let password = document.getElementById("password").value;
let desplazamiento = parseInt(document.getElementById("desplazamiento").value);// para convertir estos valores a número
let boton = document.getElementById("cifrar");
let boton2 = document.getElementById("descifrar");
let boton3 = document.getElementById("reload")

//creates a listener for when you press a key
window.onkeyup = keyup;

//creates a global Javascript variable
var inputTextValue;

function keyup(e) {
  //setting your input text to the global Javascript Variable for every key press
  inputTextValue = e.target.value;
  console.log(inputTextValue);
}

boton.addEventListener("click", function(){
  if (password.length == 0 || desplazamiento == 0) {
   document.getElementById("password_cifrada").innerText = "Algún campo obligatorio está vacío";
 } else if (isNaN(desplazamiento)){
  document.getElementById("password_cifrada").innerText = "El campo de número es incorrecto";
 } else {
   let passwordCifrada = cipher.encode(desplazamiento, password);
   document.getElementById("password_cifrada").innerText = "Aquí tienes tu contraseña segura:\n" + "\n" + passwordCifrada;
   //document.getElementById("password_cifrada").innerText = texto; 
 }
}, true)
 
boton2.addEventListener("click", function(){
  if (password.length == 0 || desplazamiento == 0) {
    document.getElementById("password_cifrada").innerText = "Algún campo obligatorio está vacío";
  } else if (isNaN(desplazamiento)){
   document.getElementById("password_cifrada").innerText = "El campo de número es incorrecto";
  }else {
   let passwordCifrada = cipher.decode(desplazamiento, password);
   document.getElementById("password_cifrada").innerText = "Aquí tienes tu contraseña descifrada:\n" + "\n" + passwordCifrada;
   //document.getElementById("password_cifrada").innerText = texto; 
 }
}, true)


// Limpiar valores
boton3.addEventListener("click", () => {
  location.reload();
  document.getElementById("password").value= "";
  document.getElementById("desplazamiento").value= "";
  document.getElementById("password_cifrada").value= "";
}, true)



