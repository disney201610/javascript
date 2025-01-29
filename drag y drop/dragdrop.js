"use strict";

const circulo = document.querySelector(".circle");
circulo.setAttribute("draggable", "true");


circulo.addEventListener("dragstart", () => console.log(1));
circulo.addEventListener("drag", () => console.log(1));
circulo.addEventListener("dragend", () => console.log("soltado"));
