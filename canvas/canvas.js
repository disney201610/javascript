const canvas = document.querySelector('canvas');
const color = document.querySelector('#color');
const grosor = document.querySelector('#grosor');

// Obtener el contexto
const ctx = canvas.getContext('2d');

// // Cambiar color borde
// ctx.strokeStyle = '#48e';

// // Cambiar grosor de la línea
// ctx.lineWidth = 10;

// // Rectángulo con lineas
// ctx.strokeRect(10, 10, 50, 80);

// // Cambiar color relleno
// ctx.fillStyle = '#48e';

// // Cuadrado con relleno
// ctx.fillRect(125, 125, 250, 250);

// // Crear una línea
// ctx.lineTo(0, 0);
// ctx.lineTo(500, 500);
// ctx.lineTo(250, 0);
// ctx.stroke();
// ctx.closePath();
// ctx.arc(120, 150, 100, 10, 40);
// ctx.stroke();

// ---- Paint ----

const mouse = {
   x: 0,
   y: 0,
   color: undefined,
   grosor: undefined,
   click: false
};
canvas.addEventListener('mousemove', (e) => {
   // Obtener la posición del mouse
   mouse.x = e.offsetX;
   mouse.y = e.offsetY;
});
canvas.addEventListener('mousedown', (e) => {
   mouse.click = true;
});
canvas.addEventListener('mouseup', (e) => {
   mouse.click = false;
});
color.addEventListener('change', (e) => {
   mouse.color = color.value;
   ctx.strokeStyle = mouse.color;
});

grosor.addEventListener('change', (e) => {
   mouse.grosor = parseInt(grosor.value);
   ctx.lineWidth = mouse.grosor;
});

// Cambiar color línea
// ctx.fillStyle = '#48e';
// Cambiar grosor línea
// ctx.lineWidth = 10;

setInterval(() => {
   if (mouse.click) {
      ctx.lineTo(mouse.x, mouse.y);
      ctx.stroke();
   } else {
      ctx.closePath();
      ctx.beginPath();
   }
}, 10);
