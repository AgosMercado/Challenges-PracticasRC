//*ESCAPAR DEL COMPORTAMIENTO
console.log('La estrofa de la canción dice así: "vamos pa\'la playa a curarte el alma"'); //AGREGO BARRA INVERTIDA PARA QUE LA APOSTROFE SE COMPORTE COMO CARACTER Y NO CIERRE EL STRING

//*TEMPLATE LITERALS
let age = 29;
console.log(`Mi edad es ${age} años`);

//METODOS Y PROPIEDADES DEL STRING  -------> ACCEDES MEDIANTE UN PUNTO

let randomString = "Pablito clavo un clavito";
let nombrecito = "Agostina";
let lastname = "       Mercado"
let url = "https://www.paginadeagostina.com/?usuario=diego-fernandez";
console.log(randomString.length); //*Propiedad de un string, no lo cambia, solo nos da alguna característica
console.log(randomString.toUpperCase()); //*ESTE METODO CAMBIA EL STRING A MAYUSCULA
console.log(randomString.toLowerCase()); //*ESTE METODO CAMBIA EL STRING A MINUSCULA
console.log(randomString.includes("clavito")); //*SI ALGUNA PALABRA ESTÁ INCLUIDA EN EL STRING
console.log(nombrecito.charAt(3)); //* QUE CARACTER TENES SEGUN LA POSICIÓN INGRESADA
console.log(randomString.substring(17,24)); //*CORTA UNA PALABRA SEGUN LA POSICION QUE LE INDIQUES DE INICIO Y FINAL(SE CUENTAN LOS ESPACIOS) la 1 posicion es donde inicial el string y la segunda es la longitud de la palabra que queres cortar
console.log(lastname);
console.log(lastname.trim()); //*ELIMINA LOS ESPACIOS DEL STRING DEL COMIENZO Y DEL FINAL
console.log(url.substring(42).replace("-"," "));

//To Do ejercicio1: Recibir el apellido del usuario y mostrar por consola la ultima letra

// let apellido= (prompt("Ingrese su apellido"));
// console.log(apellido.length); 
// let ultimaLetra= (apellido.substring(apellido.length-1));
// console.log(ultimaLetra); 

//!To Do ejercicio2: Recibir el nombre del usuario y mostrar por consola el nombre con la primera letra en mayuscula

let nombre = (prompt("Ingrese su nombre"));
let letraMayus= (nombre.charAt(0)).toUpperCase();
let restoDelNombre = nombre.substring(1);
console.log(letraMayus+restoDelNombre);