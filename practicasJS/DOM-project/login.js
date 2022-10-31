class User{
  constructor(id, name, age, email, password,admin){
    this.id=id;
    this.name=name;
    this.age=age;
    this.email=email;
    this.password=password;
    this.admin =admin;
  }
}
let usersLS = JSON.parse(localStorage.getItem("users"));
let users;
if(usersLS){
  users = JSON.parse(localStorage.getItem("users"));
}else{
  users=[
    new User(1,"Agostina Mercado",29,"agosmercado@gmail.com",12345678, "true"),
    new User(2,"Maria Lopez",25,"maria.lopez@gmail.com",12345677, "true"),
    new User(3,"Mario Suarez",28,"mario.suarez@gmail.com",12345676, "true"),
    new User(4,"Carlos Guzman",38,"carlos.guzman@gmail.com",12345675, "true"),
    new User(5,"Carla Kriska",30,"carla.kriska@gmail.com",12345674, "true")
  ]
  localStorage.setItem("users",JSON.stringify(users));
}

const login = (e)=>{
  e.preventDefault(); //PREVENIMOS EL COMPORTAMIENTO POR DEFECTO
  //CAPTURAMOS LOS DATOS
  let email = document.getElementById("form-email").value;
  let password = document.getElementById("form-password").value;
  let userFound = users.find(user=>user.email==email);
  let isOk = userFound.password==password //COMPARO SI LA CONTRASEÑA INGRESADA COINCIDE CON LA CONTRASEÑ DEL USUARIO ENCONTRADO ANTES
  if(userFound && isOk){
    // alertMessage("Entro", "form");
    window.location.assign(window.location.origin +"/practicasJS/DOM-project/carrito.html") //REDIRECCIONO A LA PAG DE INICIO
  }else{
    alertMessage("Contraseña invalida", "form");
  }
}

function alertMessage (message, queryContainer){
  let alertMessage = document.createElement("div");
  alertMessage.classList.add("alert","alert-danger","my-2");
  alertMessage.setAttribute("role","alert"); //USO SET ATRIBUTE CUANDO QUIERO AGREGAR UN ATRIBUTO QUE NO APARECE EN LA LISTA
  alertMessage.innerText =message;
  let container = document.querySelector(queryContainer);
  container.appendChild(alertMessage);
  setTimeout(()=>{alertMessage.remove();},2000); // PASADOS 2 SEGUNDOS SE BORRE EL ELEMENTO QUE ACABO DE CREAR SINO ES SPAM
}

//! FUNCION PARA REGISTRARSE
const register = (e) =>{
  e.preventDefault();
  let id = Math.random();
  let name = document.getElementById("form-register-name").value;
  let age = document.getElementById("form-register-age").value;
  let email = document.getElementById("form-register-email").value;
  let password = document.getElementById("form-register-password").value;
  let password2 = document.getElementById("form-register-password2").value;
  // GUARDO LOS DATOS OBTENIDOS EN UNA VARIABLE INSTANCIANDO 
  const newUser = new User(id, name, age,email ,password ,false);
  console.log("holi");
  //ACTUALIZACION EN LS
  //TRAIGO LOS DATOS DE LS (TRAIGO LA CAJA DE LIBROS)
  let usersLS= JSON.parse(localStorage.getItem("users"));
  //AGREGO A LS EL NUEVO USER (AGREGO A LA CAJA DE LIBROS EL LIBRO NUEVO)
  usersLS.push(newUser);
  //GUARDO LA NUEVA LISTA DE USUARIOS A LS (GUARDO DE NUEVO LA CAJA DE LIBROS ACTUALIZADA)
  localStorage.setItem("users",JSON.stringify(usersLS));
  //UNA VEZ REGISTRADO REDIRECCIONO AL INICIO
  window.location.assign(window.location.origin +"/practicasJS/DOM-project/carrito.html");
}