//*A ver tu DNI---El usuario ingresa un DNI. Comprobar que sea válido, es decir, que tenga 7 u 8 dígitos y que no sea todos ceros 

//*DOS FORMAS 


const aVerTuDni1 = () =>{
let dni = prompt("Ingresa tu DNI");
if(!isNaN(dni)){
  if (dni.length==7 || dni.length==8){
    if (dni!=0000000 || dni!=00000000){
        alert("El DNI ingresado es "+dni);
    }else{alert("Ingrese un numero valido");}
  }else{alert("Ingrese un numero valido");}
}
else {alert("Ingrese un numero valido");}
}


const aVerTuDni2 = () =>{
  let dni = prompt("Ingresa tu DNI");
if (isNaN(dni)){
  alert("Ingresa un numero valido")
}else if ((dni.length==7 || dni.length==8) && (dni!=0000000 || dni!=00000000)){
  alert("El DNI ingresado es "+dni);
}else{
  alert("Ingresa un numero valido te dije")
}}
