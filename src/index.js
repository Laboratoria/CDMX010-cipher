import cipher from './cipher.js';
//Pantalla de INICIO
document.getElementById('root').style.display='block';//Se muestra la pantalla inicial
document.getElementById('bienvenida').style.display='none';//Ocultamos la pantalla 2
document.getElementById('usuario').style.display='none';//Ocultamos la pantalla 3
document.getElementById('opcionCifrado').style.display='none';//Ocultamos la pantalla 4
document.getElementById('opcionDescifrado').style.display='none';//Ocultamos la pantalla 5

//BOTÓN COMENZAR
document.getElementById('comenzar').addEventListener('click', () =>{
  //let next = document.getElementById("bienvenida").value;
  document.getElementById('root').style.display='none';//none sirve para ocultar la pantalla 1
  document.getElementById('usuario').style.display='none';//none sirve para ocultar pantalla 3
  document.getElementById('opcionCifrado').style.display='none';//none sirve para ocultar pantalla 4
  document.getElementById('opcionDescifrado').style.display='none';//none sirve para ocultar pantalla 5
  document.getElementById('bienvenida').style.display='block';//block es para visualizar pantalla 2
});

// USUARIO
document.getElementById('Aceptar').addEventListener('click', function (){
  let user = document.getElementById('inputNombre').value;
  document.getElementById('name').innerHTML = '¡Hola ' + user + '!';
  //console.log(user) //muestra el nombre del usuario en consola
  document.getElementById('root').style.display='none';//none sirve para ocultar la pantalla 1
  document.getElementById('bienvenida').style.display='none';//none sirve para ocultar pantalla 2
  document.getElementById('opcionCifrado').style.display='none';//none sirve para ocultar pantalla 4
  document.getElementById('opcionDescifrado').style.display='none';//none sirve para ocultar pantalla 5
  document.getElementById('usuario').style.display='block';//block es para visualizar pantalla 3

});

// MENÚ CIFRAR Y DESCIFRAR
document.getElementById('Aceptar').addEventListener('click', () =>{
  //Ocultamos la pantalla de bienvenida
  document.getElementById('bienvenida').style.display='none'; 
});

//PANTALLA CIFRAR
document.getElementById('menuCifrar').addEventListener('click', () =>{
//Ocultamos la pantalla de opciones que esta identificada con el ID = usuario
  document.getElementById('usuario').style.display='none'; //se oculta la pantalla 3
  document.getElementById('root').style.display='none';//none sirve para ocultar la pantalla 1
  document.getElementById('bienvenida').style.display='none';//none sirve para ocultar pantalla 2
  document.getElementById('opcionDescifrado').style.display='none';//none sirve para ocultar pantalla 5
  document.getElementById('opcionCifrado').style.display='block';//none sirve para ocultar pantalla 4
});

// BOTÓN CIFRAR
document.getElementById('cifrar').addEventListener('click', function() {
   let string = document.getElementById('inputMensaje').value; //Aquí se almacena el valor  que se ingresa
   let offset = parseInt(document.getElementById('desplazamiento').value);
   let resultado = cipher.encode(string, offset);
   document.getElementById('mensajeCifrado').value = resultado; //se iguala el valor del input y en base a lo que se trabajo en esa funcion aquí se muestra
});

//Botón de LIMPIAR para la pantalla de CIFRAR
  document.getElementById('clean').addEventListener('click', () =>{
  document.getElementById('inputMensaje').value = "";
  document.getElementById('mensajeCifrado').value = "";
  document.getElementById('desplazamiento').value = "";
  });

//Botón de REGRESAR al MENÚ DE OPCIONES
 document.getElementById('botonVolver').addEventListener('click', () =>{
  
  document.getElementById('root').style.display='none';//none sirve para ocultar la pantalla 1
  document.getElementById('bienvenida').style.display='none';//none sirve para ocultar pantalla 2
  document.getElementById('opcionDescifrado').style.display='none';//none sirve para ocultar pantalla 5
  document.getElementById('opcionCifrado').style.display='none';//none sirve para ocultar pantalla 4
  document.getElementById('usuario').style.display=''; //se muestra la pantalla 3
});
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// PANTALLA DESCIFRAR
document.getElementById('menuDescifrar').addEventListener('click', () =>{
  document.getElementById('usuario').style.display='none'; //se oculta la pantalla 3
  document.getElementById('root').style.display='none';//none sirve para ocultar la pantalla 1
  document.getElementById('bienvenida').style.display='none';//none sirve para ocultar pantalla 2
  document.getElementById('opcionCifrado').style.display='none';//none sirve para ocultar pantalla 4
  document.getElementById('opcionDescifrado').style.display='block';//none sirve para ocultar pantalla 
});

// Botón DESCIFRAR
document.getElementById('descifrar').addEventListener('click', function() {
//  console.log('start') //para ver si esta entrando el mensaje
   let string = document.getElementById('inputMensaje2').value; //Aquí se almacena el valor  que se ingresa
   let offset2 = parseInt(document.getElementById('desplazamiento2').value);
   let resultado2 = cipher.decode(string, offset2);
   document.getElementById('mensajeDescifrado').value = resultado2; //se iguala el valor del inputy en base a lo que se trabajo en esa funcion aquí se muestra
   //console.log(resultado2)
  });
//}

//Botón de LIMPIAR para la pantalla de DESCIFRAR
  document.getElementById('clean2').addEventListener('click', () =>{
  document.getElementById('inputMensaje2').value = "";
  document.getElementById('mensajeDescifrado').value = "";
  document.getElementById('desplazamiento2').value = "";
});

//Botón de REGRESAR al MENÚ DE OPCIONES
document.getElementById('botonVolver2').addEventListener('click', () =>{
  
  document.getElementById('root').style.display='none';//none sirve para ocultar la pantalla 1
  document.getElementById('bienvenida').style.display='none';//none sirve para ocultar pantalla 2
  document.getElementById('opcionDescifrado').style.display='none';//none sirve para ocultar pantalla 5
  document.getElementById('opcionCifrado').style.display='none';//none sirve para ocultar pantalla 4
  document.getElementById('usuario').style.display=''; //se muestra la pantalla 3
});

//SALIR
document.getElementById('salir').addEventListener('click', () =>{
   window.close();
});

//console.log(cipher);
//export{inicio};