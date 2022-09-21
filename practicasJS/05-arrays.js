let days = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];
let days2 = ["dia no laborable", "feriadito"];

//*RECORRER EL ARRAY
for (let i=0; i<days.length; i++){
console.log(days[i]);
}

//*AGREGAR UN ELEMENTO AL FINAL DEL ARRAY
days.push("Feriadol");
console.log(days);

//*ELIMINAR EL ULTIMO ELEMENTO DEL ARRAY
days.pop();
console.log(days);
//Conocer el elemento eliminado:
let dayDeleted = days.pop();
console.log(dayDeleted);

//*AGREGAR UN ELEMENTO AL INICIO DEL ARRAY
days.unshift("Prelunes");
console.log(days);

//*ELIMINA UN ELEMENTO DEL INICIO DEL ARRAY Y LO DEVUELVE
console.log(days.shift());
console.log(days);

//*DEVUELVE LA POSICION O INDICE EN EL QUE SE ENCUENTRE UN ELEMENTO
console.log(days.indexOf("lunes")); //!DEVUELVE -1 SI EL ELEMENTO NO ESTA EN EL ARRAY

//*INVERTIR EL ORDEN DEL ARRAY
console.log(days.reverse());

//*CONCATENAR DOS ARRAYS
console.log(days.concat(days2));

//*DEVUELVE TRUE SI EL ARRAY CONTIENE AL ELEMENTO X
console.log(days.includes("feriadol"));

//*DEVUELVE TODOS LOS ELEMENTOS EN UN STRING ESPECIFICANDO EL SEPARADOR
console.log(days.join(","));

//*ORDENA EL ARRAY ALFABETICAMENTE
console.log(days.sort());

let equipos = ["San Martin de Tucuman", "Atletico", "Central Norte"];
//*SPLICE CORTA EL ARRAY DESDE EL X POSICION, Y ELEMENTOS, Y PUEDO REEMPLAZAR CON Z* OPCIONAL **** MODIFICA EL ARRAY ORIGINAL
console.log(equipos.splice(1,1));
console.log(equipos); //san martin, central norte
console.log(equipos.splice(1,1,"Bokita")); 
console.log(equipos); // san martin bokita

//* SLICE CORTA EL ARRAY DESDE LA POSICION X HASTA LA POSICION Y, NO MODIFICA EL ARRAY ORIGINAL****
console.log(equipos.slice(1,2));
console.log(equipos);