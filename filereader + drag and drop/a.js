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
  zona.style.border = "4px solid #888";
});

const changeStyle = (element, color) => {
  element.style.color = color;
  element.style.border = `4px dashed ${color}`;
};

const cargarArchivo = (ar) => {
  const reader = new FileReader();
  reader.readAsArrayBuffer(ar);
  reader.addEventListener("progress", (e) => {
    let carga = (e.loaded / ar.size) * 100;
    console.log(carga);
  });
  reader.addEventListener(load, (e) => {
    let video = new blob([new Uint8Array(e.currentTarget.result)], {
      type: "video/mp4",
    });
    let url = URL.createObjectURL(video);
    let img = document.createElement("VIDEO");
    img.setAttribute("src", url);
    document.querySelector(".resultado").appendChild(img);
  });
};
