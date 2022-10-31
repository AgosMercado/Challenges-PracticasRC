// localStorage.setItem("products",JSON.stringify(products));

let favsFromLS2 = JSON.parse(localStorage.getItem("favs"))
let favs2;
if(favsFromLS2){
  favs2 = JSON.parse(localStorage.getItem("favs"))
}else{
  favs2 = [];
}


favs2.forEach(fav => {
    let newProductFav = document.createElement("div");
  //PONERLE CONTENIDO
  newProductFav.classList.add("card","my-2","mx-2");
  // newProductCard.style.width="18 rem"
  newProductFav.innerHTML = `
  <div class="card-body">
    <h5 class="card-title">${fav.name}</h5>
    <p class="card-text">${fav.description}</p>
    <p><strong>Precio:  $ ${fav.price}</strong></p> 
  </div>` //cambio la etiqueta a por un button sino, al presionarlo se sube la pantalla para arriba
  //BUSCAR AL PADRE
    let containerProductFav = document.querySelector("section");
  //HACER QUE EL PADRE ADOPTE AL HIJO
  containerProductFav.appendChild(newProductFav);
  console.log("holi");
})
