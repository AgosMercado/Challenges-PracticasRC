// A partir de una base de datos de usuarios mostrarlos a todos (solos sus dni) y que cada uno de ellos lleve a una pagina donde se mostraran los datos del usuario

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


usuarios.forEach(usuario=>{
  //CREAR ELEMENTO
  let usuarioDni = document.createElement("a");
  //PONERLE CONTENIDO
  usuarioDni.href = `datosUsuario.html#${usuario.dni}`
  usuarioDni.classList.add("my-2","mx-2");
  usuarioDni.innerHTML = `
    <p><strong> ${usuario.dni}</strong></p>
  ` 
  //BUSCAR AL PADRE
    let containerUsuarios = document.querySelector("#container-usuarios");
  //HACER QUE EL PADRE ADOPTE AL HIJO
  containerUsuarios.appendChild(usuarioDni);
})
