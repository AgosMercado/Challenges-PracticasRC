//!CARRITO DE COMPRAS

// class Product{
//   constructor(name, code, price, description, image){
//     this.name=name;
//     this.code = code;
//     this.price = price;
//     this.description = description;
//     this.image = image;
//   }
// }

// let productos = [
// new Product("Notebook HP", 1, 150000, "Notebook Gamer HP 16,1” Core i5 8GB 512GB SSD Omen 16-B0507LA","https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"),
// new Product("Smart TV 32'", 2, 68000, "Smart TV HD 32” Philips 32PHD6825","https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"),
// new Product ("Celular moto G", 3, 50000, "Celular Motorola Moto G52 128GB Negro","https://images.unsplash.com/photo-1626084232696-132206a844ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"),
// new Product("Disco solido",4, 5000, "Disco Solido SSD 240GB Kingston A400 SATA III","https://images.unsplash.com/photo-1602524815920-35f31875e44c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"),
// new Product("Tablet Samsung",5,29000,"Galaxy Tab A 10.1 (2019) Negro 32gb","https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=815&q=80")
// ]

// localStorage.setItem("productos",JSON.stringify(productos));
let productis = JSON.parse(localStorage.getItem("productos"));


let favsFromLS = JSON.parse(localStorage.getItem("favs"))
let favs;
if(favsFromLS){
  favs = JSON.parse(localStorage.getItem("favs"))
}else{
  favs = [];
}


let cartFromLS = JSON.parse(localStorage.getItem("cart"))
let cart;
if(cartFromLS){
  cart = JSON.parse(localStorage.getItem("cart"))
}else{
  cart = [];
}



// //*!FUNCION PARA CREAR DINAMICAMENTE LAS CARDS EN EL MAIN A PARTIR DE UN MOLDE
// productos.forEach(product=>{
//   //CREAR ELEMENTO
//   let newProductCard = document.createElement("div");  //Crea un div: <div></div>
//   //PONERLE CONTENIDO
//   newProductCard.id = product.code;                   //Al div creado le asigna un id <div id="1"></div>
//   newProductCard.classList.add("card","my-2","mx-2"); //Al div creado le agrega clase  <div id="1" class="card my-2 mx-2"></div>
//   // newProductCard.style.width="18 rem"
//   newProductCard.innerHTML = `
//   <img src=${product.image} class="card-img-top image-style img-fluid" alt="${product.name}">   
//   <div class="card-body">
//     <h5 class="card-title"><a href="http://127.0.0.1:5500/practicasJS/DOM-project/detail-product.html#${product.code}">${product.name}</a></h5>
//     <p class="card-text">${product.description}</p>
//     <p><strong>Precio:  $ ${product.price}</strong></p>
//     <button href="#" class="btn btn-primary" onclick="addProductToCart(${product.code})"><i class="fa-solid fa-cart-plus"></i></button> 
//     <button href="#" class="btn btn-primary" onclick="addProductToFavs(${product.code})"><i class="fa-sharp fa-solid fa-heart"></i></button>
//   </div>` //cambio la etiqueta a por un button sino, al presionarlo se sube la pantalla para arriba //agrego todo este contenido al div creado
//   //BUSCAR AL PADRE 
//     let containerCards = document.querySelector("main");
//   //HACER QUE EL PADRE ADOPTE AL HIJO
//     containerCards.appendChild(newProductCard);
// })

//! FUNCION PARA AGREGAR UN PRODUCTO AL CARRITO
function addProductToCart(code){
  let productFound = productis.find(product=>product.code==code)
  cart.push(productFound);
  let newProductCard = document.createElement("div");
  //PONERLE CONTENIDO
  newProductCard.id = productFound.code;
  newProductCard.classList.add("card","my-2","mx-2");
  newProductCard.innerHTML = `
  <div class="card-body">
    <h5 class="card-title">${productFound.name}</h5>
    <p class="card-text">${productFound.description}</p>
    <p><strong>Precio:  $ ${productFound.price}</strong></p>
    <button href="#" class="btn btn-danger" onclick="removeProduct(${productFound.code})"><i class="fa-sharp fa-solid fa-trash"></i></button> 
  </div>` //cambio la etiqueta a por un button sino, al presionarlo se sube la pantalla para arriba
  //BUSCAR AL PADRE
    let containerProductAdd = document.querySelector("#cart-body");
  //HACER QUE EL PADRE ADOPTE AL HIJO
  containerProductAdd.appendChild(newProductCard);
   // Actualizar el carrito en LS:
  localStorage.setItem("cart",JSON.stringify(cart));
}
//! FUNCION PARA RENDERIZAR EL CARRITO
  cart.forEach(product=>{ //muestro en el carrito los productos
    //CREAR ELEMENTO
  let newProductCard = document.createElement("div");
  //PONERLE CONTENIDO
  newProductCard.id = product.code;
  newProductCard.classList.add("card","my-2","mx-2");
  newProductCard.innerHTML = `
  <div class="card-body">
    <h5 class="card-title">${product.name}</h5>
    <p class="card-text">${product.description}</p>
    <p><strong>Precio:  $ ${product.price}</strong></p> 
    <button href="#" class="btn btn-danger" onclick="removeProduct(${product.code})"><i class="fa-sharp fa-solid fa-trash"></i></button>
  </div>` //cambio la etiqueta a por un button sino, al presionarlo se sube la pantalla para arriba
  //BUSCAR AL PADRE
    let containerProductAdd = document.querySelector("#cart-body");
  //HACER QUE EL PADRE ADOPTE AL HIJO
  containerProductAdd.appendChild(newProductCard);
  })

  //! FUNCION PARA Agregar un elemento a favoritos
function addProductToFavs(code){
  let productFav = productis.find(product => product.code==code)
  favs.push(productFav);
  localStorage.setItem("favs",JSON.stringify(favs));}

//! FUNCION PARA ELIMINAR UN PRODUCTO DEL CARRITO
const removeProduct = (code) =>{
  let productToRemove = productis.find(product=>product.code==code);
  cart = cart.filter(product=>product!=productToRemove);
  console.log(productToRemove);
  document.getElementById(productToRemove.code).remove();
  localStorage.setItem("cart",JSON.stringify(cart));
  
}