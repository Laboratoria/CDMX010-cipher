const cipher = {
  // ...
  // Mensaje a cifrar dentro de la caja de texto
    encode: function (string, offset) {
      if (offset){
        throw new TypeError("Tu input es incorrecto")
      }
      let textocifrado= "";
    //Trabajaremos a través de un ciclo 
        for (let i=0; i<string.length; i++){
    // Declara variable Ascii para obtener la posicion del codigo ascii del mensaje ingresado
       let ascii = string.charCodeAt(i); //Se toman los valores sin definir donde vacio se irán almacenando 
       textocifrado += String.fromCharCode((ascii - 65 + offset) % 26 + 65); //Se suma el valor a la variable y devuelve una cadena
    //console.log(textocifrado) El console.log nos ayuda a inspeccionar en la consola si la operación que se esta 
    //realizando es correcta o existe algún problema.
    
      }
        }
  return textocifrado;
  }, 
  
// Mensaje a descifrar dentro de la caja de texto
  decode: function (string, offset2) {
    let textodescifrado= "";
    //Trabajaremos a través de un ciclo 
    for (let i=0; i<string.length; i++){
    // Declara variable Ascii para obtener la posicion del codigo ascii del mensaje ingresado
    let ascii = string.charCodeAt(i);
    textodescifrado += String.fromCharCode((ascii + 65 - offset2) % 26 + 65);
    //console.log(textodescifrado)  ayuda a inspeccionar la operación referente al descifrado
    //if (ascii <= 65 && ascii <=90){
    //
    }
  return textodescifrado;
    },

  };

  
export default cipher;
