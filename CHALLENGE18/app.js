//*Armar un piedra papel o tijeras, donde el jugador juegue contra un bot.

const jugador1 =()=>{
  let jugada1 = parseInt(prompt("Ingrese 1 para piedra, 2 para papel y 3 para tijera"));
  if (!isNaN(jugada1) && (jugada1==1 || jugada1==2 || jugada1==3)){
  return (jugada1);
}else{
    alert("Ingrese un numero valido");
  }
}

const jugador2 =() =>{
  let jugada2 = (Math.floor(Math.random()*2.99))+1;
  return (jugada2);
}

function PiedraPapeloTijera() {
  const player= jugador1();
  const bot = jugador2();
  switch (true) {
    case (player==bot):
      alert(`EMPATE`);
      break;
    case (player==1 && bot==2):
      alert(`Eljugador1 eligio piedra, y el bot eligio papel, el ganador es el bot`);
      break;
    case (player==1 && bot==3):
      alert(`Eljugador1 eligio piedra, y el bot eligio tijera, el ganador es el jugador1`);
      break;
    case (player==2 && bot==1):
      alert(`Eljugador1 eligio papel, y el bot eligio piedra, el ganador es el jugador1`);
      break;
    case (player==2 && bot==3):
      alert(`Eljugador1 eligio papel, y el bot eligio tijera, el ganador es el bot`);
      break;
    case (player==3 && bot==1):
      alert(`Eljugador1 eligio tijera, y el bot eligio piedra, el ganador es el bot`);
      break;
    case (player==3 && bot==2):
      alert(`Eljugador1 eligio tijera, y el bot eligio papel, el ganador es el jugador1`);
      break;
    default:
  }
}