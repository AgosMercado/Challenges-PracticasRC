/**LISTA DE COMPRAS
*Agregar un producto a la lista (Usar un bucle que permita seguir ingresando productos hasta dejar el prompt vacio o presionar cancelar)
*Listar todos los productos de la lista
*Borrar un producto de la lista (Ingresar el nombre del producto a eliminar con un prompt)
*Filtrar productos por una o varias letras (Ingresar el término a filtrar con un prompt) */


let lista = [];
let producto = true;
function agregarProducto() {
    while (producto!= null && producto!='') { 
        producto = prompt("Ingrese el producto");
        lista.push(producto);
    }
}

const getlista = () => {
    alert("Los productos agregados son: \n " + lista.join("\n"))
}
const removeProduct = () =>{
    let productToRemove = prompt("Ingrese el producto que desea eliminar").toLowerCase();
    if (lista.includes(productToRemove)){
    let list = lista.filter(product=>!(product.includes(productToRemove)));
    lista = list;
    } else{
        alert("No pudimos encontrar el producto ingresado en tu lista de compras")
    }
}

const findProduct = () =>{
    let productToFind = prompt("Ingrese el producto que desea buscar").toLowerCase();
        let productFound = lista.filter(prod=>prod.includes(productToFind));
        alert(productFound);
}

