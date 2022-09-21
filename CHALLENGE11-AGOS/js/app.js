let base = prompt("Ingrese la base del triangulo");
let altura = prompt("Ingrese la altura del triangulo");
let radio = prompt("Ingrese el radio del circulo");
const pi = Math.PI;
let areaTriangulo = (base * altura)/2;
let areaCirculo = (pi*radio*radio);

console.log("El area del triangulo es ",areaTriangulo);
console.log("El area del circulo es ",areaCirculo);