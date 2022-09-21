
//CHALLENGE 12: Pedir dos números al usuario y mostrar por consola o por alerta si el primer número es mayor, menor o igual al número dos

let number1 = parseInt(prompt("Ingrese el primer numero"));
let number2 = parseInt(prompt("Ingrese el segundo numero"));

if (number1>number2){
  alert(number1+ " es mayor a "+number2);
}
else if (number1<number2){
  alert(number1+ " es menor a "+number2);
}
else if (number1===number2){
  alert(number1+ " es igual a "+number2);
}
else {
  alert("Solo puede ingresar numeros");
}