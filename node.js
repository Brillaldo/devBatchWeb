function mostrarMensaje(callback, mensaje) {
    if (typeof callback === 'function') {
       callback(mensaje);
    } else {
       console.warn('No se proporcionó una función callback válida.');
    }
   }
   
   mostrarMensaje(console.log, '¡Hola, mundo!');
   mostrarMensaje(console.warn, '¡Ten cuidado!');
   mostrarMensaje(console.info, 'Aquí hay una información importante.');    


   function tipoDeDato(variable, callback) {
    let tipo = typeof variable;
    callback(tipo, variable);
  }


  let MiVariable = "Este es un string";
tipoDeDato(MiVariable, (tipo, contenido) => {
  console.log(`El tipo de dato de MiVariable es ${tipo}`);
  console.log(`El contenido de MiVariable es ${contenido}`);
});

function calculadora(numero1, numero2, callback) {
    let resultado;
   
    switch (callback) {
       case "suma":
         resultado = numero1 + numero2;
         break;
       case "resta":
         resultado = numero1 - numero2;
         break;
       case "multiplicacion":
         resultado = numero1 * numero2;
         break;
       case "division":
         if (numero2 !== 0) {
           resultado = numero1 / numero2;
         } else {
           console.log("Error: División por cero");
           return;
         }
         break;
       default:
         console.log("Error: Operación no válida");
         return;
    }
   
    console.log(`El resultado de la operación es: ${resultado}`);
   }

calculadora(5, 3, "suma"); 
calculadora(5, 3, "resta"); 
calculadora(5, 3, "multiplicacion"); 
calculadora(5, 3, "division"); 

function ordenSuperior(numero, callback) {
    let resultado;
   
    if (typeof callback === "function") {
       resultado = callback(numero);
    } else {
       console.log("Error: Función de callback no válida");
       return;
    }
   
    console.log(`El resultado de la operación es: ${resultado}`);
   }
   
   const minus = (num) => num.toString().toLowerCase();
   const mayus = (num) => num.toString().toUpperCase();

ordenSuperior("PejeLagarto", minus); 
ordenSuperior("PejeLagarto", mayus); 

const arr = [120, 80, 200, 100];

const result = arr.filter(time => {
  const hours = Math.ceil(time / 60);
  return hours > 2;
});

console.log(result); 