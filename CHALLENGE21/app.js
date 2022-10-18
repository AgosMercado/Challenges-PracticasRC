

function publishTweet(){
  event.preventDefault();
  let tweet = document.getElementById("textarea-tweet").value; //Guardo en una variable el valor del textarea
  let newTweet = document.createElement("div"); //Creo el elemento
  const id=Math.random();
  newTweet.id=id;
  newTweet.classList.add("container-tweetstyle"); //Le agrego estilos
  // newTweet.innerText = tweet; //Al nuevo elemento le agrego el contenido del textarea
  newTweet.innerHTML = `${tweet} <br><button class="btn btn-primary my-3 ms-auto d-block" onclick="eliminar(event)">Eliminar</button>`
  let tweetContainer = document.querySelector(".container-tweet"); //Ubico al padre
  tweetContainer.appendChild(newTweet); // Hago que adopte al hijo
  document.querySelector("form").reset(); // Metodo para resetear el input luego de escribir
}

// const eliminar = (id) =>{
//   /**
//    * 1- Ubico al elemento que quiero borrar, cada vez que creo un elemento le asigno un id, que debe ser un elemento distinto para cada tweet creado. Paso por parametro el id (como template literal) a la funcion en el onclick
//    * 2-Borro el elemento
//    */
//   const elementoAborrar = document.getElementById(id);
//   elementoAborrar.remove();
// }

//! OTRA FORMA DE ELIMINAR EL ELEMENTO
const eliminar = (event) =>{
  /**
   * 1- Ubico al elemento que quiero borrar, paso el evento como parametro en el onclick, con el target del evento, puedo ubicar al padre y eliminarlo. El target es el elemento donde sucede el evento
   * 2-Borro el elemento
   */
  const elementoAborrar = event.target.parentElement;
  elementoAborrar.remove();
}