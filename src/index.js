import cipher from './cipher.js';
//Pantalla de INICIO
document.getElementById('root').style.display='block';//Se muestra la pantalla inicial
document.getElementById('welcome').style.display='none';//Ocultamos la pantalla 2
document.getElementById('user').style.display='none';//Ocultamos la pantalla 3
document.getElementById('optionencode').style.display='none';//Ocultamos la pantalla 4
document.getElementById('optiondecode').style.display='none';//Ocultamos la pantalla 5

//BOTÓN COMENZAR
document.getElementById('start').addEventListener('click', () =>{
  //let next = document.getElementById("bienvenida").value;
  document.getElementById('root').style.display='none';//none sirve para ocultar la pantalla 1
  document.getElementById('user').style.display='none';//none sirve para ocultar pantalla 3
  document.getElementById('optionencode').style.display='none';//none sirve para ocultar pantalla 4
  document.getElementById('optiondecode').style.display='none';//none sirve para ocultar pantalla 5
  document.getElementById('welcome').style.display='block';//block es para visualizar pantalla 2
});

// USUARIO
document.getElementById('accept').addEventListener('click', function (){
  let user = document.getElementById('inputname').value;
  document.getElementById('name').innerHTML = '¡Hola ' + user + '!';
  //console.log(user) //muestra el nombre del usuario en consola
  document.getElementById('root').style.display='none';//none sirve para ocultar la pantalla 1
  document.getElementById('welcome').style.display='none';//none sirve para ocultar pantalla 2
  document.getElementById('optionencode').style.display='none';//none sirve para ocultar pantalla 4
  document.getElementById('optiondecode').style.display='none';//none sirve para ocultar pantalla 5
  document.getElementById('user').style.display='block';//block es para visualizar pantalla 3
});

// MENÚ CIFRAR Y DESCIFRAR
document.getElementById('accept').addEventListener('click', () =>{
  //Ocultamos la pantalla de welcome 
  document.getElementById('welcome').style.display='none'; 
});
//Opción de SALIR de la app
document.getElementById('exit').addEventListener('click', () =>{
  window.close();
});

//PANTALLA CIFRAR
document.getElementById('menuencode').addEventListener('click', () =>{
//Ocultamos la pantalla de opciones que esta identificada con el ID = usuario
  document.getElementById('user').style.display='none'; //se oculta la pantalla 3
  document.getElementById('root').style.display='none';//none sirve para ocultar la pantalla 1
  document.getElementById('welcome').style.display='none';//none sirve para ocultar pantalla 2
  document.getElementById('optiondecode').style.display='none';//none sirve para ocultar pantalla 5
  document.getElementById('optionencode').style.display='block';//none sirve para ocultar pantalla 4
});

// BOTÓN Regresar1
document.getElementById('return').addEventListener('click', () =>{
  document.getElementById('root').style.display='none';//none sirve para ocultar la pantalla 1
  document.getElementById('welcome').style.display='';//se muestra pantalla 2
  document.getElementById('optiondecode').style.display='none';//none sirve para ocultar pantalla 5
  document.getElementById('optionencode').style.display='none';//none sirve para ocultar pantalla 4
  document.getElementById('user').style.display='none'; //se oculta la pantalla 3
});

// BOTÓN CIFRAR
document.getElementById('cifrar').addEventListener('click', function() {
   let string = document.getElementById('inputmessage').value; //Aquí se almacena el valor  que se ingresa
   let offset = parseInt(document.getElementById('desplazamiento').value);
   let resultado = cipher.encode(offset,string);
   document.getElementById('mensajeCifrado').value = resultado; //se iguala el valor del input y en base a lo que se trabajo en esa funcion aquí se muestra
  });

//Botón de LIMPIAR para la pantalla de CIFRAR
  document.getElementById('clean').addEventListener('click', () =>{
  document.getElementById('inputmessage').value = "";
  document.getElementById('mensajeCifrado').value = "";
  document.getElementById('desplazamiento').value = "";
  });

//Botón de REGRESAR al MENÚ DE OPCIONES
 document.getElementById('return1').addEventListener('click', () =>{
  document.getElementById('root').style.display='none';//none sirve para ocultar la pantalla 1
  document.getElementById('welcome').style.display='none';//none sirve para ocultar pantalla 2
  document.getElementById('optiondecode').style.display='none';//none sirve para ocultar pantalla 5
  document.getElementById('optionencode').style.display='none';//none sirve para ocultar pantalla 4
  document.getElementById('user').style.display=''; //se muestra la pantalla 3
});
//Opción de SALIR de la app
document.getElementById('exit1').addEventListener('click', () =>{
  window.close();
});
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// PANTALLA DESCIFRAR
document.getElementById('menudecode').addEventListener('click', () =>{
  document.getElementById('user').style.display='none'; //se oculta la pantalla 3
  document.getElementById('root').style.display='none';//none sirve para ocultar la pantalla 1
  document.getElementById('welcome').style.display='none';//none sirve para ocultar pantalla 2
  document.getElementById('optionencode').style.display='none';//none sirve para ocultar pantalla 4
  document.getElementById('optiondecode').style.display='block';//none sirve para ocultar pantalla 
});

// Botón DESCIFRAR
document.getElementById('descifrar').addEventListener('click', function() {
//  console.log('start') //para ver si esta entrando el mensaje
   let string = document.getElementById('inputmessage2').value; //Aquí se almacena el valor  que se ingresa
   let offset2 = parseInt(document.getElementById('desplazamiento2').value);
   let result2 = cipher.decode(offset2, string);
   document.getElementById('messagedecode').value = result2; //se iguala el valor del inputy en base a lo que se trabajo en esa funcion aquí se muestra
   //console.log(resultado2)
  });
//}

//Botón de LIMPIAR para la pantalla de DESCIFRAR
  document.getElementById('clean2').addEventListener('click', () =>{
  document.getElementById('inputmessage').value = "";
  document.getElementById('messagedecode').value = "";
  document.getElementById('desplazamiento2').value = "";
});

//Botón de REGRESAR al MENÚ DE OPCIONES
document.getElementById('return2').addEventListener('click', () =>{  
  document.getElementById('root').style.display='none';//none sirve para ocultar la pantalla 1
  document.getElementById('welcome').style.display='none';//none sirve para ocultar pantalla 2
  document.getElementById('optiondecode').style.display='none';//none sirve para ocultar pantalla 5
  document.getElementById('optionencode').style.display='none';//none sirve para ocultar pantalla 4
  document.getElementById('user').style.display=''; //se muestra la pantalla 3
});

//SALIR
document.getElementById('exit2').addEventListener('click', () =>{
   window.close();
});

//console.log(cipher);
//export{inicio};