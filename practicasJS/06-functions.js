//*Tengo una base de datos de usuarios y quiero hacer dos tareas, eliminar uno y actualizar uno

let dataBase = ["agos", "cristian", "bubi", "anto", "eli"];

// let userToDeleted = ((prompt("Que usuario deseas eliminar")).toLowerCase());

// let positionDeleted = dataBase.indexOf(userToDeleted);


const borrandoUsuario = () => {
  const name = prompt("Que usuario deseas eliminar").toLowerCase();
  if (dataBase.includes(name)){
  const position = dataBase.indexOf(name);
  dataBase.splice(position, 1);
  alert("Usuario eliminado")
  console.log("La base de datos se ha actualizado ",dataBase);
  }else{
    alert("Usuario no encontrado");
  }
}

const actualizandoUsuario = () => {
  const nameBorrar = prompt("Que usuario deseas modificar").toLowerCase();
  const nameActualizar = prompt("Que usuario deseas agregar").toLowerCase();
  if (dataBase.includes(nameBorrar)){
  const position = dataBase.indexOf(nameBorrar);
  dataBase.splice(position, 1, nameActualizar);
  console.log("La base de datos se ha actualizado ",dataBase);
  }else{
    alert("Usuario no encontrado");
  }
}

const mostrarDataBase = () =>{
  alert(dataBase.join(", "));
}

//!OTROS METODOS DE ARRAY
//* FILTER : CREA UN NUEVO ARRAY CON TODOS LOS ITEMS QUE CUMPLAN LA CONDICION IMPLEMENTADA POR LA FUNCION DADA, devuelve un nuevo array, no cambia al original, si ninguno coincide devuelve una array vacio
let ages = [15, 27, 20, 1, 36];

const olderThan25 = ages.filter(age => age>=25);
console.log(olderThan25);

//* FIND DEVUELVE EL VALOR DEL PRIMER ELEMENTO DEL ARRAY QUE CUMPLE LA FUNCION DE PRUEBA PROPORCIONADA, si ningun cumple la condicion devuelve undefined
console.log(ages.find(age => age>=25));

//* MAP AND FOR EACH

//* MAP CON CADA ELEMENTO DEL ARRAY LE REALIZA UNA ACCION ESPECIFICADA, DEVUELVE EL ARRAY MODIFICADO, FOREACH PODEMOS REALIZAR UNA ACCION A CADA ELEMENTO DEL ARRAY, NO DEVUELVE NADA NI MODIFICA EL ARRAY
const en20años= ages.map(age=>age+20);
console.log(en20años);

//*To DO CALCULATOR
// const calculator = () => {
//   const num1 = Number(prompt ("Ingrese el primer numero"));
//   const num2 = Number(prompt ("Ingrese el segundo numero"));
//   if (isNaN(num1) || isNaN(num2)){
//     alert("Ingrese un numero válido");
//   }
//   const operation = prompt("Ingrese la operacion a realizar (+,-,/,*)");
//   switch (operation){
//     case ("+"):
//       alert(num1+num2);
//       break;
//     case ("-"):
//       alert(num1-num2);
//       break;
//     case ("*"):
//       alert(num1*num2);
//       break;
//     case ("/"):
//       alert(num1/num2);
//       break;
//     default:
//       alert("Ingrese una operacion válida");
//   }
// }

