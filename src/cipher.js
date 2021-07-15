const cipher = { // object initializer
  //objetc´s methods - encode, decode
  encode: function cifrar(desplazamiento, password){ //objects properties - parámetros de la función dentro del método.
   const mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   const minusculas = "abcdefghijklmnopqrstuvwxyz";
   const numeros = "0123456789";
   const especiales = "!\"#$%&'()*+,-./"
   let passwordCifrada = "";

   if (password == []) {
    throw new TypeError ("Contraseña inválida!");
  } else if (desplazamiento == null){
    throw new TypeError ("Campo de número vacío!");
  } else if (password == "" && desplazamiento == 0){
    throw new TypeError ("Algún campo obligatorio está vacío!");
  }
   
   for(var i = 0; i <= (password.length-1); i++){
     let ascii = password.charCodeAt(i);
         if (mayusculas.includes(password[i])){
             let formula = (ascii + desplazamiento - 65) % 26 + 65;
             let abecedario = String.fromCharCode(formula);
             passwordCifrada += abecedario;
         } else if (minusculas.includes(password[i])){
             let formula = (ascii + desplazamiento - 97) % 26 + 97;
             let abecedario = String.fromCharCode(formula);
             passwordCifrada += abecedario;
         } else if (numeros.includes(password[i])){
             let formula = (ascii + desplazamiento - 48) % 26 + 48;
             let abecedario = String.fromCharCode(formula);
             passwordCifrada += abecedario;
         } else if (especiales.includes(password[i])){
             let formula = (ascii + desplazamiento - 33) % 26 + 33;
             let abecedario = String.fromCharCode(formula);
             passwordCifrada += abecedario;
         } else {
             passwordCifrada += password[i];
         }
   }
   return(passwordCifrada);
   },
   
   decode: function (desplazamiento, password){
     const mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
     const minusculas = "abcdefghijklmnopqrstuvwxyz";
     const numeros = "0123456789";
     const especiales = "!\"#$%&'()*+,-./"
     let passwordDescifrada = "";
     
     if (password == []) {
       throw new TypeError ("Contraseña inválida!");
     } else if (desplazamiento == null){
       throw new TypeError ("Campo de número vacío!");
     } else if (password == 0 && desplazamiento == 0){
       throw new TypeError ("Algún campo obligatorio está vacío!");
     }
    
   
     for(var i = 0; i <= (password.length-1); i++){
       let ascii = password.charCodeAt(i);
         if (mayusculas.includes(password[i])){
           let formula = (ascii - desplazamiento - 90) % 26 + 90;
           let abecedario = String.fromCharCode(formula);
           passwordDescifrada += abecedario;
         } else if (minusculas.includes(password[i])){
           let formula = (ascii - desplazamiento - 122) % 26 + 122;
           let abecedario = String.fromCharCode(formula);
           passwordDescifrada += abecedario;
         } else if (numeros.includes(password[i])){
           let formula = (ascii - desplazamiento - 57) % 26 + 57;
           let abecedario = String.fromCharCode(formula);
           passwordDescifrada += abecedario;
         } else if (especiales.includes(password[i])){
           let formula = (ascii - desplazamiento - 47) % 26 + 47;
           let abecedario = String.fromCharCode(formula);
           passwordDescifrada += abecedario;
         } else {
           passwordDescifrada += password[i];
           }
       }
     return(passwordDescifrada);
       }
     } 
   export default cipher;