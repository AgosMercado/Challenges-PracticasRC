let dniDelUsuario = window.location.hash.slice(1);

let usuarios=[
  {
    nombre:"Agostina",
    apellido: "Mercado",
    dni:12345678
  },
  {
    nombre:"Rosario",
    apellido: "Pittaro",
    dni:12345679
  },
  {
    nombre:"Marcos",
    apellido: "Rigo",
    dni:12345677
  },
  {
    nombre:"Gabriel",
    apellido: "Rodriguez",
    dni:12345674
  }
]

let usuarioEncontrado = usuarios.find(usuario=>usuario.dni==dniDelUsuario);
let datosCompletos = document.createElement("div");
  //PONERLE CONTENIDO
  datosCompletos.classList.add("my-2","mx-2");
  // newProductCard.style.width="18 rem"
  datosCompletos.innerHTML = `
  <div class="card-body">
    <h5>nombre: ${usuarioEncontrado.nombre}</h5>
    <h5>apellido:${usuarioEncontrado.apellido}</h5>
    <h5>dni:${usuarioEncontrado.dni}</h5> 
  </div>` //cambio la etiqueta a por un button sino, al presionarlo se sube la pantalla para arriba
  //BUSCAR AL PADRE
    let padre = document.querySelector("body");
  //HACER QUE EL PADRE ADOPTE AL HIJO
  padre.appendChild(datosCompletos);
