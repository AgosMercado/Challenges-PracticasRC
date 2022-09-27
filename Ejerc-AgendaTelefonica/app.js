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
  obtenerNombre() {
    console.log(this.nombre);
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
  agregar(contact){
    this.contactos.push(contact);
    console.log("Los nuevos contactos agregados son "+this.contactos);
  };
  listar(){
    for (let i=0;i<this.contactos.length;i++){
      console.log(this.contactos[i]);
    }
  };
  borrar(contactoAeliminar){ //!NO ME SALE
    if(Contacto.nombre==contactoAeliminar){
      this.contactos = this.contactos.filter(contact=>contact!=contactoAeliminar)
    }else{
      console.log("El contacto no existe en tu agenda");
    }
  }

}
let agendaAgos= new Agenda("Agos");