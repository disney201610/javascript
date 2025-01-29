"use strict";

//localStorage nos permite almacenar datos en el navegador del usuario

// let nombre = sessionStorage.setItem("nombre", "Juan"); aunque lo borremos, 
// se queda en la memoria
// console.log(localStorage);
// let nombre = localStorage.getItem("nombre");
// console.log(nombre);

// removeItem() para borrar un item del localstorage
// clear() nos remueve todos los items del localstorage


// a diferencia de localStorage, sessionStorage se borra cuando cerramos el navegador
console.log(localStorage);

let nombre = sessionStorage.getItem("nombre");

console.log(nombre);

