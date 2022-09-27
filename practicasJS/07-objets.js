// let person = {
//   name: "Agostina Mercado",
//   age: 29,
//   location: "Tucuman",
//   hobbies: ["dormir", "mirar series"],
//   pets : [{
//     name: "Lolo",
//     type: "dog"
//   },
//   {
//     name: "Rufina",
//     type: "cat"
//   }
//   ],
//   children: null,

//   saludar: function(){
//     console.log("Hola, soy Ago");
//   },

// //* RECORRER UN OBJETO
//   listar: function(){
//     for (property in this){
//       console.log(`${property} = ${this[property]}`);
//     }
//   }
// }

// //* PARA LEER UN DATO PODEMOS UTILIZAR DOS TIPOS DE NOTACIONES
// //? notacion de punto
// console.log(person.name);

// //? notacion de corchete
// console.log(person["location"]);

// //? si quiero leer el nombre de la segunda mascota
// console.log(person.pets[1].name);

// //? cambiar el nombre a la segunda mascota
// console.log(person.pets[1].name="Renata");

// //* CREANDO OBJETOS CON LA FUNCION CONTRUCTORA

// function Team (nombre, colores, peoples){
//   this.nombre = nombre;
//   this.colores = colores;
//   this.peoples=peoples;
// }
// let sanMartin = new Team("San Martin", ["rojo", "blanco"], 1000000);
// let atletico = new Team("Atletico de tucuman", ["celeste", "blanco"], 200);

// console.log(sanMartin);
// console.log(atletico);

// //*CREANDO OBJETOS CON CLASES

// class Country{
//   constructor(name, people){
//     this.name=name;
//     this.people=people
//   }
// }

// const arg = new Country("Argentina", 4000000);
// const bra = new Country("Brasil",15000000);
// console.log(arg);
// console.log(bra);

// //* HERENCIA
// class Persona{
//   constructor(name, age){
//     this.name=name;
//     this.age=age;
//   }
//   saludar(){
//     console.log(`Hola a todos, mi nombre es ${this.name}`);
//   }
// }

// class Student extends Persona{
//   constructor(name, age, group){
//     super(name,age)
//     this.group=group;
//   }
//   get getAge(){           //*DEVOLVER UNA PROPIEDAD
//     return this.age;
//   }
//   set setGroup(group){    //*SETTER: CAMBIAR DATOS DEL OBJETO
//     this.group=group;
//   }
// }
// const agos = new Student("Agos",29,"15i");
// console.log(agos);

//* CUENTA BANCARIA
/*Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
-Una propiedad titular con el valor "Alex".
-Una propiedad saldo, teniendo como valor inicial 0.
-Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
-Un método extraer() que permita retirar la cantidad pasada como parámetro.
-Un método informar() que retorne la información del estado de la cuenta.*/

class Cuenta{
  constructor(name){
    this.name=name;
    this.saldo=0;
    this.idCuenta = Math.floor(Math.random()*10000);
  }
  ingresar(monto){
    if(monto>0){
    this.saldo=this.saldo+monto;
    console.log("Tu nuevo saldo es "+this.saldo);
    }else{
      console.log("Ingresa un valor valido");
    }
  };
  extraer(monto){
    if(monto>this.saldo){
      console.log("Saldo insuficiente")
    }
      else if (monto>0){
        this.saldo=this.saldo-monto;
        console.log("Tu nuevo saldo es "+this.saldo);
      }else{
        console.log("Ingresa un valor valido")
      }
  };
  // if (monto<=this.saldo){ //!otra forma
    //     if(monto>0){
    //     this.saldo=this.saldo-monto;
    //     console.log("Tu nuevo saldo es "+this.saldo);
    //     }else{
    //     console.log("Ingresa un valor valido");
    //     }
    // }
    // else {console.log("Saldo insuficiente")};
  informar(){
    console.log(`El titular de la cuenta número ${this.idCuenta}, a nombre de ${this.name} disponde de un saldo total de ${this.saldo}`)
  }
  }
  

let agosCuenta = new Cuenta("Agos")