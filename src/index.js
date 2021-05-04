import cipher from './cipher.js';

document.getElementById('root').style.display='block';
document.getElementById('welcome').style.display='none';
document.getElementById('user').style.display='none';
document.getElementById('optionencode').style.display='none';
document.getElementById('optiondecode').style.display='none';

document.getElementById('start').addEventListener('click', () =>{
  document.getElementById('root').style.display='none';
  document.getElementById('user').style.display='none';
  document.getElementById('optionencode').style.display='none';
  document.getElementById('optiondecode').style.display='none';
  document.getElementById('welcome').style.display='block';
});

document.getElementById('accept').addEventListener('click', function (){
  let user = document.getElementById('inputname').value;
  document.getElementById('name').innerHTML = '¡Hola ' + user + '!';
  document.getElementById('root').style.display='none';
  document.getElementById('welcome').style.display='none';
  document.getElementById('optionencode').style.display='none';
  document.getElementById('optiondecode').style.display='none';
  document.getElementById('user').style.display='block';
});

document.getElementById('accept').addEventListener('click', () =>{ 
  document.getElementById('welcome').style.display='none'; 
});

document.getElementById('exit').addEventListener('click', () =>{
  window.close();
});

document.getElementById('menuencode').addEventListener('click', () =>{
  document.getElementById('user').style.display='none'; 
  document.getElementById('root').style.display='none';
  document.getElementById('welcome').style.display='none';
  document.getElementById('optiondecode').style.display='none';
  document.getElementById('optionencode').style.display='block';
});

document.getElementById('return').addEventListener('click', () =>{
  document.getElementById('root').style.display='none';
  document.getElementById('welcome').style.display='';
  document.getElementById('optiondecode').style.display='none';
  document.getElementById('optionencode').style.display='none';
  document.getElementById('user').style.display='none'; 
});

document.getElementById('cifrar').addEventListener('click', function() {
  let string = document.getElementById('inputmessage').value; 
  let offset = parseInt(document.getElementById('desplazamiento').value);
  let resultado = cipher.encode(offset,string);
  document.getElementById('mensajeCifrado').value = resultado; 
  });

  document.getElementById('clean').addEventListener('click', () =>{
  document.getElementById('inputmessage').value = "";
  document.getElementById('mensajeCifrado').value = "";
  document.getElementById('desplazamiento').value = "";
  });

  document.getElementById('return_one').addEventListener('click', () =>{
  document.getElementById('root').style.display='none';
  document.getElementById('welcome').style.display='none';
  document.getElementById('optiondecode').style.display='none';
  document.getElementById('optionencode').style.display='none';
  document.getElementById('user').style.display=''; 
});

document.getElementById('exit_one').addEventListener('click', () =>{
  window.close();
});

document.getElementById('menudecode').addEventListener('click', () =>{
  document.getElementById('user').style.display='none'; 
  document.getElementById('root').style.display='none';
  document.getElementById('welcome').style.display='none';
  document.getElementById('optionencode').style.display='none';
  document.getElementById('optiondecode').style.display='block';
});

document.getElementById('descifrar').addEventListener('click', function() {
  let string = document.getElementById('inputmessage_two').value; 
  let offset_two = parseInt(document.getElementById('desplazamiento_two').value);
  let result_two = cipher.decode(offset_two, string);
  document.getElementById('messagedecode').value = result_two; 
});

  document.getElementById('clean_two').addEventListener('click', () =>{
  document.getElementById('inputmessage').value = "";
  document.getElementById('messagedecode').value = "";
  document.getElementById('desplazamiento_two').value = "";
});

document.getElementById('return_two').addEventListener('click', () =>{  
  document.getElementById('root').style.display='none';
  document.getElementById('welcome').style.display='none';
  document.getElementById('optiondecode').style.display='none';
  document.getElementById('optionencode').style.display='none';
  document.getElementById('user').style.display=''; 
});

document.getElementById('exit_two').addEventListener('click', () =>{
  window.close();
});
