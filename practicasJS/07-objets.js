let person = {
  name: "Agostina Mercado",
  age: 29,
  location: "Tucuman",
  hobbies: ["dormir", "mirar series"],
  pets : [{
    name: "Lolo",
    type: "dog"
  },
  {
    name: "Rufina",
    type: "cat"
  }
  ],
  children: null,

  saludar: function(){
    console.log("Hola, soy Ago");
  },

//* RECORRER UN OBJETO
  listar: function(){
    for (property in this){
      console.log(`${property} = ${this[property]}`);
    }
  }
}

//* PARA LEER UN DATO PODEMOS UTILIZAR DOS TIPOS DE NOTACIONES
//? notacion de punto
console.log(person.name);

//? notacion de corchete
console.log(person["location"]);

//? si quiero leer el nombre de la segunda mascota
console.log(person.pets[1].name);

//? cambiar el nombre a la segunda mascota
console.log(person.pets[1].name="Renata");

//* CREANDO OBJETOS CON LA FUNCION CONTRUCTORA

function Team (nombre, colores, peoples){
  this.nombre = nombre;
  this.colores = colores;
  this.peoples=peoples;
}
let sanMartin = new Team("San Martin", ["rojo", "blanco"], 1000000);
let atletico = new Team("Atletico de tucuman", ["celeste", "blanco"], 200);

console.log(sanMartin);
console.log(atletico);