"use strict";

// web worker es para ejecutar código en segundo plano

const worker = new Worker("b.js");
document.querySelector("button").addEventListener("click",() => ejecutarBucle());

// el postMessage es para enviar mensajes al worker

const ejecutarBucle = () => {
  worker.postMessage("todo bien");
};

console.log(worker);
