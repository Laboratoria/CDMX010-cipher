const cipher = {
  encode: (offset, string) =>{
    if (!offset){ 
    throw new TypeError("No se ha introducido un valor")
  }
    let textencode = "";
    for (let i = 0; i < string.length; i++){  
        let ascii = string.charCodeAt(i);
        if (ascii >= 65 && ascii <= 90){
            ascii = (ascii - 65 + offset) % 26 + 65;
        }
        else if (ascii >= 97 && ascii <= 122) {
          ascii = (ascii - 97 + offset) % 26 + 97;
        }
        textencode += String.fromCharCode(ascii); 
    }
    return textencode; 
  },

  decode: (offset_two,string) =>{
    if (!offset_two) {
      throw new TypeError ('No se ha introducido un mensaje');
    }
    let textdecode = '';
    for (let i=0; i<string.length; i++){
        let codeAscii = string.charCodeAt(i);
        let formulaAscii;
        if (codeAscii >= 65 && codeAscii <= 90){ 
            formulaAscii = (codeAscii - 65 - offset_two + 26) % 26 + 65;
        }
        else if (codeAscii >= 97 && codeAscii <= 122){
            formulaAscii = (codeAscii - 97 - offset_two + 26) % 26 + 97;
        }
        textdecode += String.fromCharCode(formulaAscii);
    }
    return textdecode;
},
};

export default cipher;