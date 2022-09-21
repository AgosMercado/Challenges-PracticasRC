//*Al ingresar un numero, se deben mostrar en consola todos los numeros anteriores

// let numero = prompt("Ingrese un número para iniciar el ciclo");

// while (numero>=0){
//   console.log(numero);
//   numero--;
// }

// //! Porque la luna es mayor que el sol?

// let respuesta = prompt("Porque la luna es mayor que el sol?");
// let contador = 1;
// while (respuesta.toLowerCase() != "porque sale de noche" && surrender==false){
//   respuesta = prompt("Intenta de nuevo, Porque la luna es mayor que el sol?");
//   contador++;
//   if (contador===5){
//     alert("Burro");
//     surrender == true;
    
//   }
//   if (contador===3){
//     alert("Pista:nsdnadbad")
//   }
// }
// alert("Saliste!")

// //*MACHETE DE TABLAS

// let numeri = prompt("Ingrese el numero del que desea conocer las tablas");

// for (let i=0; i<=10; i++){
//   console.log(`${numeri}x${i}=${numeri*i}`);
// }

/*EJERCICIO EN GRUPO
Recibir dos valores y la operacion a realizar (+,-,*,/), verificar que los valores ingresados no sean NaN, si son Nan convertirlos a 0 (PISTA isNan(x)).
Con una estructura switch verificar la operación y devolver un mensaje con el resultado de la misma.
Si se ingresa una operación que no esté contemplada devolver un mensaje de error.*/

// let numero1 = Number(prompt("Ingrese un numero"));
// let numero2 = Number(prompt("Ingrese otro numero"));
// let operacion = prompt("Ingrese la operacion a realizar (+,-,*,/)");

// switch (operacion){
//   case "+" :
//     console.log(numero1+numero2);
//     break;
//   case "-" :
//     console.log(numero1-numero2);
//     break;
//   case "*" :
//     console.log(numero1*numero2);
//     break;
//   case "/" :
//     if (numero2==0){
//       alert("No se puede dividir en 0");
//     }
//     else{
//     console.log(numero1/numero2);
//     }
//     break;
//   default:
//     console.log("ERRORR");
// }

//*EL PROMPT DE ESCALIBUR
let nombre = " ";
let isKing = "false";

while (nombre.toLowerCase() !== "arturo" || isKing!= true){
  nombre = prompt("Ingrese su nombre");
  if (nombre.toLowerCase() === "arturo"){
      isKing = confirm("Sos rey?");
      console.log("Saliste del loop");
  }else{
    alert("Segui intentando");
  }
}