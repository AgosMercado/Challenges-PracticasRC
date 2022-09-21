//*Redondeo y truncamiento

let number = 35.75;

//*Redondeo -----> 36
console.log("Numero redondeado",Math.round(number));

//*Trucamiento ------>35
console.log("Numero truncado",Math.floor(number));

//*Encontrar máximos y mínimos
console.log("El maximo numero de la cadena es",Math.max(1,5,88,47596,445872,457,0));
console.log("El mínimo número de la cadena es: ",Math.min(0,1,4,7,5,8,6,2225,2))

//*Potencia y raíces
console.log("La potencia cuadrada de 3 es ",Math.pow(3,2));
console.log("La potencia cúbica de 3 es ",Math.pow(3,3));
console.log("La raíz cuadrada de 9 es ",Math.sqrt(9));
console.log("La raíz cúbica de 27 es ",Math.cbrt(27));

//*Obtener número aleatorio entre 0 y 1

let numeroAleatorio = Math.random();
console.log(numeroAleatorio);

//*Obtener un aleatorio entre 0 y 10
let numeroAleatorio2 = Math.random()*10;
console.log(Math.round(numeroAleatorio2));

//*Parsear cadenas
let numerito = "15.25mñk";

console.log(Number(numerito)); //*Devuelve el numero tal cual se lo pasas, si tiene letras arroja Nan
console.log(parseInt(numerito)); //* Devuelve el numero solo parte entera, si tiene letras las elimina y queda con el nro
console.log(parseFloat(numerito)); //*Devuleve el numero se lo pasas con decimales incluidos, si tiene letras las elimina y queda con el nro

//*Limitar la cantidad de decimales
let numerito2 = Math.random();
console.log(Number(numerito2.toFixed(2)));  //!toFixed convierte el numero a STRING