import cipher from './cipher.js';
//Pantalla de INICIO
document.getElementById('root').style.display='block';
document.getElementById('welcome').style.display='none';
document.getElementById('user').style.display='none';
document.getElementById('optionencode').style.display='none';
document.getElementById('optiondecode').style.display='none';

//BOTÓN COMENZAR
document.getElementById('start').addEventListener('click', () =>{
  //let next = document.getElementById("bienvenida").value;
  document.getElementById('root').style.display='none';
  document.getElementById('user').style.display='none';
  document.getElementById('optionencode').style.display='none';
  document.getElementById('optiondecode').style.display='none';
  document.getElementById('welcome').style.display='block';
});

// USUARIO
document.getElementById('accept').addEventListener('click', function (){
  let user = document.getElementById('inputname').value;
  document.getElementById('name').innerHTML = '¡Hola ' + user + '!';
  document.getElementById('root').style.display='none';
  document.getElementById('welcome').style.display='none';
  document.getElementById('optionencode').style.display='none';
  document.getElementById('optiondecode').style.display='none';
  document.getElementById('user').style.display='block';
});

// MENÚ CIFRAR Y DESCIFRAR
document.getElementById('accept').addEventListener('click', () =>{
  document.getElementById('welcome').style.display='none'; 
});
//Opción de SALIR de la app
document.getElementById('exit').addEventListener('click', () =>{
  window.close();
});

//PANTALLA CIFRAR
document.getElementById('menuencode').addEventListener('click', () =>{
//Ocultamos la pantalla de opciones que esta identificada con el ID = usuario
  document.getElementById('user').style.display='none'; 
  document.getElementById('root').style.display='none';
  document.getElementById('welcome').style.display='none';
  document.getElementById('optiondecode').style.display='none';
  document.getElementById('optionencode').style.display='block';
});

// BOTÓN Regresar1
document.getElementById('return').addEventListener('click', () =>{
  document.getElementById('root').style.display='none';
  document.getElementById('welcome').style.display='';
  document.getElementById('optiondecode').style.display='none';
  document.getElementById('optionencode').style.display='none';
  document.getElementById('user').style.display='none'; 
});

// BOTÓN CIFRAR
document.getElementById('cifrar').addEventListener('click', function() {
   let string = document.getElementById('inputmessage').value; //Aquí se almacena el valor  que se ingresa
   let offset = parseInt(document.getElementById('desplazamiento').value);
   let result = cipher.encode(offset,string);
   document.getElementById('mensajeCifrado').value = result; //se iguala el valor del input y en base a lo que se trabajo en esa funcion aquí se muestra
  });

//Botón de LIMPIAR para la pantalla de CIFRAR
  document.getElementById('clean').addEventListener('click', () =>{
  document.getElementById('inputmessage').value = "";
  document.getElementById('mensajeCifrado').value = "";
  document.getElementById('desplazamiento').value = "";
  });

//Botón de REGRESAR al MENÚ DE OPCIONES
 document.getElementById('return1').addEventListener('click', () =>{
  document.getElementById('root').style.display='none';
  document.getElementById('welcome').style.display='none';
  document.getElementById('optiondecode').style.display='none';
  document.getElementById('optionencode').style.display='none';
  document.getElementById('user').style.display=''; 
});
//Opción de SALIR de la app
document.getElementById('exit1').addEventListener('click', () =>{
  window.close();
});
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// PANTALLA DESCIFRAR
document.getElementById('menudecode').addEventListener('click', () =>{
  document.getElementById('user').style.display='none'; 
  document.getElementById('root').style.display='none';
  document.getElementById('welcome').style.display='none';
  document.getElementById('optionencode').style.display='none';
  document.getElementById('optiondecode').style.display='block';
});

// Botón DESCIFRAR
document.getElementById('descifrar').addEventListener('click', function() {
   let string = document.getElementById('inputmessage2').value; //Aquí se almacena el valor  que se ingresa
   let offset2 = parseInt(document.getElementById('desplazamiento2').value);
   let result2 = cipher.decode(offset2, string);
   document.getElementById('messagedecode').value = result2; //se iguala el valor del input y en base a lo que se trabajo en esa función aquí se muestra
});

//Botón de LIMPIAR para la pantalla de DESCIFRAR
  document.getElementById('clean2').addEventListener('click', () =>{
  document.getElementById('inputmessage').value = "";
  document.getElementById('messagedecode').value = "";
  document.getElementById('desplazamiento2').value = "";
});

//Botón de REGRESAR al MENÚ DE OPCIONES
document.getElementById('return2').addEventListener('click', () =>{  
  document.getElementById('root').style.display='none';
  document.getElementById('welcome').style.display='none';
  document.getElementById('optiondecode').style.display='none';
  document.getElementById('optionencode').style.display='none';
  document.getElementById('user').style.display=''; 
});

//SALIR
document.getElementById('exit2').addEventListener('click', () =>{
   window.close();
});

//export{inicio};