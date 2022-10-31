let products2 = JSON.parse(localStorage.getItem("productos")); // Traigo los elementos del LS

let productId = window.location.hash.slice(1);    //Traigo el ID del producto con el BOM
let productDetail = products2.find(product=>product.code==productId)  //Busco al producto por su ID en la lista de productos
console.log(productDetail);
let detailProduct = document.createElement("div");  //Creo el elemento a mostrarse con los datos del producto encontrado en la linea anterior
detailProduct.id=productDetail.code; //Al elemento creado le asigno un ID que corresponde al code del producto encontrado
detailProduct.classList.add("row");
detailProduct.innerHTML=`
  <div class="col-md-5 col-11 mt-4"><img class="image-style-detail" src="${productDetail.image}" alt="N${productDetail.name}"></div>
  <div class="col-md-5 col-11 mt-5"><h2>${productDetail.name}</h2>
  <div class="col-md-5 col-11 mt-5"><p>${productDetail.description}</p>
  <div><h2> ${productDetail.price}</h2></div>
  </div>
`
let containerProduct = document.querySelector(".container-detailsProducts");
containerProduct.appendChild(detailProduct);