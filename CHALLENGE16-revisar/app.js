/**  Pedirle números al usuario hasta que el usuario aprete el botón de cancelar.
Verificar que lo ingresado por el usuario sea un número válido (avisar por alert si no lo es).
Al apretar cancelar, se deben mostrar todos los números juntos.
EJEMPLO:
1. Me pide un número
2. Ingreso un 15
3. Me pide otro número
4. Ingreso la palabra Diego
5. Me dice que no es un número válido
6. Ingreso un 23
7. Me pide otro número
8. Apreto cancelar
9. En consola se muestra '1523'
10. No me pide más números   */

function dameMasNumeros (){
  let listNumber = "";
  let number = true;
  while(number!=null){
    number = prompt("Ingrese un numero");
    if (!isNaN(number)){
      if(number!=null){
      listNumber = listNumber+number
      
      }}
    else{
      alert("Ingrese un numero valido")
  }
}  alert(listNumber);}