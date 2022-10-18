/* *******CHALLENGE 20: Creando circulos********
Crear una aplicación a través de la cual yo le pase el radio de un circulo, y en pantalla se muestre un circulo de tal radio
PISTA: a través del DOM podemos cambiar estilos :O */

function crearCirculo(){
  let radio = Number(prompt("Ingrese el valor del radio"));
  //* Creo el nuevo elemento:
  const newCircle = document.createElement("div");
  //* Agrego el estilo:
  newCircle.classList.add("newCircle");
  newCircle.style.width="radio";
  newCircle.style.height="radio";
  newCircle.style.borderRadius=radio/2;
  newCircle.classList.add("newCircle");
  //* Busco al padre:
  const circleContainer = document.querySelector(".circle-containter");
  //* Ejecuto accion para que lo adopte:
  circleContainer.appendChild(newCircle);

}