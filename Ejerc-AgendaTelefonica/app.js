/**
 * Se debe poder guardar en un arreglo los datos de los contactos con el siguiente formato: {nombre:"Pablo Gonzalez", telefono:381546789}
 * Crear las funciones necesarias para:
-Agregar un nuevo contacto
-Listar todos los contactos en consola
-Borrar un contacto
-Buscar un contacto*/

class Contacto{
  constructor(nombre,numero){
    this.nombre=nombre;
    this.numero=numero;
  };
  getContact(){
    console.log(`Nombre: ${this.nombre}, Numero: ${this.numero}`);
  }
}

let agos = new Contacto("Agostina Mercado",3815393396);
let papa = new Contacto("Antonio Mercado",3704369704);
let mama = new Contacto("Elisabet Ojeda",3704099628);

class Agenda{
  constructor(dueño){
    this.dueño=dueño;
    this.contactos=[];
  };
  agregar(contacto){ //! AGREGAR LOS CONTACTOS
    this.contactos.push(contacto);
    console.log("Contacto agregado con éxito");
  };
  listar(){  //!LISTAR LOS CONTACTOS
    for (let i=0;i<this.contactos.length;i++){
      console.log(this.contactos[i]);
    }
  };
  borrar(nombreDelContacto){ //! Para eliminar el contacto ingresar el nombre como string (tal cual se agendó)
    const contactoAEliminar = this.contactos.find(contacto=>contacto.nombre==nombreDelContacto)
    if(contactoAEliminar){
      this.contactos = this.contactos.filter(contacto=>contacto.nombre!=contactoAEliminar.nombre)
    }else{
      console.log("El contacto no existe en tu agenda");
    }
  }
  buscar(nombreDelContacto){ //! El nombre a buscar debe ser ingresado tal cual se agendo, como string
    const contactoABuscar = this.contactos.find(contacto=>contacto.nombre==nombreDelContacto);
    if(contactoABuscar){
      console.log(contactoABuscar); //*CONSULTAR PORQUE NO PUEDO PONER STRING MAS EL OBJETO*********************************
    }else{
      console.log("No tienes este contacto en tu agenda");
    }
}
}

let agendaAgos= new Agenda("Agos");