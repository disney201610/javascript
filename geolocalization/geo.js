"use strict";
// navigator.geolocation es un objeto que nos permite acceder a la geolocalización del usuario

const geolocation = navigator.geolocation;

//getCurrentPosition() es un método que nos permite obtener
//  la posición actual del usuario

const posicion = (pos) => {
  console.log(pos);
};

const err = (e) => console.log(e);

const options = {
  maximumAge: 0,
  timeout: 3000,
  enableHighAccuracy: true,
};

geolocation.getCurrentPosition(posicion, err, options);
