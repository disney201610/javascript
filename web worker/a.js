"use strict";

// web worker es para ejecutar código en segundo plano

const worker = new Worker("b.js");
document
  .querySelector("button")
  .addEventListener("click", () => ejecutarBucle());
worker.addEventListener("message", (e) => {
  console.log(e.data);
  worker.terminate();
});

// el postMessage es para enviar mensajes al worker

const ejecutarBucle = () => {
  worker.postMessage("Mensaje 1");
};

console.log(worker);
