"use strict";

const zona = document.querySelector(".zona-arrastre");

zona.addEventListener("dragover", (e) => {
  e.preventDefault();
  changeStyle(e.target, "#444");
});

zona.addEventListener("dragleave", (e) => {
  e.preventDefault();
  changeStyle(e.target, "#888");
});

zona.addEventListener("drop", (e) => {
  e.preventDefault();
  changeStyle(e.target, "#888");
  cargarArchivo(e.dataTransfer.files[0]);
});

const changeStyle = (element, color) => {
  element.style.color = color;
  element.style.border = `4px dashed ${color}`;
};

const cargarArchivo = (ar) => {
  const reader = new FileReader();
  reader.readAsText(ar);
  reader.addEventListener("load", (e) => {
    document.querySelector(".resultado").textContent = e.currentTarget.result;
  });
};
