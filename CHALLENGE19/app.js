/* Armamos un carrito de compra que permita: 
-Agregar productos
-Mostrar el carrito completo
-Buscar un producto en el carrito
-Filtrar productos que coincidan con un palabra, parte de ella o una letra
-Eliminar un producto*/

let products = ["cerveza", "gin", "vino", "fernet","gatorade","agua"];
let trolley = [];

//*mostrar la lista de productos disponibles
const verProductos = () => {
  alert(products.join(", "));
}

//*agregar producto al carrito
const addProduct = () =>{
  let productToAdd = (prompt("Que producto deseas agregar")).toLowerCase();
  if (products.includes(productToAdd)){
  trolley.push(productToAdd);
  alert("Producto agregado con exito");
  }else{
    alert("El producto que deseas agregar no se encuentra disponible");
  }
}

//*mostrar el carrito completo
const verCarrito = () =>{
  alert(trolley.join(", "));
}
//*eliminar producto del carrito
const deletedProduct = () =>{
  let productToDelet = (prompt("Que producto deseas eliminar")).toLowerCase();
  if (trolley.includes(productToDelet)){
    let position = trolley.indexOf(productToDelet);
    trolley.splice(position,1);
    alert("Producto eliminado con exito");
    }else{
      alert("El producto que deseas eliminar no está ingresado en tu carro de compras");
    }
}
//*Buscar un producto del carrito
const findProduct =() =>{
  let productToFind = prompt("Que producto deseas buscar en tu carrito").toLowerCase();
  if (trolley.includes(productToFind)){
    let productFinded = trolley.find(product=>product==productToFind);
    alert("Producto encontrado "+productFinded);
    }else{
      alert("No tienes este producto en tu carrito");
    }
}

//*filtrar productos que coincidan con una palabra, parte de ella o una letra
const filterProduct =  () =>{
  const filter = prompt("Busqueda rapida..").toLowerCase();
    let productsFiltrados = products.filter(drink => drink.includes(filter))
    alert(productsFiltrados);
}