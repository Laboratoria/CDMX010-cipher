const cipher = {
  // ...
  // Mensaje a cifrar dentro de la caja de texto
  encode:function (string, offset) {
    if (!offset){ //Error por mensaje nulo 
    throw new TypeError("No se ha introducido un valor")
  }
    //Se crea una variable para el cifrado, la cual alacenará valores indefinidos
    let textocifrado = "";
   // offset = offset % 26;
    for (let i = 0; i < string.length; i++){  //El for recorrerá al string dependiendo la longitud de la cadena 
        // Se declara Ascii para obtener la posicion del codigo ascii del mensaje ingresado
        let codigoAscii = string.charCodeAt(i);
        //let formulaAscii;
        //Iniciamos con las letras mayúsculas. Se pone la condicion mayor que 65 y menor que 90,
        //porque en esa posición se encuentra las letras mayúsculas del abecedario en ascii.
        if (codigoAscii >= 65 && codigoAscii <= 90){
            codigoAscii = (codigoAscii - 65 + offset) % 26 + 65;
        }
        //Para las minúsculas, se pone la condición mayor que 97 y menor que 122, porque en esa posición
        //se encuentra las letras minusculas del abecedario en ascii.
        else if (codigoAscii >= 97 && codigoAscii <= 122) {
            codigoAscii = (codigoAscii - 97 + offset) % 26 + 97;
        }
        //Condicion para el espacio en blanco: Se iguala a  32
        //Porque en esa posicion se encuentra el espacio en ascii
       /* else {
            formulaAscii = codigoAscii;
            }*/
        textocifrado += String.fromCharCode(codigoAscii); //Se suma el valor a la variable y devuelve una cadena
        //console.log(textocifrado)  El console.log nos ayuda a inspeccionar en la consola si la operación que se esta 
        //realizando es correcta o existe algún problema.
    }
    return textocifrado; //Retorna el texto cifrado de la función Encode
  },
  
// Mensaje a descifrar dentro de la caja de texto
 /* decode: (string, offset2) => {
    if (!offset2){
    throw new TypeError("No has ingresado ningún valor")
  }
    let textodescifrado= "";
    //Trabajaremos a través de un ciclo 
    for (let i=0; i<string.length; i++){
    // Declara variable Ascii para obtener la posicion del codigo ascii del mensaje ingresado
    let ascii = string.charCodeAt(i);
    textodescifrado += String.fromCharCode((ascii + 65 - offset2) % 26 + 65);
    //console.log(textodescifrado)  ayuda a inspeccionar la operación referente al descifrado
    
    }
  return textodescifrado;
    },

  };*/

  decode: (string, offset2) =>{
    if (!offset2) {
      throw new TypeError ('No se ha introducido un mensaje');
    }
    /* else if (string == []) {
      throw new TypeError ('Not Valid');
    } else if (offset2 == 0) {
      throw new TypeError ('Not Valid');
    }*/
    //Creamos una nueva variable para el descifrado
    let textodescifrado = '';
    offset2 = offset2 % 26;
    //Trabajaremos a través de un ciclo 
    for (let i=0; i<string.length; i++){
        // Creamos la variable codeAscii para obtener el codigo ascii del mensaje ingresado
        let codeAscii = string.charCodeAt(i);
        let formulaAscii;
        //Para las mayúsculas
        if (codeAscii >= 65 && codeAscii <= 90){ 
            formulaAscii = (codeAscii - 65 - offset2 + 26) % 26 + 65;
        }
        //Letra Minuscula: Se pone la condicion mayor que 97 y menor que 122 porque en esa 
        //posición se encuentra las letras minusculas del abecedario en ascii.
        else if (codeAscii >= 97 && codeAscii <= 122){
            formulaAscii = (codeAscii - 97 - offset2 + 26) % 26 + 97;
        }
        else {
            formulaAscii = codeAscii;
        }
        textodescifrado += String.fromCharCode(formulaAscii);
    }
    //Retorna el texto cifrado de la funcion Encode
    return textodescifrado;
},
};


export default cipher;
