const corral = document.querySelector(".corral")
const pet = document.querySelector(".pet")
let x =0;
let y=0;

window.addEventListener("keydown",(event)=>{
event.preventDefault();
let coordCorral = corral.getBoundingClientRect();
let coordPet = pet.getBoundingClientRect();
// console.log(coordCorral);
// console.log(coordPet);
switch (event.key) {
  case "ArrowDown":
    if (coordPet.bottom<coordCorral.bottom){
    y++;}
    break;
  case "ArrowUp":
    if (coordPet.top>coordCorral.top){
    y--;  }
    break;
  case "ArrowLeft":
    if(coordPet.left>coordCorral.left){
    x--;}
    break;
  case "ArrowRight":
    if (coordPet.right<coordCorral.right){
    x++;    }
    break;
}
pet.style.transform = `translate(${10*x}px,${10*y}px)`

})