//* JSON JavaScript Objet Notation

let objeto = {   //Objeto que necesita ir a un backend
  nombre : "Agostina",
  numero : 5
}
console.log(objeto);


//* Para pasar a JSON:
let objetoJson = JSON.stringify(objeto); //Objeto que fue traducido para ir a un backend o que puede venir de un backend (backend lo devolvio)
console.log(objetoJson);

//* Para traducir el objeto que viene en formato JSON a JS pora poder utilizar sus propiedades y metodos:
let objetoTraducido = JSON.parse(objetoJson);
console.log(objetoTraducido);

//* WEB STORAGE: Alamcenamiento del navegador. Se guarda en formato clave-valor. Hay uno para cada pagina, y el almacenamiento maximo es 5MB.
//*  - LocalStorage: Almacenamiento permanente.
//*  - SessionStorage: Almacenamiento Volatil, que dura lo que dura la sesion.
// Para guardar algo en LS:
localStorage.setItem("elemento1",45);
//Para obtener algo de LS:
let valor = localStorage.getItem("elemento1");
console.log(valor);
// Si quiero  guardar un objeto debo pasarlo a formato JSON:
localStorage.setItem("elemento2",objetoJson);
console.log(JSON.parse(localStorage.getItem("elemento2")));

// Borrar un elemento de LS
localStorage.removeItem("elemento1")

//Borrar todo
localStorage.clear()

//* OPTIONAL CHAINING:
//!array.filter() que pasa si ese array no existe o no es un elemento array? Se rompe
//?array?.filter() La solucion es poner un "?" y de esa manera solo si es un elemento array ejecute el metodo