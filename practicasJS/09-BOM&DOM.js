// //! BOM Browser Objet Model: Nos permite manipular e navegador, su historia, su barra de direcciones, la informacion del navegador, su camara, el microfono, usb conectados, la pantalla, etc

// //* Funciones de tiempo:

// //? Set Interval => Ejecuta una tarea cada determinado lapso de tiempo
// function helloWorld(){
//   console.log("Hi everybody");
// }
// const idInterval = setInterval(helloWorld,1000); // Te devuelve un id
// // Se ejecuta indefinidamente hasta que ejecutemos el metodo clearInterval() pasando como parametro el id del interval
// const idInterval2 = setInterval(()=>{console.log("Hola mi banda");},5000);


// //? SetTimeOut => Ejecuta una tarea una sola vez pasado n determinado tiempo
// setTimeout(()=>{console.log("Hola esta lloviendo");},7000);

// //* CUENTA REGRESIVA

// let countdown = 10;
// function cuentaRegresiva(){
//   console.log("Despegue en "+countdown);
//   countdown--;
// }
// const idSetInterval = setInterval(cuentaRegresiva,1000);
// setTimeout(()=>{
//   clearInterval(idSetInterval);
//   console.log("Despegueeeee");
// },11000)

// //! DOM Document Objet Model: permite manipular los elementos del documento ==== html
// //? SELECTORES
// POR id: document.getElementById(id)  Devuelve un solo elemento
// Por clase: docuement.getElementsByClassName(class)  Devuelve un array
// Por nombre de la etiqueta:  document.getElementsByTagName(input) Trae varios, array
// Por selectores de CSS: document.querySelector(".light") Devuelve el primer elemento que tiene esa clase
// Por selectores de CSS: document.querySelectorAll(".light") Devuelve el array de elementos con esa clase

// function changeText(){
//   const h2ToChange = document.getElementById("h2-to-change");
//   h2ToChange.innerText = "El texto ha sido cambiado y se le ha aplicado estilos"; //* cambio el texto
//   h2ToChange.style.marginLeft="300px"; //* Cambio los estilos
// }

// //* CAMBIANDO TEMA
// function changeTheme(){
//   if (document.getElementById("h2-test").classList.contains("light")){
//     document.getElementById("h2-test").classList.add("dark")
//     document.getElementById("h2-test").classList.remove("light")
//   }else{
//     document.getElementById("h2-test").classList.add("light")
//     document.getElementById("h2-test").classList.remove("dark")
//   }
// }

// function addSquare(){
//   //* 1° Crear el elemento:
// const newSquare = document.createElement("div");
//   //* 2° Le ponemos la informacion al nuevo elemento:
// newSquare.classList.add("square");
// newSquare.innerText=("Nuevo cuadrado");
//   //* Busco al padre contenedor del nuevo elemento:
// const squareContainer = document.querySelector(".parent-square");
//   //* Una vez que localizamos al contenedor solicito que lo adopte:
// squareContainer.appendChild(newSquare);
// }

