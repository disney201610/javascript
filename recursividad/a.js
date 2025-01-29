"use strict";

function PreguntarEdad(edad) {
  if (edad >= 18) {
    console.log("Sos mayor de edad");
  } else {
    const nuevaEdad = prompt("Cuantos años tenes?");
    PreguntarEdad(parseInt(nuevaEdad));
  }
}

PreguntarEdad();
