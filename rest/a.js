"use strict";

// ...pepe => agarra todo lo que le pasas

function sumar(a, ...pepe) {
  let respuesta = 0;
  pepe.forEach((number) => {
    respuesta += number;
  });
  return respuesta * a;
}

console.log(sumar(100, 1, 5, 10, 80, 20)); // 3
