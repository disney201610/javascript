"use strict";

// const fecha = new Date();
// console.log(fecha.getMinutes());

//get date es un metodo que nos permite obtener el dia del mes
//get day es un metodo que nos permite obtener el dia de la semana
//get month es un metodo que nos permite obtener el mes
//get year es un metodo que nos permite obtener el año
//get hours es un metodo que nos permite obtener las horas
//get minutes es un metodo que nos permite obtener los minutos
//get seconds es un metodo que nos permite obtener los segundos

//ejemplo uso reloj.

const addZeros = (n) => {
  if (n.toString().length < 2) return "0".concat(n);
  return n;
};

const actualizarHora = () => {
  const time = new Date();
  let hora = addZeros(time.getHours());
  let min = addZeros(time.getMinutes());
  let seg = addZeros(time.getSeconds());
  document.querySelector(".hora").textContent = hora;
  document.querySelector(".min").textContent = min;
  document.querySelector(".seg").textContent = seg;
};

actualizarHora();

setInterval(actualizarHora, 1000);