const cipher = {
  encode: (offset, string) =>{
    if (!offset){ //Error por mensaje nulo 
    throw new TypeError("No se ha introducido un valor")
  }
    let textEncode = "";
    for (let i = 0; i < string.length; i++){  
        let ascii = string.charCodeAt(i);
        if (ascii >= 65 && ascii <= 90){
            ascii = (ascii - 65 + offset) % 26 + 65;
        }
        else if (ascii >= 97 && ascii <= 122) {
          ascii = (ascii - 97 + offset) % 26 + 97;
        }
        textEncode += String.fromCharCode(ascii); 
    }
    return textEncode; //Retorna el texto cifrado de la función Encode
  },

  decode: (offset2,string) =>{
    if (!offset2) {
      throw new TypeError ('No se ha introducido un mensaje');
    }
    let textDecode = '';

    for (let i=0; i<string.length; i++){
        let codeAscii = string.charCodeAt(i);
        let formulaAscii;
        if (codeAscii >= 65 && codeAscii <= 90){ 
            formulaAscii = (codeAscii - 65 - offset2 + 26) % 26 + 65;
        }
        else if (codeAscii >= 97 && codeAscii <= 122){
            formulaAscii = (codeAscii - 97 - offset2 + 26) % 26 + 97;
        }
//        else {
//            formulaAscii = codeAscii;
//        }
        textDecode += String.fromCharCode(formulaAscii);
    }
    return textDecode;
},
};

export default cipher;