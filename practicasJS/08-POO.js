// //* CUENTA BANCARIA
// /*Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
// -Una propiedad titular con el valor "Alex".
// -Una propiedad saldo, teniendo como valor inicial 0.
// -Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
// -Un método extraer() que permita retirar la cantidad pasada como parámetro.
// -Un método informar() que retorne la información del estado de la cuenta.*/

// class Cuenta{
//   constructor(name){
//     this.name=name;
//     this.saldo=0;
//     this.idCuenta = Math.floor(Math.random()*10000);
//   }
//   ingresar(monto){
//     if(monto>0){
//     this.saldo=this.saldo+monto;
//     console.log("Tu nuevo saldo es "+this.saldo);
//     }else{
//       console.log("Ingresa un valor valido");
//     }
//   };
//   extraer(monto){
//     if(monto>this.saldo){
//       console.log("Saldo insuficiente")
//     }
//       else if (monto>0){
//         this.saldo=this.saldo-monto;
//         console.log("Tu nuevo saldo es "+this.saldo);
//       }else{
//         console.log("Ingresa un valor valido")
//       }
//   };
//   // if (monto<=this.saldo){ //?otra forma
//     //     if(monto>0){
//     //     this.saldo=this.saldo-monto;
//     //     console.log("Tu nuevo saldo es "+this.saldo);
//     //     }else{
//     //     console.log("Ingresa un valor valido");
//     //     }
//     // }
//     // else {console.log("Saldo insuficiente")};
//   informar(){
//     console.log(`El titular de la cuenta número ${this.idCuenta}, a nombre de ${this.name} disponde de un saldo total de ${this.saldo}`)
//   }
//   }
  

// let agosCuenta = new Cuenta("Agos")

/*ToDo 
1- Crear una clase Lista de libros, debe tener las siguientes propiedades:
-Numeros de libros ya leídos
-Libros que continuan sin leer
-Siguiente libro
-Libro actual
-Ultimo libro
-Array con todos los libros

2- Crear una clase Libro, debe tener las siguientes propiedades:
-Titulo
-Genero
-Autor
-Booleano: si ya esta o no leido

3- Crear metodo para añadir libro a la lista de libros
4- Colocar un libro en leido actual
5- Crear una funcion para finalizar el libro
6- Crear una funcion para colocar cual es el siguiente libro
*/

class ListaDeLibros{
  constructor(propietario){
    this.propietario=propietario;
    this.librosLeidos=[];
    this.librosSinLeer=[];
    this.libros=[];
    this.libroActual=null;
    this.ultimoLibro=null;
    this.siguienteLibro=null;
  };
  agregarLibro(libro){
    this.libros.push(libro);
    if(libro.leido===true){
      this.librosLeidos.push(libro);
    }
    else{
      this.librosSinLeer.push(libro);
    }
  };
  empezarLibro(nombreLibro){
    const libroEncontrado = this.libros.find(libro=>libro.titulo==nombreLibro); //*Buscar al libro por su nombre o titulo(string)
    if (libroEncontrado){
      this.libroActual=libroEncontrado;
    }else{
      console.log("No tienes este libro en biblioteca");
    }
  }
  finalizarLibro(){
    if (this.libroActual.leido==false){
      this.librosLeidos.push(this.libroActual);
      this.librosSinLeer=this.librosSinLeer.filter(libro=>libro.titulo!=this.libroActual.titulo);
    }
      this.ultimoLibro=this.libroActual;
      this.libroActual=null;
    }
  }


class Libro{
  constructor(titulo, genero, autor, leido){
    this.titulo=titulo;
    this.genero=genero;
    this.autor=autor;
    this.leido=leido;
  }
}

const elPsicoanalista = new Libro ("El Psicoanalista", "Triller psicologico", "John Katzenbach", true);
const elPrincipito = new Libro ("El Principito", "fantasia", "Saint Exuperi", false);
const microAlmas = new Libro ("Microalmas", "Poesia", "Juan Sola", true);
const operacionMasacre = new Libro ("Operacion Masacre", "periodistico", "Rodolfo Walsh", false)

const listaAgos = new ListaDeLibros("Agos");